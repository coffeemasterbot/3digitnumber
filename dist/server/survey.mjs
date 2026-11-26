import {canRead} from './activity.mjs';

const opens = Date.parse('2026-11-20T00:00:00+08:00');
const habits = {
  before: ['none', 'stopped', 'regular'],
  after: ['log', 'wait', 'cut', 'reserve'],
};
const pairPattern = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
const sidPattern = /^[0-9]{6,12}$/;
const encoder = new TextEncoder();
const decoder = new TextDecoder();

async function sidKey(env) {
  if (typeof env.PFAP_SID_KEY !== 'string' || env.PFAP_SID_KEY.length < 24) {
    throw new Error('SID key unavailable');
  }
  const material = await crypto.subtle.digest('SHA-256', encoder.encode('pfap-survey-aes-v1:' + env.PFAP_SID_KEY));
  return crypto.subtle.importKey('raw', material, 'AES-GCM', false, ['encrypt', 'decrypt']);
}

async function encryptSid(key, pair, sid) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    {name: 'AES-GCM', iv, additionalData: encoder.encode(pair)}, key, encoder.encode(sid));
  return btoa(String.fromCharCode(...iv, ...new Uint8Array(ciphertext)));
}

async function decryptSid(key, pair, value) {
  const bytes = Uint8Array.from(atob(value), char => char.charCodeAt(0));
  return decoder.decode(await crypto.subtle.decrypt(
    {name: 'AES-GCM', iv: bytes.subarray(0, 12), additionalData: encoder.encode(pair)}, key, bytes.subarray(12)));
}

async function verification(request, env) {
  const reply = (body, status = 200) => Response.json(body, {
    status, headers: {'cache-control': 'no-store', 'x-content-type-options': 'nosniff'},
  });
  if (request.method !== 'GET') return reply({error: 'Method not allowed'}, 405);
  if (!(await canRead(request, env))) return reply({error: 'Restricted'}, 403);
  try {
    const key = await sidKey(env);
    const {results} = await env.DB.prepare(
      "SELECT pair_id, game, created_at, sid_encrypted FROM pfap_survey WHERE phase='after' AND sid_encrypted IS NOT NULL ORDER BY created_at"
    ).all();
    const entries = await Promise.all(results.map(async row => ({
      sid: await decryptSid(key, row.pair_id, row.sid_encrypted), game: row.game, time: row.created_at,
    })));
    return reply({entries});
  } catch { return reply({error: 'Verification unavailable'}, 503); }
}

export async function surveyApi(request, env, games, now = Date.now()) {
  if (new URL(request.url).pathname === '/api/survey/verification') return verification(request, env);
  const origin = request.headers.get('origin');
  const pages = origin === 'https://coffeemasterbot.github.io';
  const cors = pages ? {'access-control-allow-origin': origin, vary: 'Origin'} : {};
  const reply = (value, status = 200) => Response.json(value, {
    status, headers: {'cache-control': 'no-store', ...cors},
  });
  if (origin && !pages && origin !== new URL(request.url).origin) {
    return reply({error: 'Wrong origin'}, 403);
  }
  if (request.method === 'OPTIONS' && pages) {
    return new Response(null, {status: 204, headers: {
      ...cors, 'access-control-allow-methods': 'GET, POST',
      'access-control-allow-headers': 'Content-Type',
    }});
  }
  if (now < opens) return reply({error: 'Survey closed'}, 410);
  if (!env.DB) return reply({error: 'Survey unavailable'}, 503);
  try {
    if (request.method === 'GET') {
      await sidKey(env);
      await env.DB.prepare('SELECT sid_encrypted FROM pfap_survey LIMIT 1').first();
      return reply({open: true});
    }
    if (request.method !== 'POST' || !origin) return reply({error: 'Method not allowed'}, 405);
    if (!request.headers.get('content-type')?.startsWith('application/json')) {
      return reply({error: 'JSON required'}, 415);
    }
    const reader = request.body?.getReader();
    const bytes = new Uint8Array(1024);
    let size = 0;
    if (!reader) return reply({error: 'Invalid request'}, 400);
    while (true) {
      const {done, value} = await reader.read();
      if (done) break;
      if (size + value.length > bytes.length) {
        await reader.cancel();
        return reply({error: 'Request too large'}, 413);
      }
      bytes.set(value, size);
      size += value.length;
    }
    let body;
    try { body = JSON.parse(new TextDecoder().decode(bytes.subarray(0, size))); }
    catch { return reply({error: 'Invalid JSON'}, 400); }
    if (!body || !Object.hasOwn(habits, body.phase)) return reply({error: 'Invalid phase'}, 400);
    const {phase, pair, attitude, knowledge, habit, game, sid} = body;
    const validRating = value => Number.isInteger(value) && value >= 1 && value <= 5;
    if (typeof pair !== 'string' || !pairPattern.test(pair) || !validRating(attitude) ||
        !validRating(knowledge) || !habits[phase].includes(habit) ||
        !(phase === 'before' ? (game === '' || game === 'trpg' || games.has(game))
          : (game === 'trpg' || game === 'trpg-live' || games.has(game)))) {
      return reply({error: 'Invalid response'}, 400);
    }
    if (phase === 'after' && (typeof sid !== 'string' || !sidPattern.test(sid))) {
      return reply({error: 'Student ID required'}, 400);
    }
    const encrypted = phase === 'after' ? await encryptSid(await sidKey(env), pair.toLowerCase(), sid) : null;
    await env.DB.prepare(`INSERT INTO pfap_survey
      (pair_id,phase,attitude,knowledge,habit,game,created_at,sid_encrypted) VALUES (?,?,?,?,?,?,?,?)
      ON CONFLICT(pair_id,phase) DO NOTHING`)
      .bind(pair.toLowerCase(), phase, attitude, knowledge, habit, game, now, encrypted).run();
    return reply({saved: true});
  } catch {
    return reply({error: 'Survey unavailable'}, 503);
  }
}

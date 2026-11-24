const opens = Date.parse('2026-11-20T00:00:00+08:00');
const closes = Date.parse('2026-11-28T00:00:00+08:00');
const habits = {
  before: ['none', 'stopped', 'regular'],
  after: ['log', 'wait', 'cut', 'reserve'],
};
const pairPattern = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;

export async function surveyApi(request, env, games, now = Date.now()) {
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
  if (now < opens || now >= closes) return reply({error: 'Survey closed'}, 410);
  if (!env.DB) return reply({error: 'Survey unavailable'}, 503);
  try {
    if (request.method === 'GET') {
      await env.DB.prepare('SELECT 1 FROM pfap_survey LIMIT 1').first();
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
    const {phase, pair, attitude, knowledge, habit, game} = body;
    const validRating = value => Number.isInteger(value) && value >= 1 && value <= 5;
    if (typeof pair !== 'string' || !pairPattern.test(pair) || !validRating(attitude) ||
        !validRating(knowledge) || !habits[phase].includes(habit) ||
        !(game === '' || game === 'plan' || games.has(game))) {
      return reply({error: 'Invalid response'}, 400);
    }
    await env.DB.prepare(`INSERT INTO pfap_survey
      (pair_id,phase,attitude,knowledge,habit,game,created_at) VALUES (?,?,?,?,?,?,?)
      ON CONFLICT(pair_id,phase) DO NOTHING`)
      .bind(pair.toLowerCase(), phase, attitude, knowledge, habit, game, now).run();
    return reply({saved: true});
  } catch {
    return reply({error: 'Survey unavailable'}, 503);
  }
}

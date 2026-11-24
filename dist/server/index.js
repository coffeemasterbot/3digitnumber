import {activityApi} from './activity.mjs';
import {surveyApi} from './survey.mjs';
export const GAMES = new Set(['runner', 'jet', 'garden', 'forest', 'defence']);

const boards = {
  runner: /^(practice|endless|mission-[1-8]|seed-[A-Z0-9-]{1,24})$/,
  jet: /^(practice|endless|trial|mission-(basics|warning|rotor|piston|gravity|blink|mix|reserve)|seed-[A-Z0-9-]{1,24})$/,
  garden: /^(stage-[1-5]|survival|limited|seeds|mowers|armour|giants)$/,
  forest: /^(?:relay-)?(standard|relaxed|hard)-stage-[1-9]$/,
  defence: /^(quick|[1-3]-(verify|dispatch|hold))$/,
};
const isBoard = (game, board) => typeof board === 'string' && GAMES.has(game) && boards[game].test(board);
const json = (data, status = 200, extra = {}) => new Response(JSON.stringify(data), {
  status,
  headers: {'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store',
    'x-content-type-options': 'nosniff', ...extra},
});

export function validateResult(result, run, now) {
  if (!result || !Number.isSafeInteger(result.score) || result.score < 0 ||
      !Number.isFinite(result.duration) || result.duration < 0 ||
      !Number.isFinite(result.distance) || result.distance < 0) return false;
  const {score, duration, distance} = result;
  const elapsed = (now - run.started_at) / 1000;
  if (duration > elapsed + 4 || elapsed > 86400) return false;
  const board = run.board ?? 'practice';
  if (run.game === 'runner' || run.game === 'jet') {
    if (board === 'practice' && duration > 91) return false;
    if (run.game === 'runner') return distance <= duration * 31 + 8 && score <= distance * 2 + Math.ceil(duration * 35) + 50;
    return distance <= duration * 1100 + 100 && score <= duration * 1500 + 100;
  }
  if (distance !== 0 || duration <= 0) return false;
  if (run.game === 'forest') return score > 0 && score <= 30;
  if (run.game === 'defence') return score <= 100;
  return run.game === 'garden' && score <= duration * 20000 + 15000;
}

function visitor(request) {
  return request.headers.get('cookie')?.match(/(?:^|; *)arcade_visitor=([a-f0-9-]{36})(?:;|$)/)?.[1] ?? null;
}

async function readBoard(db, params, who) {
  const game = params.get('game');
  const board = params.get('board') ?? 'practice';
  const view = params.get('view') ?? 'top';
  if (!isBoard(game, board) || !['top', 'recent', 'mine'].includes(view)) return json({error: 'Invalid leaderboard'}, 400);
  const recent = view === 'recent';
  const mine = view === 'mine';
  if (mine && !who) return json({entries: [], shared: true, game, board});
  const order = recent ? 'finished_at DESC, id ASC' : game === 'forest'
    ? 'score DESC, duration ASC, finished_at ASC, id ASC'
    : 'score DESC, finished_at ASC, id ASC';
  const where = mine ? ' AND visitor=?' : '';
  const args = mine ? [game, board, who] : [game, board];
  const rows = await db.prepare('SELECT id,player,score,distance,duration,difficulty,finished_at FROM arcade_runs WHERE game=? AND board=? AND finished_at IS NOT NULL' + where + ' ORDER BY ' + order + ' LIMIT 30').bind(...args).all();
  return json({entries: rows.results ?? [], shared: true, game, board});
}

async function startRun(db, body, who, now, secure) {
  const board = body.board ?? 'practice';
  if (!isBoard(body.game, board)) return json({error: 'Invalid leaderboard'}, 400);
  const id = crypto.randomUUID();
  const owner = who ?? crypto.randomUUID();
  const rate = await db.prepare('SELECT COUNT(*) AS n FROM arcade_runs WHERE visitor=? AND started_at>?').bind(owner, now - 60000).first();
  if (rate.n >= 12) return json({error: '稍等一陣，再開新一局。'}, 429);
  const player = (typeof body.player === 'string' ? body.player : '').normalize('NFKC')
    .replace(/[<>\x00-\x1f]/g, '').trim().slice(0, 20) || '玩家';
  const difficulty = ['easy', 'medium', 'hard', 'standard', 'relaxed'].includes(body.difficulty) ? body.difficulty : 'standard';
  await db.prepare('INSERT INTO arcade_runs(id,game,player,visitor,started_at,difficulty,board) VALUES(?,?,?,?,?,?,?)')
    .bind(id, body.game, player, owner, now, difficulty, board).run();
  return json({id}, 201, {'set-cookie': 'arcade_visitor=' + owner +
    '; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000' + (secure ? '; Secure' : '')});
}

async function finishRun(db, body, who, now) {
  if (typeof body.id !== 'string' || body.id.length > 40) return json({error: 'Invalid run'}, 400);
  const run = await db.prepare('SELECT * FROM arcade_runs WHERE id=? AND visitor=?').bind(body.id, who ?? '').first();
  if (!run) return json({error: 'Unknown run'}, 404);
  if (run.finished_at !== null) return json({saved: true, duplicate: true, id: run.id});
  if (!validateResult(body, run, now)) return json({error: '成績未能通過檢查。'}, 400);
  const result = await db.prepare('UPDATE arcade_runs SET finished_at=?,score=?,distance=?,duration=? WHERE id=? AND finished_at IS NULL')
    .bind(now, body.score, Math.floor(body.distance), Math.round(body.duration * 1000), run.id).run();
  return json({saved: true, id: run.id, duplicate: !result.meta.changes});
}

export async function api(request, env) {
  const url = new URL(request.url);
  if (url.pathname === '/api/survey') return surveyApi(request, env, GAMES);
  if (url.pathname === '/api/activity' || url.pathname === '/api/activity/summary') return activityApi(request, env, GAMES);
  const db = env.DB;
  if (!db) return json({error: '排行榜暫時未連線，遊戲仍可繼續。'}, 503);
  if (['POST', 'DELETE'].includes(request.method) && request.headers.get('origin') !== url.origin) return json({error: 'Invalid origin'}, 403);
  const who = visitor(request);
  try {
    if (request.method === 'GET' && url.pathname === '/api/leaderboard') return await readBoard(db, url.searchParams, who);
    if (request.method === 'DELETE' && url.pathname === '/api/runs/mine') {
      if (!who) return json({deleted: 0});
      const result = await db.prepare('DELETE FROM arcade_runs WHERE visitor=?').bind(who).run();
      return json({deleted: result.meta.changes});
    }
    if (request.method !== 'POST') return json({error: 'Not found'}, 404);
    if (!request.headers.get('content-type')?.startsWith('application/json')) return json({error: 'JSON required'}, 415);
    const raw = await request.text();
    if (raw.length > 2048) return json({error: 'Request too large'}, 413);
    let body;
    try { body = JSON.parse(raw); } catch { return json({error: 'Invalid JSON'}, 400); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return json({error: 'Invalid JSON'}, 400);
    if (url.pathname === '/api/runs/start') return await startRun(db, body, who, Date.now(), url.protocol === 'https:');
    if (url.pathname === '/api/runs/finish') return await finishRun(db, body, who, Date.now());
    return json({error: 'Not found'}, 404);
  } catch (error) {
    console.error('Leaderboard request failed', String(error));
    return json({error: '排行榜暫時未能載入，請稍後再試。'}, 503);
  }
}

export default {
  fetch(request, env) {
    return new URL(request.url).pathname.startsWith('/api/') ? api(request, env) : env.ASSETS.fetch(request);
  },
};

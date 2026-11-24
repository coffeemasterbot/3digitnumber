import {test} from 'node:test';
import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync} from 'node:fs';
import {surveyApi} from '../worker/survey.mjs';
import {activityApi} from '../worker/activity.mjs';

const receivedAt = Date.parse('2026-11-24T12:00:00+08:00');
const origin = 'https://coffeemasterbot.github.io';
const site = 'https://lost-found-money-journey.cottonpatch1.chatgpt.site';
const games = new Set(['runner']);
const before = {pair: '10898c8c-06a2-4dba-8cfb-feadff4650b9', phase: 'before',
  attitude: 2, knowledge: 3, habit: 'none', game: 'runner'};
const makeRequest = (payload, caller = origin) => new Request(site + '/api/survey', {
  method: 'POST', headers: {origin: caller, 'content-type': 'application/json'},
  body: JSON.stringify(payload),
});
function database() {
  const db = new DatabaseSync(':memory:');
  for (const file of ['0002_cynical_northstar.sql', '0003_phase2_survey.sql']) {
    db.exec(readFileSync(new URL('../drizzle/' + file, import.meta.url), 'utf8'));
  }
  const prepare = sql => {
    const statement = db.prepare(sql);
    function bind(...values) {
      return {run: async () => statement.run(...values), first: async () => statement.get(...values),
        all: async () => ({results: statement.all(...values)})};
    }
    return {bind, ...bind()};
  };
  return {db, env: {DB: {prepare}, PFAP_METRICS_KEY: 'test-only-metrics-key'}};
}

test('survey confirms writes, preserves each phase on retry, and exposes only matched aggregates to the team', async t => {
  const {db, env} = database();
  t.after(() => db.close());
  const send = body => surveyApi(makeRequest(body), env, games, receivedAt);
  const preflight = await surveyApi(new Request(site + '/api/survey', {method: 'OPTIONS', headers: {origin}}), env, games, receivedAt);
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('access-control-allow-origin'), origin);
  const response = await send(before);
  assert.equal(response.headers.get('access-control-allow-origin'), origin);
  assert.deepEqual(await response.json(), {saved: true});
  await send({...before, attitude: 4});
  await send({...before, phase: 'after', attitude: 4, knowledge: 5, habit: 'log'});
  await send({...before, pair: 'bfd2ac18-bec4-4fcb-af1a-cc1d617dd404', attitude: 1});
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM pfap_survey').get().n, 3);
  const summary = () => new Request(site + '/api/activity/summary', {headers: {'x-pfap-metrics-key': env.PFAP_METRICS_KEY}});
  assert.equal((await activityApi(summary(), {...env, PFAP_METRICS_KEY: ''}, games)).status, 403);
  const result = await (await activityApi(summary(), env, games)).json();
  assert.deepEqual(result.survey, {before_count: 2, after_count: 1, paired: 1,
    attitude_before: 2, attitude_after: 4, knowledge_before: 3, knowledge_after: 5});
  assert.doesNotMatch(JSON.stringify(result), /10898c8c/);
});

test('rejects invalid answers, unapproved origins, oversized requests and submissions after the Hong Kong deadline', async t => {
  const {db, env} = database();
  t.after(() => db.close());
  for (const data of [{...before, attitude: 6}, {...before, habit: 'log'}, {...before, game: 'unknown'}]) {
    assert.equal((await surveyApi(makeRequest(data), env, games, receivedAt)).status, 400);
  }
  assert.equal((await surveyApi(makeRequest(before, 'https://example.com'), env, games, receivedAt)).status, 403);
  assert.equal((await surveyApi(makeRequest({...before, extra: 'x'.repeat(1024)}), env, games, receivedAt)).status, 413);
  assert.equal((await surveyApi(makeRequest(before), env, games, Date.parse('2026-11-28T00:00:00+08:00'))).status, 410);
  assert.equal((await surveyApi(makeRequest(before), {}, games, receivedAt)).status, 503);
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM pfap_survey').get().n, 0);
});

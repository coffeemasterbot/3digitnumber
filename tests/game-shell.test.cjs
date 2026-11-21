const { test } = require('node:test');
const assert = require('node:assert/strict');
const { runInNewContext } = require('node:vm');
const { readFileSync } = require('node:fs');

const source = readFileSync(require.resolve('../detailed-games/game-shell.js'), 'utf8');
const records = 'website-v1-records';

function fixture({ testRun = false, corrupted = false, unavailable = false } = {}) {
  const db = new Map(corrupted ? [[records, '{bad json']] : []);
  const window = new EventTarget();
  const document = Object.assign(new EventTarget(), {
    body: { dataset: {game:'runner'}, append(){} },
    createElement: () => ({}),
  });
  const elements = new Map();
  document.getElementById = id => {
    if (!elements.has(id)) elements.set(id, {setAttribute(){}});
    return elements.get(id);
  };
  const localStorage = {
    getItem(key) { if (unavailable) throw Error('storage blocked'); return db.get(key) ?? null; },
    setItem(key, value) { if (unavailable) throw Error('storage blocked'); db.set(key, value); },
  };
  const snapshot = {state:'menu',score:0};
  window.detailedGameSummary = () => snapshot;
  if (testRun) window.arcadeTest = {isTest:true};
  runInNewContext(source, {
    window, document, localStorage, location: {origin:'https://local.test'},
    parent: {postMessage(){}}, setInterval: () => 1, clearInterval() {},
  });
  return {
    db, window,
    tick(phase, score, extras = {}) {
      Object.assign(snapshot, {state:phase,score}, extras);
      window.dispatchEvent(new Event('arcade-game-state'));
    },
  };
}

test('Runner finalizes on the result event, and immediate exit does not count again', () => {
  const { db, window, tick } = fixture({corrupted:true});
  tick('playing',0);
  tick('gameOver',84);
  assert.deepEqual(JSON.parse(db.get(records)).coins,{best:84,plays:1});
  window.flushArcadeResult();
  window.dispatchEvent(new Event('pagehide'));
  assert.deepEqual(JSON.parse(db.get(records)).coins,{best:84,plays:1});
  tick('playing',0);
  tick('paused',10);
  tick('playing',10);
  tick('gameOver',50);
  assert.deepEqual(JSON.parse(db.get(records)).coins,{best:84,plays:2});
});

test('Leaving an active Runner attempt counts once and keeps story completion separate', () => {
  const { db, window, tick } = fixture();
  window.flushArcadeResult();
  assert.equal(db.has(records), false);
  tick('playing', 20, {runNumber:1, distance:10, mode:'practice'});
  window.flushArcadeResult();
  window.flushArcadeResult();
  assert.deepEqual(JSON.parse(db.get(records)).coins, {best:20, plays:1});
  assert.equal(JSON.parse(db.get('website-v1-arcade')).coins, undefined);
  tick('playing', 100, {runNumber:2, distance:50, mode:'mission'});
  window.flushArcadeResult();
  assert.deepEqual(JSON.parse(db.get(records)).coins, {best:20, plays:2});
  tick('playing', 200, {runNumber:3, distance:70});
  window.arcadeStory = {id:'reserve'};
  window.flushArcadeResult();
  assert.deepEqual(JSON.parse(db.get(records)).coins, {best:20, plays:2});
});

test('Test sessions and storage blocking never write scores or throw', () => {
  for (const options of [{testRun:true},{unavailable:true}]) {
    const { db, window, tick } = fixture(options);
    tick('playing',0);
    tick('gameOver',99);
    assert.doesNotThrow(() => window.flushArcadeResult());
    assert.equal(db.has(records),false);
  }
});

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = 'dist-pages';
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('GitHub Pages build is static and describes local-only scores', () => {
  assert.ok(fs.existsSync(path.join(root, 'index.html')));
  assert.ok(fs.existsSync(path.join(root, 'downloads/lost-found-money-offline.html')));
  assert.match(read('index.html'), /最佳分數只保存在本機，不設共用排行榜/);
  assert.match(read('index.html'), /location\.href\.split\("#"\)\[0\]\+"#play"/);
  assert.match(read('app.js'), /只在本機保存跑酷及飛行最佳分數/);
  assert.match(read('presentation.js'), /Runner and flight best scores stay in this browser/);
  assert.match(read('presentation.js'), /跑酷與飛行的最佳分數只保存在本機/);
  const jet = read('games/jet/app.js').replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  assert.match(jet, /成績只保存在本機/);
  assert.match(jet, /本機最佳分數會保存在此瀏覽器/);
});

test('GitHub Pages game bundles make no leaderboard API requests', () => {
  assert.equal(fs.existsSync(path.join(root, 'games/leaderboard.js')), false);
  assert.equal(fs.existsSync(path.join(root, 'games/leaderboard.css')), false);
  for (const game of ['runner', 'jet']) {
    const html = read(`games/${game}/index.html`);
    const app = read(`games/${game}/app.js`);
    assert.doesNotMatch(html, /leaderboard\.(?:js|css)/);
    assert.doesNotMatch(app, /fetch\(["'`]\/api\/(?:leaderboard|runs\/)/);
  }
  assert.match(read('games/runner/app.js'), /runner-detailed-best/);
  assert.doesNotMatch(read('app.js'), /線上排行榜會儲存及公開每局/);
});

test('Pages transformation leaves the existing Site worker and offline build intact', () => {
  assert.ok(fs.existsSync('dist/server/index.js'));
  assert.ok(fs.existsSync('dist/downloads/lost-found-money-offline.html'));
  for (const game of ['runner', 'jet']) {
    assert.match(fs.readFileSync(`dist/client/games/${game}/index.html`, 'utf8'), /leaderboard\.js/);
  }
});

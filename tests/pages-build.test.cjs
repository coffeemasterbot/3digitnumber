const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = 'dist-pages';
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('game cards ship the five actual game previews in each edition', () => {
  const offline = read('downloads/lost-found-money-offline.html');
  for (const output of ['dist', 'dist/client', root]) {
    const home = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
    assert.doesNotMatch(home, /assets\/game-covers\//);
    for (const {art} of require('../source/game-catalogue.cjs')) {
      const image = 'assets/preview-' + art + '.png';
      assert.ok(home.includes('src="' + image + '"'), output + ': ' + image);
      const bytes = fs.readFileSync(path.join('source/game-previews', path.basename(image)));
      assert.deepEqual(fs.readFileSync(path.join(output, image)), bytes);
      assert.ok(offline.includes(bytes.toString('base64')), image + ' embedded offline');
    }
    for (const cover of ['garden','runner','jet','duo','defence','moss']) {
      assert.ok(!fs.existsSync(path.join(output, 'assets/game-covers', cover + '.jpg')));
    }
  }
});

test('GitHub Pages build is static and describes opt-in shared scores', () => {
  assert.ok(fs.existsSync(path.join(root, 'index.html')));
  assert.ok(fs.existsSync(path.join(root, 'downloads/lost-found-money-offline.html')));
  assert.match(read('index.html'), /最佳成績會喺本機保留，亦可選擇將成績放上公開排行榜/);
  assert.ok(read('index.html').includes('value="https://coffeemasterbot.github.io/3digitnumber/"'));
  assert.match(read('index.html'), /<body data-pfap-static>/);
  assert.match(read('app.js'), /此瀏覽器用匿名代碼管理所發布嘅成績/);
  assert.match(read('presentation.js'), /All five games have public leaderboards with optional score publishing/);
  assert.match(read('presentation.js'), /五款遊戲都有公開排行榜，玩家可自行選擇發布成績/);
  const jet = read('games/jet/app.js').replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  assert.match(jet, /本機保存最佳紀錄/);
  assert.doesNotMatch(jet,/每局成績可見於共同排行榜|共同排行榜會記錄每一局/);
});

test('the toolkit and FPS soundtrack are packaged for each edition', () => {
  const home = read('index.html');
  assert.match(home, /id="share"[\s\S]*id="offline"/);
  assert.doesNotMatch(home, /Codex／ChatGPT/);
  const offline = read('downloads/lost-found-money-offline.html');
  assert.doesNotMatch(offline, /id="download-offline"|budget-defence-bgm\.mp3/);
  assert.match(offline, /id="offline"/);
  assert.match(read('games/budget-defence/index.html'), /id="fps-bgm" src="\.\.\/\.\.\/assets\/audio\/budget-defence-bgm\.mp3" loop preload="none"/);
  assert.ok(fs.statSync(path.join(root,'assets/audio/budget-defence-bgm.mp3')).size < 1_500_000);
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

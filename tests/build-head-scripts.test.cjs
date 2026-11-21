const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const inject = require('../build-head-scripts.cjs');
const source = file => fs.readFileSync(path.join(__dirname, '..', 'source', file), 'utf8');

test('preserved pages replace even duplicated legacy runtimes while keeping game scripts', () => {
  const dev = source('garden-rules.js') + '\n' + source('dev-session.js');
  const audio = source('game-audio/player.js') + ';window.gameAudio=createGameAudio({});';
  const legacy = [dev, audio].map(code => '<script>' + code + '</script>').join('');
  const page = '<head><script>startGame()</script></head>';
  const updated = ['newDev()', 'newAudio()'];
  const expected = inject(page, updated);
  assert.equal(inject(page.replace('<head>', () => '<head>' + legacy.repeat(2)), updated), expected);
  assert.equal(inject(expected, updated), expected);
  assert.ok(expected.includes('<script>startGame()</script>'));
  assert.equal(expected.match(/data-build-runtime/g).length, 2);
});

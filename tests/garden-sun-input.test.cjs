const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function fixture(reduced = true) {
  const tokens = [];
  const board = {
    append(token) {
      token.isConnected = true;
      tokens.push(token);
    },
  };
  const state = { plants: [], zombies: [], activeClock: 0, sun: 0 };
  const context = {
    gameState: state,
    GardenEnemies: { kinds: {} },
    window: {},
    matchMedia: () => ({ matches: reduced }),
    document: {
      getElementById: () => board,
      querySelectorAll: () => [],
      createElement(tag) {
        const listeners = new Map();
        return {
          tag,
          style: {},
          setAttribute() {},
          addEventListener(name, listener) { listeners.set(name, listener); },
          dispatch(name, event) { listeners.get(name)?.(event); },
          remove() { this.isConnected = false; },
        };
      },
    },
    updateZombieHealth() {},
    produceSun() {},
    spawnFallingSun() {},
    togglePause() { state.isPaused = !state.isPaused; },
    resumeGame() { state.isPaused = false; },
    spawnZombie() {},
    placePlant() {},
    plantTypes: { sunflower: { sunAmount: 50 } },
    collectSun(_token, amount) { state.sun += amount; },
  };
  const source = fs.readFileSync(path.join(__dirname, '../detailed-games/garden/garden-upgrade.js'), 'utf8');
  vm.runInNewContext(source, context);
  return { state, context, tokens };
}

test('sun buttons stay board-relative and collect once by click or mouse drag', () => {
  const { state, context, tokens } = fixture();
  context.spawnFallingSun();
  const [sky] = tokens;
  assert.equal(sky.tag, 'button');
  assert.match(sky.style.left, /^clamp\(min\(35px, 50%\),/);
  assert.match(sky.style.top, /^clamp\(min\(35px, 50%\), 52%,/);
  sky.dispatch('pointerenter', { pointerType: 'mouse', buttons: 0 });
  assert.equal(state.sun, 0);
  sky.dispatch('pointerenter', { pointerType: 'mouse', buttons: 1 });
  sky.dispatch('click');
  assert.equal(state.sun, 50);
  assert.equal(sky.disabled, true);

  context.produceSun({ type: 'sunflower', element: { parentElement: { dataset: { col: '8', row: '4' } } } });
  const leaf = tokens[1];
  assert.match(leaf.style.top, /^clamp\(min\(35px, 50%\), 90%,/);
  assert.match(leaf.style.left, /^clamp\(min\(35px, 50%\), 94/);
  state.isPaused = true;
  leaf.dispatch('click');
  assert.equal(state.sun, 50);
  state.isPaused = false;
  leaf.dispatch('click');
  assert.equal(state.sun, 100);
});

test('an uncollected sun expires on its active-play clock', () => {
  const { state, context, tokens } = fixture();
  context.spawnFallingSun();
  state.activeClock = 12499;
  context.window.gardenActiveStep(100);
  assert.equal(tokens[0].isConnected, true);
  state.activeClock = 12500;
  context.window.gardenActiveStep(1);
  assert.equal(tokens[0].isConnected, false);
  tokens[0].dispatch('click');
  assert.equal(state.sun, 0);
});

test('falling sun travels the same distance across refresh rates and clamps stalls', () => {
  const positions = [30,60,120].map(hz => {
    const {context,tokens} = fixture(false);
    context.spawnFallingSun();
    for (let n=0;n<hz;n++) context.window.gardenActiveStep(1000/hz);
    return Number(tokens[0].style.top.match(/50%\), ([\d.]+)%/)[1]);
  });
  positions.forEach(y => assert.ok(Math.abs(y-18)<0.00001));
  const {context,tokens}=fixture(false);
  context.spawnFallingSun();
  context.window.gardenActiveStep(1000);
  assert.match(tokens[0].style.top,/12\.3%/);
});

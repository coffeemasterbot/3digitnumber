import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildSync } from '../detailed-games/node_modules/esbuild/lib/main.js';

const bundle = buildSync({
  entryPoints: ['detailed-games/jet/src/utils/coin-motion.ts'],
  bundle: true,
  format: 'esm',
  write: false,
});
const { advanceCoins } = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].contents).toString('base64'));

const player = { x: 160, y: 160, width: 54, height: 54, magnetFrames: 0 };
const coin = (properties = {}) => ({ x: 178, y: 178, active: true, collected: false, collectedTimer: 0, ...properties });

test('collected coins retain their short pop and leave the endless simulation after 20 frames', () => {
  const collected = coin({ collected: true, collectedTimer: 20 });
  const coins = [collected];
  for (let tick = 0; tick < 19; tick++) advanceCoins(coins, 4, player);
  assert.equal(coins[0], collected);
  assert.equal(collected.collectedTimer, 1);
  advanceCoins(coins, 4, player);
  assert.equal(coins.length, 0);
  for (let tick = 0; tick < 6000; tick++) {
    coins.push(coin({ collected: true, collectedTimer: 20 }));
    advanceCoins(coins, 4, player);
    assert.ok(coins.length < 20);
  }
});

test('the magnet remains finite at the player centre and clamps the final approach', () => {
  const centered = coin();
  const close = coin({ x: 181, y: 181 });
  const outOfPlay = coin({ x: -50 });
  const coins = [centered, close, outOfPlay];
  advanceCoins(coins, 0, { ...player, magnetFrames: 10 });
  assert.deepEqual(coins, [centered, close]);
  assert.deepEqual([centered.x, centered.y], [178, 178]);
  assert.deepEqual([close.x, close.y], [178, 178]);
});

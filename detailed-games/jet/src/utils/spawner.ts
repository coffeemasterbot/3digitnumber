// ─────────────────────────────────────────────
//  Object spawner – generates missiles, coins,
//  and power-ups procedurally
// ─────────────────────────────────────────────

import {coinMotif,motifIndex} from './coin-patterns';
import { Missile, Coin, PowerUpItem, MissileType, PowerUpType } from '@/types/game';
import {
  CANVAS_WIDTH, CANVAS_HEIGHT,
  GROUND_Y, CEILING_Y,
  MISSILE_WIDTH, MISSILE_HEIGHT,
  POWERUP_SIZE,
} from './constants';

// ── helpers ────────────────────────────────────
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function randInt(min: number, max: number) {
  return Math.floor(rand(min, max + 1));
}

// ── Missiles ───────────────────────────────────
export function spawnMissile(speed: number, score: number): Missile {
  const types: MissileType[] = ['horizontal'];
  if (score > 300) types.push('diagonal-up', 'diagonal-down');
  if (score > 800) types.push('homing');

  const type = types[randInt(0, types.length - 1)];

  const playH = GROUND_Y - CEILING_Y;
  const y = rand(CEILING_Y + 20, GROUND_Y - MISSILE_HEIGHT - 20);

  let vx = -(speed * rand(0.9, 1.3));
  let vy = 0;
  let angle = Math.PI;

  if (type === 'diagonal-up') {
    vy = -rand(1, 2.5);
    angle = Math.PI + Math.atan2(vy, Math.abs(vx));
  } else if (type === 'diagonal-down') {
    vy = rand(1, 2.5);
    angle = Math.PI - Math.atan2(vy, Math.abs(vx));
  }

  return {
    x: CANVAS_WIDTH + 20,
    y,
    width: MISSILE_WIDTH,
    height: MISSILE_HEIGHT,
    velocityX: vx,
    velocityY: vy,
    angle,
    type,
    warningAlpha: 0,
    active: true,
  };
}

// ── Coins ──────────────────────────────────────
export function spawnCoinPattern(index: number, hazards: Missile[]): Coin[] {
  const pattern = motifIndex(index);
  const heights = [133,244,344];
  const available = heights.map(height => coinMotif(pattern,height,8));
  const preferred = index % available.length;
  const risk = (coins: Coin[]) => coins.filter(coin => hazards.some(hazard =>
    hazard.active && Math.abs(hazard.x - coin.x) < 145 &&
    hazard.y < coin.y + coin.height + 18 && hazard.y + hazard.height > coin.y - 18)).length;
  return available.map((coins,i) => ({coins,risk:risk(coins),order:(i-preferred+available.length)%available.length}))
    .sort((a,b) => a.risk-b.risk || a.order-b.order)[0].coins;
}
// ── Power-ups ──────────────────────────────────
export function spawnPowerUp(): PowerUpItem {
  const types: PowerUpType[] = ['shield', 'magnet', 'boost'];
  const type = types[randInt(0, types.length - 1)];

  return {
    x: CANVAS_WIDTH + 20,
    y: rand(CEILING_Y + 30, GROUND_Y - POWERUP_SIZE - 30),
    width: POWERUP_SIZE,
    height: POWERUP_SIZE,
    type,
    angle: 0,
    active: true,
  };
}

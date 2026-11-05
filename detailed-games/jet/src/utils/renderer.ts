// ─────────────────────────────────────────────
//  Canvas rendering helpers
// ─────────────────────────────────────────────

import {
  Player, Missile, Coin, PowerUpItem, Particle, BackgroundBuilding, BackgroundStar,
} from '@/types/game';
import { COLORS, CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, CEILING_Y, COIN_SIZE, POWERUP_SIZE } from './constants';

// ── Glow helper ────────────────────────────────
export function withGlow(
  ctx: CanvasRenderingContext2D,
  color: string,
  blur: number,
  fn: () => void
) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  fn();
  ctx.restore();
}

// ── Background ─────────────────────────────────
export function drawBackground(
  ctx: CanvasRenderingContext2D,
  scrollOffset: number,
  stars: BackgroundStar[],
  buildings: BackgroundBuilding[],
  buildingsFar: BackgroundBuilding[]
) {
  const sky=ctx.createLinearGradient(0,0,0,CANVAS_HEIGHT);sky.addColorStop(0,'#f5c98b');sky.addColorStop(1,'#fff0ca');ctx.fillStyle=sky;ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);ctx.fillStyle='#ffe8a3';ctx.beginPath();ctx.arc(720,100,58,0,Math.PI*2);ctx.fill();drawBuildings(ctx,buildingsFar,(scrollOffset*.15)%CANVAS_WIDTH);drawBuildings(ctx,buildings,(scrollOffset*.45)%CANVAS_WIDTH);ctx.fillStyle='#7e674d';ctx.fillRect(0,GROUND_Y,CANVAS_WIDTH,70);ctx.fillStyle='#e2c391';ctx.fillRect(0,GROUND_Y,CANVAS_WIDTH,9);ctx.fillStyle='#906947';ctx.fillRect(0,0,CANVAS_WIDTH,CEILING_Y);ctx.fillStyle='#fff3d0';ctx.font='bold 17px Microsoft JhengHei';ctx.fillText('先保需要，再避開消費誘惑。',28,GROUND_Y+46);
}

function drawGrid(ctx: CanvasRenderingContext2D, scrollOffset: number) {
  ctx.save();
  ctx.strokeStyle = COLORS.gridLine;
  ctx.lineWidth = 0.5;
  ctx.globalAlpha = 0.6;

  const spacing = 60;
  const offset = scrollOffset % spacing;

  // Vertical lines scrolling
  for (let x = -offset; x < CANVAS_WIDTH; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, CEILING_Y);
    ctx.lineTo(x, GROUND_Y);
    ctx.stroke();
  }
  // Horizontal lines
  for (let y = CEILING_Y; y <= GROUND_Y; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(CANVAS_WIDTH, y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawBuildings(
  ctx: CanvasRenderingContext2D,
  buildings: BackgroundBuilding[],
  offset: number
) {
  for (const b of buildings) {
    const x = ((b.x - offset) % (CANVAS_WIDTH * 2)) - 50;
    if (x > CANVAS_WIDTH + 100) continue;

    ctx.fillStyle = b.color;
    ctx.fillRect(x, b.y, b.width, b.height);

    // Windows
    ctx.fillStyle = '#f5e1b0';
    const ww = b.width / (b.windowCols + 1);
    const wh = b.height / (b.windowRows + 1);
    for (let r = 0; r < b.windowRows; r++) {
      for (let c = 0; c < b.windowCols; c++) {
        if ((r+c)%3!==0) {
          ctx.fillRect(x + (c + 0.5) * ww, b.y + (r + 0.5) * wh, ww * 0.5, wh * 0.5);
        }
      }
    }
  }
}

// ── Particles ──────────────────────────────────
export function drawParticles(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (const p of particles) {
    const alpha = p.life / p.maxLife;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 8;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// ── Player ─────────────────────────────────────
export function drawPlayer(
  ctx: CanvasRenderingContext2D,
  player: Player,
  frame: number
) {
  const { x, y, width, height, powerUp, invincible, invincibleTimer } = player;
  const cx = x + width / 2;
  const cy = y + height / 2;

  // Skip draw every other frame when invincible (flicker effect)
  if (invincible && Math.floor(invincibleTimer / 6) % 2 === 0) return;

  ctx.save();

  if(['mecha','glider','drill'].includes(powerUp)){
    const metal=ctx.createLinearGradient(x,y,x+width,y+height);metal.addColorStop(0,powerUp==='mecha'?'#ffdc7c':powerUp==='glider'?'#afdbbf':'#edb18a');metal.addColorStop(1,powerUp==='mecha'?'#a56b2e':powerUp==='glider'?'#3b776a':'#a14b32');ctx.fillStyle=metal;ctx.strokeStyle='#463e2e';ctx.lineWidth=3;
    if(powerUp==='glider'){ctx.beginPath();ctx.moveTo(x-42,y+15);ctx.lineTo(cx,y-35);ctx.lineTo(x+width+42,y+15);ctx.lineTo(x+width,y+23);ctx.lineTo(cx,y+height+8);ctx.lineTo(x,y+23);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(cx,y-35);ctx.lineTo(cx,y+height);ctx.moveTo(x-40,y+15);ctx.lineTo(cx,y);ctx.lineTo(x+width+40,y+15);ctx.stroke()}
    else{ctx.beginPath();ctx.roundRect(x-10,y+3,width+20,height-3,8);ctx.fill();ctx.stroke();if(powerUp==='mecha'){ctx.fillRect(x-23,y+14,13,30);ctx.strokeRect(x-23,y+14,13,30);ctx.fillRect(x+width+10,y+14,18,14);ctx.strokeRect(x+width+10,y+14,18,14);for(const side of [-1,1]){const lx=cx+side*(width/2+2)-9;ctx.fillRect(lx,y+height-3,18,20);ctx.strokeRect(lx,y+height-3,18,20)}ctx.beginPath();ctx.roundRect(x+2,y-16,width-4,25,5);ctx.fill();ctx.stroke()}
    else{ctx.beginPath();ctx.moveTo(x+width+8,y+4);ctx.lineTo(x+width+48,cy+4);ctx.lineTo(x+width+8,y+height);ctx.closePath();ctx.fillStyle='#e0dac0';ctx.fill();ctx.stroke();for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(x+width+10+i*9,y+10+i*5);ctx.lineTo(x+width+21+i*6,y+height-10-i*4);ctx.stroke()}ctx.fillStyle='#4d5148';ctx.beginPath();ctx.roundRect(x-14,y+height-3,width+25,14,6);ctx.fill();for(let i=0;i<4;i++){ctx.fillStyle='#aaaf91';ctx.beginPath();ctx.arc(x-5+i*15,y+height+4,4,0,7);ctx.fill()}}}
    ctx.fillStyle='#284f46';ctx.beginPath();ctx.roundRect(x+4,y+5,width-8,14,3);ctx.fill();ctx.fillStyle='#aef5db';ctx.fillRect(x+9,y+8,width-18,5);ctx.fillStyle='#ffeab2';ctx.beginPath();ctx.arc(cx,cy+9,5,0,7);ctx.fill();ctx.fillStyle='#fff2ce';ctx.font='bold 12px Microsoft JhengHei';ctx.textAlign='center';ctx.fillText(powerUp==='mecha'?'儲備機甲':powerUp==='drill'?'界線鑽頭':'計劃滑翔翼',cx,y-22);ctx.restore();return;
  }

  if (powerUp === 'shield') {
    const r = width * 0.8;
    withGlow(ctx, COLORS.shieldRing, 20, () => {
      ctx.strokeStyle = COLORS.shieldRing;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = COLORS.shieldBubble;
      ctx.fill();
    });
  }

  // Jetpack body
  ctx.shadowColor = '#005577';
  ctx.shadowBlur = 10;
  ctx.fillStyle = COLORS.jetpack;
  ctx.beginPath();
  ctx.roundRect(x + width - 16, y + 10, 14, height - 18, 4);
  ctx.fill();

  // Jetpack nozzle flame outline
  ctx.fillStyle = '#223344';
  ctx.fillRect(x + width - 18, y + height - 26, 8, 14);

  // Character body
  const bodyGrad = ctx.createLinearGradient(x, y, x + width * 0.7, y + height);
  bodyGrad.addColorStop(0, '#007799');
  bodyGrad.addColorStop(1, '#004466');
  ctx.fillStyle = bodyGrad;
  ctx.shadowColor = COLORS.player;
  ctx.shadowBlur = 14;
  ctx.beginPath();
  ctx.roundRect(x + 2, y + 8, width - 18, height - 12, 8);
  ctx.fill();

  // Visor
  ctx.fillStyle = '#00d4ff';
  ctx.shadowColor = '#00ffff';
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.roundRect(x + 6, y + 12, width * 0.42, height * 0.3, 6);
  ctx.fill();

  // Visor glare
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillRect(x + 9, y + 15, 7, 4);

  // Boots
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#002233';
  ctx.fillRect(x + 4, y + height - 14, 18, 10);
  ctx.fillRect(x + 24, y + height - 14, 18, 10);

  // Boost tint overlay
  if (powerUp === 'boost') {
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = '#00ff88';
    ctx.beginPath();
    ctx.roundRect(x + 2, y + 8, width - 18, height - 12, 8);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  ctx.restore();
}

// ── Missiles ───────────────────────────────────
export function drawMissile(ctx: CanvasRenderingContext2D, m: Missile) {
  if (!m.active) return;
  ctx.save();ctx.fillStyle='#a6533c';ctx.strokeStyle='#ffe8b2';ctx.lineWidth=3;ctx.beginPath();ctx.roundRect(m.x,m.y,m.width,m.height,7);ctx.fill();ctx.stroke();ctx.fillStyle='#fff8e5';ctx.font='bold 15px Microsoft JhengHei';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(({horizontal:'不必要的支出','diagonal-up':'想要 ≠ 需要','diagonal-down':'一次性享樂',homing:'限時優惠追住你'})[m.type],m.x+m.width/2,m.y+m.height/2);ctx.restore();
}
// ── Coins ──────────────────────────────────────
export function drawCoin(ctx: CanvasRenderingContext2D, coin: Coin, time: number) {
  if (!coin.active || coin.collected) return;
  const cx = coin.x + COIN_SIZE / 2;
  const cy = coin.y + COIN_SIZE / 2 + Math.sin(time * 0.04 + coin.x * 0.05) * 3;
  const scaleX = Math.abs(Math.cos(time * 0.06 + coin.x * 0.03));

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scaleX + 0.05, 1);

  withGlow(ctx, COLORS.coinGlow, 16, () => {
    const grad = ctx.createRadialGradient(0, -COIN_SIZE * 0.2, 0, 0, 0, COIN_SIZE / 2);
    grad.addColorStop(0, '#ffe066');
    grad.addColorStop(0.6, '#ffd700');
    grad.addColorStop(1, '#cc9900');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, COIN_SIZE / 2, 0, Math.PI * 2);
    ctx.fill();

    // Dollar sign
    ctx.fillStyle = '#886600';
    ctx.font = `bold ${COIN_SIZE * 0.55}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('$', 0, 0);
  });

  ctx.restore();
}

// ── Power-up items ─────────────────────────────
const POWERUP_ICONS: Record<string, string> = {
  mecha:'🤖',glider:'🛩',drill:'⚙',shield: '🛡',
  magnet: '🧲',
  boost:  '⚡',
};
const POWERUP_GLOW: Record<string, string> = {
  shield: COLORS.shieldItem,
  magnet: COLORS.magnetItem,
  boost:  COLORS.boostItem,
};
const POWERUP_FILL: Record<string, string> = {
  shield: '#003344',
  magnet: '#330033',
  boost:  '#003322',
};

export function drawPowerUp(ctx: CanvasRenderingContext2D, p: PowerUpItem, time: number) {
  if (!p.active) return;
  const cx = p.x + POWERUP_SIZE / 2;
  const cy = p.y + POWERUP_SIZE / 2 + Math.sin(time * 0.05 + p.x * 0.02) * 4;

  ctx.save();
  ctx.translate(cx, cy);

  const glow = POWERUP_GLOW[p.type] ?? '#ffffff';
  const fill = POWERUP_FILL[p.type] ?? '#111';

  withGlow(ctx, glow, 25, () => {
    // Outer rotating ring
    ctx.rotate(time * 0.04);
    ctx.strokeStyle = glow;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(0, 0, POWERUP_SIZE * 0.72, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.rotate(-time * 0.04);

    // Background circle
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(0, 0, POWERUP_SIZE * 0.55, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = glow;
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Icon
  ctx.font = `${POWERUP_SIZE * 0.62}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(POWERUP_ICONS[p.type] ?? '?', 0, 1);

  ctx.restore();
}

// ── Coin collected pop ─────────────────────────
export function drawCoinPop(ctx: CanvasRenderingContext2D, coin: Coin) {
  if (!coin.collected || coin.collectedTimer <= 0) return;
  const t = 1 - coin.collectedTimer / 20;
  const cx = coin.x + COIN_SIZE / 2;
  const cy = coin.y + COIN_SIZE / 2 - t * 30;

  ctx.save();
  ctx.globalAlpha = 1 - t;
  ctx.fillStyle = COLORS.scoreGold;
  ctx.font = `bold 14px 'Courier New', monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`+${10}`, cx, cy);
  ctx.restore();
}

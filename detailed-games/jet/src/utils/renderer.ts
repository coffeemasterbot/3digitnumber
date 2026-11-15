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
  const wall=ctx.createLinearGradient(0,0,0,GROUND_Y);
  wall.addColorStop(0,'#19263f');wall.addColorStop(.54,'#30445b');wall.addColorStop(1,'#586575');
  ctx.fillStyle=wall;ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  const bay=274, offset=scrollOffset*.38%bay;
  for(let x=-offset-bay;x<CANVAS_WIDTH;x+=bay){
    const top=CEILING_Y+25, bottom=GROUND_Y-15;
    ctx.lineWidth=5;ctx.strokeStyle='#17263c';ctx.fillStyle=wall;
    ctx.beginPath();ctx.moveTo(x+15,top+18);ctx.lineTo(x+31,top);ctx.lineTo(x+bay-36,top);
    ctx.lineTo(x+bay-18,top+18);ctx.lineTo(x+bay-18,bottom-18);ctx.lineTo(x+bay-36,bottom);
    ctx.lineTo(x+31,bottom);ctx.lineTo(x+15,bottom-18);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#708297';ctx.fillRect(x+33,top+2,bay-73,3);
    ctx.fillStyle='#40566a';ctx.fillRect(x+20,top+24,5,bottom-top-48);
    ctx.fillStyle='#172a40';ctx.fillRect(x+85,bottom-120,92,120);
    ctx.fillStyle='#637789';ctx.fillRect(x+91,bottom-113,80,113);
    ctx.fillStyle='#29394a';ctx.fillRect(x+98,bottom-102,66,102);
    ctx.fillStyle='#8abac8';ctx.fillRect(x+103,bottom-100,56,4);
    ctx.fillStyle='#17283c';ctx.fillRect(x+130,bottom-85,3,81);
    for(const bx of [31,bay-36])for(const by of [top+24,bottom-24]){
      ctx.fillStyle='#192536';ctx.beginPath();ctx.arc(x+bx,by,4,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#8794a0';ctx.fillRect(x+bx-1,by-2,3,2);
    }
    ctx.fillStyle='#425268';ctx.fillRect(x+37,top+48,58,23);
    ctx.fillStyle='#24374a';for(let v=0;v<6;v++)ctx.fillRect(x+41+v*8,top+52,4,14);
  }
  ctx.fillStyle='#172235';ctx.fillRect(0,0,CANVAS_WIDTH,CEILING_Y);
  ctx.fillRect(0,GROUND_Y,CANVAS_WIDTH,CANVAS_HEIGHT-GROUND_Y);
  ctx.fillStyle='#8994a0';ctx.fillRect(0,CEILING_Y-13,CANVAS_WIDTH,8);
  ctx.fillStyle='#a3adb4';ctx.fillRect(0,GROUND_Y,CANVAS_WIDTH,7);
  for (let x = -(scrollOffset % 48); x < CANVAS_WIDTH; x += 48) {
    ctx.fillStyle = '#ccaa5e';
    ctx.fillRect(x, GROUND_Y + 9, 21, 4);
  }
  ctx.fillStyle = '#f5efdb';
  ctx.font = 'bold 17px Microsoft JhengHei';
  ctx.fillText('先保需要，再避開消費誘惑。', 28, GROUND_Y + 46);
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

  const quiet=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pulse=quiet?0:Math.sin(frame*.24);
  if((player.dashFrames||0)>0){ctx.strokeStyle='#c2ffff';ctx.lineWidth=3;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(x-5,y+12+i*12);ctx.lineTo(x-28+i*3,y+12+i*12);ctx.stroke()}}
  if (powerUp==='blink' && player.teleportPreview) {
    const selected=player.teleportPreview.targets.find(t=>t.safe&&t.id===player.teleportPreview?.nextId);
    for(const target of player.teleportPreview.targets){
      const next=target===selected;
      ctx.save();ctx.globalAlpha=next?.68:.22;ctx.strokeStyle=target.safe?'#e1a4ff':'#a39b9d';ctx.lineWidth=next?3:1;
      ctx.setLineDash(next?[]:[4,5]);ctx.beginPath();ctx.roundRect(x,target.y,width,height,14);ctx.stroke();
      if(target.safe){ctx.fillStyle='#dcb1ff';ctx.beginPath();ctx.arc(cx,target.y+height*.27,width*.12,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(cx,target.y+height*.62,width*.19,height*.23,0,0,Math.PI*2);ctx.fill()}ctx.restore();
    }
    if(selected){
      const dest=selected.y+height/2, direction=Math.sign(dest-cy);
      ctx.save();ctx.strokeStyle='#79ddff';ctx.fillStyle='#a9efff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx,cy);
      for(let i=1;i<=5;i++){const px=cx+(i%2?8:-5),py=cy+(dest-cy)*i/6;ctx.lineTo(px,py)}
      ctx.lineTo(cx,dest);ctx.stroke();
      for(let i=1;i<=5;i++){ctx.beginPath();ctx.arc(cx+(i%2?8:-5),cy+(dest-cy)*i/6,2.4,0,Math.PI*2);ctx.fill()}
      ctx.fillStyle='#cf91ff';ctx.beginPath();ctx.moveTo(x+width+5,dest);ctx.lineTo(x+width+15,dest-direction*8);ctx.lineTo(x+width+15,dest+direction*8);ctx.closePath();ctx.fill();ctx.restore();
    }
    if(!player.teleportPreview.nextId){ctx.fillStyle='#fff3cf';ctx.fillText('暫無安全落點',x+width,y);}
  }
  if(powerUp==='gravity' && player.vehicleVisualState?.gravity==='up'){ctx.translate(0,2*cy);ctx.scale(1,-1)}
  if((player.shieldFrames||0)>0){ctx.save();ctx.strokeStyle='#50d0ed';ctx.lineWidth=3;ctx.beginPath();ctx.arc(cx,cy,width*.85,0,Math.PI*2);ctx.stroke();ctx.restore()}
  if(['gravity','blink','dragon'].includes(powerUp)){
    ctx.save();ctx.strokeStyle='#3a443d';ctx.fillStyle=powerUp==='dragon'?'#dc8355':powerUp==='blink'?'#c18fce':'#7db6af';
    ctx.lineWidth=3;
    if(powerUp==='dragon'){ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(x-8,y-9+pulse*6);ctx.lineTo(x+8,cy+7);ctx.closePath();ctx.fill();ctx.stroke()}
    if(powerUp==='gravity'){
      ctx.beginPath();ctx.ellipse(cx,cy+5,width*.63,height*.47,-.25,0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.strokeStyle='#caeae3';ctx.beginPath();ctx.ellipse(cx,cy+6,width*.67,height*.18,-.25,0,Math.PI*2);ctx.stroke();
    }else if(powerUp==='blink'){
      ctx.fillStyle='#663a90';ctx.strokeStyle='#dbc2ee';ctx.beginPath();ctx.roundRect(x+3,y-2,width-6,height+4,16);ctx.fill();ctx.stroke();
      ctx.fillStyle='#c063e0';ctx.globalAlpha=.55;ctx.beginPath();ctx.roundRect(x+8,y+5,width-16,height-12,11);ctx.fill();ctx.globalAlpha=1;
      ctx.fillStyle='#f5cc9a';ctx.beginPath();ctx.arc(cx,y+height*.32,8,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#4e517b';ctx.beginPath();ctx.roundRect(cx-9,y+height*.48,18,height*.28,5);ctx.fill();
      ctx.fillStyle='#35364a';ctx.fillRect(x+6,y+height-8,width-12,6);
      ctx.restore();ctx.restore();return;
    }else{
      ctx.beginPath();ctx.moveTo(x-16,y+height);ctx.quadraticCurveTo(x-1,y-10,cx,cy);
      ctx.lineTo(x+width,y+height*.2);ctx.lineTo(x+width+12,cy);ctx.lineTo(x+width-3,cy+8);
      ctx.lineTo(cx,y+height);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#ffe093';for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(x+i*8,y+18);ctx.lineTo(x+i*8+4,y+7);ctx.lineTo(x+i*8+8,y+19);ctx.fill()}
    }
    ctx.restore();
  }
  if(['mecha','glider','drill'].includes(powerUp)){
    const metal=ctx.createLinearGradient(x,y,x+width,y+height);metal.addColorStop(0,powerUp==='mecha'?'#ffdc7c':powerUp==='glider'?'#afdbbf':'#edb18a');metal.addColorStop(1,powerUp==='mecha'?'#a56b2e':powerUp==='glider'?'#3b776a':'#a14b32');ctx.fillStyle=metal;ctx.strokeStyle='#463e2e';ctx.lineWidth=3;
    if(powerUp==='glider'){ctx.beginPath();ctx.moveTo(x-42,y+15);ctx.lineTo(cx,y-35);ctx.lineTo(x+width+42,y+15);ctx.lineTo(x+width,y+23);ctx.lineTo(cx,y+height+8);ctx.lineTo(x,y+23);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(cx,y-35);ctx.lineTo(cx,y+height);ctx.moveTo(x-40,y+15);ctx.lineTo(cx,y);ctx.lineTo(x+width+40,y+15);ctx.stroke()}
    else{ctx.beginPath();ctx.roundRect(x-10,y+3,width+20,height-3,8);ctx.fill();ctx.stroke();if(powerUp==='mecha'){ctx.fillRect(x-23,y+14,13,30);ctx.strokeRect(x-23,y+14,13,30);ctx.fillRect(x+width+10,y+14,18,14);ctx.strokeRect(x+width+10,y+14,18,14);for(const side of [-1,1]){const lx=cx+side*(width/2+2)-9;ctx.fillRect(lx,y+height-3+side*pulse*3,18,20);ctx.strokeRect(lx,y+height-3,18,20)}ctx.beginPath();ctx.roundRect(x+2,y-16,width-4,25,5);ctx.fill();ctx.stroke()}
    else{ctx.beginPath();ctx.moveTo(x+width+8,y+4);ctx.lineTo(x+width+48,cy+4);ctx.lineTo(x+width+8,y+height);ctx.closePath();ctx.fillStyle='#e0dac0';ctx.fill();ctx.stroke();for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(x+width+10+i*9,y+10+i*5+pulse*3);ctx.lineTo(x+width+21+i*6,y+height-10-i*4);ctx.stroke()}ctx.fillStyle='#4d5148';ctx.beginPath();ctx.roundRect(x-14,y+height-3,width+25,14,6);ctx.fill();for(let i=0;i<4;i++){ctx.fillStyle='#aaaf91';ctx.beginPath();ctx.arc(x-5+i*15,y+height+4+pulse,4,0,7);ctx.fill()}}}
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

  // Original rider: visible face, helmet, scarf, bent limbs and a separate backpack.
  ctx.shadowBlur=0;ctx.lineCap='round';ctx.strokeStyle='#614b35';ctx.lineWidth=3;
  const pack=ctx.createLinearGradient(x+3,y,x+22,y);pack.addColorStop(0,'#8b947e');pack.addColorStop(.5,'#d6cfae');pack.addColorStop(1,'#697a68');ctx.fillStyle=pack;ctx.beginPath();ctx.roundRect(x+3,y+20,17,26,5);ctx.fill();ctx.stroke();ctx.fillStyle='#b68b4e';ctx.fillRect(x+5,y+28,13,5);ctx.fillStyle='#40594b';ctx.fillRect(x+6,y+44,11,7);
  const tilt=player.isThrusting?-2:Math.sin(frame*.08)*1.5;ctx.strokeStyle='#53675b';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(x+25,y+36);ctx.lineTo(x+28,y+height-7+tilt);ctx.lineTo(x+38,y+height-4+tilt);ctx.moveTo(x+36,y+36);ctx.lineTo(x+43,y+height-13-tilt);ctx.lineTo(x+50,y+height-12-tilt);ctx.stroke();ctx.strokeStyle='#5d4935';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(x+32,y+height-4+tilt);ctx.lineTo(x+41,y+height-4+tilt);ctx.moveTo(x+46,y+height-12-tilt);ctx.lineTo(x+54,y+height-12-tilt);ctx.stroke();
  ctx.fillStyle='#c8794e';ctx.strokeStyle='#805439';ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(x+19,y+20,23,21,7);ctx.fill();ctx.stroke();ctx.strokeStyle='#c7b488';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(x+21,y+21);ctx.lineTo(x+18,y+36);ctx.stroke();ctx.fillStyle='#efd0a0';ctx.beginPath();ctx.arc(x+32,y+12,11,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#916c45';ctx.lineWidth=1.5;ctx.stroke();ctx.fillStyle='#518a7a';ctx.beginPath();ctx.arc(x+30,y+9,12,Math.PI*.85,Math.PI*1.93);ctx.lineTo(x+42,y+10);ctx.lineTo(x+18,y+13);ctx.closePath();ctx.fill();ctx.fillStyle='#2c4840';ctx.beginPath();ctx.arc(x+37,y+13,1.4,0,7);ctx.fill();ctx.strokeStyle='#9c7852';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(x+35,y+19);ctx.lineTo(x+40,y+19);ctx.stroke();
  ctx.fillStyle='#e9bd62';ctx.beginPath();ctx.moveTo(x+22,y+23);ctx.lineTo(x+7,y+17+tilt);ctx.lineTo(x+11,y+28);ctx.lineTo(x+24,y+27);ctx.fill();ctx.strokeStyle='#d7ad7a';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(x+39,y+25);ctx.lineTo(x+46,y+31);ctx.lineTo(x+53,y+27);ctx.stroke();ctx.strokeStyle='#425d4c';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x+51,y+24);ctx.lineTo(x+55,y+30);ctx.stroke();
  if(player.isThrusting){const glow=ctx.createLinearGradient(x+10,y+49,x+10,y+68);glow.addColorStop(0,'#fff0a5');glow.addColorStop(.5,'#eaae56');glow.addColorStop(1,'#d58a3800');ctx.fillStyle=glow;ctx.beginPath();ctx.moveTo(x+5,y+48);ctx.lineTo(x+10,y+74+Math.sin(frame)*3);ctx.lineTo(x+18,y+48);ctx.fill();ctx.fillStyle='#ffec9d';ctx.beginPath();ctx.moveTo(x+8,y+49);ctx.lineTo(x+11,y+63);ctx.lineTo(x+15,y+49);ctx.fill()}
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
  const {x,y,width:w,height:h}=m;
  ctx.save();
  if(m.hazard==='zapper'){
    const horizontal=w>=h, short=horizontal?h:w, long=horizontal?w:h;
    ctx.translate(x+(horizontal?0:w/2),y+(horizontal?h/2:0));
    if(!horizontal)ctx.rotate(Math.PI/2);
    const radius=Math.min(short/2,long/5);
    ctx.fillStyle='#ffb92e';ctx.fillRect(radius,-radius*.52,Math.max(0,long-2*radius),radius*1.04);
    ctx.fillStyle='#fff5bb';ctx.fillRect(radius,-radius*.18,Math.max(0,long-2*radius),radius*.36);
    for(const pos of [radius,long-radius]){
      ctx.fillStyle='#ffbb24';ctx.beginPath();for(let i=0;i<16;i++){const angle=i*Math.PI/8,r=radius*(i%2?.72:1);ctx.lineTo(pos+Math.cos(angle)*r,Math.sin(angle)*r)}ctx.closePath();ctx.fill();
      ctx.fillStyle='#6b7580';ctx.beginPath();ctx.arc(pos,0,radius*.53,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#fff1a6';ctx.lineWidth=2;ctx.stroke();
    }
    ctx.restore();return;
  }
  const metal=ctx.createLinearGradient(x,y,x,y+h);
  metal.addColorStop(0,'#fff2bf');metal.addColorStop(.28,'#efa443');metal.addColorStop(1,'#ad4931');
  ctx.strokeStyle='#4a332e';ctx.lineWidth=2;ctx.fillStyle=metal;
  ctx.beginPath();ctx.moveTo(x,y+h*.52);ctx.quadraticCurveTo(x+w*.12,y+1,x+w*.46,y+2);
  ctx.lineTo(x+w*.8,y+3);ctx.lineTo(x+w*.98,y);ctx.lineTo(x+w*.94,y+h);
  ctx.lineTo(x+w*.76,y+h*.8);ctx.lineTo(x+w*.3,y+h*.86);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='#333e48';ctx.fillRect(x+w*.53,y+3,w*.11,h-6);
  ctx.fillStyle='#ffcf55';ctx.beginPath();ctx.moveTo(x+w*.94,y+h*.25);ctx.lineTo(x+w+9,y+h*.49);
  ctx.lineTo(x+w*.94,y+h*.77);ctx.fill();
  ctx.font='bold 13px Microsoft JhengHei';ctx.textAlign='center';ctx.textBaseline='bottom';
  const label=({'horizontal':'不必要的支出','diagonal-up':'想要 ≠ 需要','diagonal-down':'一次性享樂',homing:'限時優惠追住你'})[m.type];
  ctx.strokeStyle='#263141';ctx.lineWidth=3;ctx.strokeText(label,x+w/2,y-2);
  ctx.fillStyle='#fff4ce';ctx.fillText(label,x+w/2,y-2);ctx.restore();
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

export function drawPowerUp(ctx:CanvasRenderingContext2D,p:PowerUpItem,time:number){if(!p.active)return;const cx=p.x+POWERUP_SIZE/2,cy=p.y+POWERUP_SIZE/2;ctx.save();ctx.translate(cx,cy);const rainbow=ctx.createLinearGradient(-24,-24,24,24);['#fb987a','#f5d875','#a5d88f','#8ddde0','#b8a3e0'].forEach((c,i)=>rainbow.addColorStop(i/4,c));ctx.fillStyle=rainbow;ctx.strokeStyle='#fff6d7';ctx.lineWidth=3;ctx.shadowColor='#ffdc94';ctx.shadowBlur=10;ctx.beginPath();ctx.roundRect(-24,-24,48,48,10);ctx.fill();ctx.stroke();ctx.shadowBlur=0;ctx.fillStyle='#3b3c52';ctx.font='bold 39px Georgia';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('?',0,3);ctx.restore()}

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

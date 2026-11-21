// ─────────────────────────────────────────────
//  Canvas rendering helpers
// ─────────────────────────────────────────────

import {
  Missile, Coin, PowerUpItem, Particle,
} from '@/types/game';
import { COLORS, CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, CEILING_Y, COIN_SIZE, POWERUP_SIZE } from './constants';
import {siteText} from '../../../../source/site-text.mjs';
import { gateIsLive } from './courses';

const reducedMotion=typeof matchMedia !== "undefined" ? matchMedia("(prefers-reduced-motion: reduce)") : null;
const motion=(phase:number,still=0)=>reducedMotion?.matches?still:Math.sin(phase);

// ── Background ─────────────────────────────────
// Workshop windows and foreground bays are painted once; play only scrolls bitmaps.
const bayWidth = 300;
let farWorkshop: HTMLCanvasElement | undefined;
const workshops: HTMLCanvasElement[] = [];

function workshopTile(width: number, paint: (ctx: CanvasRenderingContext2D) => void) {
  const tile = document.createElement('canvas');
  tile.width = width;
  tile.height = CANVAS_HEIGHT;
  const context = tile.getContext('2d');
  if (context) paint(context);
  return tile;
}

function drawWorkshopSky(ctx: CanvasRenderingContext2D) {
  const sky = ctx.createLinearGradient(0,0,0,CANVAS_HEIGHT);
  sky.addColorStop(0,'#9a6558');
  sky.addColorStop(.38,'#d5a878');
  sky.addColorStop(.72,'#f2c590');
  sky.addColorStop(1,'#966e58');
  ctx.fillStyle=sky;ctx.fillRect(0,0,bayWidth*2,CANVAS_HEIGHT);
  ctx.fillStyle='#ffda9b';ctx.beginPath();ctx.arc(271,154,37,0,Math.PI*2);ctx.fill();
  for(let i=0;i<12;i++){
    const x=i*53-9, h=(i*37%115)+50, y=374-h;
    ctx.fillStyle=['#b27f65','#ae7866','#bd8c70'][i%3];ctx.fillRect(x,y,57,h+45);
    ctx.fillStyle='#a06e5b';ctx.fillRect(x+12,y-6,30,7);
    ctx.fillStyle='#ca9f72';
    for(let j=0;j<3;j++)for(let k=0;k<4;k++)ctx.fillRect(x+7+j*16,y+14+k*14,7,5);
  }
  const haze=ctx.createLinearGradient(0,225,0,450);
  haze.addColorStop(0,'#eab47f00');haze.addColorStop(1,'#f5c990b5');
  ctx.fillStyle=haze;ctx.fillRect(0,225,bayWidth*2,225);
}

function drawWorkshopBay(ctx: CanvasRenderingContext2D, index: number) {
  const wall=ctx.createLinearGradient(0,52,0,GROUND_Y);
  wall.addColorStop(0,'#53392f');wall.addColorStop(.38,'#775542');wall.addColorStop(1,'#8e674f');
  ctx.beginPath();ctx.rect(0,CEILING_Y,bayWidth,GROUND_Y-CEILING_Y);
  ctx.roundRect(43,112,207,205,[30,30,5,5]);ctx.fillStyle=wall;ctx.fill('evenodd');
  ctx.strokeStyle='#443129';ctx.lineWidth=11;ctx.beginPath();ctx.roundRect(43,112,207,205,[30,30,5,5]);ctx.stroke();
  ctx.strokeStyle='#c79362';ctx.lineWidth=2;ctx.stroke();
  ctx.fillStyle='#a98260';ctx.fillRect(45,187,204,4);ctx.fillRect(107,114,4,204);ctx.fillRect(188,114,4,204);
  ctx.fillStyle='#48392e';ctx.fillRect(37,313,220,8);ctx.fillStyle='#bb9364';ctx.fillRect(38,312,218,3);
  ctx.fillStyle='#efd6a343';
  ctx.beginPath();ctx.moveTo(64,135);ctx.lineTo(88,118);ctx.lineTo(160,310);ctx.lineTo(141,310);ctx.closePath();ctx.fill();
  for(const x of [6,278]){
    const pillar=ctx.createLinearGradient(x,0,x+16,0);
    pillar.addColorStop(0,'#402f29');pillar.addColorStop(.35,'#997050');pillar.addColorStop(1,'#634839');
    ctx.fillStyle=pillar;ctx.fillRect(x,62,16,GROUND_Y-62);
    ctx.fillStyle='#4e392c';ctx.fillRect(x-3,349,22,17);ctx.fillRect(x-3,74,22,10);
    ctx.fillStyle='#bb966b';ctx.fillRect(x-3,350,22,2);ctx.fillRect(x-3,75,22,2);
  }
  ctx.fillStyle='#b37c4f';ctx.fillRect(0,89,bayWidth,6);ctx.fillStyle='#54392c';ctx.fillRect(0,94,bayWidth,8);
  for(const x of [27,145,268]){
    ctx.fillStyle='#53372a';ctx.fillRect(x-3,57,5,27);
    ctx.fillStyle='#efbf73';ctx.fillRect(x-14,85,26,3);
  }
  ctx.strokeStyle='#a06b49';ctx.lineWidth=4;
  ctx.beginPath();ctx.moveTo(0,335);ctx.lineTo(269,335);ctx.quadraticCurveTo(282,335,282,349);ctx.lineTo(282,440);ctx.stroke();
  ctx.strokeStyle='#deb07e';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,334);ctx.lineTo(269,334);ctx.stroke();
  for(const x of [62,169,254]) {ctx.fillStyle='#54392b';ctx.fillRect(x,328,5,15);}
  ctx.fillStyle='#3e3930';ctx.fillRect(0,436,bayWidth,14);
  if(index===1){
    ctx.fillStyle='#3b4338';ctx.fillRect(55,370,127,75);ctx.fillStyle='#68806a';ctx.fillRect(56,370,124,5);
    for(let i=0;i<3;i++){
      ctx.fillStyle='#525f4e';ctx.fillRect(61,381+i*19,115,15);
      ctx.fillStyle='#ccab74';ctx.fillRect(111,386+i*19,17,3);
    }
    ctx.fillStyle='#c69563';ctx.fillRect(51,367,138,6);
  }else if(index===2){
    for(const [x,y,w,h] of [[74,394,72,50],[143,366,73,78]]){
      ctx.fillStyle='#564233';ctx.fillRect(x,y,w,h);
      ctx.fillStyle='#916944';ctx.fillRect(x+3,y+3,w-6,h-7);
      ctx.strokeStyle='#c3925f';ctx.lineWidth=3;ctx.strokeRect(x+3,y+3,w-6,h-7);
      ctx.beginPath();ctx.moveTo(x+3,y+h-4);ctx.lineTo(x+w-4,y+5);ctx.stroke();
    }
  }else{
    ctx.fillStyle='#4b382b';ctx.fillRect(79,368,139,6);ctx.fillRect(92,374,7,73);ctx.fillRect(194,374,7,73);
    ctx.fillStyle='#ba8f62';ctx.fillRect(79,368,139,3);
    for(let j=0;j<5;j++){
      ctx.fillStyle=['#776e54','#a48656','#846044'][j%3];ctx.fillRect(112+j*12,357+(j%2)*2,9,11-(j%2)*2);
    }
    ctx.fillStyle='#6e5944';ctx.fillRect(99,413,96,4);
  }
}

export function drawBackground(ctx: CanvasRenderingContext2D, scrollOffset: number) {
  if (!farWorkshop) {
    farWorkshop=workshopTile(bayWidth*2,drawWorkshopSky);
    for(let index=0;index<3;index++)workshops.push(workshopTile(bayWidth,tile=>drawWorkshopBay(tile,index)));
  }
  const farOffset=Math.round(scrollOffset*.13)%(bayWidth*2);
  for(let x=-farOffset;x<CANVAS_WIDTH;x+=bayWidth*2)ctx.drawImage(farWorkshop,x,0);
  const nearOffset=Math.round(scrollOffset*.41);
  const start=Math.floor(nearOffset/bayWidth);
  for(let x=-(nearOffset%bayWidth),i=start;x<CANVAS_WIDTH;x+=bayWidth,i++)ctx.drawImage(workshops[i%3],x,0);
  ctx.fillStyle='#3c3029';ctx.fillRect(0,0,CANVAS_WIDTH,CEILING_Y);
  ctx.fillRect(0,GROUND_Y,CANVAS_WIDTH,CANVAS_HEIGHT-GROUND_Y);
  ctx.fillStyle='#aa8157';ctx.fillRect(0,CEILING_Y-7,CANVAS_WIDTH,4);
  ctx.fillStyle='#c59866';ctx.fillRect(0,GROUND_Y,CANVAS_WIDTH,4);
  ctx.fillStyle='#735641';ctx.fillRect(0,GROUND_Y+5,CANVAS_WIDTH,5);
  for(let x=-(scrollOffset%80);x<CANVAS_WIDTH;x+=80){
    ctx.fillStyle='#272722';ctx.fillRect(x,GROUND_Y+10,8,CANVAS_HEIGHT-GROUND_Y-10);
    ctx.fillStyle='#816445';ctx.fillRect(x+11,GROUND_Y+13,58,4);
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
export { drawFlightRider as drawPlayer, drawVehicleExit } from './flight-art';

// ── Missiles ───────────────────────────────────
export function drawMissile(ctx: CanvasRenderingContext2D, m: Missile) {
  if (!m.active) return;
  const {x,y,width:w,height:h}=m;
  ctx.save();
  if ((m.warningFrames || 0) > 0) {
    const center = Math.max(CEILING_Y + 21, Math.min(GROUND_Y - 21, y + h / 2));
    const right = CANVAS_WIDTH - 12;
    ctx.fillStyle = '#372a2e';
    ctx.beginPath();
    ctx.roundRect(right - 113, center - 20, 113, 40, 8);
    ctx.fill();
    ctx.strokeStyle = '#ffba57';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffba57';
    ctx.beginPath();
    ctx.moveTo(right - 24, center - 10);
    ctx.lineTo(right - 13, center + 9);
    ctx.lineTo(right - 35, center + 9);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#372a2e';
    ctx.font = 'bold 13px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('!', right - 24, center + 7);
    ctx.fillStyle = '#fff2d3';
    const label=m.hazard==='rotor'?'旋轉閘':m.hazard==='piston'?'活塞預警':m.hazard==='gate'?'定時光閘':m.hazard==='zapper'?'電障預警':'導彈預警';
    ctx.fillText(siteText(label),right - 71,center + 1,100);
    ctx.fillStyle = '#ffba57';
    ctx.fillRect(right - 103, center + 9, 64 * (m.warningFrames || 0) / (m.warningAlpha||72), 3);
    ctx.restore();
    return;
  }
  if(m.hazard==='rotor'){
    ctx.translate(x+w/2,y+h/2);ctx.rotate(m.angle);
    const radius=Math.min(w,h)*.42;
    ctx.strokeStyle='#584333';ctx.lineWidth=15;ctx.lineCap='round';ctx.beginPath();
    ctx.moveTo(-radius,0);ctx.lineTo(radius,0);ctx.stroke();
    ctx.strokeStyle='#ffcd60';ctx.lineWidth=8;ctx.stroke();
    ctx.strokeStyle='#fff4b5';ctx.lineWidth=3;ctx.stroke();
    for(const pos of [-radius,0,radius]){
      ctx.beginPath();ctx.arc(pos,0,pos===0?9:6,0,Math.PI*2);ctx.fillStyle='#544f3e';ctx.fill();
      ctx.strokeStyle='#ebba69';ctx.lineWidth=2;ctx.stroke();
    }
    ctx.restore();return;
  }
  if(m.hazard==='piston'){
    const metal=ctx.createLinearGradient(x,y,x+w,y);
    metal.addColorStop(0,'#634638');metal.addColorStop(.5,'#d1a270');metal.addColorStop(1,'#735847');
    ctx.fillStyle=metal;ctx.strokeStyle='#48372f';ctx.lineWidth=2;
    ctx.beginPath();ctx.roundRect(x,y,w,h,6);ctx.fill();ctx.stroke();
    ctx.fillStyle='#433a30';ctx.fillRect(x+4,y+9,w-8,h-18);
    for(let i=0;i<5;i++) {
      ctx.fillStyle='#d49352';ctx.beginPath();ctx.moveTo(x+6,y+11+i*10);ctx.lineTo(x+w-6,y+18+i*10);
      ctx.lineTo(x+w-6,y+22+i*10);ctx.lineTo(x+6,y+15+i*10);ctx.closePath();ctx.fill();
    }
    ctx.restore();return;
  }
  if(m.hazard==='gate'){
    const live=gateIsLive(m);
    ctx.fillStyle=live?'#ffc25b':'#979283';
    if(live){ctx.fillRect(x+4,y+5,w-8,h-10);ctx.fillStyle='#fff0ae';ctx.fillRect(x+w/2-2,y+4,4,h-8)}
    else for(let part=12;part<h-10;part+=12)ctx.fillRect(x+w/2-1,y+part,2,6);
    for(const tip of [y,y+h-9]){
      ctx.fillStyle='#4d4837';ctx.beginPath();ctx.roundRect(x,tip,w,10,3);ctx.fill();
      ctx.fillStyle=live?'#fff0ac':'#c7c4ac';ctx.fillRect(x+4,tip+3,w-8,3);
    }
    ctx.restore();return;
  }
  if(m.hazard==='zapper'){
    const horizontal=w>=h, short=horizontal?h:w, long=horizontal?w:h;
    ctx.translate(x+(horizontal?0:w/2),y+(horizontal?h/2:0));
    if(!horizontal)ctx.rotate(Math.PI/2);
    const radius=Math.min(short/2,long/5);
    const span=Math.max(0,long-2*radius);
    ctx.fillStyle='#633a2c';ctx.fillRect(radius,-radius*.64,span,radius*1.28);
    ctx.fillStyle='#ffc755';ctx.fillRect(radius,-radius*.37,span,radius*.74);
    ctx.fillStyle='#fef3bb';ctx.fillRect(radius,-radius*.12,span,radius*.24);
    ctx.strokeStyle='#fff9db';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(radius,0);
    for(let i=1;i<=7;i++)ctx.lineTo(radius+span*i/8,motion(x*.14+i*3.3)*radius*.32);
    ctx.lineTo(long-radius,0);ctx.stroke();
    for(const pos of [radius,long-radius]){
      ctx.fillStyle='#4e3f32';ctx.beginPath();for(let i=0;i<8;i++){const angle=(i+.5)*Math.PI/4;ctx.lineTo(pos+Math.cos(angle)*radius,Math.sin(angle)*radius)}ctx.closePath();ctx.fill();
      ctx.strokeStyle='#ddad60';ctx.lineWidth=1.6;ctx.stroke();
      ctx.fillStyle='#857759';ctx.beginPath();ctx.arc(pos,0,radius*.69,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#211f1e';ctx.beginPath();ctx.arc(pos,0,radius*.50,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#ffee88';ctx.beginPath();ctx.moveTo(pos+radius*.05,-radius*.38);ctx.lineTo(pos-radius*.22,radius*.05);
      ctx.lineTo(pos-radius*.01,radius*.05);ctx.lineTo(pos-radius*.14,radius*.38);
      ctx.lineTo(pos+radius*.25,-radius*.08);ctx.lineTo(pos+radius*.07,-radius*.08);ctx.closePath();ctx.fill();
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
  ctx.fillStyle='#6c744b';ctx.beginPath();ctx.roundRect(x+w*.21,y+h*.16,w*.28,h*.49,4);ctx.fill();
  ctx.strokeStyle='#fbe0a0';ctx.lineWidth=1.2;ctx.stroke();
  ctx.fillStyle='#c9f4be';ctx.fillRect(x+w*.26,y+h*.27,w*.13,Math.max(2,h*.13));
  ctx.fillStyle='#81503d';ctx.fillRect(x+w*.67,y+h*.22,w*.15,Math.max(2,h*.34));
  ctx.fillStyle='#ffcf55';ctx.beginPath();ctx.moveTo(x+w*.94,y+h*.25);ctx.lineTo(x+w+9,y+h*.49);
  ctx.lineTo(x+w*.94,y+h*.77);ctx.fill();
  ctx.font='bold 13px Microsoft JhengHei';ctx.textAlign='center';ctx.textBaseline='bottom';
  const label=({'horizontal':'不必要的支出','diagonal-up':'想要 ≠ 需要','diagonal-down':'一次性享樂',homing:'限時優惠追住你'})[m.type];
  ctx.strokeStyle='#263141';ctx.lineWidth=3;ctx.strokeText(label,x+w/2,y-2);
  ctx.fillStyle='#fff4ce';ctx.fillText(siteText(label),x+w/2,y-2,200);ctx.restore();
}
// Coin and pickup silhouettes are painted once; the animated transform does the rest.
const tokens: Record<string, HTMLCanvasElement> = {};
function tokenTexture(kind: 'coin'|'mystery'|'boost') {
  if (tokens[kind]) return tokens[kind];
  const texture=document.createElement('canvas');
  texture.width=56;texture.height=56;
  const ctx=texture.getContext('2d');
  if (!ctx) return texture;
  ctx.translate(28,28);
  if(kind==='coin'){
    const gold=ctx.createLinearGradient(0,-21,8,23);
    gold.addColorStop(0,'#fff4b5');gold.addColorStop(.38,'#f4bd55');gold.addColorStop(1,'#ac6027');
    ctx.fillStyle='#513a28';ctx.beginPath();ctx.arc(0,0,24,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=gold;ctx.beginPath();ctx.arc(0,-1,21,0,Math.PI*2);ctx.fill();
    ctx.lineWidth=2;ctx.strokeStyle='#a36232';ctx.beginPath();ctx.arc(0,-1,16.5,0,Math.PI*2);ctx.stroke();
    ctx.arc(0,-1,17.5,Math.PI,Math.PI*1.55);ctx.strokeStyle='#fff3ad';ctx.stroke();
    ctx.lineCap='round';ctx.fillStyle='#704027';ctx.font='bold 25px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('$',0,0);
    for(const x of [-18,18]){ctx.fillStyle='#fff2b1';ctx.beginPath();ctx.arc(x,-2,1.8,0,Math.PI*2);ctx.fill()}
  }else{
    const metal=ctx.createLinearGradient(-21,-21,22,23);
    metal.addColorStop(0,kind==='boost'?'#a0d9a3':'#f6d2b0');
    metal.addColorStop(1,kind==='boost'?'#4d8268':'#bd6977');
    ctx.fillStyle='#48362b';ctx.beginPath();ctx.roundRect(-25,-24,50,50,10);ctx.fill();
    ctx.fillStyle=metal;ctx.beginPath();ctx.roundRect(-23,-23,46,45,8);ctx.fill();
    ctx.strokeStyle='#fff7cd';ctx.lineWidth=2;ctx.stroke();
    ctx.fillStyle=kind==='boost'?'#386653':'#6f455c';
    ctx.beginPath();ctx.roundRect(-15,-14,30,29,6);ctx.fill();
    ctx.strokeStyle='#e7cea0';ctx.lineWidth=1.5;ctx.stroke();
    for(const x of [-18,18])for(const y of [-17,17]){
      ctx.fillStyle='#5f4f3b';ctx.beginPath();ctx.arc(x,y,2.5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#ffe3a6';ctx.beginPath();ctx.arc(x-.3,y-.4,1,0,Math.PI*2);ctx.fill();
    }
    if(kind==='boost'){
      for(const x of [-9,-1,7]){
        ctx.strokeStyle='#f6ffd0';ctx.lineWidth=2.7;ctx.lineCap='round';ctx.lineJoin='round';
        ctx.beginPath();ctx.moveTo(x,-6);ctx.lineTo(x+5,0);ctx.lineTo(x,6);ctx.stroke();
      }
    }else{
      ctx.fillStyle='#fff5cc';ctx.font='bold 24px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('?',0,0);
    }
  }
  return tokens[kind]=texture;
}

export function drawCoin(ctx: CanvasRenderingContext2D, coin: Coin, time: number) {
  if (!coin.active || coin.collected || coin.x > CANVAS_WIDTH + 16 || coin.x < -COIN_SIZE - 16) return;
  const cx = coin.x + COIN_SIZE / 2;
  const cy = coin.y + COIN_SIZE / 2 + motion(time*.04+coin.x*.05)*3;
  const scale = .42 + .58 * Math.abs(motion(time*.06+coin.x*.03+Math.PI/2,1));
  const size=COIN_SIZE+6;
  ctx.save();
  ctx.translate(cx,cy);
  ctx.scale(scale,1);
  ctx.drawImage(tokenTexture('coin'),-size/2,-size/2,size,size);
  ctx.restore();
}

export function drawPowerUp(ctx:CanvasRenderingContext2D,p:PowerUpItem,time:number){
  if(!p.active||p.x>CANVAS_WIDTH+POWERUP_SIZE||p.x<-POWERUP_SIZE)return;
  const size=POWERUP_SIZE+7;
  const y=motion(time*.08)*3;
  ctx.drawImage(tokenTexture(p.type==='boost'?'boost':'mystery'),p.x-3.5,p.y+y-3.5,size,size);
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

import {siteText} from '../../../../source/site-text.mjs';
import type { Player, PowerUpType } from '@/types/game';

type Paint = string | CanvasGradient;
type Vertex = [number, number];
type Vehicle = 'mecha' | 'drill' | 'glider' | 'gravity' | 'blink' | 'dragon';

const edge = '#302823';
const brass = '#e8bd76';
const steel = '#53675e';
const glass = '#bcf2d1';
const vehicleNames: Record<Vehicle, string> = {
  mecha:'儲備機甲', drill:'界線鑽車', glider:'計劃滑翔翼', gravity:'重力裝置', blink:'瞬移裝置', dragon:'龍型載具',
};

function palette(color: PowerUpType) {
  const colors = {mecha:'#ffcc71',drill:'#ffae79',glider:'#9fe5b5',gravity:'#8deadd',blink:'#e3b0fc',dragon:'#ffa674'};
  return colors[color as Vehicle] ?? '#fff1cc';
}

function panel(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number, paint: Paint, rim?: string) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = paint;
  ctx.fill();
  if (rim) { ctx.strokeStyle = rim; ctx.lineWidth = 1.8; ctx.stroke(); }
}

function ellipse(ctx: CanvasRenderingContext2D, x: number, y: number, rx: number, ry: number, paint: Paint, rim?: string) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = paint;
  ctx.fill();
  if (rim) { ctx.strokeStyle = rim; ctx.lineWidth = 1.8; ctx.stroke(); }
}

function silhouette(ctx: CanvasRenderingContext2D, points: Vertex[], paint: Paint, rim?: string) {
  ctx.beginPath();
  points.forEach(([x,y],i) => i ? ctx.lineTo(x,y) : ctx.moveTo(x,y));
  ctx.closePath();
  ctx.fillStyle = paint;
  ctx.fill();
  if (rim) { ctx.strokeStyle = rim; ctx.lineWidth = 2; ctx.stroke(); }
}

function line(ctx: CanvasRenderingContext2D, points: Vertex[], color: string, width=1) {
  ctx.beginPath();
  points.forEach(([x,y],i) => i ? ctx.lineTo(x,y) : ctx.moveTo(x,y));
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function enamel(ctx: CanvasRenderingContext2D, light: string, face: string, dark: string, y=0, h=48) {
  const paint = ctx.createLinearGradient(0,y,3,y+h);
  paint.addColorStop(0,light);
  paint.addColorStop(.38,face);
  paint.addColorStop(1,dark);
  return paint;
}

function rivets(ctx: CanvasRenderingContext2D, points: Vertex[]) {
  for (const [x,y] of points) {
    ellipse(ctx,x,y,1.55,1.55,edge);
    ellipse(ctx,x-.35,y-.35,.65,.65,'#eed6a5');
  }
}

function pilot(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number, seated: boolean, swing: number, suit = '#bc583e') {
  ctx.save();
  ctx.translate(x,y);
  ctx.scale(scale,scale);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  const legs: Vertex[] = seated ? [[-6,14],[4,21],[15,20]] : [[-6,14],[-1,24-swing],[-7,29-swing]];
  const farLeg: Vertex[] = seated ? [[-11,14],[-3,22],[9,23]] : [[-12,13],[-13,22+swing],[-20,26+swing]];
  line(ctx,farLeg,'#302c26',8);line(ctx,farLeg,'#64716a',5.5);
  line(ctx,legs,'#302c26',9);line(ctx,legs,'#526c64',6);
  const [toeX,toeY]=legs[2];
  panel(ctx,toeX-4,toeY-2,12,6,2,'#3d3630',edge);
  line(ctx,[[toeX-3,toeY+2],[toeX+7,toeY+2]],'#c8a078',1.6);
  silhouette(ctx,[[-11,-6],[-26,-3-swing],[-20,3],[-31,7-swing],[-25,9],[-8,4]],'#df986d',edge);
  panel(ctx,-15,-3,23,23,6,suit,edge);
  line(ctx,[[-12,1],[-9,11],[-8,18]],'#f0b48d',3);
  line(ctx,[[-1,6],[7,13],[21,seated?10:15]],edge,8);
  line(ctx,[[-1,6],[7,13],[21,seated?10:15]],'#d99369',5);
  ellipse(ctx,21,seated?10:15,4,3.8,'#244c45',edge);
  panel(ctx,-13,-7,20,6,2,'#df9461',edge);
  ellipse(ctx,0,-12,13,13,'#eec59b',edge);
  silhouette(ctx,[[-13,-12],[-14,-20],[-8,-26],[3,-27],[11,-23],[13,-16],[19,-15],[18,-11],[-5,-11],[-9,-8]],'#4b8f7d',edge);
  line(ctx,[[-11,-20],[-5,-24],[4,-24],[10,-20]],'#b1d6ac',2);
  panel(ctx,4,-15,11,6,2,'#30453f',edge);
  line(ctx,[[6,-14],[11,-14]],'#f3df9b',1.3);
  ellipse(ctx,11,-10,1.5,1.8,'#392c22');
  line(ctx,[[11,-4],[15,-5]],'#9b5839',1.2);
  ctx.restore();
}

function backpack(ctx: CanvasRenderingContext2D, p: Player, beat: number) {
  panel(ctx,-27,-11,14,32,3,enamel(ctx,'#ddcf9f','#879b81','#455b51',-11,32),edge);
  panel(ctx,-30,-7,7,24,2,'#645244',edge);
  panel(ctx,-25,17,10,7,2,'#b77c50',edge);
  rivets(ctx,[[-24,-6],[-16,13]]);
  if (p.isThrusting) {
    silhouette(ctx,[[-24,22],[-20,41+beat*3],[-15,22]],enamel(ctx,'#fff4a9','#ffc379','#b9633000',22,21));
    silhouette(ctx,[[-22,22],[-20,34],[-17,22]],'#fff9d5');
  }
  pilot(ctx,0,-1,.98,false,beat);
}

function mecha(ctx: CanvasRenderingContext2D, p: Player, beat: number) {
  const paint=enamel(ctx,'#ffe0a0','#d38c42','#90543d',-24,55);
  for (const side of [-1,1]) {
    const x=side*17;
    panel(ctx,x-7,-4,15,22,4,'#775449',edge);
    ellipse(ctx,x,15,8,7,steel,edge);
    panel(ctx,x-9,15+side*beat,18,13,3,paint,edge);
    panel(ctx,x-11,24+side*beat,23,6,2,'#5a483e',edge);
    rivets(ctx,[[x,16],[x+6,24]]);
  }
  panel(ctx,-33,-11,14,28,5,paint,edge);panel(ctx,23,-13,15,28,4,paint,edge);
  panel(ctx,-35,11,15,6,2,steel,edge);panel(ctx,23,10,17,6,2,steel,edge);
  panel(ctx,-24,-16,50,33,8,paint,edge);
  panel(ctx,-16,-22,37,28,7,'#3d5b53',edge);
  ctx.save();
  ctx.beginPath();ctx.roundRect(-15,-22,35,27,6);ctx.clip();
  pilot(ctx,3,-8,.68,true,0);
  ctx.restore();
  line(ctx,[[0,-20],[-11,-20],[-14,-16]],glass,1.8);
  panel(ctx,-17,4,35,12,4,paint,edge);panel(ctx,3,8,10,3,1,'#ffeeae');
  rivets(ctx,[[-20,-10],[22,-10],[-12,9],[15,9]]);
  if(p.isThrusting) for(const x of [-21,20])silhouette(ctx,[[x-4,27],[x,39+beat*2],[x+4,27]],'#ffbc65');
}

function drill(ctx: CanvasRenderingContext2D, beat: number) {
  const copper=enamel(ctx,'#f8cc91','#c86d46','#7b4637',-10,44);
  panel(ctx,-32,14,56,17,8,'#383e36',edge);panel(ctx,-28,17,47,11,6,'#6c6854');
  for (let i=0;i<5;i++) {
    const x=-25+i*9;
    ellipse(ctx,x,23,4.2,4.2,brass,edge);
    line(ctx,[[x-Math.sin(beat)*2,19],[x+Math.sin(beat)*2,26]],'#766345',1);
  }
  panel(ctx,-30,2,48,15,5,copper,edge);
  pilot(ctx,-7,-2,.76,true,0);
  silhouette(ctx,[[-29,0],[-20,-5],[-13,2],[9,2],[15,-5],[24,0],[21,12],[-25,13]],copper,edge);
  panel(ctx,18,0,11,21,4,'#606b5c',edge);
  const blade=enamel(ctx,'#fff1ce','#b2bba2','#6e7664',-1,25);
  silhouette(ctx,[[27,-1],[55,5],[67,11],[52,19],[27,24]],blade,edge);
  for (let i=0;i<4;i++) {
    const phase=i*7+beat*2;
    line(ctx,[[29+phase,Math.max(1,phase*.29)],[25+phase,Math.min(22,24-phase*.34)]],'#616757',2.8);
  }
  rivets(ctx,[[-24,7],[-16,9],[12,8],[23,15]]);
}

function glider(ctx: CanvasRenderingContext2D, beat: number) {
  const canvas=enamel(ctx,'#e4d091','#8bb49a','#3f726b',-34,50);
  silhouette(ctx,[[-57,4+beat],[-29,-9],[-12,-17],[4,-35],[32,-14],[58,2],[37,10],[9,-1],[-13,12],[-33,18]],canvas,edge);
  line(ctx,[[-54,5+beat],[-10,-14],[4,-34],[18,-14],[54,2]],'#d4cb89',2.2);
  line(ctx,[[-33,16],[-13,-15],[7,2],[33,-10],[36,8]],'#446d63',1.6);
  line(ctx,[[4,-33],[5,12],[-15,20],[8,22],[25,-13]],'#81543d',3);
  pilot(ctx,0,5,.75,true,beat*.45);
  panel(ctx,-16,21,42,6,2,'#a46b43',edge);rivets(ctx,[[-12,24],[21,23]]);
}

function gravity(ctx: CanvasRenderingContext2D, beat: number) {
  const plate=enamel(ctx,'#b8efd5','#5fa792','#3d625a',-14,44);
  panel(ctx,-28,-12,13,30,5,plate,edge);panel(ctx,17,-12,13,30,5,plate,edge);
  ellipse(ctx,-1,7,29,11,'#355f54',edge);
  pilot(ctx,-1,-1,.83,false,beat);
  ctx.strokeStyle='#d8ffa8';ctx.lineWidth=2;
  ctx.beginPath();ctx.ellipse(0,6,36,13,-.31,0,Math.PI);ctx.stroke();
  for(const x of [-26,24]){
    silhouette(ctx,[[x-3,-13],[x,-18],[x+3,-13]],'#e7f5a0');
    silhouette(ctx,[[x-3,17],[x,22],[x+3,17]],'#e7f5a0');
  }
}

function capsule(ctx: CanvasRenderingContext2D, beat: number) {
  const shell=enamel(ctx,'#b597d6','#6d518d','#42334e',-28,55);
  panel(ctx,-19,-28,38,56,13,shell,edge);
  panel(ctx,-14,-22,28,43,9,'#6b507a','#d6b7f2');
  ctx.save();
  ctx.beginPath();ctx.roundRect(-13,-20,26,40,8);ctx.clip();
  pilot(ctx,1,-3,.68,true,0);
  ctx.globalAlpha=.13;panel(ctx,-14,-20,29,40,8,'#efabff');
  ctx.restore();
  line(ctx,[[-9,-17],[-12,-12],[-12,9]],'#f1d7ff',2);
  panel(ctx,-18,-24,35,6,2,'#b1b7a0',edge);
  panel(ctx,-18,19,35,6,2,'#b1b7a0',edge);
  for(const x of [-22,22]){ellipse(ctx,x,-8+beat,4,6,'#eed1ff',edge);ellipse(ctx,x,10-beat,3,4,'#77dfef',edge)}
  rivets(ctx,[[-13,-21],[12,-21],[-12,22],[12,22]]);
}

function dragon(ctx: CanvasRenderingContext2D, beat: number) {
  const body=enamel(ctx,'#ffc29b','#c56349','#79453d',-13,40);
  silhouette(ctx,[[-51,21],[-37,8],[-23,13],[-17,0],[-4,6],[15,0],[19,-13],[26,-7],[32,-12],[33,-3],[49,0],[54,8],[44,13],[26,13],[15,24],[-3,27],[-28,22]],body,edge);
  line(ctx,[[23,13],[12,23],[-2,24],[-20,20]],'#f4bc8e',2);
  ellipse(ctx,38,3,4,3.2,'#ffe997',edge);ellipse(ctx,39,3,1.2,2,'#4a3029');
  line(ctx,[[41,9],[51,7]],edge,1.6);
  for(let i=0;i<4;i++){const x=-39+i*8;silhouette(ctx,[[x,15],[x+3,7],[x+8,15]],'#f2ab7f',edge)}
  pilot(ctx,0,-7,.72,true,beat*.4);
  silhouette(ctx,[[0,9],[-10,-12-beat],[-37,-19-beat*2],[-31,-5],[-21,1],[-17,13]],body,edge);
  line(ctx,[[0,9],[-10,-11-beat],[-30,-15-beat]],'#f1a77c',1.5);
}

const vehicles: Record<Vehicle, (ctx: CanvasRenderingContext2D, p: Player, beat: number) => void> = {
  mecha, drill:(ctx,p,beat) => drill(ctx,beat), glider:(ctx,p,beat) => glider(ctx,beat),
  gravity:(ctx,p,beat) => gravity(ctx,beat), blink:(ctx,p,beat) => capsule(ctx,beat),
  dragon:(ctx,p,beat) => dragon(ctx,beat),
};
const entryFrames = new WeakMap<Player, {variant: Vehicle | null; since: number}>();
const reducedMotion = typeof matchMedia !== 'undefined' ? matchMedia('(prefers-reduced-motion: reduce)') : null;

function drawLandingGuide(ctx: CanvasRenderingContext2D, p: Player) {
  const target=p.teleportPreview;
  if(!target)return;
  const cx=p.x+p.width/2, cy=p.y+p.height/2, y=target.y+p.height/2;
  const color=target.safe?'#f6d1ff':'#ffe291';
  ctx.save();
  ctx.translate(cx,y);ctx.globalAlpha=.47;capsule(ctx,0);ctx.restore();
  for(const side of [-1,1]){
    const x=cx+side*25;
    line(ctx,[[x-side*7,y-24],[x,y-24],[x,y-15]],color,2.5);
    line(ctx,[[x-side*7,y+24],[x,y+24],[x,y+15]],color,2.5);
  }
  if(!target.safe){
    line(ctx,[[cx-8,y-8],[cx+8,y+8]],color,3);
    line(ctx,[[cx-8,y+8],[cx+8,y-8]],color,3);
  }
  const direction=Math.sign(y-cy), x=cx+34;
  if(Math.abs(y-cy)>32)for(let k=1;k<=4;k++){
    const py=cy+(y-cy)*k/5;
    line(ctx,[[x-5,py-direction*4],[x,py+direction*3],[x+5,py-direction*4]],color,2);
  }
}
export function drawFlightRider(ctx: CanvasRenderingContext2D, player: Player, frame: number) {
  const { x,y,width,height,powerUp }=player;
  const quiet=!!reducedMotion?.matches;
  const beat=quiet?0:Math.sin(frame*.25)*2;
  const cx=x+width/2,cy=y+height/2;
  const variant=Object.hasOwn(vehicles,powerUp)?powerUp as Vehicle:null;
  let entry=entryFrames.get(player);
  if(!entry||entry.variant!==variant){
    entry={variant,since:frame};
    entryFrames.set(player,entry);
  }
  ctx.save();
  if(variant==='blink')drawLandingGuide(ctx,player);
  ctx.translate(cx,cy);
  ctx.lineJoin='round';ctx.lineCap='round';
  if(player.invincible&&!quiet)ctx.globalAlpha=.83;
  if((player.dashFrames??0)>0){
    for(let i=0;i<3;i++)line(ctx,[[-44-i*3,-13+i*11],[-74+i*3,-13+i*11]],i===1?'#fff0bb':'#ebbd83',3);
  }
  if(variant){
    const elapsed=frame-entry.since;
    if(!quiet&&elapsed<13){
      const fade=1-elapsed/13;
      ctx.save();ctx.globalAlpha=fade*.8;
      ctx.beginPath();ctx.ellipse(0,0,24+elapsed*1.4,28+elapsed,0,0,Math.PI*2);
      ctx.strokeStyle=palette(variant);ctx.lineWidth=3;ctx.stroke();ctx.restore();
      const expand=.87+Math.min(1,elapsed/9)*.13;
      ctx.scale(expand,expand);
    }
    if(variant==='gravity'&&player.vehicleVisualState?.gravity==='up')ctx.scale(1,-1);
    if(variant==='glider'&&!quiet)ctx.rotate(Math.max(-.12,Math.min(.12,player.velocity*.012)));
    vehicles[variant](ctx,player,beat);
  }else backpack(ctx,player,beat);
  if((player.shieldFrames??0)>0){
    ctx.beginPath();ctx.ellipse(0,0,37,34,0,0,Math.PI*2);
    ctx.strokeStyle='#88e6da';ctx.lineWidth=2.4;ctx.stroke();
  }
  ctx.restore();
}

export function drawVehicleExit(ctx: CanvasRenderingContext2D, p: Player) {
  const remaining=p.expiredTimer??0;
  if(remaining<=0||!p.expiredType||!Object.hasOwn(vehicleNames,p.expiredType))return;
  const amount=!!reducedMotion?.matches?0:1-remaining/100;
  const color=palette(p.expiredType);
  const impact=p.expiredReason==='擋擊後解除';
  ctx.save();
  ctx.translate(p.x+p.width/2,p.y+p.height/2);
  ctx.globalAlpha=1-amount;
  const radius=32+amount*43;
  if(impact)for(let i=0;i<8;i++){
    const a=i*Math.PI/4;
    line(ctx,[[Math.cos(a)*radius,Math.sin(a)*radius],[Math.cos(a)*(radius+11),Math.sin(a)*(radius+11)]],color,2.5);
  }else{
    ctx.beginPath();ctx.ellipse(0,0,radius,radius*.9,0,0,Math.PI*2);
    ctx.strokeStyle=color;ctx.lineWidth=2.5;ctx.setLineDash([7,5]);ctx.stroke();ctx.setLineDash([]);
  }
  ctx.globalAlpha=Math.min(1,remaining/18);
  const y=p.y<107?40:-52;
  panel(ctx,-64,y,158,24,5,'#4b3629',color);
  ctx.fillStyle='#fff2d4';ctx.font='bold 12px system-ui';ctx.textBaseline='middle';
  ctx.fillText(siteText(vehicleNames[p.expiredType as Vehicle]+' · '+p.expiredReason),-55,y+12,140);
  ctx.restore();
}

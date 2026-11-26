import { WEAPONS } from './rules.mjs';

const speed = 18;
const radius = .12;
const range = WEAPONS.bazooka.range;

export function launchRocket(owner, origin, direction, spawnTime) {
 const length = Math.hypot(direction.x, direction.y, direction.z);
 return {id:crypto.randomUUID(), owner, position:{...origin}, previousPosition:{...origin},
  velocity:{x:direction.x*speed/length,y:direction.y*speed/length,z:direction.z*speed/length},
  spawnTime, travelled:0, active:true, exploded:false};
}

// Clip a segment against all three slabs of a solid expanded by the projectile radius.
function entry(from, delta, solid, pad) {
 let first=0,last=1;
 for(const [axis,low,high] of [
  ['x',solid.x-solid.w/2,solid.x+solid.w/2],
  ['y',solid.base||0,(solid.base||0)+solid.h],
  ['z',solid.z-solid.d/2,solid.z+solid.d/2]
 ]){
  const start=from[axis], step=delta[axis];
  if(!step){if(start<low-pad||start>high+pad)return Infinity;continue}
  const a=(low-pad-start)/step,b=(high+pad-start)/step;
  first=Math.max(first,Math.min(a,b));last=Math.min(last,Math.max(a,b));
  if(first>last)return Infinity;
 }
 return first;
}
export function stepRocket(rocket,dt,solids,bots){
 if(!rocket.active||dt<=0)return null;
 const distance=Math.min(range-rocket.travelled,dt*speed);
 const delta=Object.fromEntries(Object.entries(rocket.velocity).map(([key,v])=>[key,v*distance/speed]));
 const start=rocket.position;
 let earliest=delta.y<0&&start.y+delta.y<=radius?Math.max(0,(radius-start.y)/delta.y):Infinity;
 let direct=null;
 for(const solid of solids)earliest=Math.min(earliest,entry(start,delta,solid,radius));
 for(const bot of bots){
  if(bot.hp<=0)continue;
  const hit=entry(start,delta,{x:bot.x,z:bot.z,w:1.1,d:.95,h:1.9},radius);
  if(hit<earliest){earliest=hit;direct=bot.id}
 }
 const fraction=Math.min(1,earliest);
 rocket.previousPosition=start;
 rocket.position={x:start.x+delta.x*fraction,y:start.y+delta.y*fraction,z:start.z+delta.z*fraction};
 rocket.travelled+=distance*fraction;
 if(!Number.isFinite(earliest)&&rocket.travelled<range-1e-8)return null;
 rocket.active=false;rocket.exploded=true;
 return {id:rocket.id,owner:rocket.owner,position:{...rocket.position},direct};
}

export function impactDamage(event,target,solids,self=false,solo=false){
 if(!self&&target.id===event.direct)return WEAPONS.bazooka.damage;
 const from=event.position;
 const delta={x:target.x-from.x,y:(target.y??1.05)-from.y,z:target.z-from.z};
 const distance=Math.hypot(delta.x,delta.y,delta.z);
 const {selfCap}=WEAPONS.bazooka;
 const blastRadius=solo?5.4:WEAPONS.bazooka.blastRadius;
 const splash=solo?210:WEAPONS.bazooka.splash;
 if(distance>=blastRadius||solids.some(solid=>entry(from,delta,solid,0)<1))return 0;
 return Math.min(self?selfCap:splash,Math.round(splash*(1-distance/blastRadius)));
}

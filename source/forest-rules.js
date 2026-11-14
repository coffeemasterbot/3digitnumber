(function(root,f){if(typeof module==='object')module.exports=f();else root.ForestRules=f()})(globalThis,()=>{
const door=(x,near,far,a,b)=>({x,y:110,w:22,h:390,plates:[{x:near,type:a},{x:far,type:b}],open:false,roomReady:false});
function level(n){const third=n===3;const doors=n===1?[door(330,290,385,0,1),door(660,615,715,1,0)]:[door(300,260,350,0,1),door(580,540,630,1,0),door(820,780,875,1,0)];if(n>1){doors[1].mode='lever';doors[1].requires=n===2?['needs','reserve']:['reserve'];doors[1].plates=[]}const levers=n>1?[{id:'needs',x:425,y:405,type:0,on:false},{id:'reserve',x:495,y:330,type:1,on:false}]:[];const pools=doors.flatMap(d=>d.plates.map(p=>({x:p.x-23,w:46,type:p.type})));if(third)pools.push({x:470,w:44,type:2});else if(n===1)pools.push({x:470,w:38,type:2});
const far=n===1?385:350;const bodies=[body('step-box','box',158,452,48,48),body('rolling-stone','boulder',n===1?390:360,456,44,44)];
return {bodies,docks:[{id:'stone-seat',x:far,y:500,door:0}],levers,platforms:[{x:0,y:500,w:960,h:60},{x:210,y:380,w:n===1?85:75,h:18},...(n===1?[{x:480,y:425,w:95,h:18},{x:550,y:350,w:95,h:18}]:[{x:390,y:425,w:95,h:18},{x:455,y:350,w:95,h:18},...(third?[{x:595,y:425,w:75,h:18},{x:650,y:425,w:85,h:18,lift:true},{x:720,y:275,w:85,h:18}]:[])])],doors,pools,gems:[{x:180,y:458,type:0},{x:245,y:345,type:1},{x:n===1?515:third?750:425,y:third?240:390,type:0},{x:n===1?590:495,y:315,type:1}],hazards:n===1?[]:[{x:460,y:365,w:16,h:60},...(third?[{x:697,y:365,w:16,h:60}]:[])]}}
// Arcade temples have independent layouts. Story chapters keep their original maps.
const temples=[
 ['weight-box',295,490,630,330,0],['weight-stone',335,520,690,315,1],['weight-relay',365,550,720,285,1],
 ['motion-lift',320,505,655,290,2],['motion-counterweight',365,530,710,310,3],['motion-return',300,455,630,255,3],
 ['light-turn',335,495,645,305,4],['light-pair',355,535,705,285,5],['light-reunion',315,495,680,265,5]
];
function temple(n){
 const [id,first,mid,last,upper,mechanic]=temples[n-1],m=level(1);
 m.id=id;m.platforms=[m.platforms[0],{x:165,y:425,w:85,h:18},{x:220,y:365,w:first-205,h:18},
  {x:mid-90,y:425,w:90,h:18},{x:mid-40,y:365,w:95,h:18},{x:mid+15,y:upper,w:95,h:18},
  {x:last+30,y:425,w:110,h:18}];
 m.levers=[{id:'bridge',x:first-38,y:342,type:0,on:false},{id:'return',x:mid+62,y:upper-18,type:1,on:false}];
 m.doors=[door(first,first-50,first+60,0,1),door(last,last-42,last+48,1,0)];
 m.doors[0].mode='relay';m.doors[0].requires=['bridge','return'];
 m.doors[1].mode='lever';m.doors[1].requires=['return'];
 m.bodies[0].x=m.bodies[0].startX=117;m.bodies[1].x=m.bodies[1].startX=first+76;
 m.docks=[{id:'stone-seat',x:mid-45,y:500,door:1}];m.pools=[{x:mid-12,w:35,type:2}];
 if(mechanic===1||mechanic===3)m.doors[1].weight=true;
 if(mechanic>=2){m.platforms[5]={...m.platforms[5],lift:true,base:425,top:upper,control:'bridge'};m.levers[1].x=mid+5;
  if(mechanic===3)m.platforms[5].weighted=true}
 if(mechanic>=4){
  m.light={source:[mid-78,upper-35],receiver:[mid+115,upper-110],mirrors:[{x:mid+40,y:upper-35,turned:false,type:1},{x:mid+40,y:upper-110,turned:mechanic===4,type:0}],segments:[],lit:false};
  m.platforms.push({x:mid+8,y:upper-75,w:82,h:15});m.levers[1].x=mid+100;m.levers[1].y=upper-18;m.doors[1].light=true;
 }
 m.gems=[{x:205,y:390,type:0},{x:first-35,y:330,type:0},{x:mid+45,y:upper-35,type:1},{x:last+75,y:390,type:1}];
 return m;
}
function traceLight(m){
 const l=m.light;if(!l)return;
 let [x,y]=l.source,dx=1,dy=0;l.segments=[];l.lit=false;
 for(let k=0;k<4;k++){
  let hit=null,dist=1000;
  for(const object of [...l.mirrors,{x:l.receiver[0],y:l.receiver[1],receiver:true}]){
   const along=(object.x-x)*dx+(object.y-y)*dy,cross=(object.x-x)*dy-(object.y-y)*dx;
   if(along>.01&&along<dist&&Math.abs(cross)<2){dist=along;hit=object}
  }
  for(const b of m.bodies){const near=dx>0?b.x-x:dx<0?x-b.x-b.w:dy>0?b.y-y:y-b.y-b.h;
   if(near>0&&near<dist&&(dx?y>=b.y&&y<=b.y+b.h:x>=b.x&&x<=b.x+b.w)){dist=near;hit=null}}
  const nx=x+dx*dist,ny=y+dy*dist;l.segments.push([x,y,nx,ny]);x=nx;y=ny;
  if(!hit)break;if(hit.receiver){l.lit=true;break}
  [dx,dy]=hit.turned?[-dy,-dx]:[dy,dx];
 }
}
function savePoint(map,players,score){return structuredClone({map,players,score})}
function onPlate(p,plate){return p.grounded&&p.y>445&&Math.abs(p.x+14-plate.x)<20&&p.type===plate.type}
function update(map,players){traceLight(map);for(const d of map.doors){if(d.mode==='relay'){d.open=map.levers[1].on||players.some(p=>p.type===0&&Math.hypot(p.x+14-map.levers[0].x,p.y+17-map.levers[0].y)<55);map.levers[0].on=d.open;continue}d.open=d.mode==='lever'?d.requires.every(id=>map.levers.find(l=>l.id===id)?.on):d.plates.some(a=>platePressed(map,players,a));if(d.weight)d.open=d.open&&map.bodies.some(b=>b.locked);if(d.light)d.open=d.open&&map.light.lit}return map.doors}
function checkpoint(map,players){for(const d of map.doors){if(!d.roomReady&&players.every(p=>p.x>d.x+d.w+3)){d.roomReady=true;for(const p of players){let x=(d.plates[1]?.x??d.x+52)+24+p.type*8;p.checkpoint=Math.min(910,x)}}}}
function doorCollision(p,doors,oldX){for(const d of doors){if(d.open||p.y+p.h<=d.y||p.y>=d.y+d.h)continue;if(p.x+p.w>d.x&&p.x<d.x+d.w){p.x=oldX+p.w/2<d.x+d.w/2?d.x-p.w:d.x+d.w;p.vx=0}}}
function lever(map,p){const mirror=map.light?.mirrors.find(m=>m.type===p.type&&Math.hypot(p.x+14-m.x,p.y+17-m.y)<42);if(mirror){mirror.turned=!mirror.turned;traceLight(map);return true}const l=map.levers?.find(l=>l.type===p.type&&Math.hypot(p.x+14-l.x,p.y+17-l.y)<55);if(!l||(map.id&&l.id==='bridge'))return false;l.on=!l.on;return true}
// Movable objects are authoritative map state. No DOM or wall-clock dependencies.
function body(id,kind,x,y,w,h){return {id,kind,x,y,w,h,startX:x,startY:y,vx:0,vy:0,angle:0,locked:false,dock:null}}
const overlap=(a,b)=>a.x<b.x+b.w-.001&&a.x+a.w>b.x+.001&&a.y<b.y+b.h-.001&&a.y+a.h>b.y+.001;
function onWeight(b,plate){return Math.abs(b.y+b.h-500)<2&&Math.abs(b.x+b.w/2-plate.x)<19}
function platePressed(map,players,plate){return players.some(p=>onPlate(p,plate))||(map.bodies||[]).some(b=>onWeight(b,plate))}
function dockBody(map,b,oldX=b.x){if(b.kind!=='boulder'||b.locked||Math.abs(b.y+b.h-500)>2)return false;const a=oldX+b.w/2,z=b.x+b.w/2;const d=map.docks?.find(d=>Math.abs(z-d.x)<8||(a-d.x)*(z-d.x)<0);if(!d)return false;const seat={...b,x:d.x-b.w/2};if(map.bodies.some(other=>other!==b&&overlap(seat,other))||map.doors.some(door=>!door.open&&overlap(seat,door)))return false;b.x=seat.x;b.vx=b.vy=0;b.locked=true;b.dock=d.id;return true}
function moveBody(map,b,amount,players=[],actor=null){if(b.locked||!amount)return 0;const old=b.x;let next=Math.max(12,Math.min(948-b.w,old+amount));const obstacles=[...map.platforms,...map.doors.filter(d=>!d.open),...map.bodies.filter(o=>o!==b),...players.filter(p=>p!==actor&&!(p.grounded&&Math.abs(p.y+p.h-b.y)<2))];for(const o of obstacles){if(b.y>=o.y+o.h-.01||b.y+b.h<=o.y+.01)continue;if(amount>0&&old+b.w<=o.x+.01&&next+b.w>o.x)next=Math.min(next,o.x-b.w);if(amount<0&&old>=o.x+o.w-.01&&next<o.x+o.w)next=Math.max(next,o.x+o.w)}b.x=next;const moved=b.x-old;b.angle+=(b.kind==='boulder'?moved/(b.w/2):0);dockBody(map,b,old);return b.x-old}
function pushPlayer(map,p,oldX,players,dt){const dx=p.x-oldX;for(const b of map.bodies||[]){if(!overlap(p,b))continue;const right=dx>0||(dx===0&&oldX+p.w/2<b.x+b.w/2);const amount=right?p.x+p.w-b.x:p.x-(b.x+b.w);const moved=Math.abs(dx)>.001?moveBody(map,b,amount,players,p):0;b.vx=b.locked?0:b.kind==='boulder'&&dt?moved/dt*.45:0;p.x=right?b.x-p.w:b.x+b.w;p.vx=moved&&dt?moved/dt:0}}
function stepBodies(map,players,dt){for(const b of map.bodies||[]){if(b.locked)continue;const oldX=b.x,oldY=b.y,standing=players.filter(p=>p.grounded&&Math.abs(p.y+p.h-b.y)<2&&p.x+p.w>b.x&&p.x<b.x+b.w);const dx=moveBody(map,b,b.vx*dt,players);b.vx=Math.abs(dx)<.0001?0:b.vx*Math.exp(-7*dt);b.vy=Math.min(700,b.vy+1280*dt);b.y+=b.vy*dt;for(const o of [...map.platforms,...map.bodies.filter(o=>o!==b)]){if(b.vy>=0&&oldY+b.h<=o.y+.5&&b.y+b.h>=o.y&&b.x+b.w>o.x+.1&&b.x<o.x+o.w-.1){b.y=o.y-b.h;b.vy=0;break}}for(const p of standing){p.x+=b.x-oldX;p.y+=b.y-oldY}if(b.y>600){b.x=b.startX;b.y=b.startY;b.vx=b.vy=0;b.angle=0}dockBody(map,b,oldX)}}
function landOnBodies(map,p,oldY){for(const b of map.bodies||[]){if(p.x+p.w<=b.x+.1||p.x>=b.x+b.w-.1)continue;if(p.vy>=0&&oldY+p.h<=b.y+1&&p.y+p.h>=b.y){p.y=b.y-p.h;p.vy=0;p.grounded=true;p.support=b.id;break}if(p.vy<0&&oldY>=b.y+b.h-.5&&p.y<b.y+b.h){p.y=b.y+b.h;p.vy=0}}}
function playerNames(raw){const defaults=['火仔','冰仔'];return defaults.map((d,i)=>{const value=Array.isArray(raw)&&typeof raw[i]==='string'?raw[i]:'';return Array.from(value.replace(/[<>\x00-\x1f\x7f]/g,'').trim()).slice(0,16).join('')||d})}
return {playerNames,level,temple,temples,traceLight,savePoint,onPlate,onWeight,platePressed,update,checkpoint,doorCollision,lever,moveBody,pushPlayer,stepBodies,landOnBodies,dockBody};
});

(function(root,f){if(typeof module==='object')module.exports=f();else root.ForestRules=f()})(globalThis,()=>{
const door=(x,near,far,a,b)=>({x,y:110,w:22,h:390,plates:[{x:near,type:a},{x:far,type:b}],open:false,roomReady:false});
function level(n){const third=n===3;const doors=n===1?[door(330,290,385,0,1),door(660,615,715,1,0)]:[door(300,260,350,0,1),door(580,540,630,1,0),door(820,780,875,1,0)];if(n>1){doors[1].mode='lever';doors[1].requires=n===2?['needs','reserve']:['reserve'];doors[1].plates=[]}const levers=n>1?[{id:'needs',x:425,y:405,type:0,on:false},{id:'reserve',x:495,y:330,type:1,on:false}]:[];const pools=doors.flatMap(d=>d.plates.map(p=>({x:p.x-23,w:46,type:p.type})));if(third)pools.push({x:470,w:44,type:2});else if(n===1)pools.push({x:470,w:38,type:2});
const far=n===1?385:350;const bodies=[body('step-box','box',158,452,48,48),body('rolling-stone','boulder',n===1?390:360,456,44,44)];
return {bodies,docks:[{id:'stone-seat',x:far,y:500,door:0}],levers,platforms:[{x:0,y:500,w:960,h:60},{x:210,y:380,w:n===1?85:75,h:18},...(n===1?[{x:480,y:425,w:95,h:18},{x:550,y:350,w:95,h:18}]:[{x:390,y:425,w:95,h:18},{x:455,y:350,w:95,h:18},...(third?[{x:595,y:425,w:75,h:18},{x:650,y:425,w:85,h:18,lift:true},{x:720,y:275,w:85,h:18}]:[])])],doors,pools,gems:[{x:180,y:458,type:0},{x:245,y:345,type:1},{x:n===1?515:third?750:425,y:third?240:390,type:0},{x:n===1?590:495,y:315,type:1}],hazards:n===1?[]:[{x:460,y:365,w:16,h:60},...(third?[{x:697,y:365,w:16,h:60}]:[])]}}
// Platforms are one-way ledges. Coordinates use canvas pixels, spawn/exit y is foot height.
const ledge=(x,y,w,h=18)=>({x,y,w,h});
const floor=(x,w)=>ledge(x,500,w,60);
const leverAt=(id,type,x,y)=>({id,type,x,y,on:false});
const plate=(id,type,x,y=500,kind)=>({id,type,x,y,kind});
const gate=(x,y,h,requires,plates=[],any=[])=>({x,y,w:22,h,requires,plates,any,mode:'circuit',open:false,roomReady:false});
const box=x=>body('step-box','box',x,452,48,48);
const rock=x=>body('rolling-stone','boulder',x,456,44,44);
const socket=x=>({id:'socket',x,y:500});
const shaft=(x,base,top,w,control)=>({...ledge(x,base,w),lift:true,cycle:true,base,top,control});
const beam=(id,source,receiver,mirrors)=>({id,source,receiver,mirrors:mirrors.map(([x,y,type])=>({x,y,type,turned:false})),segments:[],lit:false});
// Every map has two work areas and one shared landing. Door circuits cross over
// so an element can unblock the other side, but cannot let itself into the middle.
function relayMap({id, seconds, hint, platforms=[], bodies=[], docks=[], levers=[], plates=[], lights=[], pools=[], hazards=[], circuits, gems, center=422}) {
 const exits=[[445,center],[510,center]];
 return {
  id,seconds,hint,start:[[58,500],[858,500]],end:exits,
  platforms:[floor(0,960),ledge(399,center,160),...platforms],
  bodies,docks,levers,lights,pools,hazards,gems,
  doors:[gate(339,30,470,[circuits[1]],plates),gate(600,30,470,[circuits[0]])],
  goals:circuits,
 };
}
const maps=[
 relayMap({id:'weight-box',seconds:180,center:426,
  hint:'火仔推箱到壓板，冰仔喺對面拉桿。交換通路後，喺中央平台會合。',
  platforms:[ledge(271,470,18,30)],bodies:[box(120)],plates:[plate('west-crate',0,247,500,'box')],
  levers:[leverAt('east-latch',1,716,478)],circuits:['west-crate','east-latch'],
  gems:[[89,478,0],[424,403,0],[815,478,1],[535,403,1]]}),
 relayMap({id:'weight-stone',seconds:200,center:420,
  hint:'火仔推石入槽。冰仔沿台階上高台開對面閘，再返回中央。',
  platforms:[ledge(748,431,106),ledge(650,360,135)],
  bodies:[rock(151)],docks:[socket(276)],levers:[leverAt('east-latch',1,689,340)],
  pools:[{x:82,w:49,type:0},{x:880,w:38,type:1}],
  circuits:['socket','east-latch'],gems:[[86,478,0],[424,397,0],[714,334,1],[532,397,1]]}),
 relayMap({id:'weight-relay',seconds:215,center:360,
  hint:'兩翼分開推箱同滾石。兩道閘互相開啟，再沿中央台階上去。',
  platforms:[ledge(275,470,18,30),ledge(367,426,88),ledge(526,426,68)],
  bodies:[box(114),rock(785)],plates:[plate('west-crate',0,251,500,'box')],
  docks:[socket(693)],circuits:['west-crate','socket'],
  gems:[[90,479,0],[423,336,0],[863,479,1],[535,336,1]]}),
 relayMap({id:'motion-lift',seconds:210,center:416,
  hint:'先撳兩側低位拉桿，啟動對面升降台。乘台拉高層閘掣。',
  platforms:[shaft(184,476,390,105,'east-motor'),shaft(660,476,390,104,'west-motor')],
  levers:[leverAt('west-motor',0,126,479),leverAt('east-motor',1,817,479),leverAt('west-high',0,238,367),leverAt('east-high',1,714,367)],
  circuits:['west-high','east-high'],gems:[[237,365,0],[424,390,0],[724,365,1],[535,390,1]]}),
 relayMap({id:'motion-counterweight',seconds:230,center:350,
  hint:'火仔用箱壓低配重板，冰仔乘台開左閘，再由兩側台階會合。',
  platforms:[ledge(274,470,18,30),shaft(701,466,362,95,'balance'),ledge(362,430,93),ledge(529,430,65)],
  bodies:[box(113)],plates:[plate('balance',0,250,500,'box')],
  levers:[leverAt('east-high',1,746,338)],circuits:['balance','east-high'],
  gems:[[84,478,0],[419,325,0],[744,338,1],[536,325,1]]}),
 relayMap({id:'motion-return',seconds:250,center:345,
  hint:'交換橋掣，到移動台盡頭開對面內閘。避開光閘先返中央。',
  platforms:[ledge(95,431,100),ledge(765,431,100),
    {...ledge(148,416,92),moving:true,from:148,to:235,control:'east-start'},
    {...ledge(623,416,92),moving:true,from:623,to:710,control:'west-start'},
    ledge(367,423,80),ledge(532,423,63)],
  levers:[leverAt('west-start',0,108,478),leverAt('east-start',1,834,478),leverAt('west-high',0,294,390),leverAt('east-high',1,646,390)],
  hazards:[{x:397,y:441,w:14,h:59},{x:551,y:441,w:14,h:59}],
  circuits:['west-high','east-high'],gems:[[289,388,0],[426,322,0],[652,388,1],[534,322,1]]}),
 relayMap({id:'light-turn',seconds:220,center:427,
  hint:'轉動各自嘅鏡面，把光照向接收器，先打開對方嘅門。',
  platforms:[ledge(127,425,151),ledge(675,425,156)],
  lights:[beam('west',[112,401],[212,282],[[212,401,0]]),beam('east',[646,401],[743,282],[[743,401,1]])],
  circuits:['west','east'],gems:[[164,401,0],[424,403,0],[791,401,1],[533,403,1]]}),
 relayMap({id:'light-pair',seconds:250,center:352,
  hint:'先移走擋住光路嘅箱，兩翼各自轉鏡。中央兩邊都有階梯。',
  platforms:[ledge(210,421,102),ledge(659,421,113),ledge(367,426,79),ledge(532,426,62)],
  bodies:[box(143)],lights:[beam('west',[86,474],[193,368],[[193,474,0]]),beam('east',[635,397],[715,271],[[715,397,1]])],
  circuits:['west','east'],gems:[[260,398,0],[424,327,0],[715,397,1],[534,327,1]]}),
 relayMap({id:'light-reunion',seconds:285,center:282,
  hint:'兩翼各有兩塊鏡，要接通兩段光路。過閘後登上中央高台，一齊到出口。',
  platforms:[ledge(111,430,160),ledge(216,360,102),ledge(687,430,151),ledge(621,360,104),
    ledge(349,431,92),ledge(370,354,94),ledge(541,354,58),ledge(539,431,58)],
  lights:[beam('west',[108,408],[306,337],[[250,408,0],[250,337,0]]),
    beam('east',[626,407],[838,337],[[708,407,1],[708,337,1]])],
  pools:[{x:443,w:66,type:2}],circuits:['west','east'],
  gems:[[287,337,0],[426,259,0],[658,337,1],[532,259,1]]}),
];
const temples=maps.map(m=>[m.id]);
function temple(n){
 const m=structuredClone(maps[n-1]);
 m.spawns=m.start.map(([x,y])=>({x,y}));m.exits=m.end.map(([x,y])=>({x,y}));
 m.gems=m.gems.map(([x,y,type])=>({x,y,type,got:false}));
 for(const key of ['levers','bodies','pools','hazards','docks','lights'])m[key]??=[];
 m.light=m.lights[0];m.signals={};m.clock=0;return m;
}
function traceLight(m){for(const l of m.lights??(m.light?[m.light]:[]))traceCircuit(l,m.bodies)}
function traceCircuit(l,bodies){
 let [x,y]=l.source,dx=1,dy=0;l.segments=[];l.lit=false;
 for(let k=0;k<=l.mirrors.length;k++){
  let hit=null,dist=dx>0?960-x:dx<0?x:dy>0?500-y:y;
  for(const object of [...l.mirrors,{x:l.receiver[0],y:l.receiver[1],receiver:true}]){
   const along=(object.x-x)*dx+(object.y-y)*dy,cross=(object.x-x)*dy-(object.y-y)*dx;
   if(along>.01&&along<dist&&Math.abs(cross)<2){dist=along;hit=object}
  }
  for(const b of bodies){const near=dx>0?b.x-x:dx<0?x-b.x-b.w:dy>0?b.y-y:y-b.y-b.h;
   const far=near+(dx?b.w:b.h);
   if(far>=0&&near<dist&&(dx?y>=b.y&&y<=b.y+b.h:x>=b.x&&x<=b.x+b.w)){dist=Math.max(0,near);hit=null}}
  const nx=x+dx*dist,ny=y+dy*dist;l.segments.push([x,y,nx,ny]);x=nx;y=ny;
  if(!hit)break;if(hit.receiver){l.lit=true;break}
  ;[dx,dy]=hit.turned?[-dy,-dx]:[dy,dx];
 }
}
function stepPlatforms(map,players,dt){
 map.clock=(map.clock||0)+dt;
 for(const p of map.platforms){
  const x=p.x,y=p.y;
  if(p.lift){
   const on=map.id?map.signals[p.control]:map.levers.some(l=>l.id==='needs'&&l.on);
   const base=p.base??425,top=p.top??350;
   if(p.cycle&&on){
    const travel=(base-top)/60, period=2*travel+1.4;
    p.liftClock=((p.liftClock??0)+dt)%period;
    const t=p.liftClock;
    const target=base-Math.min(travel,Math.max(0,t-.7),period-t)*60;
    p.y+=Math.max(-60*dt,Math.min(60*dt,target-p.y));
   }else{
    p.liftClock=0;
    const target=on?top:base;
    p.y+=Math.max(-60*dt,Math.min(60*dt,target-p.y));
   }
  }
  if(p.moving&&map.signals[p.control]){
   p.travel=(p.travel||0)+dt*92;
   const span=p.to-p.from;p.x=p.from+span-Math.abs(p.travel%(2*span)-span);
  }
  p.dx=0;
  for(const a of players)if(a.grounded&&Math.abs(a.y+a.h-y)<3&&a.x+a.w>x&&a.x<x+p.w){a.y+=p.y-y;a.x+=p.x-x}
 }
}
function signals(map,players){
 const state={};
 for(const l of map.levers)state[l.id]=l.on;
 for(const d of map.docks)state[d.id]=map.bodies.some(b=>b.dock===d.id&&b.locked);
 for(const d of map.doors)for(const p of d.plates)state[p.id]=platePressed(map,players,p);
 for(const l of map.lights)state[l.id]=l.lit;
 if(map.id==='motion-counterweight')state.lower=state.weight&&!state.return;
 map.signals=state;return state;
}
function savePoint(map,players,score){return structuredClone({map,players,score})}
function onPlate(p,plate){return !plate.kind&&p.grounded&&Math.abs(p.y+(p.h??34)-(plate.y??500))<4&&Math.abs(p.x+14-plate.x)<20&&p.type===plate.type}
function update(map,players){traceLight(map);if(map.id){const state=signals(map,players);for(const d of map.doors)d.open=d.requires.every(id=>state[id])&&(!d.any.length||d.any.some(id=>state[id]));return map.doors}for(const d of map.doors){if(d.mode==='relay'){d.open=map.levers[1].on||players.some(p=>p.type===0&&Math.hypot(p.x+14-map.levers[0].x,p.y+17-map.levers[0].y)<55);map.levers[0].on=d.open;continue}d.open=d.mode==='lever'?d.requires.every(id=>map.levers.find(l=>l.id===id)?.on):d.plates.some(a=>platePressed(map,players,a));if(d.weight)d.open=d.open&&map.bodies.some(b=>b.locked);if(d.light)d.open=d.open&&map.light.lit}return map.doors}
function checkpoint(map,players){if(map.id){if(!players.every(p=>p.grounded))return;for(const d of map.doors){if(d.roomReady||!d.open)continue;const passed=players.some((p,i)=>map.spawns[i].x<d.x?p.x>d.x+d.w+3:p.x+p.w<d.x-3);if(passed){d.roomReady=true;for(const p of players)p.checkpoint=p.x}}return}for(const d of map.doors){if(!d.roomReady&&players.every(p=>p.x>d.x+d.w+3)){d.roomReady=true;for(const p of players){let x=(d.plates[1]?.x??d.x+52)+24+p.type*8;p.checkpoint=Math.min(910,x)}}}}
function doorCollision(p,doors,oldX){for(const d of doors){if(d.open||p.y+p.h<=d.y||p.y>=d.y+d.h)continue;if(p.x+p.w>d.x&&p.x<d.x+d.w){p.x=oldX+p.w/2<d.x+d.w/2?d.x-p.w:d.x+d.w;p.vx=0}}}
function nearbyLever(map,p,touch=false){
 let result=null;
 for(const lever of map.levers||[]){
  if(lever.type!==p.type||(map.id&&lever.id==='bridge'))continue;
  const dx=Math.abs(p.x+14-lever.x),dy=Math.abs(p.y+17-lever.y);
  const distance=Math.hypot(dx,dy);
  if(touch?(dx>34||dy>38):distance>=55)continue;
  if(!result||distance<result.distance)result={kind:'lever',object:lever,distance};
 }
 return result;
}
function nearbyControl(map,p){
 let result=nearbyLever(map,p);
 for(const light of map.lights??(map.light?[map.light]:[])){
  for(const mirror of light.mirrors){
   if(mirror.type!==p.type)continue;
   const distance=Math.hypot(p.x+14-mirror.x,p.y+17-mirror.y);
   if(distance<42&&(!result||distance<result.distance))result={kind:'mirror',object:mirror,distance};
  }
 }
 return result;
}
function lever(map,p,control=nearbyControl(map,p)){
 if(!control)return false;
 if(control.kind==='mirror'){
  control.object.turned=!control.object.turned;
  traceLight(map);
 }else control.object.on=!control.object.on;
 return true;
}
// Movable objects are authoritative map state. No DOM or wall-clock dependencies.
function body(id,kind,x,y,w,h){return {id,kind,x,y,w,h,startX:x,startY:y,vx:0,vy:0,angle:0,locked:false,dock:null}}
const overlap=(a,b)=>a.x<b.x+b.w-.001&&a.x+a.w>b.x+.001&&a.y<b.y+b.h-.001&&a.y+a.h>b.y+.001;
function onWeight(b,plate){return (!plate.kind||b.kind===plate.kind)&&Math.abs(b.y+b.h-(plate.y??500))<2&&Math.abs(b.x+b.w/2-plate.x)<19}
function platePressed(map,players,plate){return players.some(p=>onPlate(p,plate))||(map.bodies||[]).some(b=>onWeight(b,plate))}
function dockBody(map,b,oldX=b.x){if(b.kind!=='boulder'||b.locked||Math.abs(b.y+b.h-500)>2)return false;const a=oldX+b.w/2,z=b.x+b.w/2;const d=map.docks?.find(d=>Math.abs(z-d.x)<8||(a-d.x)*(z-d.x)<0);if(!d)return false;const seat={...b,x:d.x-b.w/2};if(map.bodies.some(other=>other!==b&&overlap(seat,other))||map.doors.some(door=>!door.open&&overlap(seat,door)))return false;b.x=seat.x;b.vx=b.vy=0;b.locked=true;b.dock=d.id;return true}
function moveBody(map,b,amount,players=[],actor=null){if(b.locked||!amount)return 0;const old=b.x;let next=Math.max(12,Math.min(948-b.w,old+amount));const obstacles=[...map.platforms,...map.doors.filter(d=>!d.open),...map.bodies.filter(o=>o!==b),...players.filter(p=>p!==actor&&!(p.grounded&&Math.abs(p.y+p.h-b.y)<2))];for(const o of obstacles){if(b.y>=o.y+o.h-.01||b.y+b.h<=o.y+.01)continue;if(amount>0&&old+b.w<=o.x+.01&&next+b.w>o.x)next=Math.min(next,o.x-b.w);if(amount<0&&old>=o.x+o.w-.01&&next<o.x+o.w)next=Math.max(next,o.x+o.w)}b.x=next;const moved=b.x-old;b.angle+=(b.kind==='boulder'?moved/(b.w/2):0);dockBody(map,b,old);return b.x-old}
function pushPlayer(map,p,oldX,players,dt){const dx=p.x-oldX;for(const b of map.bodies||[]){if(!overlap(p,b))continue;const right=dx>0||(dx===0&&oldX+p.w/2<b.x+b.w/2);const amount=right?p.x+p.w-b.x:p.x-(b.x+b.w);const moved=Math.abs(dx)>.001?moveBody(map,b,amount,players,p):0;b.vx=b.locked?0:b.kind==='boulder'&&dt?moved/dt*.45:0;p.x=right?b.x-p.w:b.x+b.w;p.vx=moved&&dt?moved/dt:0}}
function stepBodies(map,players,dt){for(const b of map.bodies||[]){if(b.locked)continue;const oldX=b.x,oldY=b.y,standing=players.filter(p=>p.grounded&&Math.abs(p.y+p.h-b.y)<2&&p.x+p.w>b.x&&p.x<b.x+b.w);const dx=moveBody(map,b,b.vx*dt,players);b.vx=Math.abs(dx)<.0001?0:b.vx*Math.exp(-7*dt);b.vy=Math.min(700,b.vy+1280*dt);b.y+=b.vy*dt;for(const o of [...map.platforms,...map.bodies.filter(o=>o!==b)]){if(b.vy>=0&&oldY+b.h<=o.y+.5&&b.y+b.h>=o.y&&b.x+b.w>o.x+.1&&b.x<o.x+o.w-.1){b.y=o.y-b.h;b.vy=0;break}}for(const p of standing){p.x+=b.x-oldX;p.y+=b.y-oldY}if(b.y>600){b.x=b.startX;b.y=b.startY;b.vx=b.vy=0;b.angle=0}dockBody(map,b,oldX)}}
function landOnBodies(map,p,oldY){for(const b of map.bodies||[]){if(p.x+p.w<=b.x+.1||p.x>=b.x+b.w-.1)continue;if(p.vy>=0&&oldY+p.h<=b.y+1&&p.y+p.h>=b.y){p.y=b.y-p.h;p.vy=0;p.grounded=true;p.support=b.id;break}if(p.vy<0&&oldY>=b.y+b.h-.5&&p.y<b.y+b.h){p.y=b.y+b.h;p.vy=0}}}
function playerNames(raw){const defaults=['火仔','冰仔'];return defaults.map((d,i)=>{const value=Array.isArray(raw)&&typeof raw[i]==='string'?raw[i]:'';return Array.from(value.replace(/[<>\x00-\x1f\x7f]/g,'').trim()).slice(0,16).join('')||d})}
return {stepPlatforms,playerNames,level,temple,temples,traceLight,savePoint,onPlate,onWeight,platePressed,update,checkpoint,doorCollision,nearbyLever,nearbyControl,lever,moveBody,pushPlayer,stepBodies,landOnBodies,dockBody};
});

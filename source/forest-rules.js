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
const maps=[
 {id:'weight-box',seconds:180,hint:'火仔推箱登上左邊高台，踩住上層壓板。冰仔由下路過閘，拉桿接返火仔。',
  start:[[70,500],[115,500]],end:[[672,278],[725,278]],
  platforms:[floor(0,960),ledge(200,372,174),ledge(494,420,90),ledge(568,350,112),ledge(633,278,145)],
  bodies:[box(145)],doors:[gate(400,75,425,[],[plate('high',0,305,372)],['high','back'])],levers:[leverAt('back',1,536,478)],
  gems:[[274,340,0],[690,253,0],[470,475,1],[603,326,1]],goals:['back']},
 {id:'weight-stone',seconds:210,hint:'兩翼各有精靈。火仔將石球推入中央石槽，冰仔過閘登高台，拉桿開通右上出口。',
  start:[[60,500],[100,423]],end:[[782,260],[834,260]],
  platforms:[floor(0,960),ledge(55,423,98),ledge(155,350,116),ledge(514,427,97),ledge(614,353,147),ledge(721,278,85),ledge(770,260,140)],
  bodies:[rock(240)],docks:[socket(408)],doors:[gate(470,60,440,['socket']),gate(748,90,230,['wing'])],levers:[leverAt('wing',1,657,329)],
  pools:[{x:530,w:44,type:1}],gems:[[209,325,0],[491,474,0],[92,391,1],[660,322,1]],goals:['socket','wing']},
 {id:'weight-relay',seconds:240,hint:'左翼推箱壓板接橋，右翼推石鎖閘；兩人由各自工作區向中央集合。',
  start:[[65,500],[862,500]],end:[[454,315],[511,315]],
  platforms:[floor(0,356),floor(598,362),ledge(215,425,106),ledge(622,420,102),ledge(392,315,190),shaft(348,480,376,82,'crate'),ledge(553,354,70)],
  bodies:[box(134),rock(789)],docks:[socket(700)],doors:[gate(575,100,260,['socket']),gate(352,120,285,['crate'],[plate('crate',0,274,500,'box')])],
  levers:[leverAt('relay',1,632,398)],gems:[[243,397,0],[422,289,0],[750,475,1],[635,392,1]],goals:['crate','socket','relay']},
 {id:'motion-lift',seconds:210,hint:'火仔在下月台啟動升降台；冰仔乘台上去開高層閘，兩人再搭台會合。',
  start:[[90,500],[225,481]],end:[[672,252],[721,252]],
  platforms:[floor(0,364),floor(590,370),shaft(202,481,261,112,'motor'),ledge(307,269,205),ledge(493,320,118),ledge(594,252,176)],
  levers:[leverAt('motor',0,123,479),leverAt('upper',1,433,247)],doors:[gate(560,70,285,['upper'])],
  gems:[[140,477,0],[620,227,0],[358,246,1],[519,296,1]],goals:['motor','upper']},
 {id:'motion-counterweight',seconds:240,hint:'冰仔先登左井，火仔將箱推上配重板。左井升、右井降；冰仔到高台拉桿，右井再升起接應。',
  start:[[52,500],[260,478]],end:[[735,270],[790,270]],
  platforms:[floor(0,960),shaft(239,478,252,98,'weight'),ledge(344,253,142),ledge(471,317,107),shaft(587,266,473,106,'lower'),ledge(702,270,161)],
  bodies:[box(96)],levers:[leverAt('return',1,425,232)],doors:[gate(685,65,435,['return'],[plate('weight',0,179,500,'box')])],
  gems:[[174,476,0],[758,245,0],[377,228,1],[503,294,1]],goals:['weight','return']},
 {id:'motion-return',seconds:270,hint:'火仔拉桿啟動橫橋。冰仔經安全島避開週期光閘，到對岸解除返回路線。',
  start:[[64,500],[120,430]],end:[[796,421],[848,421]],
  platforms:[floor(0,242),floor(400,97),floor(704,256),ledge(74,430,106),{...ledge(203,437,99),moving:true,from:203,to:635,control:'ferry'},ledge(407,364,96),ledge(725,421,168)],
  levers:[leverAt('ferry',0,124,410),leverAt('shore',1,670,415)],doors:[gate(746,80,420,['shore'])],
  hazards:[{x:348,y:343,w:14,h:95},{x:569,y:322,w:14,h:115}],gems:[[94,402,0],[427,342,0],[456,472,1],[810,398,1]],goals:['shore','ferry']},
 {id:'light-turn',seconds:240,hint:'火仔在上層轉鏡，讓橫光向上照中接收器；冰仔從下層穿門，打開返回出口。',
  start:[[60,500],[120,500]],end:[[624,425],[679,425]],
  platforms:[floor(0,960),ledge(110,428,113),ledge(208,355,183),ledge(470,425,114),ledge(570,425,170)],
  lights:[beam('elbow',[172,329],[318,206],[[318,329,0]])],
  levers:[leverAt('reunion',1,524,476)],doors:[gate(410,92,408,['elbow']),gate(574,120,315,['reunion'])],
  pools:[{x:481,w:48,type:1}],gems:[[203,401,0],[317,330,0],[517,474,1],[650,399,1]],goals:['elbow','reunion']},
 {id:'light-pair',seconds:270,hint:'先移開地面光源前的箱。冰仔喺地面轉第一塊鏡，火仔登左翼轉第二塊；接通之後到右翼開門。',
  start:[[80,500],[363,500]],end:[[755,343],[813,343]],
  platforms:[floor(0,960),ledge(143,428,105),ledge(236,351,171),ledge(521,424,152),ledge(658,343,215)],
  bodies:[box(184)],lights:[beam('double',[98,473],[470,327],[[329,473,1],[329,327,0]])],
  doors:[gate(488,95,405,['double']),gate(702,85,310,['far'])],levers:[leverAt('far',1,603,400)],
  gems:[[170,401,0],[316,327,0],[348,473,1],[574,398,1]],goals:['double','far']},
 {id:'light-reunion',seconds:300,hint:'兩翼各自完成一道光路，開啟對方的內閘。穿過兩座鏡台，喺中央上層出口會合。',
  start:[[55,500],[858,500]],end:[[452,259],[503,259]],
  platforms:[floor(0,960),ledge(87,424,124),ledge(176,349,149),ledge(309,334,95),ledge(399,259,161),ledge(545,327,121),ledge(641,366,107),ledge(747,426,112)],
  lights:[beam('west',[99,325],[282,209],[[282,325,0]]),beam('east',[646,340],[717,227],[[717,340,1]])],
  doors:[gate(364,70,430,['east']),gate(598,70,430,['west'])],
  gems:[[193,324,0],[392,310,0],[815,400,1],[563,304,1]],goals:['east','west']}
];
const extraBeams = [[447,430,12,70],[565,392,12,108],[614,430,12,70],[539,235,12,82],[518,240,12,78],[790,352,12,68],[448,426,12,74],[564,356,12,68],[474,275,12,66]];
const temples=maps.map(m=>[m.id]);
function temple(n){
 const m=structuredClone(maps[n-1]);
 m.spawns=m.start.map(([x,y])=>({x,y}));m.exits=m.end.map(([x,y])=>({x,y}));
 m.gems=m.gems.map(([x,y,type])=>({x,y,type,got:false}));
 for(const key of ['levers','bodies','pools','hazards','docks','lights'])m[key]??=[];
 const [x,y,w,h]=extraBeams[n-1];
 m.hazards.push({x,y,w,h,borrowedRoute:true});
 if(!m.hazards.some(hazard=>hazard.borrowedRoute)&&m.hazards.length)m.hazards.at(-1).borrowedRoute=true;
 m.finance={temple:Math.floor((n-1)/3),spent:false,usedReserve:false,savedReserve:false};
 m.light=m.lights[0];m.signals={};m.clock=0;return m;
}
function budgetStatus(map,players,elapsed){
 const account=map.finance;
 if(!account)return null;
 const essentials=players.filter(player=>player.gems>=1).length;
 const saved=players.filter(player=>player.gems>=2).length;
 return {essentials,saved,canSpend:essentials===2&&!account.spent&&!account.savedReserve&&(account.temple!==1||elapsed>=12),
  canSave:account.temple>0&&essentials===2&&!account.spent&&!account.usedReserve&&!account.savedReserve,
  pending:account.temple===1&&elapsed<12,reserve:!account.spent&&!account.usedReserve&&(account.savedReserve||(account.temple===2&&saved>0))};
}
function saveBudget(map,players,elapsed){
 if(!budgetStatus(map,players,elapsed)?.canSave)return false;
 map.finance.savedReserve=true;
 return true;
}
function spendBudget(map,players,elapsed){
 if(!budgetStatus(map,players,elapsed)?.canSpend)return false;
 map.finance.spent=true;
 // The base route, each role's switches and all victory signals remain intact.
 return true;
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
return {stepPlatforms,playerNames,level,temple,temples,budgetStatus,spendBudget,saveBudget,traceLight,savePoint,onPlate,onWeight,platePressed,update,checkpoint,doorCollision,nearbyLever,nearbyControl,lever,moveBody,pushPlayer,stepBodies,landOnBodies,dockBody};
});

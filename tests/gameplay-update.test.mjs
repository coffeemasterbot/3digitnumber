import test from 'node:test';import assert from 'node:assert/strict';
import {Room} from '../coop/room.mjs';import {airRoute} from '../source/runner-air.mjs';import Forest from '../source/forest-rules.js';
test('shared room validates two seats, reconnect, input sequence and one defuse clock',()=>{
 const room=new Room('A'),a=room.attach(()=>{},{},0),b=room.attach(()=>{},{},0);
 assert.throws(()=>room.attach(()=>{},{},0));const send=(p,type,seq,data={})=>room.input(p,{v:3,type,seq,...data},0);
 send(a,'ready',1);send(b,'ready',1);assert.equal(room.bots.length,4);send(a,'answer',2,{answer:0});assert.equal(room.verified,false);
 for(const p of [a,b]){p.x=0;p.z=-13;send(p,'check',3);send(p,'answer',4,{answer:0});send(p,'input',5,{yaw:0,pitch:0,f:0,r:0,use:true});send(p,'input',5,{yaw:0,pitch:0,f:0,r:1})}
 room.step(.05,50);assert.equal(room.progress,.05);room.detach(a,60);assert.equal(a.input.use,false);assert.throws(()=>room.attach(()=>{},{token:'wrong'},65));assert.equal(room.attach(()=>{},{token:a.token},70).id,a.id);
});
test('pogo peaks once and flight warns before a zero-height landing',()=>{
 assert.equal(airRoute('pogo',1).height,5);assert.equal(airRoute('pogo',2).height,0);assert.equal(airRoute('jetpack',6.5).phase,'warning');assert.equal(airRoute('jetpack',8).remaining,0);
});
test('nine hand-authored temple routes have supported starts/exits and connected controls',()=>{
 const times=[180,210,240,210,240,270,240,270,300];
 const seen=new Set();
 for(let n=1;n<=9;n++){
  const m=Forest.temple(n);Forest.update(m,[]);assert.equal(m.seconds,times[n-1]);
  assert.ok(m.hazards.length > 0 && m.hazards.every(h=>h.w>0&&h.h>0));
  assert.equal(m.doors.every(door=>!door.open),true);
  for(const target of [...m.spawns,...m.exits])assert.ok(m.platforms.some(p=>p.y===target.y&&target.x>=p.x&&target.x<=p.x+p.w),m.id+' supported start/exit');
  const signals=new Set(Object.keys(m.signals));
  for(const id of [...m.goals,...m.doors.flatMap(d=>[...d.requires,...d.any]),...m.platforms.filter(p=>p.control).map(p=>p.control)])assert.ok(signals.has(id),m.id+' wired '+id);
  assert.deepEqual([0,1].map(type=>m.gems.filter(g=>g.type===type).length),[2,2]);
  seen.add(JSON.stringify(m.platforms));
 }assert.equal(seen.size,9);
});
test('Fire holds the first temple gate until Ice opens its return path',()=>{
 const map=Forest.temple(1);
 const fire={type:0,x:291,y:338,h:34,grounded:true};
 const ice={type:1,x:522,y:461,h:34,grounded:true};
 Forest.update(map,[fire,ice]);assert.equal(map.doors[0].open,true);
 fire.grounded=false;Forest.update(map,[fire,ice]);assert.equal(map.doors[0].open,false);
 assert.ok(Forest.lever(map,ice));Forest.update(map,[fire,ice]);
 assert.equal(map.doors[0].open,true);
});
test('moving bridge transports a passenger and checkpoint isolates the moving state',()=>{
 const m=Forest.temple(6),ferry=m.platforms.find(p=>p.moving),rider={x:ferry.x+15,y:ferry.y-34,h:34,w:28,grounded:true};
 m.levers.find(lever=>lever.id===ferry.control).on=true;Forest.update(m,[]);const saved=Forest.savePoint(m,[rider],2);
 for(let i=0;i<100;i++)Forest.stepPlatforms(m,[rider],.01);
 assert.ok(ferry.x>210);assert.equal(rider.x,ferry.x+15);
 assert.equal(saved.map.platforms.find(p=>p.moving).x,203);assert.equal(saved.players[0].x,218);
});
test('two reflected segments need both mirror turns and a clear path past the crate',()=>{
 const m=Forest.temple(8);m.light.mirrors.forEach(a=>a.turned=true);
 Forest.update(m,[]);assert.equal(m.light.lit,false);assert.equal(m.light.segments[0][2],m.bodies[0].x);
 Forest.moveBody(m,m.bodies[0],210);Forest.update(m,[]);assert.ok(m.doors[0].open);assert.equal(m.light.segments.length,3);
 const final=Forest.temple(9);final.lights[0].mirrors[0].turned=true;
 Forest.update(final,[]);assert.deepEqual(final.lights.map(l=>l.lit),[true,false]);assert.deepEqual(final.doors.map(d=>d.open),[false,true]);
});
test('1v1 room plays without bots, scores three rounds, and can start a fresh match',()=>{
 const room=new Room('DUEL','duel'),a=room.attach(()=>{},{name:'One'},0),b=room.attach(()=>{},{name:'Two'},0);
 const send=(p,type,data={})=>room.input(p,{v:3,seq:p.seq+1,type,...data},0);
 for(let i=1;i<=3;i++){
  send(a,'ready');send(b,'ready');
  assert.equal(room.bots.length,0);
  assert.equal(b.hp,100);
  a.x=b.x=0;a.z=-13;b.z=-15;
  send(a,'check');
  assert.equal(a.checked,false);
  b.hp=1;
  send(a,'input',{f:0,r:0,yaw:0,pitch:0,fire:true});
  room.step(.05,50);
  assert.equal(b.hp,0);
  assert.equal(room.phase,'result');
  assert.equal(room.wins[a.id],i);
 }
 assert.match(room.result,/贏咗成場/);
 send(a,'ready');send(b,'ready');
 assert.deepEqual(room.wins,{});
});
test('co-op launcher purchase, six shots, auto reload and friendly blast exclusion',()=>{
 const room=new Room('TEST'),a=room.attach(()=>{},{},0),b=room.attach(()=>{},{},0);
 const send=(p,type,data={})=>room.input(p,{v:3,seq:p.seq+1,type,...data},0);
 send(a,'ready');send(b,'ready');send(a,'buy',{item:'bazooka'});send(a,'buy',{item:'bazooka'});send(a,'equip',{weapon:'bazooka'});
 assert.equal(a.credits,0);assert.equal(a.ammo+a.reserves.bazooka,6);
 Object.assign(a,{x:0,z:12});Object.assign(b,{x:.5,z:9});
 Object.assign(room.bots[0],{x:0,z:9});Object.assign(room.bots[1],{x:1,z:9});
 send(a,'input',{f:0,r:0,yaw:0,pitch:0,fire:true});room.step(.05,50);
 assert.equal(room.projectiles.length,1);assert.equal(room.bots[0].hp,72);
 for(let i=0;i<3;i++)room.step(.05,100+i*50);
 assert.equal(room.impacts.length,1);
 assert.equal(room.bots[0].hp,0);assert.ok(room.bots[1].hp<72);assert.equal(b.hp,100);assert.ok(a.hp<100);
 assert.equal(a.ammo,0);assert.equal(a.ammo+a.reserves.bazooka,5);const firstAuto=a.reload;assert.ok(firstAuto>2&&firstAuto<2.5);send(a,'reload');assert.equal(a.reload,firstAuto);
 for(let shot=0;shot<5;shot++){for(let t=0;t<52;t++)room.step(.05,100)}
 assert.equal(a.ammo+a.reserves.bazooka,0);assert.equal(a.ammo,0);assert.equal(a.reload,0);
});

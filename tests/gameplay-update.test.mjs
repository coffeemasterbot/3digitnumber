import test from 'node:test';import assert from 'node:assert/strict';
import {Room} from '../coop/room.mjs';import {airRoute} from '../source/runner-air.mjs';import Forest from '../source/forest-rules.js';
test('shared room validates two seats, reconnect, input sequence and one defuse clock',()=>{
 const room=new Room('A'),a=room.attach(()=>{},{},0),b=room.attach(()=>{},{},0);
 assert.throws(()=>room.attach(()=>{},{},0));const send=(p,type,seq,data={})=>room.input(p,{v:1,type,seq,...data},0);
 send(a,'ready',1);send(b,'ready',1);assert.equal(room.bots.length,4);send(a,'answer',2,{answer:0});assert.equal(room.verified,false);
 for(const p of [a,b]){p.x=0;p.z=-13;send(p,'check',3);send(p,'answer',4,{answer:0});send(p,'input',5,{yaw:0,pitch:0,f:0,r:0,use:true});send(p,'input',5,{yaw:0,pitch:0,f:0,r:1})}
 room.step(.05,50);assert.equal(room.progress,.05);room.detach(a,60);assert.equal(a.input.use,false);assert.throws(()=>room.attach(()=>{},{token:'wrong'},65));assert.equal(room.attach(()=>{},{token:a.token},70).id,a.id);
});
test('pogo peaks once and flight warns before a zero-height landing',()=>{
 assert.equal(airRoute('pogo',1).height,5);assert.equal(airRoute('pogo',2).height,0);assert.equal(airRoute('jetpack',6.5).phase,'warning');assert.equal(airRoute('jetpack',8).remaining,0);
});
test('temple mirror circuit reflects both turns and checkpoint copies mutable state',()=>{
 const m=Forest.temple(8);Forest.traceLight(m);assert.equal(m.light.lit,false);
 m.light.mirrors.forEach(a=>a.turned=true);Forest.traceLight(m);assert.equal(m.light.lit,true);
 const point=Forest.savePoint(m,[{x:42,y:155}],4);m.bodies[0].x=600;m.gems[0].got=true;
 assert.notEqual(point.map.bodies[0].x,600);assert.ok(!point.map.gems[0].got);
});

test('all nine temples let the second player release the first, with independent weight and light locks',()=>{
 for(let stage=1;stage<=9;stage++){
  const map=Forest.temple(stage),[bridge,returnLever]=map.levers;
  const fire={type:0,x:0,y:460},ice={type:1,x:80,y:460};
  const step=()=>Forest.update(map,[fire,ice]);
  step();assert.equal(map.doors[0].open,false);
  fire.x=bridge.x-14;fire.y=bridge.y-17;step();assert.equal(map.doors[0].open,true);
  ice.x=returnLever.x-14;ice.y=returnLever.y-17;
  assert.ok(Forest.lever(map,ice),'return switch in stage '+stage);
  fire.x=0;step();assert.ok(map.doors[0].open,'return route in stage '+stage);
  if(map.doors[1].weight){assert.equal(map.doors[1].open,false);map.bodies[1].locked=true}
  if(map.light){assert.equal(map.doors[1].open,false);map.light.mirrors.forEach(m=>m.turned=true)}
  step();assert.ok(map.doors[1].open,'exit in stage '+stage);
 }
});

test('co-op launcher purchase, three shots, reload lock and friendly blast exclusion',()=>{
 const room=new Room('TEST'),a=room.attach(()=>{},{},0),b=room.attach(()=>{},{},0);
 const send=(p,type,data={})=>room.input(p,{v:1,seq:p.seq+1,type,...data},0);
 send(a,'ready');send(b,'ready');send(a,'buy',{item:'bazooka'});send(a,'buy',{item:'bazooka'});send(a,'equip',{weapon:'bazooka'});
 assert.equal(a.credits,0);assert.equal(a.rockets,3);
 Object.assign(a,{x:0,z:12});Object.assign(b,{x:.5,z:9});
 Object.assign(room.bots[0],{x:0,z:9});Object.assign(room.bots[1],{x:1,z:9});
 send(a,'input',{f:0,r:0,yaw:0,pitch:0,fire:true});room.step(.05,50);
 assert.equal(room.bots[0].hp,0);assert.ok(room.bots[1].hp<72);assert.equal(b.hp,100);assert.ok(a.hp<100);
 assert.equal(a.ammo,0);assert.equal(a.rockets,2);send(a,'reload');assert.equal(a.reload,2.5);
 for(let shot=0;shot<2;shot++){for(let t=0;t<52;t++)room.step(.05,100);send(a,'reload')}
 assert.equal(a.rockets,0);assert.equal(a.ammo,0);assert.equal(a.reload,0);
});

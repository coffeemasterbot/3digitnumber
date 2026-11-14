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

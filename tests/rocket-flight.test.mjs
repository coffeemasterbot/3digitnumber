import test from 'node:test';
import assert from 'node:assert/strict';
import { launchRocket, stepRocket, impactDamage } from '../source/fps/rocket.mjs';

const launch=(height=1.55)=>launchRocket('player',{x:0,y:height,z:0},{x:0,y:0,z:-1},0);
const wall={x:0,z:-4,w:6,h:2,d:.1};
const bot={id:0,x:0,z:-7,hp:120};

test('sweep picks the nearest solid, including thin cover, and explodes once',()=>{
 const shot=launch();
 assert.equal(stepRocket(shot,.1,[wall],[bot]),null);
 assert.ok(Math.abs(shot.position.z+1.8)<1e-8);
 const hit=stepRocket(shot,.5,[wall],[bot]);
 assert.equal(hit.direct,null);
 assert.ok(Math.abs(hit.position.z+3.83)<1e-8);
 assert.equal(impactDamage(hit,bot,[wall]),0);
 assert.equal(stepRocket(shot,1,[wall],[bot]),null);
});
test('direct damage, nearby splash and owner cap use the same 3D impact',()=>{
 const hit=stepRocket(launch(),1,[],[bot]);
 assert.equal(hit.direct,0);assert.equal(impactDamage(hit,bot,[]),220);
 assert.equal(impactDamage(hit,{x:0,z:hit.position.z,y:1.55},[],true),50);
 assert.equal(impactDamage(hit,{id:1,x:0,z:hit.position.z,y:6.1},[]),0);
 assert.equal(impactDamage(hit,{id:1,...hit.position},[]),160);
 assert.equal(impactDamage(hit,{id:1,...hit.position,x:hit.position.x+4.5},[]),0);
 const amount=impactDamage(hit,{id:1,x:1,z:-7},[]);
 assert.ok(amount>100&&amount<160);
});
test('overhead flight clears cover and expires at maximum range',()=>{
 const shot=launch(3);
 assert.equal(stepRocket(shot,.8,[wall],[bot]),null);
 const hit=stepRocket(shot,3,[wall],[bot]);
 assert.equal(hit.direct,null);assert.equal(hit.position.z,-55);
 assert.ok(!shot.active&&shot.exploded);
});

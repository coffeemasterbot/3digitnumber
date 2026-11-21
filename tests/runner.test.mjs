import{test}from'node:test';import assert from'node:assert/strict';import{obstacleHit,travelPoints,POWER_DURATION,canSpawnObstacle,routeSegment,ROUTE_COUNT,trainSupport,overlapsAirCorridor}from'../source/runner-rules.mjs';
import{airCoinRows, airRoute, forwardMotion}from'../source/runner-air.mjs';
test('Train collisions respect boot jump height for stationary and moving trains',()=>{for(const type of ['moving','block']){const o={type,lane:0,z:0};assert.ok(obstacleHit(o,0,0,.05,false));assert.equal(obstacleHit(o,0,0,3.2,false),false);assert.equal(obstacleHit(o,2,0,.05,false),false);assert.equal(obstacleHit(o,0,10,.05,false),false)}});
test('Sliding and jumping avoid appropriate financial barriers',()=>{assert.equal(obstacleHit({type:'slide',lane:0,z:0},0,0,0,true),false);assert.ok(obstacleHit({type:'slide',lane:0,z:0},0,0,0,false));assert.equal(obstacleHit({type:'jump',lane:0,z:0},0,0,1,false),false)});
test('Temporary double item changes travel score only',()=>{assert.equal(travelPoints(100,2),200);assert.equal(travelPoints(100),100);assert.ok(Object.values(POWER_DURATION).every(x=>x>0&&x<20))});

test('adjacent linked cars share a roof seam and moving services reserve their projected path',()=>{
 const train={type:'moving',lane:0,z:-100};
 assert.equal(canSpawnObstacle([train],{type:'slide',lane:0,z:-60}),false);
 assert.equal(canSpawnObstacle([train],{type:'jump',lane:0,z:-150}),true);
 const cars=[0,-8,-16].map(z=>({type:'block',variant:'car',lane:2,z:z-60}));
 assert.ok(canSpawnObstacle(cars.slice(0,2),cars[2]));
 assert.equal(canSpawnObstacle(cars,{...cars[2],z:-69}),false);
});
test('seven segments keep an unobstructed ground lane and valid car seams',()=>{
 for(let n=0;n<ROUTE_COUNT;n++){
  for(const speed of [10,30]){
   const segment=routeSegment(n,-130,0,speed);
   assert.ok([-2,0,2].some(lane=>segment.every(o=>o.lane!==lane)));
   segment.forEach((o,i)=>assert.ok(canSpawnObstacle(segment.slice(0,i),o,0,speed),'segment '+n));
  }
 }
});
test('normal forward motion climbs each ramp, crosses contiguous decks, and returns to ground',()=>{
 for(const stage of [2,6])for(const speed of [10,30]){
  const route=routeSegment(stage,-30,0,speed).filter(o=>o.lane===0);
  let previous=0,feet=0,highest=0;
  for(let time=0;time<70/speed;time+=.05){
   const z=previous-speed*.05;
   const height=Math.max(0,...route.map(o=>trainSupport(o,0,z,feet,previous)));
   feet=height;highest=Math.max(highest,height);
   assert.ok(route.every(o=>!obstacleHit(o,0,z,feet,false)));
   if(z<=-30&&z>=-45)assert.ok(feet>=2.15);
   previous=z;
  }
  assert.equal(highest,3.12);assert.equal(feet,0);
 }
});

test('air coins start during takeoff and match the player at normal and high speed',()=>{
 for(const speed of [10,30]){
  const rows=airCoinRows('jetpack',0,speed,.1,30);
  assert.equal(rows[0].ahead,forwardMotion(speed,.35,.1,30).distance);
  assert.equal(rows[0].y,airRoute('jetpack',.35).height+1.35);
  assert.ok(rows.at(-1).ahead<forwardMotion(speed,8,.1,30).distance);
 }
});

test('safe landing corridor considers an approaching service and the back of a car',()=>{
 const corridor={near:50,far:160,duration:9.5};
 assert.ok(overlapsAirCorridor({type:'block',variant:'car',z:-45},corridor));
 assert.ok(overlapsAirCorridor({type:'moving',z:-215},corridor));
 assert.ok(!overlapsAirCorridor({type:'block',variant:'car',z:-215},corridor));
 assert.ok(!overlapsAirCorridor({type:'jump',z:-35},corridor));
});

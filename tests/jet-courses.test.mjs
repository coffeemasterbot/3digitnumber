import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buildSync} from '../detailed-games/node_modules/esbuild/lib/main.js';

const bundle=buildSync({entryPoints:['detailed-games/jet/src/utils/courses.ts'],bundle:true,format:'esm',write:false});
const {COURSES,normalizeSeed,seededCourse,coursePassed,completedCourses,courseHazardHits,courseCoinLine}=await import(
  'data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].contents).toString('base64'));

test('eight authored flight courses use physical time, resources and reserve objectives',()=>{
  assert.equal(COURSES.length,8);
  assert.equal(new Set(COURSES.map(course=>course.id)).size,8);
  for(const course of COURSES){
    assert.equal(coursePassed(course,course.seconds*60-1,course.coins,0),false);
    assert.equal(coursePassed(course,course.seconds*60,course.coins,0),true);
    assert.ok(course.encounters.every(([time])=>time<course.seconds));
  }
  const reserve=COURSES.at(-1);
  assert.equal(coursePassed(reserve,reserve.seconds*60,12,100),false);
  assert.equal(coursePassed(reserve,reserve.seconds*60,11,0),false);
});

test('flight deposits keep seven bounded, repeatable coins in authored formations',()=>{
  const layout=(code)=>seededCourse(code).deposits.map(([,zone],i)=>courseCoinLine(zone,i,code));
  assert.deepEqual(layout('HARBOUR-8'),layout('HARBOUR-8'));
  const shapes = new Set();
  for(const coins of layout('HARBOUR-8')){
    assert.equal(coins.length,7);
    for(const coin of coins)assert.ok(coin.y>=65&&coin.y+coin.height<=442);
    shapes.add(coins.map(coin=>[coin.x-coins[0].x,coin.y-coins[0].y].join(',')).join('/'));
  }
  assert.equal(shapes.size,4);
});

test('teleport markers move away from the rider and retain a dangerous destination',async()=>{
  const result=buildSync({entryPoints:['detailed-games/jet/src/utils/teleport.ts'],bundle:true,format:'esm',write:false});
  const {nextTeleportHeight,getTeleportPreview,TELEPORT_PREVIEW_TICKS}=await import(
    'data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].contents).toString('base64'));
  const rider={x:80,y:250,width:44,height:45};
  const first=nextTeleportHeight(rider,undefined,()=>0);
  const next=nextTeleportHeight(rider,first,()=>0);
  assert.ok(Math.abs(first-next)>=24);
  assert.ok(Math.abs(next-rider.y)>=24);
  assert.equal(TELEPORT_PREVIEW_TICKS,24);
  assert.deepEqual(getTeleportPreview(rider,[],first),{y:first,safe:true});
  assert.deepEqual(getTeleportPreview(rider,[{...rider,y:first,active:true}],first),{y:first,safe:false});
});

test('shareable codes are deterministic and a spent gate has no collision',()=>{
  assert.equal(normalizeSeed(' harbor-3 '),'HARBOR-3');
  assert.deepEqual(seededCourse('harbor-3'),seededCourse('HARBOR-3'));
  assert.notDeepEqual(seededCourse('harbor-3').encounters,seededCourse('city-5').encounters);
  assert.deepEqual(completedCourses({getItem:()=>JSON.stringify(['warning','warning','unknown'])}),['warning']);
  const box={x:0,y:0,width:20,height:20};
  assert.equal(courseHazardHits(box,{...box,hazard:'gate',travel:80}),false);
  assert.equal(courseHazardHits(box,{...box,hazard:'gate',travel:30}),true);
});

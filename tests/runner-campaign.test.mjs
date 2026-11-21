import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,RUNNER_MISSIONS,normalizeSeed,runnerLaunch,runnerCourse,runnerDistrict,
  runnerGoal,readExpeditions,expeditionResult,EXPEDITION_KEY} from '../source/runner-campaign.mjs';
import {ROUTE_SPACING,canSpawnObstacle,trainGeometry} from '../source/runner-rules.mjs';

test('thirty authored running modules preserve a clear lane and nonoverlapping trains', () => {
  assert.equal(COURSES.length,30);
  assert.equal(new Set(COURSES.map(course=>course.id)).size,30);
  for(const {slots,id} of COURSES){
    assert.ok([-2,0,2].some(lane=>slots.every(slot=>slot[0]!==lane)),id);
    const placed=[];
    for(const [lane,offset,type,variant] of slots){
      assert.ok(offset<ROUTE_SPACING-13,id);
      const obstacle={lane,z:-30-offset-(type==='moving'?27:0),type,variant};
      assert.ok(canSpawnObstacle(placed,obstacle),id);
      if(type==='block'&&variant==='rise'){
        const prior=placed.findLast(item=>item.lane===lane);
        assert.equal(prior.variant,'low',id);
        const bottom=trainGeometry(prior.type,prior.variant);
        const upper=trainGeometry(type,variant);
        assert.equal(prior.z+bottom.rear,obstacle.z+upper.front+upper.rampLength,id);
      }
      placed.push(obstacle);
    }
  }
});

test('seeded routes, missions and visible districts follow the selected mode', () => {
  assert.equal(normalizeSeed(' harbour-8 '),'HARBOUR-8');
  assert.equal(normalizeSeed('x / y'),null);
  const itinerary=seed=>Array.from({length:20},(_,segment)=>runnerCourse(runnerLaunch('seeded',0,seed),segment,-30-segment*ROUTE_SPACING,0,10));
  assert.deepEqual(itinerary('harbour-8'),itinerary('HARBOUR-8'));
  assert.notDeepEqual(itinerary('HARBOUR-8'),itinerary('MARKET-7'));
  assert.equal(RUNNER_MISSIONS.length,8);
  for(const [mission,stage] of RUNNER_MISSIONS.entries()){
    const launch=runnerLaunch('mission',mission);
    assert.equal(runnerGoal(launch).distance,stage.target);
    assert.equal(runnerDistrict(launch,0,50),COURSES[stage.courses[0]].district);
  }
  assert.deepEqual(runnerGoal(runnerLaunch('endless')),{distance:null,time:null});
  assert.equal(runnerGoal(runnerLaunch()).time,90);
});

test('only a completed mission unlocks the next and mode records stay separated', () => {
  const start=readExpeditions({getItem:()=>'{corrupted'});
  const mission=runnerLaunch('mission',0);
  let save=expeditionResult(start,mission,{completed:false,score:120});
  assert.equal(save.unlocked,0);
  save=expeditionResult(save,mission,{completed:true,score:180});
  save=expeditionResult(save,runnerLaunch('endless'),{completed:false,score:380});
  save=expeditionResult(save,runnerLaunch('seeded',0,'8A'),{completed:false,score:25});
  assert.deepEqual(save,{version:1,unlocked:1,cleared:[0],best:{'mission-0':180,endless:380,'seed-8A':25}});
  assert.equal(expeditionResult(save,runnerLaunch(),{completed:true,score:9000}),save);
  assert.deepEqual(readExpeditions({getItem:(key)=>key===EXPEDITION_KEY?JSON.stringify(save):null}),save);
  const finalIndex=RUNNER_MISSIONS.length-1;
  const migrated=readExpeditions({getItem:()=>JSON.stringify({version:1,unlocked:finalIndex,best:{}})});
  assert.equal(migrated.cleared.includes(finalIndex),false);
  const allDone=expeditionResult(migrated,runnerLaunch('mission',finalIndex),{completed:true,score:700});
  assert.equal(allDone.unlocked,migrated.unlocked);
  assert.deepEqual(allDone.cleared,[0,1,2,3,4,5,6,7]);
});

import {test} from 'node:test';
import assert from 'node:assert/strict';
import {activateMap, create, route, verify} from '../source/fps/rules.mjs';
import {AH_JUN_OFFER, MISSIONS, advanceObjective, missionRun, objective} from '../source/fps/missions.mjs';

test('all nine training objectives are reachable through the playable maps',()=>{
  assert.equal(MISSIONS.length,9);
  for(const mission of MISSIONS){
    const map=activateMap(mission.round);
    map.doors.forEach(door=>door.open=true);
    const run=missionRun(mission.id);
    for(const point of [objective(run,false).point,mission.second]){
      assert.ok(route(0,14,point.x,point.z,map.doors).length,mission.id+' to '+point.name);
    }
  }
});

test('relay requires both terminals, and uploads advance only from the upload area',()=>{
  const s={...create(),phase:'playing',verified:true,x:0,z:-13};
  const relay=missionRun('1-dispatch');
  assert.equal(advanceObjective(relay,s,true,3),'relay');
  assert.equal(advanceObjective(relay,s,true,4),null);
  Object.assign(s,relay.mission.second);
  assert.equal(advanceObjective(relay,s,true,4),'complete');
  assert.equal(advanceObjective(relay,s,true,4),null);
  const hold=missionRun('2-hold');
  s.defuse=0;
  assert.equal(advanceObjective(hold,s,false,8),null);
  Object.assign(s,hold.mission.second);
  assert.equal(advanceObjective(hold,s,false,8),'complete');
});

test('the isolated story mission verifies the HK$20,000 loan decision',()=>{
  const s={...create(),phase:'playing',checked:true};
  assert.equal(verify(s,0,AH_JUN_OFFER),true);
  assert.equal(s.verified,true);
  assert.match(AH_JUN_OFFER.q,/20,000/);
});

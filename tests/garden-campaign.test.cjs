const test=require('node:test');
const assert=require('node:assert/strict');
const rules=require('../source/garden-rules.js');
function storage(initial={}){
  const saved=new Map(Object.entries(initial));
  return {getItem:key=>saved.get(key)??null,setItem:(key,value)=>saved.set(key,value)};
}
test('each legacy stage maps to its world and preserves the original save and repeater',()=>{
  for(let stage=1;stage<=15;stage++){
    const raw=JSON.stringify({version:2,unlocked:stage,seedRules:1,legacyRepeater:false});
    const saves=storage({'garden-campaign-v2':raw});
    const game=rules.campaign(saves);
    assert.equal(game.level,Math.ceil(stage/3));
    assert.equal(game.repeater,stage>=3);
    assert.equal(saves.getItem('garden-campaign-v2'),raw);
    assert.deepEqual(rules.normalize(JSON.parse(JSON.stringify(game.progress))),game.progress);
    assert.deepEqual(rules.campaign(saves).progress,game.progress);
  }
  const world=rules.campaign(storage({'garden-campaign-v1':'{"version":1,"unlocked":3}'}));
  assert.equal(world.level,3);
  assert.equal(world.repeater,true);
});
test('new campaigns unlock repeater on reaching the second of five worlds',()=>{
  const saves=storage(),game=rules.campaign(saves);
  assert.equal(game.repeater,false);
  for(const stage of rules.STAGES){
    assert.equal(game.unlocked,stage.world);
    game.level=stage.world;
    for(let i=1;i<=rules.WAVES;i++)assert.equal(rules.wave(i,stage.world).number,i);
    game.complete();
    assert.equal(game.repeater,true);
  }
  assert.equal(rules.campaign(saves).level,5);
});
test('roof finale limits simultaneous escorts with or without a live boss',()=>{
  for(const boss of [false,true]){
    const wave=rules.wave(5,5);
    const events=rules.step(wave,30000,Number(boss),boss);
    assert.equal(events.length,3);
    assert.ok(events.every(e=>e.type==='spawn'&&!e.giant));
    assert.deepEqual(rules.step(wave,30000,3+Number(boss),boss),[]);
  }
  assert.deepEqual(rules.BOSS,{hp:130,exposed:5500,enraged:4500,armored:2000,response:4000,minions:3});
});

test('the opening preparation does not spend wave time or spawn attackers',()=>{
  for(const stage of rules.STAGES){
    const opening=rules.wave(1,stage.world);
    assert.deepEqual(rules.step(opening,14999,0),[]);
    assert.equal(opening.preparation,1);
    assert.equal(opening.elapsed,0);
    assert.deepEqual(rules.step(opening,1,0),[]);
    const events=rules.step(opening,16,0);
    assert.equal(opening.elapsed,16);
    assert.equal(events[0].type,'spawn');
    assert.equal(rules.wave(2,stage.world).preparation,0);
  }
});

test('both flagged waves leave a warning window before attackers spawn',()=>{
  for(const number of [3,5]){
    const wave=rules.wave(number,1);
    assert.deepEqual(rules.step(wave,2399,0),[]);
    assert.equal(rules.step(wave,1,0)[0].type,'spawn');
  }
});
test('survival continues past five and special giant waves use dedicated rules',()=>{
  const wave=rules.wave(5,1,'survival');
  wave.spawned=wave.total;
  assert.deepEqual(rules.step(wave,rules.DURATION,0),[{type:'next'}]);
  assert.equal(rules.step(rules.wave(3,4,'giants'),2400,0)[0].giant,true);
  assert.equal(rules.EXTRAS.mowers.noMowers,true);
  assert.equal(rules.EXTRAS.limited.sun,100);
  assert.equal(rules.EXTRAS.seeds.seeds.length,4);
});

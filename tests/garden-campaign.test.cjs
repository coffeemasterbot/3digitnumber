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
  assert.deepEqual(rules.BOSS,{hp:60,exposed:9000,armored:3000,response:6000,minions:3});
});

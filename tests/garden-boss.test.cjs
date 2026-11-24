const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
test('boss telegraphs and accepts only the matching counter; death ends summons',()=>{
 const nodes=new Map();
 const panel={style:{},classList:{toggle(){}},setAttribute(){},remove(){},querySelector(key){if(!nodes.has(key))nodes.set(key,{});return nodes.get(key)}};
 const state={plants:[],zombies:[],cellSize:{width:50,height:50},boardRect:{width:450,top:110,left:0},sun:200};
 const rules=require("../source/garden-rules.js");
 const events=[];
 const context={Event,window:{dispatchEvent:event=>events.push(event.type)},GardenRules:rules,document:{querySelector:()=>({}),createElement:()=>panel,getElementById:()=>({append(){}})},zombieTypes:{},gameState:state,
 spawnZombie(type,row){state.zombies.push({type,row,health:rules.BOSS.hp,element:{style:{setProperty(){}},classList:{add(){},toggle(){}}}})}};
 const boss=vm.runInNewContext(fs.readFileSync(require.resolve('../detailed-games/garden/garden-boss.js'),'utf8')+';GardenBoss',context);
 boss.start();
 assert.equal(nodes.get('progress').value,130);
 assert.deepEqual(events,['arcade-game-state']);
 assert.match(boss.art(),/garden-boss-rig.*boss-lane-marker/);
 boss.step(rules.BOSS.exposed);assert.equal(state.boss.hazard.kind,'fire');
 boss.pepper(state.boss.hazard.row);assert.ok(state.boss.hazard);
 nodes.get('button').onclick();assert.equal(state.boss.hazard,null);assert.equal(state.sun,200);
 boss.step(rules.BOSS.armored);assert.equal(state.boss.z.row,4);
 boss.step(rules.BOSS.exposed);assert.equal(state.boss.hazard.kind,'ice');
 boss.pepper((state.boss.hazard.row+1)%5);assert.ok(state.boss.hazard);boss.pepper(state.boss.hazard.row);assert.equal(state.boss.hazard,null);
 state.boss.z.element=null;const count=state.zombies.length;boss.step(8000);assert.equal(state.zombies.length,count);assert.equal(panel.hidden,true);
});

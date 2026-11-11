const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
test('boss telegraphs and accepts only the matching counter; death ends summons',()=>{
 const nodes=new Map();
 const panel={querySelector(key){if(!nodes.has(key))nodes.set(key,{});return nodes.get(key)}};
 const state={plants:[],zombies:[],cellSize:{width:50},boardRect:{width:450},sun:200};
 const context={document:{createElement:()=>panel,getElementById:()=>({append(){}})},zombieTypes:{},gameState:state,
 spawnZombie(type,row){state.zombies.push({type,row,health:90,element:{classList:{add(){},toggle(){}}}})}};
 const boss=vm.runInNewContext(fs.readFileSync(require.resolve('../detailed-games/garden/garden-boss.js'),'utf8')+';GardenBoss',context);
 boss.start();boss.step(7000);assert.equal(state.boss.hazard.kind,'fire');
 boss.pepper(state.boss.hazard.row);assert.ok(state.boss.hazard);
 nodes.get('button').onclick();assert.equal(state.boss.hazard,null);assert.equal(state.sun,200);
 boss.step(5500);boss.step(6500);assert.equal(state.boss.hazard.kind,'ice');
 boss.pepper((state.boss.hazard.row+1)%5);assert.ok(state.boss.hazard);boss.pepper(state.boss.hazard.row);assert.equal(state.boss.hazard,null);
 state.boss.z.element=null;const count=state.zombies.length;boss.step(8000);assert.equal(state.zombies.length,count);assert.equal(panel.hidden,true);
});

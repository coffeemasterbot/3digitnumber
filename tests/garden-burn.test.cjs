const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
function setup(){
 const gameState={zombiesDefeated:0,boss:{exposed:false}},awards=[];
 const context={gameState,zombieTypes:{normal:{points:100},boss:{points:200}},addScore:p=>awards.push(p),showPointsPopup(){},updateZombieHealth(){},createParticleEffect(){}};
 const api=vm.runInNewContext(fs.readFileSync(require.resolve('../detailed-games/garden/garden-enemies.js'),'utf8')+';GardenEnemies',context);
 const enemy={type:'normal',health:2,armor:1,burnLeft:1600,element:{remove(){},classList:{toggle(){}}}};
 return {gameState,awards,api,enemy};
}
test('burn uses active time, refresh preserves partial ticks, and a kill only awards once',()=>{
 const {api,enemy,awards,gameState}=setup();
 api.stepBurn(enemy,250);api.stepBurn(enemy,0);assert.equal(enemy.armor,1);
 enemy.burnLeft=1600;api.stepBurn(enemy,150);assert.equal(enemy.armor,0);assert.equal(enemy.health,2);
 api.stepBurn(enemy,800);api.applyDamage(enemy,2,'projectile');assert.equal(gameState.zombiesDefeated,1);assert.deepEqual(awards,[100]);
});
test('burn respects closed boss and special attacks keep exposed damage cap',()=>{
 const {api,enemy,gameState}=setup();Object.assign(enemy,{type:'boss',health:50,armor:0});
 api.stepBurn(enemy,1600);assert.equal(enemy.health,50);gameState.boss.exposed=true;
 api.applyDamage(enemy,90,'blast');assert.equal(enemy.health,38);
});

(()=>{'use strict';for(const [type,z] of Object.entries(zombieTypes)){if(type==="boss")continue;z.health=Math.ceil(z.health*1.3);z.maxHealth=z.health}zombieTypes.giant={emoji:'🗿',health:220,maxHealth:220,speed:5,damage:3,points:1500};let storage;try{storage=window.localStorage}catch{}
const campaign=GardenRules.campaign(storage);const dev=window.arcadeTest?.target.split('-').map(Number);if(dev)campaign.level=dev[1];
window.gardenRepeaterAvailable=()=>campaign.repeater||!!dev&&campaign.level>=2;
window.gardenLevel=()=>GardenRules.STAGES[campaign.level-1].world;
const extrasKey='garden-extras-v1';
let mode='campaign',recommendSeeds,stageSelect;
const extra=()=>GardenRules.EXTRAS[mode];
window.gardenMode=()=>mode;
const beginRankedBattle=()=>window.arcadeRun?.start('garden',mode==='campaign'?'stage-'+campaign.level:mode);
const restartBattle=restartGame;
restartGame=function(){restartBattle();beginRankedBattle()};
window.gardenSeedRestriction=()=>extra()?.seeds;
function extrasRecord(){
 try{const raw=JSON.parse(storage.getItem(extrasKey));return raw?.version===1?raw:{version:1,unlocked:false,scores:{}}}catch{return {version:1,unlocked:false,scores:{}}}
}
function saveResult(){
 const record=extrasRecord();
 if(mode==='campaign'&&campaign.level===5&&gameState.isVictory)record.unlocked=true;
 if(mode!=='campaign')record.scores={...record.scores,[mode]:Math.max(record.scores?.[mode]||0,gameState.score)};
 try{storage.setItem(extrasKey,JSON.stringify(record))}catch{}
}
const endBattle=gameOver;
gameOver=function(){if(gameState.isGameOver)return;endBattle();window.arcadeRun?.finish(gameState.score);if(extra())saveResult()};
const saveCampaign=saveGameState;
saveGameState=function(){if(mode==='campaign')saveCampaign()};
const saveCampaignScore=saveToLeaderboard;
saveToLeaderboard=function(...args){if(mode==='campaign'&&!window.arcadeStory)saveCampaignScore(...args)};
window.addEventListener('load',()=>{
 const start=document.getElementById('garden-start');if(!start)return;
 start.addEventListener('click',beginRankedBattle);
 const select=stageSelect=document.createElement('select');select.setAttribute('aria-label','戰役選關');
 GardenRules.STAGES.forEach((stage,i)=>{const option=new Option('第 '+stage.world+' 關 · '+stage.title,stage.world);option.disabled=!dev&&i+1>campaign.unlocked;select.add(option)});
 if(!dev&&!window.arcadeStory){
  const unlocked=extrasRecord().unlocked;
  const group=document.createElement('optgroup');group.label=unlocked?'通關後模式':'通關後模式 · 完成屋頂解鎖';
  for(const [id,rules] of Object.entries(GardenRules.EXTRAS)){const option=new Option(rules.title,id);option.disabled=!unlocked;group.append(option)}
  select.append(group);
 }
 select.value=campaign.level;start.before(select);
 select.onchange=()=>{
  const target=select.value,id=Number(target);
  if(Object.hasOwn(GardenRules.EXTRAS,target)&&extrasRecord().unlocked){mode=target;campaign.level=extra().world;}
  else if(id>=1&&id<=campaign.unlocked){mode='campaign';campaign.level=id;}
  else return;
  spawnZombieWave();
 };
 recommendSeeds=configureGardenSeeds(select,start);if(dev){select.disabled=true;start.addEventListener('click',()=>{gameState.wave=dev[2];spawnZombieWave();if(GardenRules.STAGES[campaign.level-1].id==='roof'&&gameState.wave===5)GardenBoss.start()},{once:true})}
});
const container=document.getElementById('gameContainer'),track=document.createElement('div');track.id='campaign-track';track.innerHTML='<span id="campaign-label"></span><div class="campaign-rail"><progress id="campaign-progress" max="1" value="0" aria-label="波數進度"></progress><i style="left:25%">⚑</i><i style="left:50%">⚑</i><i style="left:75%">⚑</i><i style="left:98%">◆</i></div><small id="campaign-next"></small>';container.append(track);
const progress=track.querySelector('progress'),label=track.querySelector('#campaign-label'),next=track.querySelector('#campaign-next');
const warning=document.createElement('div');
warning.className='garden-wave-warning';
warning.hidden=true;
warning.setAttribute('role','status');
warning.textContent='月尾截數日 · 大批帳單即將來襲';
container.append(warning);
const mowerSVG='<svg viewBox="0 0 64 54" aria-hidden="true"><path d="M42 29L35 7H19" fill="none" stroke="#e8d2a4" stroke-width="5"/><path d="M9 27h42l6 14H4z" fill="#bc5943" stroke="#713b31" stroke-width="3"/><rect x="19" y="16" width="22" height="18" rx="4" fill="#e8b74f" stroke="#805d34" stroke-width="3"/><circle cx="16" cy="44" r="8" fill="#304e42"/><circle cx="47" cy="44" r="8" fill="#304e42"/><circle cx="16" cy="44" r="3" fill="#e3cb8e"/><circle cx="47" cy="44" r="3" fill="#e3cb8e"/></svg>';
function resetMowers(){container.querySelectorAll('.lawnmower').forEach(e=>e.remove());gameState.mowers=extra()?.noMowers?[]:GardenRules.mowers();for(const m of gameState.mowers){const el=document.createElement('div');el.className='lawnmower';el.setAttribute('role','img');el.innerHTML=mowerSVG;container.append(el);m.element=el}renderMowers()}
function renderMowers(){
 const rect=gameState.boardRect,cell=gameState.cellSize;
 if(!rect||!cell.height)return;
 for(const m of gameState.mowers||[]){
  const el=m.element;
  if(el.dataset.state!==m.state){
   el.dataset.state=m.state;
   el.setAttribute('aria-label','第'+(m.row+1)+'列割草機，'+({ready:'準備好',active:'啟動',spent:'已用完'})[m.state]);
  }
  if(m.state==='spent')continue;
  const position='translate('+Math.round(rect.left+m.x)+'px,'+Math.round(rect.top+(m.row+.5)*cell.height-23)+'px)';
  if(el.style.transform!==position)el.style.transform=position;
 }
}
function setText(el,value){if(window.siteLocale)window.siteLocale.write(el,value);else if(el.textContent!==value)el.textContent=value}
function renderWave(){
 const w=gameState.battle;
 if(!w)return;
 progress.value=GardenRules.progress(w,gameState.isVictory);
 const current=extra()?.endless?'第 '+w.number+' 波':'第 '+w.number+' / 5 波';
 setText(document.getElementById('waveLimit'),extra()?.endless?'':'/5');
 if(progress.getAttribute('aria-valuetext')!==current)progress.setAttribute('aria-valuetext',current);
 setText(label,(extra()?.title||GardenRules.STAGES[campaign.level-1].title)+' · '+current);
 const warn=(w.number===3||w.number===5)&&w.spawned===0&&!gameState.isGameOver;
 if(warning.hidden===warn)warning.hidden=!warn;
 const nextLabel=w.preparation>0?'準備 '+Math.ceil(w.preparation/1000)+' 秒':!extra()?.endless&&w.number===5?'最後一波':Math.max(0,Math.ceil((GardenRules.DURATION-w.elapsed)/1000))+'s 下一波';
 setText(next,nextLabel);
}
let waveHudDue=0;
spawnZombieWave=function(){if(gameState.waveTimer)clearTimeout(gameState.waveTimer);gameState.waveTimer=null;gameState.waveDuration=GardenRules.DURATION;gameState.battle=GardenRules.wave(gameState.wave,gardenLevel(),mode);if(gameState.wave===1||!gameState.mowers){gameState.sun=extra()?.sun??200;updateSunDisplay();resetMowers();for(const cell of document.querySelectorAll('.cell')){
 delete cell.dataset.base;cell.classList.toggle('water-lane',gardenLevel()===3&&cell.dataset.row==='2');
 delete cell.dataset.iced;
 }}updateWaveDisplay();renderWave()};scheduleNextWave=function(){};
const previous=window.gardenActiveStep;window.gardenActiveStep=dt=>{previous?.(dt);GardenBoss.step(dt);GardenEnemies.reinforcements(dt);if(gameState.isGameOver||!gameState.boardRect||!gameState.cellSize?.width)return;if(!gameState.battle)spawnZombieWave();const mowerNeeded=gameState.mowers.some(m=>m.state==='active')||gameState.zombies.some(z=>z.element&&z.x<=8);const targets=mowerNeeded?gameState.zombies.map((z,id)=>({id,row:z.row,x:z.x,alive:!!z.element})):[];for(const id of GardenRules.stepMowers(gameState.mowers,targets,dt/1000,gameState.boardRect.width)){const z=gameState.zombies[id];if(!z?.element)continue;GardenEnemies.applyDamage(z,z.health,'mower')}for(const key in gameState.iceTracks){
 const [row,col]=key.split(',');const cell=document.getElementById('gameBoard').getElementsByClassName('cell')[Number(row)*9+Number(col)];
 if(gameState.iceTracks[key]>gameState.activeClock){if(cell&&!cell.dataset.iced)cell.dataset.iced='true'}
 else{if(cell)delete cell.dataset.iced;delete gameState.iceTracks[key]}
}const alive=gameState.zombies.filter(z=>z.element).length;
 for(const e of GardenRules.step(gameState.battle,dt,alive,!!gameState.boss?.z.element)){
  if(e.type==='spawn'){
   const roster=extra()?.enemies;
   const type=e.giant?'giant':roster?roster[(gameState.battle.spawned+e.row)%roster.length]:GardenEnemies.spawn(gardenLevel(),gameState.wave,gameState.battle.spawned,e.row);
   spawnZombie(type,e.row);
  }
  if(e.type==='next'){
   gameState.wave++;
   if(mode==='campaign'&&GardenRules.STAGES[campaign.level-1].id==='roof'&&gameState.wave===5)GardenBoss.start();
   gameState.zombieDamageMultiplier=Math.min(2,1+(gameState.wave-1)*.02);
   gameState.battle=GardenRules.wave(gameState.wave,gardenLevel(),mode);
   updateWaveDisplay();updateDamageDisplay();addScore(100*gameState.wave);saveGameState();
  }
  if(e.type==='victory'&&!gameState.isVictory){
   if(mode==='campaign')campaign.complete();
   document.getElementById('campaign-advance').hidden=mode!=='campaign'||campaign.level===5;
   victory();
   window.arcadeRun?.finish(gameState.score);
   if(extra()||campaign.level===5)saveResult();
  }
 }
 gameState.waveTimeElapsed=gameState.battle.elapsed;
 renderMowers();waveHudDue-=dt;
 if(waveHudDue<=0){waveHudDue=100;renderWave()}
};
document.getElementById('campaign-advance').onclick=()=>{if(gameState.isVictory&&campaign.level<campaign.unlocked){campaign.level++;stageSelect.options[campaign.level-1].disabled=false;stageSelect.value=campaign.level;recommendSeeds?.();restartGame()}};window.addEventListener('resize',renderMowers);window.gardenBattleSnapshot=()=>({wave:gameState.battle?{...gameState.battle}:null,progress:gameState.battle?GardenRules.progress(gameState.battle,gameState.isVictory):0,mowers:gameState.mowers?.map(({row,x,state})=>({row,x,state})),giants:gameState.zombies.filter(z=>z.type==='giant'&&z.element).length});})();

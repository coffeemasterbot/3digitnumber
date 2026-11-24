(function(root,factory){
  if(typeof module==='object')module.exports=factory();
  else root.GardenRules=factory();
})(globalThis,()=>{
const DURATION=24000;
const PREPARATION=15000;
const LEVELS=['基本預算','信用防線','流動資金池','消費壓力','財務風暴'];
const WAVES=5;
const STAGES=[
  {id:'day',world:1,title:'日間 · 陽光儲備'},
  {id:'night',world:2,title:'夜間 · 微光預算'},
  {id:'pool',world:3,title:'水池 · 水上花園'},
  {id:'ice',world:4,title:'冰道 · 分期壓力'},
  {id:'roof',world:5,title:'屋頂 · 機械決戰'}
];
const BOSS={hp:96,exposed:5500,enraged:4500,armored:2000,response:4000,minions:3};
const EXTRAS={
  survival:{title:'生存 · 持續防守',world:1,endless:true},
  limited:{title:'挑戰 · 限量陽光',world:1,sun:100},
  seeds:{title:'挑戰 · 限定植物',world:1,seeds:['sunflower','peashooter','mine','wallnut']},
  mowers:{title:'挑戰 · 無割草機',world:1,noMowers:true},
  armour:{title:'挑戰 · 裝甲壓力',world:2,enemies:['cone','bucket','screen']},
  giants:{title:'挑戰 · 巨人防線',world:4,giants:true},
};
function wave(number=1,level=1,mode='campaign'){
  const surge=number%5===0;
  return {number,level,mode,elapsed:0,preparation:number===1?PREPARATION:0,clearTime:0,spawnClock:number===1?0:number===3||surge?2400:1300,spawned:0,
    total:Math.min(18,2+level+Math.floor(number/3)+(surge?2:0)),done:false};
}
function step(state,dt,alive,bossAlive=false){
  const events=[];
  if(state.done||!(dt>0))return events;
  if(state.preparation>0){
    const setupTime=Math.min(dt,state.preparation);
    state.preparation-=setupTime;
    dt-=setupTime;
    if(dt===0)return events;
  }
  state.elapsed+=dt;
  const last=state.number===WAVES&&!EXTRAS[state.mode]?.endless;
  state.spawnClock=Math.max(-dt,state.spawnClock-dt);
  while(state.spawnClock<=0 && state.spawned<state.total && alive+events.length<(state.level===5&&state.number===WAVES?BOSS.minions+Number(bossAlive):12)){
    events.push({type:'spawn',row:(state.number+state.spawned*2)%5,
      giant:state.level===4 && state.spawned===0 && (last||EXTRAS[state.mode]?.giants&&state.number>=3)});
    state.spawned++;
    state.spawnClock+=Math.max(850,1600-state.level*80-state.number*25);
  }
  if(state.spawned===state.total){
    state.clearTime=alive===0&&!events.length?state.clearTime+dt:0;
    if(last ? state.clearTime>0 : state.elapsed>=DURATION && !(state.level===5&&state.number===WAVES-1&&alive>BOSS.minions)){
      state.done=true;
      events.push({type:last?'victory':'next'});
    }
  }
  return events;
}
function progress(s,victory=false){return victory?1:EXTRAS[s.mode]?.endless?Math.min(.999,s.elapsed/DURATION):Math.min(.999,(s.number-1+Math.min(1,s.elapsed/DURATION))/WAVES)}
function normalize(data){
  if(!data||![1,2,3].includes(data.version)||!Number.isInteger(data.unlocked)||data.unlocked<1||data.unlocked>(data.version===2?15:STAGES.length))throw Error('Invalid garden progress');
  const unlocked=data.version===2?Math.ceil(data.unlocked/3):data.unlocked;
  const legacyRepeater=data.legacyRepeater===true||data.version===1||data.version===2&&(data.seedRules===undefined||data.unlocked>=3);
  return {version:3,unlocked,seedRules:1,legacyRepeater};
}
function campaign(storage){
  const key='garden-campaign-v3';
  let progress=normalize({version:3,unlocked:1});
  try{
    const old=storage.getItem('pvz_gameState');
    if(old&&!storage.getItem('pvz_gameState-pre-campaign'))storage.setItem('pvz_gameState-pre-campaign',old);
    for(const source of [key,'garden-campaign-v2','garden-campaign-v1']){
      const raw=storage.getItem(source);
      if(!raw)continue;
      progress=normalize(JSON.parse(raw));
      if(source!==key)storage.setItem(key,JSON.stringify(progress));
      break;
    }
  }catch{}
  return {level:progress.unlocked,get repeater(){return progress.legacyRepeater||progress.unlocked>=2},get unlocked(){return progress.unlocked},get progress(){return {...progress}},complete(){
    progress.unlocked=Math.max(progress.unlocked,Math.min(STAGES.length,this.level+1));
    try{storage.setItem(key,JSON.stringify(progress))}catch{}
  }};
}
function mowers(){return Array.from({length:5},(_,row)=>({row,x:-34,state:'ready'}))}function stepMowers(list,enemies,dt,width){const kills=[];for(const m of list){if(m.state==='ready'&&enemies.some(e=>e.row===m.row&&e.alive&&e.x<=8))m.state='active';if(m.state==='active'){m.x+=420*dt;for(const e of enemies)if(e.alive&&e.row===m.row&&e.x<=m.x+45){e.alive=false;kills.push(e.id)}if(m.x>width+60)m.state='spent'}}return kills}return {DURATION,PREPARATION,WAVES,LEVELS,STAGES,BOSS,EXTRAS,normalize,campaign,wave,step,progress,mowers,stepMowers};
});

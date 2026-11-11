(function(root,factory){
  if(typeof module==='object')module.exports=factory();
  else root.GardenRules=factory();
})(globalThis,()=>{
const DURATION=14000;
const LEVELS=['基本預算','信用防線','流動資金池','消費壓力','財務風暴'];
const WAVES=10;
function wave(number=1,level=1){
  const surge=number%5===0;
  return {number,level,elapsed:0,clearTime:0,spawnClock:1300,spawned:0,
    total:2+level+Math.floor(number/3)+(surge?2:0),done:false};
}
function step(state,dt,alive){
  const events=[];
  if(state.done||!(dt>0))return events;
  state.elapsed+=dt;
  state.spawnClock=Math.max(-dt,state.spawnClock-dt);
  while(state.spawnClock<=0 && state.spawned<state.total && alive+events.length<12){
    events.push({type:'spawn',row:(state.number+state.spawned*2)%5,
      giant:state.level>=4 && state.number===10 && state.spawned===0});
    state.spawned++;
    state.spawnClock+=Math.max(850,1600-state.level*80-state.number*25);
  }
  if(state.spawned===state.total){
    state.clearTime=alive===0&&!events.length?state.clearTime+dt:0;
    if(state.number===WAVES ? state.clearTime>0 : state.elapsed>=DURATION||state.clearTime>=2000){
      state.done=true;
      events.push({type:state.number===WAVES?'victory':'next'});
    }
  }
  return events;
}
function progress(s,victory=false){return victory?1:Math.min(.999,(s.number-1+Math.min(1,s.elapsed/DURATION))/WAVES)}
function campaign(storage){
  const key='garden-campaign-v1';
  let unlocked=1;
  try{
    const raw=storage.getItem(key);
    const old=storage.getItem('pvz_gameState');
    if(old&&!storage.getItem('pvz_gameState-pre-campaign'))storage.setItem('pvz_gameState-pre-campaign',old);
    if(raw){const data=JSON.parse(raw);if(data.version===1&&Number.isInteger(data.unlocked)&&data.unlocked>=1&&data.unlocked<=LEVELS.length)unlocked=data.unlocked}
  }catch{}
  return {level:unlocked,get unlocked(){return unlocked},complete(){
    unlocked=Math.max(unlocked,Math.min(LEVELS.length,this.level+1));
    try{storage.setItem(key,JSON.stringify({version:1,unlocked}))}catch{}
  }};
}
function mowers(){return Array.from({length:5},(_,row)=>({row,x:-34,state:'ready'}))}function stepMowers(list,enemies,dt,width){const kills=[];for(const m of list){if(m.state==='ready'&&enemies.some(e=>e.row===m.row&&e.alive&&e.x<=8))m.state='active';if(m.state==='active'){m.x+=420*dt;for(const e of enemies)if(e.alive&&e.row===m.row&&e.x<=m.x+45){e.alive=false;kills.push(e.id)}if(m.x>width+60)m.state='spent'}}return kills}return {DURATION,WAVES,LEVELS,campaign,wave,step,progress,mowers,stepMowers};
});

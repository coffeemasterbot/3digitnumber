import {createMap} from './rules.mjs';

const first = Object.freeze({x:0,z:-13,name:'北面終端'});
export const AH_JUN_OFFER=Object.freeze({
  q:'阿俊諗住借 HK$20,000 暫時還舊卡數。確認之前應該點做？',
  answers:['暫停確認，核對總還款、到期日同手續費','先借新錢暫時還舊卡數'],
  right:0,
  why:'暫停撳確認。核對總還款、到期日同手續費，再同阿俊一齊查清楚舊欠款。',
});
const sites = [
  {x:-12,z:-13,name:'西巷接收站'},
  {x:12,z:-13,name:'東側貨台'},
  {x:13,z:-14,name:'東北瞭望台'},
];
const types = [
  {id:'verify',title:'核對及拆解',brief:'去北面終端核對資料，按住 E 拆解。'},
  {id:'dispatch',title:'雙站接力',brief:'核實北面終端並按住 E 整理記錄，再去接收站按住 E 交接。'},
  {id:'hold',title:'守住上傳點',brief:'核實北面終端，再去指定地點留喺範圍內直至上傳完成。'},
];

export const MISSIONS = sites.flatMap((second,index)=>types.map(type=>({
  ...type,
  id:(index+1)+'-'+type.id,
  mode:type.id,
  round:index+1,
  map:createMap(index+1).name,
  second,
})));

export function missionRun(id){
  const mission=MISSIONS.find(m=>m.id===id);
  return mission?{mission,stage:0,complete:false}:null;
}

export function objective(run,verified,kit=false){
  const stage=run?.stage??0;
  const mode=run?.mission.mode??'verify';
  if(!verified)return {point:first,kind:'check',seconds:kit?3:5};
  if(mode==='hold')return {point:run.mission.second,kind:'upload',seconds:8};
  if(mode==='dispatch')return stage===0
    ? {point:first,kind:'prepare',seconds:kit?2:3}
    : {point:run.mission.second,kind:'handoff',seconds:4};
  return {point:first,kind:'defuse',seconds:kit?3:5};
}

export function nearObjective(player,point,radius=2.7){
  return Math.hypot(player.x-point.x,player.z-point.z)<radius;
}

export function advanceObjective(run,state,held,dt){
  if(run?.complete)return null;
  const target=objective(run,state.verified,state.purchases.includes('kit'));
  if(state.phase!=='playing'||target.kind==='check'||!nearObjective(state,target.point)||
    (!held&&target.kind!=='upload')){
    state.defuse=0;
    return null;
  }
  state.defuse=Math.min(target.seconds,state.defuse+dt);
  if(state.defuse+1e-9<target.seconds)return null;
  if(run?.mission.mode==='dispatch'&&run.stage===0){
    run.stage=1;
    state.defuse=0;
    return 'relay';
  }
  if(run)run.complete=true;
  return 'complete';
}

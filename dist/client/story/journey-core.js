/* Shared, deterministic story rules. No arcade credits enter this module. */
(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.JourneyCore=api})(globalThis,()=>{
 'use strict';
 const VERSION=6,KEY='life-lost-found-guided-v5'; // retain the existing storage namespace
 const clueKeys=['phone','bill','shoes','note'],miniKeys=['coins','shipping','instalments','pause'];
 const branch=()=>({timeline:[],timelineDone:false,timelineSkipped:false,timelineTries:0,social:'',socialSettled:false,kit:[],kitLocked:false,connection:'',space:false,missteps:[],followup:'',followupDone:false,endingId:'',reviewSeen:[]});
 const plain=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
 const date=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&new Date(x+'T12:00:00Z').toISOString().slice(0,10)===x;
 function validate(raw,defaults){
  if(!plain(raw)||![5,VERSION].includes(raw.version))throw Error('unsupported-save');
  const out={...defaults,...branch(),version:VERSION};
  for(const [key,value] of Object.entries(out)){
   if(!(key in raw)||key==='version')continue;const v=raw[key];
   if(typeof value==='boolean'){if(typeof v!=='boolean')throw Error(key);out[key]=v}
   else if(typeof value==='number'){if(!Number.isSafeInteger(v)||v<0||v>10000)throw Error(key);out[key]=v}
   else if(typeof value==='string'){if(typeof v!=='string'||v.length>500)throw Error(key);out[key]=v}
  }
  const arrays={clues:clueKeys,witnesses:[0,1,2,3],timeline:['work','call','pay'],kit:['book','ledger','phone','receipt'],missteps:['0:scold','1:dismiss','2:loan'],reviewSeen:[]};
  for(const [key,allowed] of Object.entries(arrays))if(key in raw){if(!Array.isArray(raw[key]))throw Error(key);out[key]=[...new Set(raw[key].filter(x=>allowed.includes(x)))]}
  if(out.kit.length>2)throw Error('kit');
  if('mini' in raw&&!plain(raw.mini))throw Error('mini');
  out.mini=Object.fromEntries(miniKeys.filter(k=>raw.mini?.[k]===true).map(k=>[k,true]));
  if('arcade' in raw){if(!plain(raw.arcade))throw Error('arcade');out.arcade={};for(const k of miniKeys)if(plain(raw.arcade[k]))out.arcade[k]=Object.fromEntries(Object.entries(raw.arcade[k]).filter(([n,v])=>/^[a-zA-Z]+$/.test(n)&&((typeof v==='number'&&Number.isFinite(v))||typeof v==='boolean')))}
  if('stamps' in raw){if(!Array.isArray(raw.stamps)||raw.stamps.length!==7)throw Error('stamps');out.stamps=raw.stamps.map(x=>{if(x===null)return null;if(!plain(x)||!date(x.date))throw Error('stamp');return {date:x.date,backfill:x.backfill===true,demo:x.demo===true}})}
  if(out.planStart&&!date(out.planStart))throw Error('planStart');
  const enums={social:['','honest','quiet','promise','kept','renegotiated'],connection:['','trusted','self','written'],followup:['','small','together','pause'],endingId:['','fourth','company','boundary','repair','relay'],profile:['N','A','B','C','D','E'],route:['','early','late']};
  for(const [k,values] of Object.entries(enums))if(!values.includes(out[k]))throw Error(k);
  out.minutes=Math.min(70,out.minutes);out.talk=Math.min(3,out.talk);out.budgetStep=Math.min(2,out.budgetStep);
  // Backtracking is allowed; unlocked chapters must still have their prerequisites.
  let max=1;if(out.clues.length===4&&(out.timelineDone||out.timelineSkipped))max=2;
  if(max===2&&out.witnesses.length>=2&&Object.keys(out.mini).length&&out.social&&out.kitLocked&&out.kit.length===2)max=3;
  if(max===3&&out.talk===3&&out.connection)max=4;
  out.unlocked=Math.min(max,Math.max(1,out.unlocked));out.stage=Math.min(out.unlocked,Math.max(1,out.stage));
  if(max<4){out.budgetDone=false;out.gapAck=false}
  if(out.stage<4)out.complete=false;
  if(!out.budgetDone||!out.planStart||!out.followupDone)out.complete=false;
  return out;
 }
 function load(storage,defaults){try{const raw=storage.getItem(KEY);if(raw===null)return {state:{...defaults,...branch(),version:VERSION},status:'new',raw:null};try{return {state:validate(JSON.parse(raw),defaults),status:'ready',raw:null}}catch{return {state:{...defaults,...branch(),version:VERSION},status:'recovery',raw}}}catch{return {state:{...defaults,...branch(),version:VERSION},status:'unavailable',raw:null}}}
 function example(){
  return {openingCents:5000,pendingIncomeCents:60000,payday:3,foodCents:3000,travelCents:1200,voucherCents:3000,phoneCents:5000,phoneDay:5,socialCostCents:0,socialDay:2};
 }
 function validateScenario(raw){
  const scenario={};
  for(const key of Object.keys(example())){
   const value=raw?.[key], day=['payday','phoneDay','socialDay'].includes(key);
   if(!Number.isSafeInteger(value)||value<(day?1:0)||value>(day?7:100000000))throw Error('數值超出範圍');
   scenario[key]=value;
  }
  return scenario;
 }
 function storyScenario(s){
  return {...example(),payday:s.delay?5:3,foodCents:s.basic?3000:4500,travelCents:s.basic?1200:2800,voucherCents:s.vouchers?3000:0,socialCostCents:s.social==='kept'||(s.social==='promise'&&!s.socialSettled)?28000:0};
 }
 function calculateCashflow(raw){
  const s=validateScenario(raw), ledger=[], rows=[];
  let balanceCents=s.openingCents, firstDeficitDay=null, gapCents=0;
  for(let day=1;day<=7;day++){
   const {foodCents,travelCents}=s;
   const voucherCents=day<=2?Math.min(foodCents,s.voucherCents):0;
   const incomeCents=day===s.payday?s.pendingIncomeCents:0;
   const phoneCents=day===s.phoneDay?s.phoneCents:0;
   const socialCostCents=day===s.socialDay?s.socialCostCents:0;
   const costCents=foodCents-voucherCents+travelCents+phoneCents+socialCostCents;
   balanceCents+=incomeCents-costCents;
   if(balanceCents<0&&firstDeficitDay===null)firstDeficitDay=day;
   gapCents=Math.max(gapCents,-balanceCents);
   ledger.push({day,incomeCents,foodCents,travelCents,voucherCents,phoneCents,socialCostCents,balanceCents});
   rows.push({day,food:foodCents/100,travel:travelCents/100,voucher:voucherCents/100,income:incomeCents/100,cost:costCents/100,socialCost:socialCostCents/100,balance:balanceCents/100});
  }
  return {availableCents:s.openingCents,pendingIncomeCents:s.pendingIncomeCents,payday:s.payday,ledger,rows,gapCents,firstDeficitDay,closingCents:balanceCents};
 }
 function project(s){return calculateCashflow(storyScenario(s))}
 return {VERSION,KEY,validate,load,branch,project,example,storyScenario,validateScenario,calculateCashflow};
});

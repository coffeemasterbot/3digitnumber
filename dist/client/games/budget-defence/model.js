/* One authoritative state machine. Values are local fictional credits, never HK$. */
(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.BudgetDefence=factory()})(globalThis,()=>{
 'use strict';
 const BUDGET=900,ROUND_MS=45000;
 const equipment={steady:{name:'穩定標記器',cost:180,ammo:5,reload:1200,cooldown:500,width:1.22,detail:'較大命中範圍、5 發；每發要等 0.5 秒。'},rapid:{name:'快速標記器',cost:240,ammo:8,reload:800,cooldown:180,width:.85,detail:'8 發、較快換彈；命中範圍較細，亦用多啲預算。'},reserve:{name:'思考時間卡',cost:120,detail:'今輪多 15 秒；下一輪要重新安排。不限時模式唔需要買。'}};
 const basic={name:'借用練習器',cost:0,ammo:3,reload:1800,cooldown:400,width:1};
 const rounds=[
  [{cue:'保證回報，先轉訂金',kind:'reject',why:'保證賺錢兼催促轉帳係警號。拒絕，保留基本生活資源。'}, {cue:'官方帳單：電話費到期',kind:'protect',why:'已核實收款方同到期日；先保必要服務。'}, {cue:'朋友轉發：限時學費折扣',kind:'check',verdict:'reject',info:'學校官方網站查無此活動；收款人係私人戶口。',why:'轉發唔等於核實。先向學校官方渠道確認。'}],
  [{cue:'中獎通知：先交手續費',kind:'reject',why:'未參加卻中獎，仲要先付款：拒絕同停止轉帳。'}, {cue:'確認維修單：必要交通工具',kind:'protect',why:'已確認維修項目、總額同到期日。保住必要出行。'}, {cue:'兼職訊息：出糧時間未明',kind:'check',verdict:'protect',info:'僱主確認工作及金額，但五日後先出糧。',why:'可以保留已核實機會；未到帳嘅收入仍唔係今日現金。'}],
  [{cue:'借款廣告：毋須睇條款',kind:'reject',why:'未睇清總費用同還款能力，先拒絕即時借款壓力。'}, {cue:'官方交通增值：明日返學',kind:'protect',why:'已核實渠道同所需金額。為基本需要預留資源。'}, {cue:'購物優惠：滿額免運',kind:'check',verdict:'reject',info:'需要貨品連運費 205；湊單免運實付 300。',why:'核對總額後，拒絕多買未需要物品；優惠唔等於節省。'}]
 ];
 const create=(opts={})=>({phase:'instructions',round:0,credits:BUDGET,spent:0,purchases:[],weapon:'basic',aid:false,ammo:3,reloadLeft:0,cooldown:0,elapsed:0,remaining:ROUND_MS,correct:0,checks:0,shots:0,hits:0,selected:0,targets:[],feedback:'先睇玩法，唔需要靠反應快。',practice:false,untimed:!!opts.untimed,reduced:!!opts.reduced,muted:true,history:[]});
 const kit=s=>equipment[s.weapon]||basic;
 const targets=round=>rounds[round].map((x,i)=>({...x,id:i,checked:false,resolved:false,correct:false}));
 const score=s=>({judgement:Math.round(s.correct/9*80),resource:Math.round(s.credits/BUDGET*20),accuracy:s.shots?Math.round(s.hits/s.shots*100):null,correct:s.correct,total:9,credits:s.credits,financial:Math.round(s.correct/9*80)+Math.round(s.credits/BUDGET*20)});
 const summary=s=>({...s,phase:s.practice?'practiceResults':'roundResults',reloadLeft:0,cooldown:0,history:[...s.history,{round:s.round,correct:s.targets.filter(t=>t.correct).length,unresolved:s.targets.filter(t=>!t.resolved).length,spent:s.purchases.reduce((a,k)=>a+equipment[k].cost,0)}],feedback:s.targets.some(t=>!t.resolved)?'時間到。未處理項目唔當作答對；回顧原因再試。':'呢輪完成。先回顧判斷，再安排下一輪資源。'});
 function act(s,a){
  if(!a||typeof a.type!=='string')return s;
  if(a.type==='option'&&['muted','reduced','untimed'].includes(a.key)){if(a.key==='untimed'&&s.phase!=='instructions')return s;return {...s,[a.key]:!!a.value}}
  if(a.type==='retry')return {...create({untimed:s.untimed,reduced:s.reduced}),muted:s.muted};
  if(a.type==='practice'&&s.phase==='instructions')return {...s,phase:'playing',practice:true,targets:targets(0),remaining:ROUND_MS,feedback:'練習唔計分，亦唔用預算。先揀一個標靶。'};
  if(a.type==='begin'&&s.phase==='instructions')return {...s,phase:'buy',feedback:'三輪共用 900 點；借用器免費。留低預算亦有分。'};
  if(a.type==='buy'&&s.phase==='buy'){
   const item=equipment[a.item];if(!item||s.purchases.includes(a.item)||s.credits<item.cost)return s;
   if(a.item==='reserve'?(s.aid||s.untimed):s.weapon!=='basic')return s;
   return {...s,credits:s.credits-item.cost,spent:s.spent+item.cost,purchases:[...s.purchases,a.item],weapon:a.item==='reserve'?s.weapon:a.item,aid:a.item==='reserve'?true:s.aid,feedback:'已買 '+item.name+'：−'+item.cost+' 點，只扣一次。'};
  }
  if(a.type==='startRound'&&s.phase==='buy')return {...s,phase:'playing',targets:targets(s.round),ammo:kit(s).ammo,reloadLeft:0,cooldown:0,elapsed:0,remaining:ROUND_MS+(s.aid?15000:0),selected:0,feedback:'射擊拒絕可疑交易；保護已核實交易；唔確定先查證。'};
  if(a.type==='pause'&&s.phase==='playing')return {...s,phase:'paused',feedback:'已暫停。射擊、倒數同換彈一齊停止。'};
  if(a.type==='resume'&&s.phase==='paused')return {...s,phase:'playing',feedback:'繼續；先核對需要同資料。'};
  if(a.type==='next'&&s.phase==='practiceResults')return {...create({untimed:s.untimed,reduced:s.reduced}),muted:s.muted,phase:'instructions'};
  if(a.type==='next'&&s.phase==='roundResults')return s.round===2?{...s,phase:'results'}:{...s,phase:'buy',round:s.round+1,weapon:'basic',aid:false,purchases:[],reloadLeft:0,cooldown:0,feedback:'下一輪器材要重新安排；三輪預算唔會補充。'};
  if(s.phase!=='playing')return s;
  if(a.type==='tick'){
   if(!Number.isFinite(a.ms)||a.ms<=0)return s;const remaining=s.untimed?s.remaining:Math.max(0,s.remaining-a.ms),reloadLeft=Math.max(0,s.reloadLeft-a.ms);let next={...s,remaining,elapsed:s.elapsed+a.ms,reloadLeft,cooldown:Math.max(0,s.cooldown-a.ms),ammo:s.reloadLeft>0&&reloadLeft===0?kit(s).ammo:s.ammo};return remaining===0&&!s.untimed?summary(next):next;
  }
  if(a.type==='select'&&Number.isInteger(a.id)&&s.targets[a.id])return {...s,selected:a.id};
  if(a.type==='reload'){if(s.reloadLeft||s.ammo===kit(s).ammo)return s;return {...s,reloadLeft:kit(s).reload,feedback:'換彈中；完成前不能射擊。'}}
  const id=Number.isInteger(a.id)?a.id:s.selected,t=s.targets[id];
  if(a.type==='check'){if(!t||t.resolved||t.checked)return s;return {...s,checks:s.checks+(s.practice?0:1),targets:s.targets.map(x=>x.id===id?{...x,checked:true}:x),feedback:t.kind==='check'?t.info:'資料已核實：'+t.why}}
  if(!['fire','protect'].includes(a.type))return s;
  let n={...s};if(a.type==='fire'){
   if(t?.resolved&&!a.miss)return s;
   if(s.reloadLeft||s.cooldown)return s;if(s.ammo<=0)return {...s,feedback:'冇彈。撳 R 或「換彈」。'};
   n.ammo--;n.cooldown=kit(s).cooldown;n.shots+=s.practice?0:1;
   if(!t||a.miss){n.feedback='未命中。可以先揀標靶、讀清楚再行動。';return n}n.hits+=s.practice?0:1;
  }
  if(!t||t.resolved)return n;
  const verdict=t.kind==='check'?t.verdict:t.kind,correct=(t.kind!=='check'||t.checked)&&verdict===(a.type==='fire'?'reject':'protect');
  n.targets=s.targets.map(x=>x.id===id?{...x,resolved:true,correct}:x);n.correct+=correct&&!s.practice?1:0;n.feedback=(correct?'判斷合適。':'今次未合適。')+(t.kind==='check'&&!t.checked?'未查證就決定，資料仲未足夠。':'')+t.why;
  return n.targets.every(x=>x.resolved)?summary(n):n;
 }
 return {create,act,score,kit,equipment,BUDGET,ROUND_MS,rounds};
});

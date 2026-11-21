(() => {
 const core=window.JourneyCore, key='arcade-cashflow-lab-v1', el=id=>document.getElementById(id);
 const defaults=()=>({A:core.example(),B:{...core.example(),payday:5}});
 const fields={openingCents:'手上現金',pendingIncomeCents:'預計收入',payday:'到帳日（1–7）',foodCents:'每日餐費',travelCents:'每日交通',voucherCents:'頭兩日每張飯券面值',phoneCents:'必要電話費',phoneDay:'電話費到期日',socialCostCents:'可調聚餐支出',socialDay:'聚餐付款日'};
 const quick=['openingCents','pendingIncomeCents','payday'];
 const hkd=new Intl.NumberFormat('zh-HK',{style:'currency',currency:'HKD',currencyDisplay:'narrowSymbol'});
 const money=cents=>hkd.format(cents/100);
 let scenarios=defaults(), active='A', pending=null;
 const status=text=>{el('lab-status').textContent=text};
 function unpack(raw){
  const data=JSON.parse(raw);
  if(data?.version!==1)throw Error();
  return {A:core.validateScenario(data.A),B:core.validateScenario(data.B)};
 }
 try{const raw=localStorage.getItem(key);if(raw!==null)scenarios=unpack(raw)}catch{status('未能讀取本機方案，已載入範例。')}
 function fieldsFor(id,names,isQuick){
  for(const name of names){
   const label=document.createElement('label'),input=document.createElement('input');
   label.textContent=fields[name]+(name.endsWith('Cents')&&!isQuick?'（HK$）':'');input.dataset.field=name;input.dataset.quick=String(isQuick);
   input.inputMode=name.endsWith('Cents')?'decimal':'numeric';input.required=true;
   input.addEventListener('input',()=>{
    const cash=name.endsWith('Cents'),v=input.value.trim();
    const valid=cash?/^\d{1,7}(?:\.\d{1,2})?$/.test(v):/^[1-7]$/.test(v);
    const [whole,fraction='']=v.split('.');
    const value=cash?Number(whole)*100+Number(fraction.padEnd(2,'0')):Number(v);
    input.setCustomValidity(valid&&value<=100000000?'':'請輸入範圍內嘅金額（最多兩位小數）或第 1 至 7 日。');
    if(!input.validity.valid){status('輸入未完成，結果沿用上一個有效安排。');return}
    scenarios[isQuick?'A':active][name]=value;render(input);status('方案已修改，按「保存 A／B」保留。');
   });label.append(input);el(id).append(label);
  }
 }
 function render(editing){
  for(const input of document.querySelectorAll('#cashflow [data-field]')){
   if(input===editing)continue;
   const n=input.dataset.field,v=scenarios[input.dataset.quick==='true'?'A':active][n];input.value=n.endsWith('Cents')?v/100:v;input.setCustomValidity('');
  }
  const a=core.calculateCashflow(scenarios.A),b=core.calculateCashflow(scenarios.B);
  el('lab-scenarios').textContent='A：'+(scenarios.A.pendingIncomeCents?'第 '+scenarios.A.payday+' 日到帳':'冇預計收入')+' · B：'+(scenarios.B.pendingIncomeCents?'第 '+scenarios.B.payday+' 日到帳':'冇預計收入');
  el('lab-closing').textContent='A '+money(a.closingCents)+' / B '+money(b.closingCents);
  el('lab-first-gap').textContent=b.firstDeficitDay?'第 '+b.firstDeficitDay+' 日 · 差 '+money(-b.ledger[b.firstDeficitDay-1].balanceCents):'七日結餘均非負數';
  el('lab-max-gap').textContent=money(b.gapCents);
  el('lab-first-gap').classList.toggle('negative',!!b.firstDeficitDay);
  el('lab-max-gap').classList.toggle('negative',!!b.gapCents);
  const peak=Math.max(1,...[a,b].flatMap(r=>r.ledger.map(day=>Math.abs(day.balanceCents))));
  function bar(row,label){
   const balance=row.balanceCents,width=Math.abs(balance)/peak*100;
   return '<span class="lab-series"><span>'+label+'</span><span class="balance-track" aria-hidden="true"><i class="'+(balance<0?'deficit':'')+'" style="width:'+width+'%"></i></span><strong class="'+(balance<0?'negative':'')+'">'+money(balance)+'</strong></span>';
  }
  el('balance-days').innerHTML=a.ledger.map((day,i)=>'<div class="balance-day"><span class="day-label">第 '+day.day+' 日</span>'+bar(day,'A')+bar(b.ledger[i],'B')+'</div>').join('');
  if(el('lab-ledger').open)renderLedger(a,b);
 }
 function renderLedger(a,b){
  const current=(active==='A'?a:b).ledger;
  el('lab-table').innerHTML='<table><caption>方案 '+active+' 每日明細及兩個方案結餘</caption><thead><tr>'+['日','收入','餐費','交通','飯券抵扣','電話','聚餐','A 結餘','B 結餘'].map(x=>'<th scope="col">'+x+'</th>').join('')+'</tr></thead><tbody>'+current.map((r,i)=>'<tr><th scope="row">'+r.day+'</th>'+[r.incomeCents,r.foodCents,r.travelCents,r.voucherCents,r.phoneCents,r.socialCostCents,a.ledger[i].balanceCents,b.ledger[i].balanceCents].map(c=>'<td class="'+(c<0?'negative':'')+'">'+money(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
 }
 fieldsFor('quick-fields',quick,true);
 fieldsFor('lab-income-fields',quick,false);
 fieldsFor('lab-expense-fields',Object.keys(fields).filter(name=>!quick.includes(name)),false);
 el('lab-ledger').addEventListener('toggle',()=>{if(el('lab-ledger').open)renderLedger(core.calculateCashflow(scenarios.A),core.calculateCashflow(scenarios.B))});
 render();
 document.querySelectorAll('[name=lab-tab]').forEach(r=>r.onchange=()=>{active=r.value;render()});
 el('lab-copy').onclick=()=>{scenarios.B={...scenarios.A};document.querySelector('[name=lab-tab][value=B]').click();render();status('已複製到 B。')};
 el('lab-delay').onclick=()=>{if(scenarios[active].payday>5)return status('延遲兩日會超出七日範圍。');scenarios[active].payday+=2;render()};
 el('lab-story').onclick=()=>{try{
  const anna=window.AnnaCase?.load(localStorage);
  if(anna?.state.clues.includes('bank')){
    scenarios[active]={...core.example(),openingCents:window.AnnaCase.BANK.reportedCents,pendingIncomeCents:0,
      foodCents:0,travelCents:0,voucherCents:0,phoneCents:0,socialCostCents:0};
    render();status('已帶入手機顯示餘額 $1.50。其他收支可用自訂假設試算。');return;
  }
  const s=JSON.parse(localStorage.getItem(core.KEY));
  if(!s?.clues?.includes('phone'))return status('目前未查到手上現金，可先用自訂範例。');
  const known=s.budgetDone?core.storyScenario(s):{...core.example(),pendingIncomeCents:0,foodCents:0,travelCents:0,voucherCents:0,phoneCents:0};
  scenarios[active]=known;render();status(s.budgetDone?'已複製故事預算。':'只複製已知現金，其他收支可以自行假設。');
 }catch{status('未能讀取故事。')}};
 el('lab-save').onclick=()=>{if(!el('cashflow').querySelector(':invalid'))try{localStorage.setItem(key,JSON.stringify({version:1,...scenarios}));status('已保存 A 同 B。')}catch{status('未能保存，請匯出方案。')}else status('請先修正輸入。')};
 el('lab-reset').onclick=()=>{scenarios=defaults();render();status('已還原範例，按保存先會取代本機方案。')};
 el('lab-delete').onclick=()=>{try{localStorage.removeItem(key);scenarios=defaults();render();status('已刪除本機方案。')}catch{status('未能刪除本機方案。')}};
 el('lab-export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({version:1,...scenarios},null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download='cashflow-A-B.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
 function clearImport(){pending=null;el('lab-confirm').hidden=el('lab-cancel').hidden=true;el('lab-import').value=''}
 el('lab-import').onchange=async e=>{const file=e.target.files[0];clearImport();if(!file)return;try{if(file.size>16384)throw Error();pending=unpack(await file.text());status('匯入預覽 · 期末 A '+money(core.calculateCashflow(pending.A).closingCents)+' ／ B '+money(core.calculateCashflow(pending.B).closingCents));el('lab-confirm').hidden=el('lab-cancel').hidden=false}catch{status('方案檔案無效。')}};
 el('lab-confirm').onclick=()=>{if(pending){scenarios=pending;clearImport();render();status('已套用，按保存保留。')}};
 el('lab-cancel').onclick=()=>{clearImport();status('已取消匯入。')};
})();

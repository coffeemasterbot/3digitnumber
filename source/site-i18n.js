(() => {
  'use strict';
  const key = 'money-journey-language';
  const inherited = () => {
    try { return window.parent !== window ? window.parent.siteLocale?.language : null; }
    catch { return null; }
  };
  function stored() {
    try { return localStorage.getItem(key) ?? localStorage.getItem('presentation-language'); }
    catch { return null; }
  }
  const valid = value => value === 'en' || value === 'zh';
  let language = inherited() ?? stored();
  if (!valid(language)) language = 'zh';
  const pairs = new Map();
  for (const section of Object.values(window.siteMessages)) {
    for (const line of section.trim().split('\n')) {
      const split = line.indexOf('|');
      if (split < 1) continue;
      pairs.set(line.slice(0,split),line.slice(split+1));
    }
  }
  const patterns = [
    [/^繼續遊玩 · (.+)$/, (_,name) => 'Continue · '+lookup(name)],
    [/^已玩 (\d+) 局$/, (_,n) => 'Runs: '+n],
    [/^(練習最佳|最佳) (\d+) 分$/, (_,label,n) => (label==='最佳'?'Best: ':'Practice best: ')+n],
    [/^(\d+) \/ (\d+) 項(街區任務|飛行任務|單人任務)$/, (_,n,total,name) => n+' / '+total+' '+lookup(name)],
    [/^已開放至第 (\d+) \/ (\d+) 關$/, (_,n,total) => 'Unlocked: '+n+' / '+total],
    [/^第 (\d+) (幕|關|波|輪)$/, (_,n,unit) => ({幕:'Act',關:'Stage',波:'Wave',輪:'Round'}[unit])+' '+n],
    [/^神殿 · 第 (\d+) 關$/, (_,n) => 'Temple · Stage '+n],
    [/^第 (\d+)／(\d+) 關・(.+)$/, (_,n,total,mode) => 'Stage '+n+' / '+total+' · '+lookup(mode)],
    [/^(.+) (\d+)／2・(.+) (\d+)／2・(♥+)$/, (_,a,one,b,two,hp) => [defaultDuo(a)+' '+one+'/2',defaultDuo(b)+' '+two+'/2',hp].join(' · ')],
    [/^已整理 (\d+)／4$/, (_,n) => n+' / 4 examined'],
    [/^(\d+) 個角度 · (\d+) 個疑點已解開$/, (_,n,solved) => n+' perspectives · '+solved+' questions resolved'],
    [/^第(\d+)幕：(.+)$/, (_,n,title) => 'Act '+n+': '+lookup(title)],
    [/^由 ([\d-]+) 開始。到當日先解鎖；錯過可以如實補記。$/, (_,date) => 'Started on '+date+'. Check-ins unlock on their date. You can record a missed day later.'],
    [/^第 (\d+) 行$/, (_,n) => 'Lane '+n],
    [/^([\d,]+) (分|秒|陽光|金幣|米)$/, (_,n,unit) => n+({分:' pts',秒:' s',陽光:' sun',金幣:' coins',米:' m'}[unit])],
    [/^分數 ([\d,]+)$/, (_,n) => 'Score '+n],
    [/^飛行距離 ([\d,]+) 米$/, (_,n) => 'Distance flown: '+n+' m'],
    [/^金幣 (\d+) \/ (\d+)$/, (_,n,total) => 'Coins '+n+' / '+total],
    [/^彈匣 (\d+) \/ 備彈 (\d+)$/, (_,mag,reserve) => 'Magazine '+mag+' / Reserve '+reserve],
    [/^換彈 ([\d.]+)s$/, (_,n) => 'Reloading '+n+' s'],
    [/^拉栓 ([\d.]+)s$/, (_,n) => 'Cycling '+n+' s'],
    [/^(\d+) 個機械人活動中$/, (_,n) => n+' active robots'],
    [/^中彈！餘下 (\d+) 生命值。$/, (_,n) => 'Hit! '+n+' health remaining.'],
    [/^([\d.]+) \/ (\d+) 秒$/, (_,n,total) => n+' / '+total+' s'],
    [/^撞到「(.+)」。$/, (_,kind) => 'You hit “'+lookup(kind)+'”.'],
    [/^尚餘 (\d+) 米$/, (_,n) => n+' m to go'],
    [/^剩 (\d+) 秒$/, (_,n) => n+' s left'],
    [/^散紙 × (\d+)$/, (_,n) => 'Change × '+n],
    [/^到達終點前，至少收集 (\d+) 枚金幣。$/, (_,n) => 'Collect at least '+n+' coins before the finish.'],
    [/^\$600 會喺 Day (\d+) 到帳。手上只得 \$50。先排基本生活，唔靠新借貸。$/, (_,n) => 'The $600 pay arrives on day '+n+'. You have $50 today. Plan essentials first without taking out a new loan.'],
    [/^Day (\d+) ／ (人工到帳|人工未到手)$/, (_,n,paid) => 'Day '+n+' / '+lookup(paid)],
    [/^最早 Day (\d+) 出現缺口，最大差 \$([\d.]+)。全週有剩，唔代表每日夠用。$/, (_,day,n) => 'The first gap is on day '+day+' and the largest shortfall is $'+n+'. A positive weekly total can still hide cash shortages.'],
    [/^基本需要同收入日期排好後，七日每日都冇負數，最後剩 \$([\d.]+)。$/, (_,n) => 'The balance stays nonnegative for all seven days, with $'+n+' left after essentials.'],
    [/^(\d+) 號 (\d\d:\d\d)$/, (_,day,time) => 'Day '+day+', '+time],
    [/^第 (\d+) 日到帳$/, (_,day) => 'Paid on day '+day],
    [/^第 (\d+) 日$/, (_,day) => 'Day '+day],
    [/^第 (\d+) 日 · 差 (.+)$/, (_,day,gap) => 'Day '+day+' · short by '+gap],
    [/^第 (\d+) \/ (\d+) 波$/, (_,n,total) => 'Wave '+n+' / '+total],
    [/^第 (\d+)\/(\d+) 波$/, (_,n,total) => 'Wave '+n+' / '+total],
    [/^未解鎖 · (?:第 (\d+) 關|世界 (\d+)) ?開放$/, (_,stage,world) => 'Locked · unlocks in '+(stage?'stage '+stage:'world '+world)],
    [/^(A|B)：(.+)$/, (_,plan,value) => plan+': '+lookup(value)],
    [/^(.+)（HK\$）$/, (_,label) => lookup(label)+' (HK$)'],
    [/^· (.+)$/, (_,label) => '· '+lookup(label)],
    [/^(.+) ·$/, (_,label) => lookup(label)+' ·'],
    [/^(重量|運動|光線) (\d+)$/, (_,temple,n) => lookup(temple)+' '+n],
    [/^([\d.]+)s 下一波$/, (_,n)=>n+' s to next wave'],
    [/^準備 (\d+) 秒$/, (_,n) => 'Prepare: '+n+' s'],
    [/^低頭 · 第 (\d+) 行弱點可攻擊$/, (_,n) => 'Vulnerable · Target the weak point in lane '+n],
    [/^第(\d+)列割草機，(.+)$/, (_,n,state) => 'Lane '+n+' mower, '+lookup(state)],
    [/^([\d,]+) 枚金幣。$/, (_,n) => n+' coins.'],
    [/^本機最佳 (\d+)$/, (_,n) => 'Local best: '+n],
    [/^(\d+ \/ \d+) 已完成$/, (_,n) => n+' completed'],
    [/^固定航線 ([A-Z0-9-]+)$/, (_,id) => 'Seeded route '+id],
    [/^([\d,]+) 點（完成 (\d+) 關解鎖）$/, (_,pts,n) => pts+' pts (unlock after '+n+' missions)'],
    [/^(\d+) 點$/, (_,n) => n+' pts'],
    [/^\/ (\d+) 準備點$/, (_,n) => '/ '+n+' preparation points'],
    [/^代碼 ([A-Z0-9-]+)$/, (_,id) => 'Code '+id],
    [/^三筆扣款合共 (.+)。同 (.+) 再對照一下。$/, (_,total,balance) => 'The debits add up to '+total+'. Compare that with '+balance+'.'],
    [/^已知扣款 (.+)，只按已知入帳同扣款推算餘 (.+)。留低差額，等完整月結單再核對。$/, (_,debits,balance) => 'Known debits total '+debits+'. The recorded salary and debits imply a balance of '+balance+'. Leave the difference unresolved until you have a full statement.'],
    [/^六張收據已有 (.+)。由一筆易漏支出開始記。$/, (_,amount) => 'Six receipts already total '+amount+'. Start by tracking one expense you tend to miss.'],
    [/^收集 (\d+) 陽光$/, (_,n) => 'Collect '+n+' sun'],
    [/^(.+)遊戲實際畫面$/, (_,name) => lookup(name)+' gameplay'],
  ];
  const defaultDuo=name=>name==='火仔'?'Fire':name==='冰仔'?'Ice':name;
  function lookup(value) {
    if (pairs.has(value)) return pairs.get(value);
    for (const [source, translate] of patterns) {
      if (source.test(value)) return value.replace(source, translate);
    }
    if (value.includes(' · ')) return value.split(' · ').map(lookup).join(' · ');
    return value;
  }
  function translate(value) {
    if (language!=='en'||typeof value!=='string'||!/[\u3400-\u9fff]/.test(value)) return value;
    const clean=value.trim();
    const unquoted=clean.startsWith('「')&&clean.endsWith('」')?clean.slice(1,-1):null;
    const result=lookup(clean);
    if(result===clean&&unquoted&&pairs.has(unquoted))return value.replace(clean,'“'+pairs.get(unquoted)+'”');
    return result===clean ? value : value.replace(clean,result);
  }
  const originalText=new WeakMap(),originalAttrs=new WeakMap();
  const localAttrs=['aria-label','aria-valuetext','alt','title','placeholder'];
  function localizeValue(current, saved) {
    const source=saved?.output===current?saved.source:current;
    return {source,output:translate(source)};
  }
  function visit(node) {
    if(node.nodeType===Node.TEXT_NODE){
      if(!node.parentElement||node.parentElement.closest('script,style,textarea,[translate="no"],[contenteditable],.player-name'))return;
      if(node.parentElement.matches('.duo-player-copy strong')&&!['火仔','冰仔'].includes(originalText.get(node)?.source??node.data))return;
      const record=localizeValue(node.data,originalText.get(node));
      if(record.output!==node.data){originalText.set(node,record);node.data=record.output;}
      return;
    }
    if(node.nodeType!==Node.ELEMENT_NODE||node.matches('script,style,[translate="no"]'))return;
    const records=originalAttrs.get(node)??{};
    for(const attr of localAttrs){
      const current=node.getAttribute(attr);
      if(current===null)continue;
      const record=localizeValue(current,records[attr]);
      if(record.output!==current){records[attr]=record;node.setAttribute(attr,record.output);}
    }
    if(Object.keys(records).length)originalAttrs.set(node,records);
    for(const child of node.childNodes)visit(child);
  }
  function sync() {
    document.documentElement.lang=language==='en'?'en':'zh-HK';
    visit(document.documentElement);
    document.querySelectorAll('[data-site-language]').forEach(button=>{
      button.textContent=language==='en'?'繁體中文':'English';
      button.lang=language==='en'?'zh-HK':'en';
    });
  }
  function use(value,save=false) {
    if(!valid(value)||value===language)return;
    language=value;
    if(save){try{localStorage.setItem(key,value);}catch{}}
    sync();
    window.dispatchEvent(new CustomEvent('site-language-change',{detail:value}));
    for(const frame of document.querySelectorAll('iframe')){
      try{frame.contentWindow?.siteLocale?.use(value);}catch{}
    }
  }
  function write(element,source) {
    const output=translate(source);
    if(element.firstChild?.nodeType!==Node.TEXT_NODE||element.childNodes.length!==1)element.textContent=output;
    else if(element.firstChild.data!==output)element.firstChild.data=output;
    if(element.firstChild)originalText.set(element.firstChild,{source,output});
  }
  window.siteLocale={get language(){return language},text:translate,write,use,set:value=>use(value,true)};
  const observer=new MutationObserver(changes=>{
    if(language!=='en')return;
    for(const change of changes){
      if(change.type==='childList')change.addedNodes.forEach(visit);
      else visit(change.target);
    }
  });
  observer.observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:localAttrs});
  window.addEventListener('storage',event=>{if(event.key===key)use(event.newValue);});
  document.addEventListener('click',event=>{
    if(event.target.closest?.('[data-site-language]'))use(language==='en'?'zh':'en',true);
  });
  document.documentElement.lang=language==='en'?'en':'zh-HK';
  document.addEventListener('DOMContentLoaded',sync,{once:true});
})();

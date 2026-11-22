(() => {
  'use strict';
  const C = window.AnnaCase;
  const $ = id => document.getElementById(id);
  const currency = new Intl.NumberFormat('zh-HK',{style:'currency',currency:'HKD',currencyDisplay:'narrowSymbol'});
  const money = cents => currency.format(cents/100);
  let session;
  try { session = C.load(localStorage); } catch { session = {status:'temporary',state:C.fresh()}; }
  let state = session.state, focusOrigin;
  const boxNote = '這些是我不要的，如果我不在了，請幫我扔掉。';
  const voiceText = '為什麼？為什麼我又變回窮光蛋了？明天怎麼面對大家……';
  const pageNames = ['失物箱','城市地圖','儲物櫃','結案'];
  const clueTitles = {
    phone:'碎屏舊手機', receipt:'貼返埋嘅餐廳單', diary:'剩返一頁嘅日記',
    fridge:'雪櫃', drawer:'櫃桶', desk:'電腦枱', wardrobe:'衣櫃', landlord:'房東證詞',
    bank:'手機銀行訊息', receipts:'六張散紙收據', notebook:'殘破記帳本',
  };
  const tips = [
    ['陳警長','失物箱喺檔案室，可以逐件查。'],
    ['偵探','將你見到嘅嘢同你估嘅嘢分開。餐廳單嘅總額，同睇到嘅菜品有冇出入？'],
    ['醫生','櫃桶嘅法文標籤可以搵中文釋義。問過房東，再比較阿俊嘅日常需要。'],
    ['心理學家','記帳中斷未必代表唔關心。對照記帳本同實際收據，睇下有邊啲開支容易漏。'],
    ['社工','先聽佢最擔心乜，再一齊分開「而家要處理」同「仲要核實」嘅帳目。'],
  ];
  const tasks = {
    reserve:{intro:'房東話阿俊曾經想借 $200 睇醫生。用櫃桶同房東證詞核對應急需要。',game:'種植至少兩株植物，守完花園第一波，保留最少 50 陽光。'},
    coordinate:{intro:'沿地圖分頭查，再會合。',game:'合作解開重量神殿第一關。'},
    receipts:{intro:'細額支出好容易唔記得。',game:'沿街道拾到 5 件收據。'},
    offer:{intro:'一個優惠值唔值得，要睇埋額外支出。',game:'飛行 20 秒並拾到 5 個資源，留意沿途成本。'},
    verify:{intro:'阿俊想用一筆 $20,000 新貸款還舊債。先核對條款，再決定下一步。',game:'核對終端資料，再完成一輪裝置拆解。'},
  };
  const questions = {
    reserve:{
      title:'睇醫生嘅開支應該點處理？',
      choices:[['wait','等下一次出糧先理，$200 唔算多。'],['evidence','求診係即時需要。問清費用及可用支援，將應急金納入預算。'],['spend','先假定手機上嘅入帳額仍然可以用。']],
      hint:'再比對房東嘅 $200 證詞，同手機顯示現時餘額。'
    },
    verify:{
      title:'喺確認新貸款前，可以同阿俊做乜？',
      choices:[['borrow','先按確認，將所有還款留到下個月。'],['guess','只比較即時入帳金額，揀最大嗰筆。'],['evidence','暫停確認，一齊核對總還款、到期日同手續費，再商量支援。']],
      hint:'先比較要還幾多同幾時還，再判斷新貸款會唔會令負擔增加。'
    },
  };
  const dialog = $('case-dialog');
  const button = (label, attrs, style='') => '<button type="button" '+attrs+' class="'+style+'">'+label+'</button>';
  function save() {
    if(session.status==='recovery'||session.status==='temporary')return;
    try { localStorage.setItem(C.KEY,JSON.stringify(state)); }
    catch { session.status='temporary'; }
  }
  function announce(message) { $('case-status').textContent=message; }
  function saveWarning() {
    const node=$('save-warning');
    node.hidden=session.status==='ready';
    node.textContent=session.status==='recovery'?'未能讀取存檔。原檔已保留，可到「存檔」匯出或重設。':'呢個瀏覽器暫時未能儲存。可以繼續調查，或者由「存檔」下載進度。';
  }
  function commit(type,value,{focus=false,paint=true}={}) {
    const next=C.apply(state,type,value);
    if(next===state)return false;
    state=next;
    save();
    if(paint)render(focus);
    return true;
  }
  function open(title,body) {
    if(!dialog.open)focusOrigin=document.activeElement;
    $('dialog-title').textContent=title;
    $('dialog-body').innerHTML=body;
    if(!dialog.open)dialog.showModal();
    $('dialog-close').focus();
  }
  $('dialog-close').onclick=()=>dialog.close();
  function refreshNarration(){const control=dialog.querySelector('[data-action=voice]');if(control)control.hidden=!getVoice();}
  window.addEventListener('site-language-change',()=>{window.speechSynthesis?.cancel();refreshNarration()});
  window.speechSynthesis?.addEventListener('voiceschanged',refreshNarration);
  dialog.addEventListener('close',()=>{
    window.speechSynthesis?.cancel();
    if(focusOrigin?.isConnected)focusOrigin.focus({preventScroll:true});
    else $('act-title')?.focus({preventScroll:true});
  });
  function logButton(id,label=clueTitles[id],extra='') {
    return button(label+(C.identified(state,id)?'<small>已查看</small>':''),'data-clue="'+id+'" '+extra,'hotspot');
  }
  function tasksBlock(id) {
    if(!C.questReady(state,id))return '';
    const task=tasks[id], done=state.challenges[id];
    return '<section class="case-task" data-case-task="'+id+'" tabindex="-1"><div><h3>'+C.CHALLENGES[id].title+'</h3><p>'+task.intro+'</p></div>'+
      (done?'<p class="resolved">已完成證物核對</p>':
      '<div class="case-actions">'+(questions[id]?button('用證物推理','data-reason="'+id+'"','secondary'):'')+'</div>')+'</section>';
  }
  const nextButton = label => button(label,'data-action="advance" '+(C.mayAdvance(state)?'':'disabled'),'primary');
  const trail = () => '<ol class="case-trail" aria-label="四幕調查">'+pageNames.map((name,i)=>'<li'+(state.act===i+1?' aria-current="step"':'')+'><span>'+String(i+1).padStart(2,'0')+'</span>'+name+'</li>').join('')+'</ol>';
  const header = (title,lead) => '<h1 id="act-title" tabindex="-1">'+title+'</h1><p class="lead">'+lead+'</p>';
  function opening() {
    return '<div class="opening"><div>'+header('失物認領處','陳警長請你接手一宗失蹤案。過去三個月，每逢 6 號就有一位年輕人失蹤。阿俊寄來一箱失物，幾日冇返工，亦冇返屋企。')+
      '<p>佢寄出呢個箱之前，留低一張字條。</p>'+button('打開失物箱','data-action="start"','primary')+
      '</div><div class="case-box" aria-label="失物箱上嘅字條"><div class="box-note"><span>阿俊寄件</span><blockquote>「'+boxNote+'」</blockquote></div></div></div>';
  }
  function station() {
    return header('警局失物認領處','「我哋只有呢箱嘢。你睇到嘅線索，可能同我哋唔同。」　陳警長')+
      '<blockquote class="case-quote">「'+boxNote+'」</blockquote><div class="exhibit-row">'+C.OPENING.map((id,index)=>'<div class="evidence-tile"><div class="prop prop-'+id+'" aria-hidden="true"><i></i><b></b></div>'+logButton(id)+'</div>').join('')+
      '</div><div class="case-actions">'+nextButton('去對面酒店')+'<p>先查看三件失物。</p></div>';
  }
  function cityMap() {
    return '<div class="city-map" aria-label="城市地圖"><div class="city-street" aria-hidden="true"></div>'+[
      ['station','警局'],['hotel','酒店'],['home','阿俊嘅屋企'],['cafe','咖啡店'],
    ].map(([id,name])=>button(name,'data-place="'+id+'"','map-'+id)).join('')+
      button('<span aria-hidden="true"></span>'.repeat(15),'data-place="white" aria-label="一片白色方格"','map-white')+'</div>';
  }
  function apartment() {
    return header('阿俊嘅屋企','過咗一晚，陳警長喺警局攤開地圖。你由同一條街去到阿俊住嘅唐樓。')+
      '<div class="investigation-layout"><section><h2>城市地圖</h2>'+cityMap()+'</section><section><h2 id="floor-title" tabindex="-1">屋企平面圖</h2><div class="floor-plan">'+
      ['fridge','drawer','desk','wardrobe'].map(id=>'<div class="room room-'+id+'"><div aria-hidden="true" class="furniture furniture-'+id+'"></div>'+logButton(id)+'</div>').join('')+
      '</div><div class="case-actions">'+logButton('landlord')+button(state.unlocked?'重看手機訊息':'輸入手機密碼','data-action="phone"','secondary')+'</div></section></div>'+
      (state.unlocked&&!state.reconciled?'<div class="case-actions">'+logButton('bank','核對銀行訊息')+'</div>':'')+
      tasksBlock('coordinate')+tasksBlock('reserve')+'<div class="case-actions">'+nextButton('去咖啡店')+
      '<p>查齊屋企線索、核對銀行訊息，再完成「預留應急資源」。</p></div>';
  }
  function hotel() {
    if(state.oriented)return apartment();
    return header('警局對面嘅酒店','你熄咗房燈。好似有一張單據，喺門罅下面慢慢滑入嚟。')+
      '<div class="hotel-scene"><div class="hotel-door"><span>06</span></div><div class="red-slip" aria-hidden="true"></div></div>'+
      '<div class="case-actions">'+button('查看異夢','data-action="dream"','secondary')+button('去警局睇城市地圖','data-action="orient"','primary')+'</div>';
  }
  function cafe() {
    return header('咖啡店員工休息室','店長交低備用鎖匙。「佢幾日冇返嚟，入去拎返阿俊啲嘢啦。」')+
      '<div class="locker-scene" aria-label="休息室有一排儲物櫃，其中一個貼住阿俊名字"><div class="locker" aria-hidden="true"></div><div class="locker focus-locker"><span>阿俊</span></div><div class="locker" aria-hidden="true"></div></div>'+
      '<div class="case-actions">'+logButton('receipts')+logButton('notebook')+'</div>'+tasksBlock('receipts')+tasksBlock('offer')+
      '<div class="case-actions">'+nextButton('去自修室 C 區 13 號')+'<p>先查收據同記帳本。</p></div>';
  }
  const debriefs = [
    ['面子消費','對照衣櫃、雪櫃同餐廳單，分開為咗維持形象嘅開支同生活所需。'],
    ['小額開支','六張收據已有 '+money(C.receiptTotal())+'。由一筆易漏支出開始記。'],
    ['應急資源','先辨認有時限嘅必需開支，再睇有咩資源可以調動。'],
    ['借新還舊','比較總還款、成本、日期同支援選擇，先決定下一步。'],
    ['入帳同扣款時間','5 號晚入帳，6 號凌晨扣款。要用完整記錄先可以解釋結餘。'],
  ];
  function finale() {
    if(state.completed)return header('結案 · 認領返下一步','門鎖打開。阿俊願意先暫停確認借款，同你一齊逐筆核對帳目。')+
      '<dl class="case-debrief">'+debriefs.map(([title,copy])=>'<div><dt>'+title+'</dt><dd>'+copy+'</dd></div>').join('')+'</dl>'+
      '<div class="case-actions">'+button('開始十四日行動卡','data-action="plan"','primary')+button('回看案情簿','data-action="dossier"','secondary')+'</div>';
    return header('自修室 C 區 13 號','地圖上嘅白格原來係自修室包廂。陳警長喺門外等你，阿俊喺入面諗住確認一筆新借款。')+
      '<blockquote class="case-quote">「只要撳確認，我就可以借到兩萬蚊，清咗之前嘅卡數，撐過今個月。」</blockquote>'+
      (!state.heard?'<div class="case-actions">'+button('先聽你講，今晚最擔心啲乜？','data-action="listen"','primary')+
      button('叫佢即刻自己處理','data-action="check-response"','secondary')+'</div>':
      '<p>「我最驚係一停落嚟，就要面對晒所有人。」阿俊願意一齊睇貸款畫面。</p>'+tasksBlock('verify')+
      (state.challenges.verify?'<div class="case-actions">'+button('一齊核對帳單，完成結案','data-action="complete"','primary')+'</div>':''));
  }
  function render(focus=false) {
    $('case-main').innerHTML=(state.act?trail():'')+[opening,station,hotel,cafe,finale][state.act]();
    saveWarning();
    if(focus) {
      $('act-title').focus({preventScroll:true});
      window.scrollTo({top:0,behavior:'instant'});
    }
  }
  function ledger() {
    const bank=C.BANK, math=C.bankMath();
    const rows=[[bank.income.day,bank.income.time,'工資入帳',bank.income.cents],...bank.debits.map(d=>[d.day,d.time,'自動扣款',-d.cents])];
    return '<table class="case-ledger"><caption>手機上嘅銀行訊息</caption><thead><tr><th scope="col">日期</th><th scope="col">交易</th><th scope="col">金額</th></tr></thead><tbody>'+
      rows.map(([day,time,label,cents])=>'<tr><td>'+day+' 號 '+time+'</td><td>'+label+'</td><td>'+money(cents)+'</td></tr>').join('')+
      '</tbody></table><p class="evidence-total">顯示餘額 <strong>'+money(bank.reportedCents)+'</strong></p>'+
      '<details><summary>語音備忘錄逐字稿</summary><blockquote>「'+voiceText+'」</blockquote>'+
      button('播放廣東話旁白','data-action="voice" '+(getVoice()?'':'hidden'),'secondary')+'</details>'+
      (!state.reconciled&&state.act===2?'<form id="reconcile"><fieldset><legend>由呢幾筆訊息，可以得出咩結論？</legend>'+
      '<label><input type="radio" name="conclusion" value="complete" required> $1.50 已經可以由三筆扣款完整解釋。</label>'+
      '<label><input type="radio" name="conclusion" value="incomplete"> 推算餘額同畫面唔一致，仲有交易或期初餘額要核對。</label>'+
      '<label><input type="radio" name="conclusion" value="guessed"> 用餐廳單同散紙收據自動補晒差額。</label></fieldset><button class="primary">核對結論</button><p class="feedback" role="status" id="reconcile-feedback"></p></form>':
      '<div class="case-finding"><strong>未核實差額 '+money(math.differenceCents)+'</strong><p>已知扣款 '+money(math.debitCents)+'，只按已知入帳同扣款推算餘 '+money(math.calculatedCents)+'。留低差額，等完整月結單再核對。</p></div>');
  }
  function getVoice() {
    const english=window.siteLocale?.language==='en';
    return window.speechSynthesis?.getVoices().find(v=>v.localService&&(english?/^en(?:[-_]|$)/i:/^(zh[-_]HK|yue)/i).test(v.lang));
  }
  function clueBody(id) {
    switch(id) {
      case 'phone':return '<p>舊手機冇電，屏幕由右上裂開。充電後要輸入六位數字。</p>'+
        (state.unlocked?button('查看銀行訊息','data-clue="bank"','secondary'):'<p>案情簿等你找到密碼線索。</p>');
      case 'receipt':return '<article class="receipt-prop"><span>餐廳帳單</span><dl><div><dt>便宜意粉</dt><dd>1 份</dd></div><div><dt>清水</dt><dd>1 杯</dd></div></dl><p class="evidence-total">印出總額 <strong>HK$1,280</strong></p></article><p>收據曾經被撕開，菜單只有一份意粉同一杯水。先記低出入。</p>';
      case 'diary':return '<blockquote class="paper-fragment">「明天就是6號了，一切都會好起來的。」</blockquote><p>其他頁都被撕走，句子下面留低一條重重嘅筆痕。</p>';
      case 'fridge':return '<p>雪櫃入面幾乎空晒，剩低一塊發霉嘅麵包同一瓶自來水。</p>';
      case 'drawer':return '<div class="bottle-row">'+[['stomach','Médicament pour l’estomac','胃藥'],['pain','Antalgique','止痛藥'],['sleep','Mélatonine','褪黑素']].map(([style,fr,zh])=>'<div class="bottle '+style+'"><b lang="fr">'+fr+'</b><small>醫生提示 · '+zh+'</small></div>').join('')+'</div><p>三瓶都過期。房東可能知道多啲。</p>';
      case 'desk':return '<p>電腦屏幕角落貼住一張黃色便利貼。</p><blockquote class="sticky-note">心心241125，勿忘</blockquote>'+button('輸入手機密碼','data-action="phone"','secondary');
      case 'wardrobe':return '<p>衣櫃掛住面試用嘅名牌西裝，下面有幾對限量球鞋。屋企嘅日常食物同呢度見到嘅嘢形成對比。</p>';
      case 'landlord':return '<blockquote>「佢以前每月 6 號一早就交租，依家已經欠咗三個月。上個月佢胃痛，想借 $200 睇醫生。」</blockquote><p>呢段係房東嘅證詞。扣款同出糧時間要以可見記錄核對。</p>';
      case 'bank':return ledger();
      case 'receipts':return '<ul class="receipts">'+C.RECEIPTS.map(([name,cents])=>'<li><span>'+name+'</span><strong>'+money(cents)+'</strong></li>').join('')+'</ul><p class="evidence-total">六張樣本合計 <strong>'+money(C.receiptTotal())+'</strong></p><p>呢啲係櫃入面搵到嘅樣本。</p>';
      case 'notebook':return '<article class="paper-fragment"><h3>記帳本</h3><p>早餐 $10　午餐 $30</p><p>之後好多頁都留白。中間一頁被用力劃爛。</p><blockquote class="red-ink">「到底錢花去哪了？？？」<br>「我明明沒買什麼大件啊！」<br>「這個月又超支了，下個月一定記！」</blockquote></article><p>同事話阿俊經常搶住請客，嗰張餐廳單係佢幫成枱埋單嗰次。</p>';
      default:return '';
    }
  }
  function showClue(id) {
    if(!Object.hasOwn(clueTitles,id))return;
    commit('clue',id,{paint:false});
    if(!C.identified(state,id))return;
    open(clueTitles[id],clueBody(id));
    render();
  }
  function dossier() {
    open('案情簿',state.clues.length?'<ul class="dossier-list">'+state.clues.map(id=>'<li>'+logButton(id)+'</li>').join('')+'</ul>':'<p>打開失物箱後，你睇過嘅證物會記喺呢度。</p>');
  }
  function help() {
    const [role,tip]=tips[state.act];
    open('專家提示','<p><strong>'+role+'</strong>　'+tip+'</p>'+
      (state.act===2?'<p><strong>黑客</strong>　密碼係六位數。睇下電腦枱有冇私人記事。</p>':'')+
      (state.act===4?'<p><strong>咒術師</strong>　紅色單據係調查入面嘅象徵。結論要由你查到嘅證物支持。</p>':''));
  }
  function saveMenu() {
    open('調查存檔','<p>調查進度保留喺呢個瀏覽器。可以下載備份或者匯入以前嘅調查進度。</p>'+
      '<div class="case-actions">'+button('下載目前進度','data-action="export"','secondary')+
      (session.raw?button('下載損壞原檔','data-action="export-raw"','secondary'):'')+'</div>'+
      '<label>選擇備份檔 <input id="case-import" type="file" accept=".json,application/json"></label><p id="import-feedback" class="feedback" role="status"></p>'+
      button('確認匯入','id="accept-import" hidden','primary')+'<details><summary>重新調查</summary><p>會清除本機主線故事進度。</p>'+
      button('確認重設主線故事','data-action="reset"','secondary')+'</details>');
  }
  function download(text,name) {
    const url=URL.createObjectURL(new Blob([text],{type:'application/json;charset=utf-8'}));
    const link=document.createElement('a');
    link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),5000);
  }
  function phone() {
    if(state.unlocked)return showClue('bank');
    if(!C.identified(state,'desk'))return open('碎屏舊手機','<p>手機仍然鎖住。去電腦枱睇下有冇六位數相關嘅線索。</p>');
    open('輸入手機密碼','<form id="pin-form"><label for="pin">六位數密碼</label><input id="pin" name="pin" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" autocomplete="off" required><button class="primary">解鎖</button><p class="feedback" role="status" id="pin-feedback"></p></form>');
    $('pin').focus();
  }
  function reason(id) {
    const q=questions[id];
    if(!q||!C.questReady(state,id)||state.challenges[id])return;
    open(q.title,'<form id="case-reason" data-id="'+id+'"><fieldset><legend>揀一個最有證物支持嘅做法</legend>'+
      q.choices.map(([value,copy])=>'<label><input name="answer" type="radio" value="'+value+'" required> '+copy+'</label>').join('')+
      '</fieldset><button class="primary">核對證物</button><p class="feedback" id="reason-feedback" role="status"></p></form>');
  }
  function parentMessage(data) {
    parent.postMessage(data,location.origin==='null'?'*':location.origin);
  }
  const actions={
    start:()=>commit('start',null,{focus:true}),
    advance:()=>commit('advance',null,{focus:true}),
    orient:()=>commit('orient',null,{focus:true}),
    dream:()=>open('酒店異夢','<p>你聽到布料擦過床尾。醒咗之後，窗外已經天光，枕邊多咗一張空白紅色單據。</p><p>你將單據收好，朝早返去警局。</p>'+button('去警局睇城市地圖','data-action="leave-dream"','primary')),
    'leave-dream':()=>{dialog.close();commit('orient',null,{focus:true});},
    phone, dossier, listen:()=>commit('listen','listen',{focus:true}),
    'check-response':()=>open('試另一句開場','<p>門後面靜咗。可以先問阿俊最擔心乜，畀佢時間答你。</p>'),
    complete:()=>commit('complete',null,{focus:true}),
    voice:()=>{const voice=getVoice();if(!voice)return;const utterance=new SpeechSynthesisUtterance(window.siteLocale?.text(voiceText)??voiceText);utterance.lang=voice.lang;utterance.voice=voice;window.speechSynthesis.cancel();window.speechSynthesis.speak(utterance);},
    export:()=>download(JSON.stringify(state,null,2),'anna-case-save.json'),
    'export-raw':()=>{if(session.raw)download(session.raw,'anna-case-unreadable.json');},
    reset:()=>{
      try{localStorage.removeItem(C.KEY);session={status:'ready'};}
      catch{session={status:'temporary'};}
      state=C.fresh();dialog.close();render(true);
    },
    plan:()=>{if(parent!==window)parentMessage({type:'website-v1-play',key:'plan'});else location.href='../#play-plan';},
  };
  $('dossier').onclick=dossier;
  $('help').onclick=help;
  $('save-menu').onclick=saveMenu;
  document.querySelector('.case-brand').addEventListener('click',event=>{
    if(parent!==window){event.preventDefault();parentMessage({type:'website-v1-back'});}
  });
  document.addEventListener('click',event=>{
    const trigger=event.target.closest('button');
    if(!trigger)return;
    const data=trigger.dataset;
    if(data.clue)showClue(data.clue);
    else if(data.place==='home'){$('floor-title').scrollIntoView({block:'nearest'});$('floor-title').focus({preventScroll:true});}
    else if(Object.hasOwn(mapNotes,data.place))open(...mapNotes[data.place]);
    else if(data.reason)reason(data.reason);
    else if(Object.hasOwn(actions,data.action))actions[data.action]();
  });
  const mapNotes={
    station:['警局','<p>陳警長同你喺呢度攤開地圖。失物箱同證物紀錄喺案情簿。</p>'],
    hotel:['酒店','<p>酒店就喺警局正對面。你醒來時，枕邊多咗一張紅色單據。</p>'],
    cafe:['咖啡店','<p>阿俊返工嘅地方。查清屋企嘅線索再出發。</p>'],
    white:['一片白色方格','<p>地圖上冇寫用途。再搵多啲線索。</p>'],
  };
  document.addEventListener('submit',event=>{
    const form=event.target;
    event.preventDefault();
    const values=new FormData(form);
    if(form.id==='pin-form') {
      if(commit('unlock',values.get('pin'),{paint:false}))showClue('bank');
      else $('pin-feedback').textContent='密碼唔啱，對照電腦枱張便利貼再試。';
    } else if(form.id==='reconcile') {
      if(commit('reconcile',values.get('conclusion')))open(clueTitles.bank,ledger());
      else $('reconcile-feedback').textContent='三筆扣款合共 '+money(C.bankMath().debitCents)+'。同 $1.50 再對照一下。';
    } else if(form.id==='case-reason') {
      const id=form.dataset.id;
      if(values.get('answer')==='evidence'&&commit('resolve',{id,via:'evidence'})) {
        dialog.close();announce('證物推理已完成。');
      } else $('reason-feedback').textContent=questions[id].hint;
    }
  });
  document.addEventListener('change',async event=>{
    if(event.target.id!=='case-import')return;
    const field=event.target, file=field.files[0], label=$('import-feedback'),accept=$('accept-import');
    accept.hidden=true;
    if(!file)return;
    try {
      if(file.size>65536)throw Error('too large');
      const pending=C.validate(JSON.parse(await file.text()));
      if(!field.isConnected||field.files[0]!==file)return;
      label.textContent=pending.act?'備份進度 · 第 '+pending.act+' 幕，'+pending.clues.length+' 件證物。':'備份進度 · 調查未開始。';
      accept.hidden=false;
      accept.onclick=()=>{state=pending;session={status:'ready'};save();dialog.close();render(true);announce('已匯入調查進度。');};
    } catch {
      if(label.isConnected)label.textContent='讀唔到備份，請揀有效嘅主線故事存檔。';
    }
  });
  render();
})();

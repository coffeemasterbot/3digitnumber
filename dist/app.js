'use strict';
const labels={story:'失物認領處',plan:'我的十四日行動',...Object.fromEntries(window.gameCatalogue.map(game=>[game.key,game.title+' ／ '+game.genre.split(' / ').pop()]))};
const $=id=>document.getElementById(id);let active=null,originFocus=null;
function read(key,fallback){try{const value=JSON.parse(localStorage.getItem(key));return value&&typeof value==='object'&&!Array.isArray(value)?value:fallback}catch{return fallback}}
function caseProgress(){
  try{return window.AnnaCase.load(localStorage).state}catch{return null}
}
function setPlayerTitle(label,back='返回網站'){
  $('player-title').textContent=label;
  $('back-home').textContent=back;
}
function flushFrame(frame){
  try{frame?.contentWindow?.flushArcadeResult?.()}catch{}
}
function makeFrame(kind,name=''){
  const frame=document.createElement('iframe');
  frame.title=labels[kind];
  frame.id='game-frame';
  frame.allow=kind==='plan'?'autoplay; fullscreen; web-share; clipboard-write':'autoplay; fullscreen';
  if(window.gameCatalogue.some(game=>game.key===kind))frame.dataset.arcadeGame=kind;
  if(name)frame.name=name;
  return frame;
}
function mountFrame(frame,kind){
  if(window.offlineMount)window.offlineMount(frame,kind);
  else frame.src=({
    story:'story/anna.html',plan:'story/index.html?plan=1',
    defence:'games/budget-defence/index.html',coins:'games/runner/index.html',shipping:'games/jet/index.html',instalments:'games/garden/index.html',
  }[kind])||'story/index.html?arcade='+encodeURIComponent(kind);
}
function launch(kind,habitSuggestion='',testTarget=null,surveyHandled=false){
  if(!Object.hasOwn(labels,kind))return;
  const game=window.gameCatalogue.find(entry=>entry.key===kind);
  if(game&&!testTarget&&!surveyHandled&&window.pfapSurvey?.beforeGame(
    kind,()=>launch(kind,habitSuggestion,testTarget,true)))return;
  if(!active)originFocus=document.activeElement;
  flushFrame($('game-frame'));
  active=kind;
  if(!testTarget&&window.gameCatalogue.some(game=>game.key===kind))window.trackEvent?.('game-launch-'+kind);
  $('landing').hidden=true;
  $('play-panel').hidden=false;
  document.querySelector('footer').hidden=true;
  setPlayerTitle(labels[kind]);
  const frame=makeFrame(kind,testTarget?'arcade-test-v1/'+kind+'/'+testTarget:'');
  if(kind==='plan'&&habitSuggestion)frame.dataset.habit=habitSuggestion.slice(0,120);
  const loading=document.createElement('p');
  if(kind==='plan'){
    window.pfapSurvey?.watchPlan(frame);
    loading.className='plan-loading';
    loading.setAttribute('role','status');
    loading.textContent='載入中…';
    frame.addEventListener('load',()=>loading.remove(),{once:true});
  }
  mountFrame(frame,kind);
  $('frame-host').replaceChildren(...(kind==='plan'?[loading,frame]:[frame]));
  history.replaceState(null,'',testTarget?'#dev-tools':'#play-'+kind);
  window.scrollTo({top:0,behavior:'instant'});
}
function leavePlay(){
  const frame=$('game-frame');
  flushFrame(frame);
  frame?.remove();
  document.querySelector('.plan-loading')?.remove();
  active=null;
  $('play-panel').hidden=true;
  $('landing').hidden=false;
  document.querySelector('footer').hidden=false;
  window.dispatchEvent(new Event('arcade-records-change'));
}
function home(){
  const backAnchor=active==='story'||active==='plan'?'story':'arcade';
  leavePlay();
  history.replaceState(null,'','#'+backAnchor);
  $(backAnchor).scrollIntoView();
  if(originFocus?.isConnected)originFocus.focus({preventScroll:true});
}
document.querySelectorAll('[data-play]').forEach(b=>b.addEventListener('click',()=>launch(b.dataset.play,b.id==='lab-action'?$('lab-habit').value:'')));
$('back-home').onclick=home;
$('player-reload').onclick=()=>{
  const frame=$('game-frame');
  if(!frame)return;
  flushFrame(frame);
  if(window.offlineMount)window.offlineMount(frame,frame.dataset.offlineKey);
  else frame.src=frame.src;
};
document.querySelectorAll('.site-header a[href^="#"]').forEach(a=>a.addEventListener('click',event=>{
  if(event.metaKey||event.ctrlKey||event.altKey||event.shiftKey)return;
  const id=a.hash.slice(1),target=$(id);
  if(!target)return;
  event.preventDefault();
  if(active)leavePlay();
  if(location.hash!==a.hash)history.pushState(null,'',a.hash);
  target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
}));
function showInfo(html){$('info-body').innerHTML=html;$('info-dialog').showModal()};$('info-close').onclick=()=>$('info-dialog').close();
document.querySelector('[data-progress]').onclick=()=>{
  const current=caseProgress(),action=read('lost-found-action-v1',read('life-lost-found-guided-v5',{})),free=read('website-v1-arcade',{});
  const progress=current?.completed?'已結案':current?.act?'第 '+current.act+' 幕':'未開始';
  const days=Array.isArray(action.stamps)?action.stamps.filter(stamp=>stamp&&!stamp.demo).length:0;
  showInfo(`<h2>我的旅程</h2><div class="progress-row">主線故事 <span class="progress-value">${progress}</span></div><div class="progress-row">已查看證物 <span class="progress-value">${current?.clues.length||0}</span></div><div class="progress-row">有紀錄嘅遊戲 <span class="progress-value">${Object.keys(free).length} / 5</span></div><div class="progress-row">十四日行動 <span class="progress-value">${days} / 14 日</span></div><p>進度儲存喺目前瀏覽器。調查同遊戲大廳都可以下載備份。</p><div class="buttons"><button class="primary" id="resume-progress">${current?.act?'繼續調查':'開始調查'}</button></div>`);
  $('resume-progress').onclick=()=>{$('info-dialog').close();launch('story');};
};
function refreshCaseLabel(){
  const current=caseProgress();
  const start=document.querySelector('#story [data-play="story"]');
  if(start)start.textContent=current?.completed?'重看結案':current?.act?'繼續調查':'開始調查';
}
refreshCaseLabel();
window.addEventListener('arcade-records-change',refreshCaseLabel);
$('privacy-open').onclick=()=>showInfo('<div class="eyebrow">私隱說明</div><h2>你嘅記錄，喺你手上。</h2><p>主線進度、遊戲回顧同十四日行動存在瀏覽器 localStorage。主線毋須登入。開啟公開成績後，排行榜會顯示暱稱、遊戲、模式、成績及遊玩時間，並使用匿名 cookie 識別此瀏覽器。你可以刪除由此瀏覽器發布嘅成績；阿俊嘅故事存檔留喺本機。</p><p>網上版本用匿名瀏覽器識別碼統計訪問同正式開局，成效報表只向獲授權嘅團隊成員開放。</p><p data-survey-privacy>前後測屬自願。網站用隨機代碼配對，問卷只收集自評、習慣選項同活動種類，並與故事、排行榜同訪問紀錄分開。獲授權嘅團隊成員可以睇匯總結果。</p><p>請勿喺行動卡填寫戶口、收入或欠款等敏感資料。下載嘅行動卡會保存在你裝置。清除網站資料會移除本機進度。</p><p>外部官方連結按其服務條款及私隱政策運作。網站託管服務本身亦可能處理基本連線記錄。</p>');
window.addEventListener('message',e=>{
  const f=$('game-frame');
  if(e.source!==f?.contentWindow||e.origin!==location.origin&&!(window.offlineMount&&e.origin==='null'))return;
  if(e.data?.type==='website-v1-back')home();
  else if(e.data?.type==='website-v1-play')launch(e.data.key);
  else if(e.data?.type==='pfap-defence-round-over'&&active==='defence'&&!f.name)window.pfapSurvey?.finished('defence');
  else if(e.data?.type==='arcade-records-change'&&!$('landing').hidden)window.dispatchEvent(new Event('arcade-records-change'));
});
function syncPlayerRoute(){
  const hash=location.hash;
  if(hash==='#play-plan'){
    if(active)leavePlay();
    history.replaceState(null,'',location.pathname+location.search);
    window.scrollTo({top:0,behavior:'instant'});
    return;
  }
  const key=hash.slice('#play-'.length);
  if(hash.startsWith('#play-')&&Object.hasOwn(labels,key)){
    if(active!==key)launch(key);
  }else{
    if(active)leavePlay();
    $(hash.slice(1))?.scrollIntoView();
  }
}
document.addEventListener('DOMContentLoaded',syncPlayerRoute,{once:true});
// Keep the iframe in sync when browser Back/Forward crosses an anchor navigation.
window.addEventListener('popstate',syncPlayerRoute);

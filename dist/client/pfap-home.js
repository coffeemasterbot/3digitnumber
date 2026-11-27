(() => {
  'use strict';
  // This hash gates a browser-only demo. It grants no server privileges.
  const DEV_PASSWORD_HASH = '40fb589fe000ee385ac60beebdd8b10483fffddafe0c885b9f477bd83114fa0e';
  const id = value => document.getElementById(value);
  const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  };
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
  const pagesEdition = document.body.hasAttribute('data-pfap-static') &&
    location.origin==='https://coffeemasterbot.github.io' && !window.offlineMount;
  const onlineEdition = /^https?:$/.test(location.protocol) && !window.offlineMount && !document.body.hasAttribute('data-pfap-static');
  let scoreOwner = pagesEdition && read('pfap-score-owner',null);
  if (pagesEdition && !/^[a-f0-9-]{36}$/i.test(scoreOwner ?? '')) {
    scoreOwner = crypto.randomUUID();
    save('pfap-score-owner',scoreOwner);
  }
  const sharedEdition = onlineEdition || pagesEdition;
  window.trackEvent = function trackEvent(name) {
    if (!onlineEdition || navigator.onLine === false) return;
    try { window.goatcounter?.count?.({path:name, event:true, no_session:true, referrer:''}); }
    catch { /* Analytics never blocks play. */ }
  };
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[download]');
    if (link && /\.html$/i.test(link.download || new URL(link.href, location.href).pathname)) trackEvent('offline-html-download');
  }, {capture:true});

  const gameKeys = {coins:'runner', shipping:'jet', instalments:'garden', pause:'forest', defence:'defence'};
  const numberStages = (total, prefix='stage', label='第 ') => Array.from(
    {length:total}, (_, i) => [prefix+'-'+(i+1), label+(i+1)+(label==='任務 '? '' : ' 關')]);
  const difficultyLabels = {standard:'標準', relaxed:'輕鬆', hard:'挑戰'};
  const boards = {
    runner:[['endless','無盡跑酷']],
    jet:[['endless','無盡飛行']],
    garden:numberStages(5),
    forest:Object.entries(difficultyLabels).flatMap(([key,title]) => numberStages(9,'relay-'+key+'-stage').map(([board,label])=>[board,title+' · '+label])),
    defence:[['quick','快速三輪'],['ex','EX 關'], ...[1,2,3].flatMap(round => [
      [round+'-verify','地圖 '+round+' · 核對帳目'], [round+'-dispatch','地圖 '+round+' · 上傳資料'], [round+'-hold','地圖 '+round+' · 雙目標演習']])],
  };
  const localKey = 'pfap-personal-bests-v1';
  const publishKey = 'pfap-score-publish';
  const dialog = id('pfap-scores');
  const gameField = id('score-game');
  const boardField = id('score-board');
  const seedField = id('score-seed');
  const publish = id('score-publish');
  const player = id('score-player');
  const list = id('score-entries');
  const status = id('score-status');
  let view = 'top';
  let reading = null;
  let recent = read('pfap-last-played', null);
  window.pfapScores = {lastPlayed:()=>recent};
  for (const game of window.gameCatalogue) gameField.add(new Option(game.title, gameKeys[game.key]));
  publish.checked = read(publishKey, false) === true;
  try { player.value = localStorage.getItem('arcade-player-name') ?? ''; } catch {}
  publish.addEventListener('change', () => save(publishKey, publish.checked));
  player.addEventListener('input', () => { try { localStorage.setItem('arcade-player-name', player.value); } catch {} });

  id('score-publish-controls').hidden = !sharedEdition;
  id('score-host-notice').hidden = sharedEdition;
  for (const button of document.querySelectorAll('[data-score-view]')) {
    if (!sharedEdition && button.dataset.scoreView !== 'mine') {
      button.hidden = true;
      continue;
    }
    button.addEventListener('click', () => {
      view = button.dataset.scoreView;
      if (!dialog.open) dialog.showModal();
      loadScores();
    });
  }
  gameField.addEventListener('change', () => { listBoards(); loadScores(); });
  boardField.addEventListener('change', loadScores);
  seedField.addEventListener('input', loadScores);
  dialog.addEventListener('close', () => { reading?.abort(); id('score-delete-confirm').hidden=true; });
  function listBoards() {
    boardField.replaceChildren(...boards[gameField.value].map(([key,title])=>new Option(title,key)));
  }
  listBoards();
  function resolveBoard() {
    if (boardField.value !== 'seed') return boardField.value;
    const code = seedField.value.trim().toUpperCase();
    return /^[A-Z0-9-]{1,24}$/.test(code) ? 'seed-'+code : null;
  }
  async function api(path, options={}) {
    const bridge = pagesEdition && path!=='activity';
    const url = (bridge ? 'https://lost-found-money-journey.cottonpatch1.chatgpt.site' : '') + '/api/' + path;
    const headers = new Headers(options.headers);
    if (bridge) headers.set('x-pfap-score-owner',scoreOwner);
    const response = await fetch(url,{...options,headers,credentials:bridge?'omit':'same-origin'});
    if (!response.ok) throw new Error('Leaderboard request failed');
    return response.json();
  }
  const post = (path, body) => api(path, {method:'POST', headers:{'content-type':'application/json'},
    body:JSON.stringify(body), keepalive:true});
  function showEntry(label, line) {
    const entry = document.createElement('li');
    if(list.dataset.view==='top'){
      const rank=document.createElement('span');
      rank.className='score-rank';
      rank.textContent='#'+(list.children.length+1);
      entry.append(rank);
    }
    const title = document.createElement('strong');
    title.textContent = label;
    const value = document.createElement('span');
    value.textContent = line;
    entry.append(title, value);
    list.append(entry);
  }
  function resultLabel(game, result) {
    const score = game === 'forest' ? '靈體 '+result.score : result.score+' 分';
    if (!result.duration) return score;
    return score+' · '+(result.duration / 1000).toFixed(1)+' 秒';
  }
  function legacyBest(game, board) {
    if (board !== 'practice') return null;
    const key = Object.keys(gameKeys).find(item=>gameKeys[item]===game);
    const old = read('website-v1-records', {})[key];
    return old?.plays > 0 && Number.isFinite(old.best) ? {score:old.best} : null;
  }
  async function loadScores() {
    reading?.abort();
    const controller = reading = new AbortController();
    const game = gameField.value;
    const board = resolveBoard();
    showManual(latestResult?.game===game&&latestResult.board===board?latestResult:null);
    id('score-seed-label').hidden = boardField.value !== 'seed';
    id('pfap-score-title').textContent = {mine:'我的成績', top:'公開排行榜', recent:'最新成績'}[view];
    dialog.querySelectorAll('[data-score-view]').forEach(button =>
      button.setAttribute('aria-pressed', String(button.dataset.scoreView === view)));
    list.replaceChildren();
    list.dataset.view=view;
    if (!board) { status.textContent = '請輸入種子代碼。'; return; }
    const best = read(localKey, {})[game]?.[board] ?? legacyBest(game,board);
    if (view === 'mine' && best) showEntry('本機最佳', resultLabel(game,best));
    if (!sharedEdition) {
      status.textContent = best ? '離線模式：顯示本機紀錄' : '暫時未有成績。';
      return;
    }
    status.textContent = '載入中…';
    try {
      const params = new URLSearchParams({game,board,view});
      const result = await api('leaderboard?'+params, {signal:controller.signal});
      if (controller.signal.aborted) return;
      for (const entry of result.entries) showEntry(entry.player,resultLabel(game,entry));
      status.textContent = list.children.length?'':'暫時未有成績。';
    } catch {
      if (!controller.signal.aborted){
        list.dataset.view='mine';
        if(view!=='mine'&&best)showEntry('本機最佳',resultLabel(game,best));
        status.textContent = '離線模式：顯示本機紀錄';
      }
    }
  }

  id('score-delete').addEventListener('click', () => { id('score-delete-confirm').hidden=false; });
  id('score-delete-confirm').addEventListener('click', async () => {
    id('score-delete-confirm').hidden=true;
    try { await api('runs/mine', {method:'DELETE'}); loadScores(); }
    catch { status.textContent = '未能刪除，請再試。'; }
  });

  let pagesVisitor = null;
  if(pagesEdition)try{
    pagesVisitor=read('pfap-pages-visitor',null);
    if(typeof pagesVisitor!=='string'||!/^[a-f0-9-]{36}$/i.test(pagesVisitor)){
      pagesVisitor=crypto.randomUUID();
      save('pfap-pages-visitor',pagesVisitor);
    }
  }catch{}
  function sendActivity(body){
    if(navigator.onLine===false)return Promise.resolve();
    if(onlineEdition)return post('activity',body);
    if(!pagesVisitor)return Promise.resolve();
    return fetch('https://lost-found-money-journey.cottonpatch1.chatgpt.site/api/activity',{
      method:'POST',headers:{'content-type':'application/json'},credentials:'omit',keepalive:true,
      body:JSON.stringify({...body,visitor:pagesVisitor})
    });
  }
  const activityReady = sendActivity({type:'visit'}).catch(()=>null);
  let openRun = null;
  let latestResult = null;
  const manual=id('score-manual');
  const manualName=id('score-result-name');
  const manualStatus=id('score-manual-status');
  const manualButton=manual.querySelector('button');
  const manualKey='pfap-score-nickname';
  manualName.value=String(read(manualKey,player.value)).slice(0,14);
  function showManual(result){
    manual.hidden=!sharedEdition||!result||result.score<=0;
    manualButton.disabled=!!(result?.submitted||result?.uploading);
    manualStatus.textContent=result?.submitted?'最新一局已加入公開排行榜。':'';
  }
  async function submitScore(result,nickname){
    if(!result||result.submitted||result.uploading)return;
    result.uploading=true;
    if(latestResult===result)showManual(result);
    try{
      const session=await result.remote;
      if(!session){
        if(latestResult===result)manualStatus.textContent='今局未有網上紀錄，下次連線後開局即可上傳。';
        return;
      }
      const {score,duration,distance}=result;
      await post('runs/finish',{id:session.id,score,duration,distance,...(nickname?{nickname}:{})});
      result.submitted=true;
      syncStatus.textContent='最新一局已加入公開排行榜。';
      if(latestResult===result)manualStatus.textContent=syncStatus.textContent;
      if(dialog.open)loadScores();
    }catch{
      syncStatus.textContent='已保留本機成績，未能上傳。';
      if(latestResult===result)manualStatus.textContent='未能上傳分數，請稍後再試。';
    }finally{
      result.uploading=false;
      if(latestResult===result)manualButton.disabled=result.submitted===true;
    }
  }
  manual.addEventListener('submit',event=>{
    event.preventDefault();
    const name=manualName.value.trim().slice(0,14);
    if(!name||!latestResult)return;
    save(manualKey,name);
    submitScore(latestResult,name);
  });
  const syncStatus = id('score-sync');
  function saveBest(run, {score,duration,distance}) {
    const data = read(localKey, {});
    const local = data && typeof data === 'object' && !Array.isArray(data) ? data : {};
    const saved = local[run.game];
    const scores = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
    const time = Math.round(duration*1000);
    const before = scores[run.board];
    if (before && (before.score > score || (before.score === score && before.duration <= time))) return;
    delete scores[run.board];
    scores[run.board] = {score,duration:time,distance};
    local[run.game] = Object.fromEntries(Object.entries(scores).slice(-96));
    save(localKey,local);
  }
  const validBoard = (game, board) => boards[game]?.some(([key])=>board===key&&key!=='seed') ||
    ((game==='runner'||game==='jet') && /^seed-[A-Z0-9-]{1,24}$/.test(board));
  const frameOrigin = event => event.origin === location.origin || (!!window.offlineMount && event.origin === 'null');
  window.addEventListener('message', async event => {
    const frame = id('game-frame');
    const message = event.data;
    if(frame&&event.source===frame.contentWindow&&frameOrigin(event)&&!frame.name&&active==='plan'&&message?.type==='pfap-habit-day4'){
      window.unlockAchievement?.('meta_day4');
      return;
    }
    if (!frame || event.source !== frame.contentWindow || !frameOrigin(event) ||
        frame.name || message?.type !== 'pfap-arcade-run') return;
    if(openRun?.id===message.id && (message.action==='trophies'||message.action==='cleared')){
      let playerAudio;
      try{playerAudio=frame.contentWindow.PFAPAudio}catch{}
      if(message.action==='trophies')window.pfapAchievements?.event(openRun.game,message.ids,playerAudio);
      else{
        window.pfapAchievements?.clear(openRun.game);
        if(openRun.game==='forest')window.pfapAchievements?.forest(message.stage,playerAudio);
      }
      return;
    }
    if (message.action === 'scores' && latestResult?.frame===frame && latestResult.id===message.id) {
      const {game,board}=latestResult;
      gameField.value=game;
      listBoards();
      boardField.value=board;
      if (!boardField.value) boardField.add(new Option(board,board,true,true));
      view=sharedEdition?'top':'mine';
      showManual(latestResult);
      if (document.fullscreenElement) await document.exitFullscreen().catch(()=>{});
      if (!dialog.open) dialog.showModal();
      loadScores();
      return;
    }
    if (message.action === 'start' && Object.hasOwn(gameKeys,active) && gameKeys[active]===message.game &&
        typeof message.id === 'string' && /^[a-f0-9-]{36}$/i.test(message.id)) {
      activityReady.then(()=>sendActivity({type:'start',game:message.game,id:message.id})).catch(()=>{});
      recent = active;
      save('pfap-last-played',active);
      window.dispatchEvent(new CustomEvent('pfap-played',{detail:active}));
      openRun = null;
      latestResult = null;
      showManual(null);
      syncStatus.textContent='';
      if (!validBoard(message.game,message.board)) return;
      const shared = sharedEdition && publish.checked;
      const remote = sharedEdition && navigator.onLine !== false
        ? post('runs/start',{game:message.game,board:message.board,difficulty:message.difficulty,player:shared?player.value:undefined}).catch(()=>null)
        : Promise.resolve(null);
      openRun={id:message.id, game:message.game, board:message.board, remote, shared};
      return;
    }
    if (message.action !== 'finish' || !openRun || message.id !== openRun.id) return;
    if (!Number.isSafeInteger(message.score) || message.score<0 ||
        !Number.isFinite(message.duration) || message.duration<0 ||
        !Number.isFinite(message.distance) || message.distance<0) return;
    const finished = openRun;
    openRun = null;
    const result=latestResult={...finished,frame,score:message.score,duration:message.duration,distance:message.distance};
    saveBest(finished,message);
    window.pfapAchievements?.finish();
    if (finished.board === 'endless' && ['runner','jet'].includes(finished.game)) {
      window.pfapSurvey?.finished(finished.game);
    }
    if(finished.shared&&publish.checked&&message.score>0)await submitScore(result);
    if (dialog.open) loadScores();
  });

  const passwordDialog = id('dev-password-dialog');
  const passwordForm = id('dev-password-form');
  const field = passwordForm.querySelector('input');
  const submit = passwordForm.querySelector('.primary');
  const error = id('dev-password-error');
  const authKey = 'pfap_dev_unlocked';
  const stagesKey = 'pfap_dev_all_stages';
  let devPanel = null;
  let attempt = 0;
  function allowed(key) { try { return sessionStorage.getItem(key)==='1'; } catch { return false; } }
  function openDevPrompt() {
    if (allowed(authKey) || passwordDialog.open) return;
    passwordForm.reset();
    error.textContent='';
    field.removeAttribute('aria-invalid');
    passwordDialog.showModal();
  }
  function closeDevPrompt() {
    attempt++;
    passwordForm.reset();
    field.removeAttribute('aria-invalid');
    error.textContent='';
    submit.disabled=false;
    if (passwordDialog.open) passwordDialog.close();
  }
  function revealDevTools() {
    if (!allowed(authKey) || devPanel) return;
    const template = id('dev-template');
    template.after(template.content.cloneNode(true));
    devPanel = id('dev-tools');
    const picker = id('dev-picker');
    const game = id('dev-game');
    const target = id('dev-target');
    for (const entry of window.gameCatalogue) game.add(new Option(entry.title, entry.key));
    function updateTargets() {
      target.replaceChildren(...window.arcadeDevTargets[game.value].map(stage=>new Option(stage,stage)));
    }
    updateTargets();
    game.addEventListener('change', updateTargets);
    picker.hidden = !allowed(stagesKey);
    id('dev-all').addEventListener('click', () => {
      try { sessionStorage.setItem(stagesKey,'1'); picker.hidden=false; game.focus(); }
      catch { id('dev-all').textContent='瀏覽器未能保存開發者工作階段。'; }
    });
    id('dev-start').addEventListener('click', () => {
      if (allowed(authKey) && allowed(stagesKey)) launch(game.value,'',target.value);
    });
    id('dev-lock').addEventListener('click', () => {
      if (id('game-frame')?.name.startsWith('arcade-test-v1/')) home();
      try { sessionStorage.removeItem(authKey); sessionStorage.removeItem(stagesKey); } catch {}
      devPanel.remove();
      devPanel=null;
      const url=new URL(location.href);
      url.searchParams.delete('dev');
      if (url.hash==='#dev-tools') url.hash='#play';
      history.replaceState(history.state,'',url.href);
    });
  }
  passwordForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled) return;
    error.textContent='';
    field.removeAttribute('aria-invalid');
    const ticket=++attempt;
    submit.disabled=true;
    try {
      const bytes=new TextEncoder().encode(field.value);
      field.value='';
      const digest=await crypto.subtle.digest('SHA-256',bytes);
      if (ticket!==attempt || !passwordDialog.open) return;
      const hex=Array.from(new Uint8Array(digest),byte=>byte.toString(16).padStart(2,'0')).join('');
      if (hex!==DEV_PASSWORD_HASH) {
        field.setAttribute('aria-invalid','true');
        error.textContent='密碼不正確，請再試。';
        field.focus();
        return;
      }
      sessionStorage.setItem(authKey,'1');
      closeDevPrompt();
      revealDevTools();
      devPanel.scrollIntoView({block:'nearest'});
    } catch {
      if (ticket===attempt) error.textContent='瀏覽器未能驗證或保存開發者工作階段。';
    } finally {
      if (ticket===attempt) submit.disabled=false;
    }
  });
  id('dev-cancel').addEventListener('click',closeDevPrompt);
  passwordDialog.addEventListener('cancel',event=>{ event.preventDefault(); closeDevPrompt(); });
  let clicks=[];
  id('site-version').addEventListener('click',()=>{
    const now=performance.now();
    clicks=clicks.filter(at=>now-at<=3000);
    clicks.push(now);
    if (clicks.length===5) { clicks=[]; openDevPrompt(); }
  });
  window.addEventListener('message', event=>{
    if (!allowed(authKey)||!allowed(stagesKey)) return;
    const frame=id('game-frame'), message=event.data;
    if (!frame || event.source!==frame.contentWindow || !frameOrigin(event) || message?.type!=='arcade-test-v1') return;
    const targets=window.arcadeDevTargets[message.game];
    const index=targets?.indexOf(message.target)??-1;
    if (index<0 || frame.name!=='arcade-test-v1/'+message.game+'/'+message.target ||
        message.runId!==frame.contentWindow.arcadeTest?.runId) return;
    if (message.action==='end') home();
    else if (message.action==='restart') launch(message.game,'',message.target);
    else if (message.action==='next') launch(message.game,'',targets[(index+1)%targets.length]);
  });
  revealDevTools();
  if (new URL(location.href).searchParams.get('dev')==='1') openDevPrompt();
})();

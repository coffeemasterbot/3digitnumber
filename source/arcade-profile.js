(() => {
  const games=Object.fromEntries(window.gameCatalogue.map(game=>[game.key,game.title]));
  const panel=document.getElementById('arcade-profile');
  const name=panel.querySelector('input[type=text]'),status=panel.querySelector('output');
  const file=panel.querySelector('input[type=file]'),confirm=panel.querySelector('[data-import]');
  let pending=null,profile={name:'玩家',recent:null};
  function validateProfile(p){
    if(!p||typeof p.name!=='string'||p.name.length>30||!(p.recent===null||Object.hasOwn(games,p.recent)))throw Error('玩家檔案格式有誤');
    return {name:p.name,recent:p.recent};
  }
  function read(key,fallback){
    const raw=localStorage.getItem(key);return raw===null?fallback:JSON.parse(raw);
  }
  function readOptional(key,fallback){try{return read(key,fallback)}catch{return fallback}}
  const keys={runner:'runner-expeditions-v1',jet:'jet-courses-v2',defence:'fps-missions-v1',forest:'forest-temples-v2',garden:'garden-extras-v1'};
  const jetIds=['basics','warning','rotor','piston','gravity','blink','mix','reserve'];
  const bestScores=(items,pattern,limit=80)=>Object.fromEntries(Object.entries(items&&typeof items==='object'?items:{})
    .filter(([key,value])=>pattern.test(key)&&Number.isSafeInteger(value)&&value>=0).slice(-limit));
  const integers=(items,min,max)=>Array.isArray(items)?[...new Set(items.filter(value=>Number.isInteger(value)&&value>=min&&value<=max))].sort((a,b)=>a-b):[];
  const jetBestKey=/^jet-best-(?:endless|trial|mission-(?:basics|warning|rotor|piston|gravity|blink|mix|reserve)|seed-[A-Z0-9-]{1,24})$/;
  function campaignData(raw){
    const run=raw?.runner, unlocked=Number.isInteger(run?.unlocked)?Math.max(0,Math.min(7,run.unlocked)):0;
    const forest=Number.isInteger(raw?.forest)?Math.max(1,Math.min(9,raw.forest)):1;
    return {
      runner:{version:1,unlocked,cleared:integers(run?.cleared??Array.from({length:unlocked},(_,i)=>i),0,unlocked),
        best:bestScores(run?.best,/^(?:endless|mission-[0-7]|seed-[A-Z0-9-]{1,24})$/)},
      jet:jetIds.filter(id=>Array.isArray(raw?.jet)&&raw.jet.includes(id)),
      jetBest:bestScores(raw?.jetBest,jetBestKey),
      defence:{version:1,completed:bestScores(raw?.defence?.completed,/^[1-3]-(?:verify|dispatch|hold)$/)},
      forest,
      garden:{version:1,unlocked:raw?.garden?.unlocked===true,scores:bestScores(raw?.garden?.scores,/^(?:survival|limited|seeds|mowers|armour|giants)$/)},
    };
  }
  function campaigns(){
    const raw=Object.fromEntries(Object.entries(keys).map(([name,key])=>[name,readOptional(key,null)]));
    const jetBest={};
    for(let i=0;i<localStorage.length;i++){
      const key=localStorage.key(i);
      if(jetBestKey.test(key))jetBest[key]=readOptional(key,0);
    }
    return campaignData({...raw,jetBest});
  }
  function mergeScores(left,right,compare=Math.max){
    return Object.fromEntries([...new Set([...Object.keys(left),...Object.keys(right)])].map(key=>
      [key,Object.hasOwn(left,key)&&Object.hasOwn(right,key)?compare(left[key],right[key]):left[key]??right[key]]));
  }
  function mergeCampaigns(incoming){
    const now=campaigns(),r=now.runner,i=incoming.runner;
    const runner={version:1,unlocked:Math.max(r.unlocked,i.unlocked),cleared:[...new Set([...r.cleared,...i.cleared])].sort((a,b)=>a-b),best:mergeScores(r.best,i.best)};
    const merged=campaignData({
      runner,jet:[...now.jet,...incoming.jet],jetBest:mergeScores(now.jetBest,incoming.jetBest),
      defence:{completed:mergeScores(now.defence.completed,incoming.defence.completed,Math.min)},
      forest:Math.max(now.forest,incoming.forest),
      garden:{unlocked:now.garden.unlocked||incoming.garden.unlocked,scores:mergeScores(now.garden.scores,incoming.garden.scores)},
    });
    for(const [name,key] of Object.entries(keys))localStorage.setItem(key,JSON.stringify(merged[name]));
    for(const [key,score] of Object.entries(merged.jetBest))localStorage.setItem(key,String(score));
  }
  try{profile=validateProfile(read('arcade-profile-v2',profile))}catch{}
  name.value=profile.name;
  function save(){try{localStorage.setItem('arcade-profile-v2',JSON.stringify(profile))}catch{status.textContent='瀏覽器未能保存。請匯出備份。'}}
  function gameProgress(){
    const garden=GardenRules.campaign(localStorage).progress;
    return validateProgress({campaignVersion:garden.version,gardenStage:garden.unlocked,seedRules:1,legacyRepeater:garden.legacyRepeater,runnerBest:read('runner-detailed-best',0),jetBest:read('jj_highscore',0)});
  }
  function validateProgress(p){
    if(!p||!Number.isInteger(p.gardenStage)||p.gardenStage<1||p.gardenStage>15)throw Error();
    for(const value of [p.runnerBest,p.jetBest])if(!Number.isSafeInteger(value)||value<0)throw Error();
    if(p.seedRules!==undefined&&(p.seedRules!==1||typeof p.legacyRepeater!=="boolean"))throw Error();
    const garden=GardenRules.normalize({version:p.campaignVersion??2,unlocked:p.gardenStage,seedRules:p.seedRules,legacyRepeater:p.legacyRepeater});
    return {campaignVersion:garden.version,gardenStage:garden.unlocked,seedRules:1,legacyRepeater:garden.legacyRepeater,runnerBest:p.runnerBest,jetBest:p.jetBest};
  }
  function records(){
    const saved=read('website-v1-records',{}),result={};
    for(const key of Object.keys(games)){
      if(!saved[key])continue;
      const {best,plays}=saved[key];
      if(![best,plays].every(v=>Number.isFinite(v)&&v>=0))continue;
      result[key]={best,plays};
    }
    return result;
  }
  function render(){
    let scores={};try{scores=records()}catch{}
    let current;try{current=campaigns()}catch{current=campaignData({})}
    const milestones={
      coins:current.runner.cleared.length+' / 8 項街區任務',
      shipping:current.jet.length+' / 8 項飛行任務',
      defence:Object.keys(current.defence.completed).length+' / 9 項單人任務',
      pause:'共 9 關 · 挑戰解鎖',
      instalments:'共 5 關 · 挑戰解鎖',
    };
    const list=panel.querySelector('ul');list.replaceChildren();
    for(const [key,title] of Object.entries(games)){
      const li=document.createElement('li');li.textContent=title+' · '+(scores[key]?'最佳 '+scores[key].best+' 分 · '+scores[key].plays+' 局':'未有紀錄');list.append(li);
      const progress=document.querySelector('[data-game-card="'+key+'"] [data-game-progress]');
      if(progress){
        if(key==='instalments'&&current.garden.unlocked)milestones[key]+=' · 已開放生存及挑戰';
        const record=scores[key];
        const scoreLabel=key==='coins'||key==='shipping'?'練習最佳 ':'最佳 ';
        progress.textContent=[milestones[key],record?.plays?'已玩 '+record.plays+' 局':'',record?.best?scoreLabel+record.best+' 分':''].filter(Boolean).join(' · ');
      }
    }
    const resume=panel.querySelector('[data-resume]');
    const homeResume=document.querySelector('[data-home-resume]');
    const recorded=Object.keys(scores).filter(key=>scores[key].plays>0);
    const started=window.pfapScores?.lastPlayed();
    const recent=Object.hasOwn(games,started)?started:recorded.includes(profile.recent)?profile.recent:recorded[0];
    resume.hidden=homeResume.hidden=!recent;
    resume.textContent=recent?'繼續遊玩 · '+games[recent]:'';
    homeResume.textContent=resume.textContent;
    resume.onclick=recent?()=>document.querySelector('[data-play="'+recent+'"]')?.click():null;
    homeResume.onclick=recent?()=>resume.click():null;
  }
  window.addEventListener('pfap-played',event=>{
    if(Object.hasOwn(games,event.detail)){profile.recent=event.detail;save();render()}
  });
  window.addEventListener('arcade-records-change',render);
  window.addEventListener('storage',event=>{
    if(event.key===null||event.key==='website-v1-records'||event.key==='garden-campaign-v3'||Object.values(keys).includes(event.key))render();
  });
  name.onchange=()=>{profile.name=name.value.trim().slice(0,30)||'玩家';name.value=profile.name;save()};
  panel.querySelector('[data-export]').onclick=()=>{
    try{
      const data={version:2,profile,records:records(),progress:gameProgress(),campaigns:campaigns()};
      const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
      const a=document.createElement('a');a.href=url;a.download='arcade-records-v2.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    }catch{status.textContent='未能讀取本機紀錄。'}
  };
  file.onchange=async()=>{
    pending=null;confirm.hidden=true;
    const selected=file.files[0];if(!selected)return;
    try{
      if(selected.size>65536)throw Error();
      const d=JSON.parse(await selected.text());if(d.version!==2||!d.records||typeof d.records!=='object'||Array.isArray(d.records))throw Error();
      const safe={};
      for(const [k,v] of Object.entries(d.records)){
        if(!Object.hasOwn(games,k)||!v||!Number.isFinite(v.best)||v.best<0||!Number.isSafeInteger(v.plays)||v.plays<0)throw Error();
        safe[k]={best:v.best,plays:v.plays};
      }
      pending={profile:validateProfile(d.profile),records:safe,progress:d.progress===undefined?null:validateProgress(d.progress),
        campaigns:d.campaigns===undefined?null:campaignData(d.campaigns)};
      status.textContent='V2 · '+pending.profile.name+' · '+Object.keys(safe).length+' 款遊戲有紀錄。'+(pending.progress?'花園第 '+pending.progress.gardenStage+' 關。':'')+'確認後合併最佳成績及局數。';confirm.hidden=false;
    }catch{status.textContent='格式或版本有誤，請重新選擇備份。'}
  };
  confirm.onclick=()=>{
    if(!pending)return;
    try{
      const current=read('website-v1-records',{});
      for(const [k,v] of Object.entries(pending.records)){
        const prev=current[k]||{};
        current[k]={...prev,best:Math.max(prev.best||0,v.best),plays:Math.max(prev.plays||0,v.plays)};
      }
      if(pending.progress){
        const saved=gameProgress(),incoming=pending.progress;
        localStorage.setItem('garden-campaign-v3',JSON.stringify({version:3,unlocked:Math.max(saved.gardenStage,incoming.gardenStage),seedRules:1,legacyRepeater:saved.legacyRepeater||incoming.legacyRepeater}));
        localStorage.setItem('runner-detailed-best',String(Math.max(saved.runnerBest,incoming.runnerBest)));
        localStorage.setItem('jj_highscore',String(Math.max(saved.jetBest,incoming.jetBest)));
      }
      if(pending.campaigns)mergeCampaigns(pending.campaigns);
      localStorage.setItem('website-v1-records',JSON.stringify(current));
      profile=pending.profile;save();name.value=profile.name;pending=null;confirm.hidden=true;render();status.textContent='已匯入成績。';
    }catch{status.textContent='未能保存，請保留備份檔。'}
  };
  render();
})();

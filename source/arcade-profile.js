(() => {
  const games={instalments:'植物防守',pause:'冰火人',shipping:'Jetpack',coins:'街頭跑酷',defence:'預算防衛戰'};
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
  try{profile=validateProfile(read('arcade-profile-v2',profile))}catch{}
  name.value=profile.name;
  function save(){try{localStorage.setItem('arcade-profile-v2',JSON.stringify(profile))}catch{status.textContent='瀏覽器未能保存。請匯出備份。'}}
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
    const list=panel.querySelector('ul');list.replaceChildren();
    for(const [key,title] of Object.entries(games)){
      const li=document.createElement('li');li.textContent=title+' · '+(scores[key]?'最佳 '+scores[key].best+' 分 · '+scores[key].plays+' 局':'未有紀錄');list.append(li);
    }
    const resume=panel.querySelector('[data-resume]');resume.hidden=!profile.recent;
    if(profile.recent)resume.textContent='再玩'+games[profile.recent];
  }
  panel.querySelector('[data-resume]').onclick=()=>document.querySelector('[data-play="'+profile.recent+'"]').click();
  document.addEventListener('click',e=>{
    const key=e.target.closest('[data-play]')?.dataset.play;
    if(Object.hasOwn(games,key)){profile.recent=key;save();render()}
    if(e.target.closest('#back-home'))render();
  });
  window.addEventListener('storage',render);
  name.onchange=()=>{profile.name=name.value.trim().slice(0,30)||'玩家';name.value=profile.name;save()};
  panel.querySelector('[data-export]').onclick=()=>{
    try{
      const data={version:2,profile,records:records()};
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
      pending={profile:validateProfile(d.profile),records:safe};
      status.textContent='V2 · '+pending.profile.name+' · '+Object.keys(safe).length+' 款遊戲有紀錄。確認後合併最佳成績及局數。';confirm.hidden=false;
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
      localStorage.setItem('website-v1-records',JSON.stringify(current));
      profile=pending.profile;save();name.value=profile.name;pending=null;confirm.hidden=true;render();status.textContent='已匯入成績。';
    }catch{status.textContent='未能保存，請保留備份檔。'}
  };
  render();
})();

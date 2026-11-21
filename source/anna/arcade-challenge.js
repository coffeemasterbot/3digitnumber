(() => {
  'use strict';
  if(parent===window)return;
  const [protocol,id,runId]=window.name.split('/');
  if(protocol!=='arcade-story-v1'||!/^[a-z0-9-]{12,80}$/i.test(runId||''))return;
  const goals={
    reserve:()=>{const s=window.detailedGameSnapshot?.();return s?.state==='playing'&&s.wave>=2&&s.sun>=50&&s.plants>=2;},
    coordinate:()=>window.moneyJourneySnapshot?.()?.cleared>=1,
    receipts:()=>window.detailedGameSummary?.()?.coins>=5,
    offer:()=>{const s=window.detailedGameSnapshot?.();return s?.state==='playing'&&s.seconds>=20&&s.coins>=5;},
    verify:()=>{const s=window.fpsSnapshot?.();return s?.phase==='roundend'&&s.verified===true;},
  };
  if(!Object.hasOwn(goals,id))return;
  window.arcadeStory={id,runId};
  const data=new Map();
  Object.defineProperty(window,'localStorage',{value:{
    getItem:key=>data.get(String(key))??null,
    setItem:(key,value)=>data.set(String(key),String(value)),
    removeItem:key=>data.delete(String(key)),
    clear:()=>data.clear(),
    key:index=>Array.from(data.keys())[index]??null,
    get length(){return data.size;},
  }});
  let delivered=false;
  function check() {
    if(delivered||!goals[id]())return;
    delivered=true;
    clearInterval(timer);
    parent.postMessage({type:'case-game-result',id,runId,completed:true},location.origin==='null'?'*':location.origin);
  }
  const timer=setInterval(check,250);
  window.addEventListener('arcade-game-state',check);
  window.addEventListener('pagehide',()=>{check();clearInterval(timer);});
})();

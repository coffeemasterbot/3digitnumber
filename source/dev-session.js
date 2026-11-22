(() => {
 const missions=Array.from({length:8},(_,i)=>'mission-'+(i+1));
 const targets={defence:[...Array.from({length:3},(_,i)=>'round-'+(i+1)),...[1,2,3].flatMap(n=>['verify','dispatch','hold'].map(mode=>'mission-'+n+'-'+mode))],pause:Array.from({length:9},(_,i)=>i+1).map(n=>'temple-'+n),
  instalments:GardenRules.STAGES.flatMap(stage=>Array.from({length:GardenRules.WAVES},(_,j)=>'garden-'+stage.world+'-'+(j+1))),
  shipping:[...missions,'drill','gravity','blink','mecha','dragon','glider'],coins:[...missions,'jetpack','pogo','magnet','shoes']};
 window.arcadeDevTargets=targets;
 if(parent===window)return;
 const [version,game,target]=window.name.split('/');
 if(version!=='arcade-test-v1'||!targets[game]?.includes(target))return;
 const data=new Map();
 Object.defineProperty(window,'localStorage',{value:{getItem:k=>data.get(String(k))??null,setItem:(k,v)=>data.set(String(k),String(v)),removeItem:k=>data.delete(String(k)),clear:()=>data.clear(),key:i=>Array.from(data.keys())[i]??null,get length(){return data.size}}});
 if(game==='coins')localStorage.setItem('runner-expeditions-v1',JSON.stringify({version:1,unlocked:7,cleared:[],best:{}}));
 if(game==='shipping')localStorage.setItem('jet-courses-v2',JSON.stringify(['basics','warning','rotor','piston','gravity','blink','mix']));
 const runId=crypto.randomUUID();window.arcadeTest={isTest:true,game,target,runId};
 document.addEventListener('DOMContentLoaded',()=>{
  const banner=document.createElement('aside');banner.style.cssText='position:fixed;z-index:9999;top:0;left:0;padding:2px 6px;background:#542e24;color:white;font:12px system-ui';
  banner.textContent='測試局 · '+target+' · 不記成績 ';for(const [label,action] of [['重啟','restart'],['下一段','next'],['退出','end']]){
   const b=document.createElement('button');b.textContent=label;b.onclick=()=>parent.postMessage({type:'arcade-test-v1',action,game,target,runId},location.origin==='null'?'*':location.origin);banner.append(b)
  }(document.querySelector('dialog[open]')||document.body).append(banner)
 });
})();

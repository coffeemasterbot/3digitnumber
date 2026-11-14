(() => {
 const targets={defence:[1,2,3].map(n=>'round-'+n),pause:Array.from({length:9},(_,i)=>i+1).map(n=>'temple-'+n),
  instalments:Array.from({length:15},(_,i)=>Array.from({length:5},(_,j)=>'garden-'+(i+1)+'-'+(j+1))).flat(),
  shipping:['drill','gravity','blink','mecha','dragon','glider'],coins:['jetpack','pogo','magnet','shoes']};
 window.arcadeDevTargets=targets;
 if(parent===window)return;
 const [version,game,target]=window.name.split('/');
 if(version!=='arcade-test-v1'||!targets[game]?.includes(target))return;
 const data=new Map();
 Object.defineProperty(window,'localStorage',{value:{getItem:k=>data.get(String(k))??null,setItem:(k,v)=>data.set(String(k),String(v)),removeItem:k=>data.delete(String(k)),clear:()=>data.clear(),key:i=>Array.from(data.keys())[i]??null,get length(){return data.size}}});
 const runId=crypto.randomUUID();window.arcadeTest={isTest:true,game,target,runId};
 document.addEventListener('DOMContentLoaded',()=>{
  const banner=document.createElement('aside');banner.style.cssText='position:fixed;z-index:9999;top:0;left:0;padding:2px 6px;background:#542e24;color:white;font:12px system-ui';
  banner.textContent='測試局 · '+target+' · 不記成績 ';for(const [label,action] of [['重啟','restart'],['下一段','next'],['退出','end']]){
   const b=document.createElement('button');b.textContent=label;b.onclick=()=>parent.postMessage({type:'arcade-test-v1',action,game,target,runId},location.origin==='null'?'*':location.origin);banner.append(b)
  }(document.querySelector('dialog[open]')||document.body).append(banner)
 });
})();

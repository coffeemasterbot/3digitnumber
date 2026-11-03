/* Additional website-v1 interactions: drag-chain matching and runner jumping. */
(()=>{'use strict';
let drag=null,dragTick=0,ignoreClick=false;
const near=(a,b)=>Math.abs(Math.floor(a/6)-Math.floor(b/6))+Math.abs(a%6-b%6)===1;
function scan(values){const found=new Set();for(let r=0;r<5;r++)for(let c=0;c<6;c++){let i=r*6+c;if(c<4&&values[i]===values[i+1]&&values[i]===values[i+2]){found.add(i);found.add(i+1);found.add(i+2)}if(r<3&&values[i]===values[i+6]&&values[i]===values[i+12]){found.add(i);found.add(i+6);found.add(i+12)}}return [...found]}
window.websiteBindBoard=function(){const board=document.getElementById('arcade-board');if(!board||board.dataset.dragReady)return;board.dataset.dragReady='1';board.style.touchAction='none';board.addEventListener('pointerdown',e=>{const tile=e.target.closest('.arcade-tile');if(!tile||tile.disabled)return;e.preventDefault();const index=[...board.children].indexOf(tile);if(index<0)return;drag={index,start:performance.now(),moved:false,values:[...board.children].map(x=>x.textContent)};board.setPointerCapture(e.pointerId);board.children[index].classList.add('picked');dragTick=setInterval(()=>{if(!drag)return;const left=Math.max(0,5-(performance.now()-drag.start)/1000);document.getElementById('arcade-guide').textContent='拖珠餘下 '+left.toFixed(1)+' 秒 · 放開後整理同類記錄';if(left<=0)finish()},100)});board.addEventListener('pointermove',e=>{if(!drag)return;const tile=document.elementFromPoint(e.clientX,e.clientY)?.closest('.arcade-tile');if(!tile||!board.contains(tile))return;const next=[...board.children].indexOf(tile);if(!near(drag.index,next))return;const a=board.children[drag.index],b=board.children[next];const t=a.innerHTML;a.innerHTML=b.innerHTML;b.innerHTML=t;const bg=a.style.background;a.style.background=b.style.background;b.style.background=bg;a.classList.remove('picked');b.classList.add('picked');[drag.values[drag.index],drag.values[next]]=[drag.values[next],drag.values[drag.index]];drag.index=next;drag.moved=true});board.addEventListener('pointerup',finish);board.addEventListener('pointercancel',finish);board.addEventListener('click',e=>{if(ignoreClick){e.stopImmediatePropagation();ignoreClick=false}},true);
function finish(){if(!drag)return;clearInterval(dragTick);const d=drag;drag=null;ignoreClick=true;window.websiteResolveDrag(d.values,d.index,d.moved)}
};
document.getElementById('dialog').addEventListener('close',()=>{drag=null;clearInterval(dragTick)});
})();

window.websiteTempo=1;
const websiteOriginalIntro=window.openMini;window.openMini=function(key){websiteOriginalIntro(key);window.websiteTempo=1};

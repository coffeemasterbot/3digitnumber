/* Original vector plant artwork and readable financial-habit enemies. */
(()=>{'use strict';
const svg=(body)=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 110" aria-hidden="true"><defs><linearGradient id="plant-shine" x2="0" y2="1"><stop stop-color="white" stop-opacity=".35"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs>'+body+'<ellipse cx="38" cy="24" rx="10" ry="6" fill="white" opacity=".2"/>'+'</svg>';
const leaf='<path d="M50 97Q12 109 14 83Q39 78 50 97Q62 72 90 83Q85 110 50 97" fill="#4aab35" stroke="#247325" stroke-width="3"/>';
const stem='<path d="M50 94Q42 70 51 50" stroke="#3e942e" stroke-width="10" fill="none"/>'+leaf;
const eye='<ellipse cx="42" cy="36" rx="4" ry="8" fill="#192e21"/><circle cx="43" cy="33" r="1.5" fill="white"/>';
function art(type){if(type==='cherrybomb')return svg('<path d="M28 51Q29 19 54 18Q70 16 74 48" fill="none" stroke="#557235" stroke-width="6"/><path d="M53 19q7-22 29-10-11 21-29 10" fill="#5d9b3e"/><circle cx="30" cy="67" r="24" fill="#d84f43" stroke="#87392e" stroke-width="4"/><circle cx="72" cy="65" r="24" fill="#e5634d" stroke="#87392e" stroke-width="4"/><path d="M14 56l13 7m51-10-13 8" stroke="#512d25" stroke-width="4"/><circle cx="28" cy="68" r="3"/><circle cx="69" cy="67" r="3"/>');if(type==='sunflower'){let petals='';for(let i=0;i<12;i++)petals+='<ellipse cx="50" cy="12" rx="10" ry="16" transform="rotate('+i*30+' 50 40)" fill="#ffd02f" stroke="#cd9214" stroke-width="2"/>';return svg(stem+petals+'<circle cx="50" cy="40" r="25" fill="#b77c37" stroke="#84531e" stroke-width="3"/><ellipse cx="41" cy="36" rx="3" ry="5"/><ellipse cx="59" cy="36" rx="3" ry="5"/><path d="M39 48Q50 62 63 47" stroke="#412d17" fill="none" stroke-width="3"/>')}
if(type==='wallnut')return svg(leaf+'<ellipse cx="49" cy="55" rx="32" ry="43" fill="#b67c3d" stroke="#754b26" stroke-width="4"/><path d="M25 35l7 14-6 11m42-38l-8 15 7 12" fill="none" stroke="#d4a060" stroke-width="4"/>'+eye+'<ellipse cx="61" cy="37" rx="4" ry="8"/><path d="M37 65q14 10 26-2" fill="none" stroke="#382d20" stroke-width="3"/>');
if(type==='chomper')return svg(stem+'<path d="M20 39Q15 0 66 12Q91 19 78 43L40 47L80 57Q73 91 35 72Q13 65 20 39" fill="#a059a6" stroke="#603566" stroke-width="4"/><path d="M38 41l7-12 9 10 8-11 8 12M42 54l8 12 9-9 7 11 7-11" fill="white"/>');
if(type==='cactus')return svg(leaf+'<path d="M41 95V37Q40 16 54 16Q70 16 67 38V95M41 60H24V42M67 72H83V48" fill="#51a84a" stroke="#286a30" stroke-width="10" stroke-linejoin="round"/>'+eye+'<path d="M54 25v-7m-11 35h-9m28 24h9" stroke="#eef29b" stroke-width="2"/>');
const color=type==='snowpea'?'#89d9ed':type==='firepea'?'#e29a30':'#6fc642';let head='<ellipse cx="49" cy="38" rx="28" ry="27" fill="'+color+'" stroke="#357b2c" stroke-width="3"/><path d="M61 28L89 24V51L61 48Z" fill="'+color+'" stroke="#357b2c" stroke-width="3"/><ellipse cx="88" cy="38" rx="8" ry="14" fill="#285e2e" stroke="#93c461" stroke-width="3"/>'+eye;
if(type==='repeater')head+='<path d="M18 22l4-14 14 6 6-11 10 14" fill="#27662c" stroke="#143c26" stroke-width="3"/><path d="M30 49l16 4" stroke="#2e5726" stroke-width="5"/><path d="M62 33h15m-15 7h15" stroke="#f5e59b" stroke-width="3"/>';if(type==='threepeater')head+='<circle cx="25" cy="22" r="13" fill="#68bd3d"/><circle cx="24" cy="60" r="13" fill="#68bd3d"/>';return svg(stem+head)}
function walkerArt(type){
  const framed=body=>'<svg viewBox="0 0 78 92" aria-hidden="true"><g stroke="#394534" stroke-width="2.5" stroke-linejoin="round">'+body+'</g></svg>';
  if(type==='zomboni')return framed('<path d="M6 65 12 51h55l5 15-6 12H14Z" fill="#435553"/><circle cx="20" cy="66" r="10" fill="#8ba7aa"/><circle cx="59" cy="66" r="10" fill="#8ba7aa"/><path d="m7 56 5-17 18-5 4-19h25l8 40Z" fill="#c57843"/><path d="m34 34 4-14h14l3 16Z" fill="#b5e4df"/><path d="m6 51 22 3-8 13-17-7Z" fill="#c4dce0"/><path d="M42 48h16m-16 5h16" stroke="#664d39"/>');
  if(type==='boss')return framed('<path d="m9 46 6-18 13 3 3-18h27l4 18 9 6-4 20-9 8-8-8H32l-9 7-12-4Z" fill="#89968b"/><path d="m25 24 11-9 20 2 6 13-8 14-23-2Z" fill="#bdc6aa"/><path d="m27 30 30-3-4 11-21 1Z" fill="#4b665d"/><path d="m31 34 8-2m9-1 6-1" stroke="#ffdd75"/><path d="m30 47 21-1 4 15-13 9-15-10Z" fill="#84624c"/><circle cx="40" cy="54" r="6" fill="#ffc15d"/><path d="m15 57 12 4-4 13 7 2-4 8H9l2-16m40-6 10-3 7 14 4 9H55l-3-9" fill="#58665e"/>');
  const hats={
    float:'<ellipse cx="40" cy="61" rx="28" ry="10" fill="#e6a64d"/><path d="m14 57 6 7m37-9 6 7" stroke="#fff0bb" stroke-width="5"/>',
    dancer:'<path d="m20 20-3-8 7-4 2-5 10 1 8-3 8 5 7 2-2 13-9-4-15 2Z" fill="#433840"/><path d="m49 43 9 2 6-18 5-2 1 10-7 22-13 1Z" fill="#a4b790"/><path d="m32 41 7 11-6 5-6-10m21-7-3 14 10-6" fill="#c07d95"/>',
    backup:'<path d="m25 18 1-8 24-2 5 8-5 3Z" fill="#4a7781"/><path d="m33 42 7 7 9-7 4 7-12 11-13-12Z" fill="#8eb7b7"/><path d="m48 48 10 12 9-3 3 5-13 6-13-12Z" fill="#abb88e"/>',
    imp:'<path d="m21 24-12-7 8 16m34-9 12-8-8 16" fill="#9ebd80"/><path d="m27 15 4-12 6 8 7-10 6 13" fill="#d0914d"/>',
    giant:'<path d="m29 40-14 2-6 12 9 8 9-10m24-11 15 5 7 16-10 5-9-12" fill="#94a784"/><path d="m27 40 8 1 8 22-7 2Z" fill="#c69c60"/><path d="m52 44 9 4 5 12-9 3Z" fill="#606a60"/>',
    fast:'<path d="m19 20 33-4 5 4-34 5Z" fill="#eaa04f"/><path d="m53 18 17-5-7 7 9 4-18-2Z" fill="#eaa04f"/>',
    strong:'<path d="m29 42 10-3 13 3 6 16-10 6-18-4Z" fill="#728a94"/><path d="m34 47 11 2 1 8-12-2Z" fill="#c4c9b5"/>',
    cone:'<path d="M22 21 34 1 50 16 53 19 24 25Z" fill="#ec9435"/><path d="m29 15 13-3" stroke="#ffe9aa"/>',
    bucket:'<path d="m26 28 2-22 25-2 5 22Z" fill="#9ea9a4"/><path d="M30 10h19" stroke="#dce2ce"/>',
    football:'<path d="M23 27q-1-26 23-24 17 2 15 23l-8 3-4-9-22 12Z" fill="#a5473d"/>',
    paper:'<path d="m9 46 24 5-6 22-23-6Z" fill="#f3ddaa"/><path d="m12 52 13 3m-15 2 16 4" stroke="#817c65"/>',
    screen:'<path d="M7 32h17v48H7Z" fill="#acb6a9" fill-opacity=".8"/><path d="m8 39 14 13-14 14" stroke="#546354"/>',
    diver:'<path d="M22 25h23v11H22Z" fill="#83c2cf"/><path d="m50 31 6-2V9h7" fill="none" stroke="#459fa1"/>',
    pole:'<path d="m4 83 64-49" fill="none" stroke="#a98757" stroke-width="4"/>'
  };
  const coat=type==='football'?'#b45143':type==='giant'?'#716052':'#82705c';
  return framed('<g transform="'+(type==='imp'?'translate(8 29) scale(.78 .65)':type==='giant'?'translate(-7 0) scale(1.16 1)':'translate(0)')+'">'+
    '<path d="m33 61-5 17-11 4 2 5h18l7-24m4 0 4 12-1 9 14 3 2-6-8-4-1-17" fill="#465978"/>'+
    '<path d="m31 40 18-4 12 28-9 2-7-4-5 6-12-4Z" fill="'+coat+'"/>'+
    '<path d="m34 40 6 15 6-15" fill="#d5d2af"/><path d="m41 45-4 11 4 3 4-13" fill="#b95340"/>'+
    '<path d="M53 17Q51 6 35 9 19 11 21 24l-5 6 6 3 1 7 11 3 14-6 6-9Z" fill="#9ab381"/>'+
    '<ellipse cx="29" cy="24" rx="6" ry="6.8" fill="#f8edbf"/><circle cx="26" cy="25" r="2" fill="#27352c"/>'+
    '<path d="m22 34 11 1-2 3-9-1" fill="#584d40"/><path d="m35 45-10 10-12-2-6 5 17 4 17-12" fill="#a8ba8e"/>'+
    (hats[type]||'')+'</g>');
}
const habits={boss:'機械博士',...Object.fromEntries(Object.entries(GardenEnemies.kinds).map(([k,v])=>[k,v[0]])),normal:'信用卡超支',cone:'情緒消費',bucket:'分期疊加',fast:'限時衝動',strong:'只還最低額',giant:'債務巨人'};
function paintPlantsInDeck(){
 for(const card of document.querySelectorAll('.plantCard')){
  const icon=card.querySelector('.emoji');
  if(!icon||!card.dataset.plant||icon.dataset.drawn)continue;
  icon.innerHTML=GardenAbilities.cards[card.dataset.plant]?GardenAbilities.icon(card.dataset.plant):art(card.dataset.plant);
  icon.dataset.drawn='1';
 }
}
function paintPlant(plant){
 if(!plant?.element||plant.element.dataset.art) return;
 const el=plant.element;
 el.dataset.art=plant.type;
 el.firstChild?.remove();
 el.insertAdjacentHTML('afterbegin',GardenAbilities.cards[plant.type]?GardenAbilities.icon(plant.type):art(plant.type));
 if(plant.type==='sunflower'){
  el.insertAdjacentHTML('beforeend','<span class="sun-charge" role="progressbar" aria-label="吸收陽光" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></span>');
  plant.sunMeter=el.lastElementChild;
 }
}
function paintHealth(zombie){
 if(!zombie.element||!zombie.healthBar)return;
 const bar=zombie.healthBar;
 const hp=Math.max(0,Math.ceil(zombie.health));
 const display=hp+'/'+zombieTypes[zombie.type].maxHealth;
 if(bar.dataset.hp===display)return;
 bar.dataset.hp=display;
 bar.setAttribute('aria-valuenow',String(hp));
}
function paintZombie(zombie){
 if(!zombie?.element||zombie.element.dataset.habit)return;
 const el=zombie.element;
 el.dataset.habit=zombie.type;
 if(zombie.type==='giant')el.classList.add('giant');
 el.firstChild?.remove();
 el.insertAdjacentHTML('afterbegin','<span class="habit-body">'+walkerArt(zombie.type)+'</span><span class="habit-label">'+habits[zombie.type]+'</span>');
 zombie.healthBar.setAttribute('role','progressbar');
 zombie.healthBar.setAttribute('aria-label',habits[zombie.type]+'生命');
 zombie.healthBar.setAttribute('aria-valuemax',String(zombieTypes[zombie.type].maxHealth));
 paintHealth(zombie);
}
const oldPlace=placePlant;
placePlant=function(cell){
 const last=gameState.plants.at(-1);
 const result=oldPlace(cell);
 const planted=gameState.plants.at(-1);
 if(planted!==last)paintPlant(planted);
 return result;
};
const oldSpawn=spawnZombie;
spawnZombie=function(...args){
 const last=gameState.zombies.at(-1);
 const result=oldSpawn(...args);
 const spawned=gameState.zombies.at(-1);
 if(spawned!==last)paintZombie(spawned);
 return result;
};
const oldHealth=updateZombieHealth;
updateZombieHealth=function(zombie){oldHealth(zombie);paintHealth(zombie)};

// Tokens live in board coordinates, so the visual and tap target move together on resize.
const board=document.getElementById('gameBoard');
const tokens=new Set();
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
function showSun({value,x,y,falling=false}){
 const token=document.createElement('button');
 token.type='button';
 token.className='sun board-sun'+(falling?' sky-sun':' plant-sun');
 token.setAttribute('aria-label','收集 '+value+' 陽光');
 token.innerHTML='<span aria-hidden="true">☀</span><span class="sun-value">'+value+'</span>';
 const position=percent=>'clamp(min(35px, 50%), '+percent+'%, max(50%, calc(100% - 35px)))';
 token.style.left=position(x);
 token.style.top=position(falling&&!reduceMotion.matches?12:y);
 const collect=()=>collectSun(token,value);
 token.addEventListener('click',collect);
 token.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'&&event.buttons===1)collect()});
 board.append(token);
 let animation;
 if(!falling&&!reduceMotion.matches){
  animation=token.animate?.([{scale:'0.8'},{scale:'1.08',offset:.45},{scale:'1'}],{duration:500});
 }
 tokens.add({token,animation,fall:falling&&!reduceMotion.matches?{elapsed:0,start:12,end:y,position}:null,expires:(gameState.activeClock||0)+(falling?12500:9500)});
}
produceSun=function(plant){
 if(!plant.element?.parentElement)return;
 const column=Number(plant.element.parentElement.dataset.col);
 const row=Number(plant.element.parentElement.dataset.row);
 showSun({value:plantTypes[plant.type].sunAmount,x:(column+.5)/9*100,y:(row+.5)/5*100});
};
spawnFallingSun=function(){showSun({value:50,x:10+Math.random()*80,y:52,falling:true})};
const collect=collectSun;
collectSun=function(token,value){
 if(gameState.isPaused||gameState.isGameOver||token.disabled||!token.isConnected)return;
 token.disabled=true;
 collect(token,value);
};
const activeStep=window.gardenActiveStep;
window.gardenActiveStep=dt=>{
 for(const record of tokens){
  if(!record.token.isConnected||record.token.disabled){tokens.delete(record);continue}
  if(gameState.activeClock>=record.expires){record.token.remove();tokens.delete(record);continue}
  const fall=record.fall;
  if(fall){
   fall.elapsed+=Math.max(0,Math.min(50,dt));
   const fraction=Math.min(1,fall.elapsed/(4000/.6));
   record.token.style.top=fall.position(fall.start+(fall.end-fall.start)*fraction);
   if(fraction===1)record.fall=null;
  }
 }
 activeStep?.(dt);
};
const pause=togglePause,resume=resumeGame;
function sunMotion(){for(const {animation} of tokens)if(animation)gameState.isPaused?animation.pause():animation.play()}
togglePause=function(){pause();sunMotion()};
resumeGame=function(){resume();sunMotion()};
window.gardenVisualSnapshot=()=>({habits:gameState.zombies.map(z=>({type:z.type,hp:z.health,label:habits[z.type]})),suns:document.querySelectorAll('.sun').length,art:document.querySelectorAll('.plant svg').length,charges:gameState.plants.filter(p=>p.type==='sunflower').map(p=>p.productionCharge||0)});paintPlantsInDeck();
})();

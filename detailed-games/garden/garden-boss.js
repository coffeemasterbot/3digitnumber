/* Boss and hazards advance on gardenActiveStep, including all response windows. */
const GardenBoss=(()=>{
 const rules=GardenRules.BOSS;
 const panel=document.createElement('section');
 panel.id='mechanical-boss';panel.hidden=true;
 panel.innerHTML='<strong>財務風暴 · 機械博士</strong> <progress max="'+rules.hp+'" value="'+rules.hp+'" aria-label="機械博士生命"></progress><span role="status"></span><button type="button">冰凍應急卡</button>';
 document.getElementById('gameContainer').append(panel);
 const status=panel.querySelector('span'),ice=panel.querySelector('button');
 zombieTypes.boss={emoji:'⚙',health:rules.hp,maxHealth:rules.hp,speed:0,damage:0,points:2500};
 function start(){
   spawnZombie('boss',2);
   const z=gameState.zombies.at(-1);z.x=gameState.boardRect.width-gameState.cellSize.width*.6;
   gameState.boss={z,cycle:0,left:rules.exposed,exposed:true,hazard:null,iceReady:0};
   panel.hidden=false;z.element.classList.add('mechanical-body');
 }
 function clearBall(b){b.hazard?.element?.remove();b.hazard?.warning?.remove();b.hazard=null}
 function frontPlant(row){
   return gameState.plants.reduce((front,p)=>p.element&&p.row===row&&(!front||p.col>front.col)?p:front,null);
 }
 const attackArt={
   fire:'<path fill="#da4c27" d="M7 29 55 8 45 22 64 16 50 36 67 35 48 49Z"/><path fill="#ffb332" d="M8 33 40 17 35 30 51 26 39 44 20 47Z"/><circle cx="20" cy="32" r="14" fill="#ffe774" stroke="#9b341e" stroke-width="3"/><path d="m14 27 3 12 7-14" fill="none" stroke="#e76b2b" stroke-width="4"/>',
   ice:'<path d="M8 29 21 10 37 18 52 14 56 33 41 53 24 50Z" fill="#abdfff" stroke="#23558c" stroke-width="3"/><path fill="#f1fcff" d="m21 10 4 22-17-3zm4 22 12-14 4 35zm27-18-15 4 19 15z"/><path d="M25 32 41 53m-4-35L25 32 8 29" fill="none" stroke="#468ac3" stroke-width="2"/><path d="m57 19 10-4m-9 30 14-4" stroke="#76c4f4" stroke-width="3"/>',
   stomp:'<path fill="#efbd54" stroke="#563d25" stroke-width="3" d="M15 5h40v21H43v11h13L35 60 14 37h13V26H15Z"/><path d="M21 14h27m-27 7h27" stroke="#7c582b" stroke-width="3"/>',
 };
 function drawAttack(h){
   if(!gameState.cellSize?.height||!gameState.boardRect)return;
   if(!h.element){
     h.element=document.createElement('div');
     h.element.className='boss-attack '+h.kind;
     h.element.setAttribute('aria-hidden','true');
     h.element.innerHTML='<svg viewBox="0 0 74 64" aria-hidden="true">'+attackArt[h.kind]+'</svg>';
     h.warning=document.createElement('div');
     h.warning.className='boss-impact-warning '+h.kind;
     h.warning.setAttribute('aria-hidden','true');
     document.getElementById('gameContainer').append(h.warning);
     document.getElementById('gameContainer').append(h.element);
   }
   const board=gameState.boardRect;
   const target=frontPlant(h.row)?.col??0;
   const impact=(target+.5)*gameState.cellSize.width;
   const launch=board.width-gameState.cellSize.width*.55;
   const progress=Math.min(1,Math.max(0,1-h.left/rules.response));
   h.element.style.left=(board.left+(h.kind==='stomp'?impact:launch+(impact-launch)*progress))+'px';
   h.element.style.top=(board.top+(h.row+.5)*gameState.cellSize.height-(h.kind==='stomp'?(1-progress)*gameState.cellSize.height:0))+'px';
   h.warning.style.left=(board.left+impact)+'px';
   h.warning.style.top=(board.top+(h.row+.5)*gameState.cellSize.height)+'px';
   h.warning.style.width=gameState.cellSize.width+'px';
   h.warning.style.height=gameState.cellSize.height+'px';
 }
 ice.onclick=()=>{
   const b=gameState.boss;if(!b||gameState.isPaused||gameState.isGameOver||b.iceReady||b.hazard?.kind!=='fire')return;
   clearBall(b);b.iceReady=8000;
 };
 function pepper(row){const b=gameState.boss;if(b?.hazard?.kind==='ice'&&b.hazard.row===row)clearBall(b)}
 function step(dt){
   const b=gameState.boss;
   if(!b?.z.element){if(b)clearBall(b);panel.hidden=true;return}
   b.iceReady=Math.max(0,b.iceReady-dt);b.left-=dt;
   if(b.hazard){
     b.hazard.left-=dt;
     if(b.hazard.left<=0){
       const p=frontPlant(b.hazard.row);
       if(p){p.element.remove();p.element=null}
       clearBall(b);
     }
   }
   if(b.left<=0){
     b.exposed=!b.exposed;b.left=b.exposed?rules.exposed:rules.armored;
     if(b.exposed){b.z.row=(b.z.row+2)%5}
     else{
       const kind=['fire','ice','stomp'][b.cycle++%3];
       if(kind==='stomp'||(kind==='fire'&&!b.iceReady)||(kind==='ice'&&gameState.sun>=125&&!gameState.cooldowns?.pepper&&document.querySelector('[data-plant="pepper"]:not([hidden])'))){
         const row=b.z.row;
         b.hazard={kind,row,left:rules.response};
       }
       if(gameState.zombies.filter(z=>z.element&&z.type!=='boss').length<rules.minions)spawnZombie('normal',(b.z.row+1)%5);
     }
   }
   if(b.hazard)drawAttack(b.hazard);
   panel.querySelector('progress').value=b.z.health;
   b.z.element.classList.toggle('exposed',b.exposed);
   ice.disabled=!b.hazard||b.hazard.kind!=='fire'||b.iceReady>0;
   const message=b.hazard?'第 '+(b.hazard.row+1)+' 行 · '+({fire:'火球：使用應急卡',ice:'冰球：同行辣椒',stomp:'重擊：前排準備受損'}[b.hazard.kind])+' · '+Math.ceil(b.hazard.left/1000)+' 秒':b.exposed?'低頭 · 第 '+(b.z.row+1)+' 行弱點可攻擊':'裝甲防守';
   if(globalThis.siteLocale)globalThis.siteLocale.write(status,message);
   else if(status.textContent!==message)status.textContent=message;
 }
 return {start,step,pepper};
})();

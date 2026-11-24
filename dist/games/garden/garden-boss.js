/* Boss and hazards advance on gardenActiveStep, including all response windows. */
const GardenBoss=(()=>{
 const rules=GardenRules.BOSS;
 const panel=document.createElement('section');
 panel.id='mechanical-boss';panel.hidden=true;
 panel.innerHTML='<strong>財務風暴 · 機械博士</strong> <progress max="'+rules.hp+'" value="'+rules.hp+'" aria-label="機械博士生命"></progress><span role="status"></span><button type="button">冰火應急卡</button>';
 document.getElementById('gameContainer').append(panel);
 const status=panel.querySelector('span'),ice=panel.querySelector('button');
 const rig=document.createElement('div');
 rig.className='garden-boss-rig';rig.hidden=true;rig.setAttribute('aria-hidden','true');
 rig.innerHTML='<svg viewBox="0 0 172 240"><path fill="#252f31" stroke="#e9b55f" stroke-width="4" d="M55 144h62l17 79-29 11-19-52-19 52-29-11z"/><path fill="#53686b" stroke="#273535" stroke-width="5" d="M41 59h90l25 64-36 22-16 32H68l-16-32-36-22z"/><path fill="#798d8a" stroke="#2a4241" stroke-width="5" d="M18 89 4 147l15 32 24-17-4-43zm136 0 14 58-15 32-24-17 4-43z"/><path fill="#607575" stroke="#263f40" stroke-width="5" d="m49 28 16-21h42l16 21-9 44H58z"/><path fill="#f8c875" d="M59 35h22v9H59zm32 0h22v9H91z"/><path class="boss-reactor" fill="#fee4a4" stroke="#e4a147" stroke-width="6" d="m86 71 19 16-5 25H72l-5-25z"/><path fill="#d7a468" d="m68 129 18 17 18-17v17l-18 14-18-14z"/></svg>';
 document.getElementById('gameContainer').append(rig);
 zombieTypes.boss={emoji:'⚙',health:rules.hp,maxHealth:rules.hp,speed:0,damage:0,points:2500};
 function start(){
   spawnZombie('boss',2);
   const z=gameState.zombies.at(-1);z.x=gameState.boardRect.width-gameState.cellSize.width*.6;
   gameState.boss={z,cycle:0,left:rules.exposed,exposed:true,hazard:null,iceReady:0};
   positionRig();panel.hidden=rig.hidden=false;z.element.classList.add('mechanical-body');
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
   const impact=(h.col+.5)*gameState.cellSize.width;
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
   const b=gameState.boss;
   if(!b||gameState.isPaused||gameState.isGameOver||b.iceReady||!b.hazard||b.hazard.kind==='stomp')return;
   clearBall(b);b.iceReady=12000;
 };
 function pepper(row){const b=gameState.boss;if(b?.hazard?.kind==='ice'&&b.hazard.row===row)clearBall(b)}
 function step(dt){
   const b=gameState.boss;
   if(!b?.z.element){if(b)clearBall(b);panel.hidden=rig.hidden=true;return}
   b.iceReady=Math.max(0,b.iceReady-dt);b.left-=dt;
   if(b.hazard){
     b.hazard.left-=dt;
     if(b.hazard.left<=0){
       const h=b.hazard;
       const p=gameState.plants.find(plant=>plant.element&&plant.row===h.row&&plant.col===h.col);
       if(p){
         p.health-=h.kind==='stomp'?3:2;
         if(p.health<=0){p.element.remove();p.element=null}
         else updatePlantHealth(p);
       }
       clearBall(b);
     }
   }
   if(b.left<=0){
     b.exposed=!b.exposed;
     b.left=b.exposed?(b.z.health<=rules.hp/2?rules.enraged:rules.exposed):rules.armored;
     if(b.exposed){b.z.row=(b.z.row+2)%5}
     else{
       const kind=['fire','ice','stomp'][b.cycle++%3];
       const row=b.z.row;
       if(!b.hazard)b.hazard={kind,row,col:frontPlant(row)?.col??0,left:rules.response};
       if(gameState.zombies.filter(z=>z.element&&z.type!=='boss').length<rules.minions)spawnZombie('normal',(b.z.row+1)%5);
     }
   }
   if(b.hazard)drawAttack(b.hazard);
   panel.querySelector('progress').value=b.z.health;
   b.z.element.classList.toggle('exposed',b.exposed);
   positionRig();
   rig.classList.toggle('exposed',b.exposed);
   rig.classList.toggle('enraged',b.z.health<=rules.hp/2);
   ice.disabled=!b.hazard||b.hazard.kind==='stomp'||b.iceReady>0;
   const message=b.hazard?'第 '+(b.hazard.row+1)+' 行 · '+({fire:'火球：使用應急卡',ice:'冰球：辣椒或應急卡',stomp:'重擊：避開標記格'}[b.hazard.kind])+' · '+Math.ceil(b.hazard.left/1000)+' 秒':b.exposed?'低頭 · 第 '+(b.z.row+1)+' 行弱點可攻擊':'裝甲防守';
   if(globalThis.siteLocale)globalThis.siteLocale.write(status,message);
   else if(status.textContent!==message)status.textContent=message;
 }
 function positionRig(){
   const board=gameState.boardRect;
   if(board){
     rig.style.right=(innerWidth-board.right+4)+'px';
     rig.style.top=(board.top+board.height*.2)+'px';
     rig.style.height=board.height*.6+'px';
   }
 }
 function reset(){
   if(gameState.boss)clearBall(gameState.boss);
   panel.hidden=rig.hidden=true;
 }
 return {start,step,pepper,reset};
})();

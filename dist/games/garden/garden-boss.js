/* Boss and hazards advance on gardenActiveStep, including all response windows. */
const GardenBoss=(()=>{
 const panel=document.createElement('section');
 panel.id='mechanical-boss';panel.hidden=true;
 panel.innerHTML='<strong>財務風暴 · 機械博士</strong> <progress max="90" value="90" aria-label="機械博士生命"></progress><span role="status"></span><button type="button">冰凍應急卡</button>';
 document.getElementById('gameContainer').append(panel);
 const status=panel.querySelector('span'),ice=panel.querySelector('button');
 zombieTypes.boss={emoji:'⚙',health:90,maxHealth:90,speed:0,damage:0,points:2500};
 function start(){
   spawnZombie('boss',2);
   const z=gameState.zombies.at(-1);z.x=gameState.boardRect.width-gameState.cellSize.width*.6;
   gameState.boss={z,cycle:0,left:7000,exposed:true,hazard:null,iceReady:0};
   panel.hidden=false;z.element.classList.add('mechanical-body');
 }
 function clearBall(b){b.hazard=null}
 ice.onclick=()=>{
   const b=gameState.boss;if(!b||gameState.isPaused||gameState.isGameOver||b.iceReady||b.hazard?.kind!=='fire')return;
   clearBall(b);b.iceReady=8000;
 };
 function pepper(row){const b=gameState.boss;if(b?.hazard?.kind==='ice'&&b.hazard.row===row)clearBall(b)}
 function step(dt){
   const b=gameState.boss;
   if(!b?.z.element){panel.hidden=true;return}
   b.iceReady=Math.max(0,b.iceReady-dt);b.left-=dt;
   if(b.hazard){
     b.hazard.left-=dt;
     if(b.hazard.left<=0){
       const targets=gameState.plants.filter(p=>p.element&&p.row===b.hazard.row);
       const p=targets.sort((x,y)=>y.col-x.col)[0];
       if(p){p.element.remove();p.element=null}
       clearBall(b);
     }
   }
   if(b.left<=0){
     b.exposed=!b.exposed;b.left=b.exposed?6500:5500;
     if(b.exposed){b.z.row=(b.z.row+2)%5}
     else{
       const kind=['fire','ice','stomp'][b.cycle++%3];
       if(kind==='stomp'||(kind==='fire'&&!b.iceReady)||(kind==='ice'&&gameState.sun>=125&&!gameState.cooldowns?.pepper)){
         const row=b.z.row;
         b.hazard={kind,row,left:4500};
       }
       if(gameState.zombies.filter(z=>z.element).length<10)spawnZombie('normal',(b.z.row+1)%5);
     }
   }
   panel.querySelector('progress').value=b.z.health;
   b.z.element.classList.toggle('exposed',b.exposed);
   ice.disabled=!b.hazard||b.hazard.kind!=='fire'||b.iceReady>0;
   status.textContent=b.hazard?'第 '+(b.hazard.row+1)+' 行 · '+({fire:'火球：使用應急卡',ice:'冰球：同行辣椒',stomp:'重擊：前排準備受損'}[b.hazard.kind])+' · '+Math.ceil(b.hazard.left/1000)+' 秒':b.exposed?'低頭 · 第 '+(b.z.row+1)+' 行弱點可攻擊':'裝甲防守';
 }
 return {start,step,pepper};
})();

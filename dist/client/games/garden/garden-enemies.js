const GardenEnemies=(()=>{
 const kinds={
   pole:['限時搶購',12,20,1,0],paper:['優惠剪報',9,8,1,6],football:['超額衝刺',14,16,2,25],
   dancer:['跟風消費',12,9,1,0],backup:['跟風分身',5,10,1,0],float:['浮動支出',12,10,1,0],
   diver:['隱藏月費',10,10,1,0],screen:['訂閱屏障',12,9,1,18],zomboni:['滾存分期',36,8,8,0],
   imp:['小額分期',5,16,1,0]
 };
 for(const [key,[name,hp,speed,damage]] of Object.entries(kinds)){
   zombieTypes[key]={emoji:name[0],health:hp,maxHealth:hp,speed,damage,points:100};
 }
 function spawn(level,wave,index,row){
   if(level===3&&row===2)return index%2?'diver':'float';
   const pools=[['normal','cone'],['normal','cone','bucket','pole','paper','football'],
     ['normal','pole','dancer','paper'],['normal','screen','zomboni','football','bucket'],['screen','dancer','football','zomboni','pole']];
   const pool=pools[level-1];
   return pool[(wave+index)%pool.length];
 }
 function init(z){
   z.armor=kinds[z.type]?.[4]||({bucket:14,cone:6}[z.type]||0);
   z.submerged=z.type==='diver';z.summon=5000;z.attackClock=0;
 }
 function projectile(z,damage){
   if(z.type==='boss'&&!gameState.boss?.exposed)return;
   if(z.armor){
     const absorbed=Math.min(damage,z.armor);z.armor-=absorbed;damage-=absorbed;
     if(z.armor===0&&z.type==='paper')z.roar=550;
   }
   z.health-=damage;
 }
 function step(z,dt){
   z.attackClock=Math.max(0,z.attackClock-dt);
   z.roar=Math.max(0,(z.roar||0)-dt);
   const col=Math.floor(z.x/gameState.cellSize.width);
   z.submerged=z.type==='diver'&&!gameState.plants.some(p=>p.element&&p.row===z.row&&p.col===col);
   const mark=z.element.querySelector('.habit-label');
   if(mark){const text=(kinds[z.type]?.[0]||mark.dataset.name||mark.textContent);mark.dataset.name=text;
     mark.textContent=text+(z.armor?' ▰'+Math.ceil(z.armor):z.submerged?' 潛水':z.roar?' 怒吼':'');}
   z.element.style.opacity=z.submerged?'.58':'1';
   if(z.type==='zomboni'&&col>=0&&col<9){
     (gameState.iceTracks??={})[z.row+','+col]=gameState.activeClock+6000;
   }
 }
 function reinforcements(dt){
   const live=gameState.zombies.filter(z=>z.element);
   let slots=Math.max(0,12-live.length);
   for(const z of live){
     if(!slots)break;
     const col=Math.max(0,Math.min(8,Math.floor(z.x/gameState.cellSize.width)));
     if(z.type==='giant'&&!z.thrown&&z.health<=zombieTypes.giant.maxHealth*.5){
       z.thrown=true;spawnZombie('imp',z.row);gameState.zombies.at(-1).x=Math.max(.5,col-2)*gameState.cellSize.width;slots--;
     }
     if(z.type!=='dancer')continue;
     z.summon-=dt;if(z.summon>0)continue;z.summon=7000;
     for(const row of [z.row-1,z.row+1]){
       if(!slots||row<0||row>4||gardenLevel()===3&&row===2)continue;
       if(gameState.zombies.some(e=>e.element&&e.row===row&&Math.abs(e.x-z.x)<gameState.cellSize.width))continue;
       spawnZombie('backup',row);gameState.zombies.at(-1).x=z.x;slots--;
     }
   }
 }
 return {spawn,init,projectile,step,reinforcements,kinds};
})();

/* Durations are active simulation milliseconds. */
const GardenAbilities = (() => {
  const cards = {
    mine:['薯仔地雷',25,1,'布防後踩中引爆','M14 70Q17 38 49 40Q82 39 88 70Z M49 42V23'],
    squash:['守備瓜',50,1,'鎖定後躍起壓落','M18 75Q8 60 25 48Q33 30 54 26Q87 22 83 57Q80 83 18 75Z'],
    chomper:['吞食花',150,2,'吞食後需要消化','M18 49Q30 11 72 20L48 43L84 45Q72 79 44 66L39 91'],
    spike:['地刺草',100,4,'接觸傷害，刺破車胎','M9 78L22 46L32 66L48 24L55 63L75 35L88 78Z'],
    torch:['火炬木',175,4,'強化豌豆，解凍冰豆','M31 88L35 49H65L72 88Z M37 48Q20 32 47 9Q46 27 58 21Q80 42 60 50Z'],
    pepper:['辣椒',125,4,'清除同行冰道與敵人','M12 77Q45 77 47 46Q53 22 77 35Q91 79 37 86Z M66 35Q63 20 77 13']
  };
  function icon(type){
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="'+cards[type][4]+'" stroke="#34482e" stroke-width="5" fill="'+({mine:'#d4a260',pepper:'#ed7452',torch:'#edac45',chomper:'#ac82c7'}[type]||'#86b975')+'"/></svg>';
  }
  function damage(z,amount){
    if(!z.element)return;
    z.health-=amount;updateZombieHealth(z);
    if(z.health>0)return;
    addScore(zombieTypes[z.type].points);z.element.remove();z.element=null;gameState.zombiesDefeated++;
  }
  function consume(p){p.element.remove();p.element=null}
  function step(p,dt){
    if(!cards[p.type]||p.type==='torch')return;
    const width=gameState.cellSize.width;
    const x=(p.col+.5)*width;
    const row=gameState.zombies.filter(z=>z.element&&z.row===p.row);
    const close=row.filter(z=>Math.abs(z.x-x)<width*.8);
    p.age=(p.age||0)+dt;p.rest=Math.max(0,(p.rest||0)-dt);
    if(p.type==='mine'){
      p.element.title=p.age<4500?'布防中':'已布防';
      p.element.style.opacity=p.age<4500?'.55':'1';
      if(p.age>=4500&&close.length){close.forEach(z=>damage(z,65));consume(p)}
    }else if(p.type==='squash'){
      if(close.length&&p.targetX===undefined){p.targetX=close[0].x;p.rest=450;p.element.style.translate='0 -22px'}
      if(p.targetX!==undefined&&!p.rest){row.filter(z=>Math.abs(z.x-p.targetX)<width).forEach(z=>damage(z,70));consume(p)}
    }else if(p.type==='pepper'&&p.age>=650){row.forEach(z=>damage(z,z.type==='giant'?70:999));consume(p)}
    else if(p.type==='chomper'&&!p.rest&&close.length){
      const z=close[0],large=['giant','zomboni','boss'].includes(z.type);
      damage(z,large?4:z.health);p.rest=large?1200:8000;
    }else if(p.type==='spike'&&!p.rest){close.forEach(z=>damage(z,z.type==='zomboni'?z.health:2));p.rest=650;if(close.some(z=>z.type==='zomboni'))consume(p)}
    if(p.element&&p.type==='chomper')p.element.title=p.rest?'消化中':'準備吞食';
  }
  function crossing(proj,from,to){
    if(!proj.pea)return;
    for(const p of gameState.plants){
      if(!p.element||p.type!=='torch'||p.row!==proj.row)continue;
      const x=(p.col+.5)*gameState.cellSize.width;
      if(from>=x||to<x||proj.fire)continue;
      if(proj.slow){proj.slow=false;proj.element.textContent='🟢'}
      else{proj.fire=true;proj.damage*=2;proj.element.textContent='🔥'}
    }
  }
  for(const [type,[name,cost,level,description]] of Object.entries(cards)){
    plantTypes[type]={health:4,maxHealth:4,shoots:false,emoji:name};
    let card=document.querySelector('[data-plant="'+type+'"]');
    if(!card){
      card=document.createElement('div');card.className='plantCard';card.tabIndex=0;card.setAttribute('role','button');
      card.dataset.plant=type;card.dataset.cost=cost;
      card.innerHTML='<span class="emoji"></span><span class="name">'+name+'</span><span class="cost">'+cost+'</span>';
      document.getElementById('plantSelection').append(card);
    }
    card.title=description+' · 第 '+level+' 關';
  }
  return {cards,step,icon,crossing};
})();

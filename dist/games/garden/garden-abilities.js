/* Durations are active simulation milliseconds. */
const GardenAbilities = (() => {
  const cards = {
    lily:['浮葉基座',0,3,'先鋪浮葉，再種水上植物','M8 62Q13 20 56 26Q91 28 90 66Q68 84 30 78L54 49Z'],
    mine:['薯仔地雷',25,1,'布防後踩中引爆','M14 70Q17 38 49 40Q82 39 88 70Z M49 42V23'],
    squash:['守備瓜',50,1,'鎖定後躍起壓落','M18 75Q8 60 25 48Q33 30 54 26Q87 22 83 57Q80 83 18 75Z'],
    chomper:['吞食花',150,2,'吞食後需要消化','M18 49Q30 11 72 20L48 43L84 45Q72 79 44 66L39 91'],
    spike:['地刺草',100,4,'接觸傷害，刺破車胎','M9 78L22 46L32 66L48 24L55 63L75 35L88 78Z'],
    torch:['火炬木',175,4,'強化豌豆，解凍冰豆','M31 88L35 49H65L72 88Z M37 48Q20 32 47 9Q46 27 58 21Q80 42 60 50Z'],
    pepper:['辣椒',125,4,'清除同行冰道與敵人','M12 77Q45 77 47 46Q53 22 77 35Q91 79 37 86Z M66 35Q63 20 77 13']
  };
  const specialtyArt = {
    torch: '<path d="M24 86 31 42l22-8 18 10 6 42-25 9Z" fill="#8e5635" stroke="#473121" stroke-width="4"/><path d="M26 59l48-7m-47 23 49-9" stroke="#e5aa54" stroke-width="5"/><path d="M32 40C16 24 44 16 43 4c12 4 10 20 18 19l6-10c18 16 10 30-6 33Z" fill="#ef873f" stroke="#983d2d" stroke-width="4"/><path d="M43 41q-5-8 10-20 1 10 11 12-4 12-21 8" fill="#ffe584"/>',
    chomper: '<path d="M47 92Q32 81 18 86q9-18 27-9c0-20 6-29 12-36l9 6q-10 17-7 31 13-8 25-1L62 95Z" fill="#436d45" stroke="#294631" stroke-width="4"/><path d="M20 47Q12 18 37 10q31-9 50 18L61 47l27 7Q74 78 43 67Z" fill="#ae6fbd" stroke="#512c62" stroke-width="4"/><path d="m53 45 32-15-24 18 25 7-39 5Z" fill="#462144"/><path d="m60 42 9-4-2 8m-9 9 7-3 3 5m4 0 5-4 3 3" stroke="#fff1d0" stroke-width="3" fill="none"/><path d="M32 21q9-6 17-3" stroke="#e3afe8" stroke-width="4"/><circle cx="39" cy="33" r="5" fill="#ffd890"/><circle cx="40" cy="33" r="2" fill="#251929"/>',
    spike: '<path d="M7 75q32-10 86 0l-7 12H16Z" fill="#426641" stroke="#2e432e" stroke-width="4"/><path d="m10 75 11-26 8 23 12-36 8 35 13-46 9 45 11-24 8 29Z" fill="#81ad54" stroke="#35523c" stroke-width="4" stroke-linejoin="round"/><path d="m18 63 3-14 4 14m13-9 3-18 4 17m12-6 5-22 4 22m12 11 4-12 4 12" fill="#e6dc91"/><path d="M24 83h9m16 0h13m13 0h6" stroke="#acd17a" stroke-width="3"/>',
  };
  function icon(type){
    if(specialtyArt[type])return '<svg viewBox="0 0 100 100" aria-hidden="true">'+specialtyArt[type]+'</svg>';
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="'+cards[type][4]+'" stroke="#34482e" stroke-width="5" fill="'+({mine:'#d4a260',pepper:'#ed7452',torch:'#edac45',chomper:'#ac82c7'}[type]||'#86b975')+'"/></svg>';
  }
  function damage(z,amount){GardenEnemies.applyDamage(z,amount,'ability')}
  function consume(p){p.element.remove();p.element=null}
  function effect(p,kind,x){
    const board=document.getElementById('gameBoard');
    const {width,height}=gameState.cellSize;
    const node=document.createElement('div');
    node.className='garden-impact garden-impact-'+kind;
    node.setAttribute('aria-hidden','true');
    node.style.setProperty('--cell-w',width+'px');
    node.style.setProperty('--cell-h',height+'px');
    node.style.left=(x??(p.col+.5)*width)+'px';
    node.style.top=(p.row+.5)*height+'px';
    board.append(node);
    node.addEventListener('animationend',()=>node.remove(),{once:true});
  }
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
      if(p.age>=4500&&close.length){effect(p,'mine');close.forEach(z=>damage(z,65));consume(p)}
    }else if(p.type==='squash'){
      if(close.length&&p.targetX===undefined){
        p.targetX=close[0].x;p.rest=450;
        p.element.style.setProperty('--squash-travel',(p.targetX-x)+'px');
        p.element.classList.add('squash-leap');
      }
      if(p.targetX!==undefined&&!p.rest){effect(p,'squash',p.targetX);row.filter(z=>Math.abs(z.x-p.targetX)<width).forEach(z=>damage(z,70));consume(p)}
    }else if(p.type==='pepper'&&p.age>=650){effect(p,'pepper');GardenBoss.pepper(p.row);for(const key in gameState.iceTracks){if(key.startsWith(p.row+','))gameState.iceTracks[key]=0}row.forEach(z=>damage(z,z.type==='giant'?70:999));consume(p)}
    else if(p.type==='chomper'&&!p.rest&&close.length){
      const z=close.find(e=>!e.submerged);if(!z)return;const large=['giant','zomboni','boss'].includes(z.type);
      effect(p,'bite',z.x);damage(z,large?4:z.health);p.rest=large?1200:8000;
    }else if(p.type==='spike'&&!p.rest){close.forEach(z=>damage(z,z.type==='zomboni'?z.health:2));p.rest=650;if(close.some(z=>z.type==='zomboni'))consume(p)}
    if(p.element&&p.type==='chomper'){
      p.element.title=p.rest?'消化中':'準備吞食';
      p.element.classList.toggle('chomper-digest',p.rest>0);
    }
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
    if(type==='lily')card.dataset.cost='0';
    card.title=description+' · 第 '+level+' 關';
  }
  const unlockStage=type=>type==='repeater'?2:type==='threepeater'?3:cards[type]?.[2]||1;
  return {cards,step,icon,crossing,unlockStage,effect};
})();

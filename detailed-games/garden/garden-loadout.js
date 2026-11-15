function configureGardenSeeds(stageControl,startButton) {
  const cards=Array.from(document.querySelectorAll('#plantSelection [data-plant]'));
  const selected=new Set();
  const host=document.createElement('div');
  stageControl.after(host);
  startButton.hidden=true;
  const unlock=id=>GardenAbilities.cards[id]?.[2]||1;
  const available=id=>unlock(id)<=gardenLevel()&&(id!=='repeater'||gardenRepeaterAvailable());
  function plants(){
    return cards.map(card=>{
      const id=card.dataset.plant,world=unlock(id);
      return {id,name:card.querySelector('.name').textContent,cost:Number(card.dataset.cost),
        art:card.querySelector('.emoji'),locked:!available(id),unlockText:id==='repeater'?'世界一第三關開放':'世界 '+world+' 開放'};
    });
  }
  function enemies(){
    const ids=new Set(),level=gardenLevel();
    for(let wave=1;wave<=5;wave++){
      const state=GardenRules.wave(wave,level,(Number(stageControl.value)-1)%3);
      for(let n=0;n<state.total;n++)ids.add(level>=4&&wave===5&&n===0?'giant':GardenEnemies.spawn(level,wave,n+1,(wave+n*2)%5));
    }
    if(ids.has('dancer'))ids.add('backup');
    if(Number(stageControl.value)===15)ids.add('boss');
    const names={normal:'信用卡超支',cone:'情緒消費',bucket:'分期疊加',giant:'債務巨人',boss:'機械博士'};
    return Array.from(ids,id=>{
      const art=document.createElement('span');art.textContent=zombieTypes[id]?.emoji||'';
      return {id,name:GardenEnemies.kinds[id]?.[0]||names[id]||id,art};
    });
  }
  function draw(){
    for(const card of cards)card.hidden=!selected.has(card.dataset.plant);
    startButton.disabled=!selected.size;
    renderPicker({plants:plants(),selected:Array.from(selected),enemies:enemies(),canStart:!!selected.size,
      notice:gardenLevel()===3&&!selected.has('lily')?'水行種植需要浮葉基座。':''});
  }
  function recommend(){
    selected.clear();
    const special=gardenLevel()===3?'lily':gardenLevel()>=4?'pepper':'snowpea';
    for(const id of ['sunflower','peashooter','wallnut','mine','squash',gardenRepeaterAvailable()?'repeater':'firepea',special,'cherrybomb'])if(available(id))selected.add(id);
    draw();
  }
  const renderPicker=createGardenSeedPicker(host,{
    toggle(id){if(!cards.some(c=>c.dataset.plant===id)||!available(id))return;
      if(selected.has(id))selected.delete(id);else if(selected.size<8)selected.add(id);draw()},
    recommend,start(){if(selected.size&&!startButton.disabled)startButton.click()}
  });
  stageControl.addEventListener('change',recommend);
  recommend();
  return recommend;
}

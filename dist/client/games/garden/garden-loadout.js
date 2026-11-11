function configureGardenSeeds(stageControl,startButton) {
  const seeds=Array.from(document.querySelectorAll('#plantSelection [data-plant]'));
  const selected=new Set();
  const field=document.createElement('fieldset');
  const title=document.createElement('legend');
  const grid=document.createElement('div');
  const notice=document.createElement('output');
  const recommend=document.createElement('button');
  field.className='seed-loadout';
  recommend.type='button';
  recommend.textContent='推薦配置';
  field.append(title,grid,recommend,notice);
  stageControl.after(field);
  const buttons=new Map();
  function draw(){
    const world=gardenLevel();
    for(const card of seeds){
      const type=card.dataset.plant;
      const button=buttons.get(type);
      button.disabled=(GardenAbilities.cards[type]?.[2]||1)>world;
      button.setAttribute('aria-pressed',String(selected.has(type)));
      card.hidden=!selected.has(type);
    }
    startButton.disabled=selected.size===0;
    title.textContent='出戰植物 '+selected.size+' / 8';
    notice.textContent=world===3&&!selected.has('lily')?'水行需要浮葉基座':world===5&&!selected.has('pepper')?'辣椒可清除 Boss 冰球':'';
  }
  for(const card of seeds){
    const type=card.dataset.plant,button=document.createElement('button');
    button.type='button';button.textContent=card.querySelector('.name').textContent;
    button.onclick=()=>{
      if(selected.has(type))selected.delete(type);
      else if(selected.size<8)selected.add(type);
      else{notice.textContent='已選八張，請先移除一張。';return}
      draw();
    };
    buttons.set(type,button);grid.append(button);
  }
  function defaults(){
    selected.clear();
    const special=gardenLevel()===3?'lily':gardenLevel()>=4?'pepper':'snowpea';
    for(const key of ['sunflower','peashooter','wallnut','mine','squash','repeater',special,'cherrybomb'])selected.add(key);
    draw();
  }
  recommend.onclick=defaults;
  stageControl.addEventListener('change',defaults);
  defaults();
  return defaults;
}

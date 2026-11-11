(() => {
  const dialog = document.getElementById('garden-guide');
  const grid = dialog.querySelector('nav');
  const preview = dialog.querySelector('article');
  const uses = {
    sunflower:'後排提供陽光，為下一波預留種植資源。',
    peashooter:'放在阻擋植物後面，持續守住單行。',
    repeater:'連射兩粒豌豆，集中對付同行高生命敵人。',
    snowpea:'先減慢敵人，為前排爭取時間。',
    wallnut:'放在前排阻擋敵人，保護後排射手。',
    threepeater:'放在中間行，同時支援相鄰路線。',
    firepea:'用燃燒攻擊處理同行敵人。',
    cactus:'用穿透攻擊應對成列敵人。',
    cherrybomb:'留到敵人集中時使用，清理相鄰範圍。'
  };
  let resumeOnClose = false;
  function inspect(card) {
    const type = card.dataset.plant;
    const info = GardenAbilities.cards[type];
    const level = info?.[2] || 1;
    const name = card.querySelector('.name').textContent;
    preview.querySelector('.guide-art').replaceChildren(card.querySelector('.emoji svg').cloneNode(true));
    preview.querySelector('h3').textContent = name;
    preview.querySelector('p').textContent = info?.[3] || uses[type];
    preview.querySelector('output').textContent = card.dataset.cost+' 陽光 · 冷卻 '+gardenPlantCooldown(type)/1000+' 秒';
    preview.querySelector('small').textContent = '第 '+level+' 關解鎖 · '+(gardenLevel()>=level?'可種植':'尚未解鎖');
    for(const button of grid.children) button.setAttribute('aria-pressed',String(button.dataset.plantType===type));
  }
  for(const card of document.querySelectorAll('#plantSelection [data-plant]')) {
    const button = document.createElement('button');
    button.type='button';
    button.dataset.plantType=card.dataset.plant;
    button.textContent=card.querySelector('.name').textContent;
    button.onclick=()=>inspect(card);
    grid.append(button);
  }
  document.getElementById('open-guide').onclick=()=>{
    resumeOnClose=!gameState.isPaused&&!gameState.isGameOver;
    if(resumeOnClose)togglePause();
    inspect(document.querySelector('#plantSelection [data-plant]'));
    dialog.showModal();
  };
  dialog.querySelector('.guide-close').onclick=()=>dialog.close();
  dialog.onclose=()=>{
    if(resumeOnClose&&!document.hidden&&!document.querySelector('dialog[open]')&&gameState.isPaused)resumeGame();
    resumeOnClose=false;
  };
})();

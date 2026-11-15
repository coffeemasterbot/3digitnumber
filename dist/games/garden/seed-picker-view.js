/* The controller owns selection, stage availability and start eligibility. */
// Optional plant fields: cost is a nonnegative integer in sunlight units (including zero); unlockText is the controller-supplied unlock condition.
window.createGardenSeedPicker = function(host, callbacks) {
  const view=document.createElement('section');
  view.className='garden-picker';
  view.innerHTML='<h2>揀出戰植物</h2><div class="picker-tray" aria-label="八格出戰植物"></div><div class="picker-columns"><section><h3>植物卡庫</h3><div class="picker-library"></div></section><section><h3>本關敵人</h3><div class="picker-enemies"></div></section></div><footer><output aria-live="polite"></output><button type="button">推薦配置</button><button type="button">開始守護</button></footer>';
  host.append(view);
  const [recommend,start]=view.querySelectorAll('footer button');
  recommend.onclick=callbacks.recommend;
  start.onclick=callbacks.start;
  function tile(item,action){
    const el=document.createElement(action?'button':'span');
    if(action){el.type='button';el.onclick=()=>action(item.id)}
    if(item.art)el.append(item.art.cloneNode(true));
    const label=document.createElement('span');label.textContent=item.name;el.append(label);
    return el;
  }
  return function render({plants,selected,enemies,canStart,notice}){
    const tray=view.querySelector('.picker-tray'),library=view.querySelector('.picker-library');
    const focused=document.activeElement;
    const group=focused?.parentElement, focusId=focused?.dataset.seed;
    tray.replaceChildren();library.replaceChildren();
    for(let i=0;i<8;i++){
      const plant=plants.find(p=>p.id===selected[i]);
      const slot=plant?tile(plant,callbacks.toggle):document.createElement('span');
      if(plant){slot.dataset.seed=plant.id;slot.setAttribute('aria-label','移除'+plant.name)}else slot.textContent='—';
      tray.append(slot);
    }
    for(const plant of plants){
      const card=tile(plant,callbacks.toggle),active=selected.includes(plant.id);
      card.dataset.seed=plant.id;card.setAttribute('aria-pressed',String(active));card.disabled=!plant.locked&&!active&&selected.length>=8;
      if(Number.isInteger(plant.cost)&&plant.cost>=0){const cost=document.createElement('small');cost.textContent=plant.cost+' 陽光';card.append(cost)}
      if(plant.locked){
        card.setAttribute('aria-disabled','true');card.onclick=null;
        const lock=document.createElement('small');lock.textContent=plant.unlockText?'未解鎖 · '+plant.unlockText:'未解鎖';card.append(lock);
      }
      library.append(card);
    }
    view.querySelector('.picker-enemies').replaceChildren(...enemies.map(e=>tile(e)));
    view.querySelector('output').textContent=notice||(selected.length===8?'已選滿八張':'已選 '+selected.length+' / 8');
    start.disabled=!canStart;
    if(focusId){const next=[...(group?.children||[]),...library.children].find(e=>e.dataset.seed===focusId&&!e.disabled);next?.focus({preventScroll:true})}
  };
};

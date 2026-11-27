(() => {
  const key='pfap_achievements_v1';
  const catalogue=`
defence|csgo_hitless_1|bronze|無傷初陣|Untouchable Rookie|無傷完成一輪。|Clear one round without damage.
defence|csgo_hitless_3|silver|幽靈特工|Ghost Operator|同一局無傷完成三輪。|Clear three rounds in one run without damage.
defence|csgo_hitless_ex|gold|零傷拆彈傳說|Flawless Defuser|無傷完成 EX 關。|Clear EX without damage.
defence|csgo_eco_zero|gold|極致 Eco 之王|Zero-Spend Eco King|完成一局，全程冇買裝備。|Complete a run without buying gear.
defence|csgo_zero_miss|silver|冷靜審計官|Cold-Blooded Auditor|完成一輪，至少一發命中，冇射失。|Clear a round with at least one shot and no misses.
runner|run_500m|bronze|散紙獵人|Street Receipt Runner|單局達 500 米或 1,000 分。|Reach 500 m or 1,000 points in one run.
runner|run_1500m|silver|清水灣馬拉松|Marathon Saver|單局達 1,500 米或 5,000 分。|Reach 1,500 m or 5,000 points in one run.
runner|run_all_items|silver|全能道具大師|Master Collector|單局拾到噴射背包、跳鞋、滑板、雙倍同磁石。|Collect the jetpack, shoes, board, multiplier and magnet in one run.
runner|run_hover_clutch|gold|絕地翻身|Clutch Hoverboard|靠滑板擋撞之後再跑 200 米。|Run 200 m after a board saves you.
garden|pvz_pay_first|bronze|先儲後洗|Pay Yourself First|第一波敵人抵達前種夠三株陽光植物。|Plant three sun producers before the first enemy arrives.
garden|pvz_all_mowers|silver|銅牆鐵壁|Untouched Lawnmowers|保住五架割草機過關。|Clear a stage with all five mowers untouched.
garden|pvz_minimalist|gold|極簡預算陣|Budget Minimalist|用四種或以下植物過關。|Clear a stage using at most four plant types.
garden|pvz_emergency|gold|應急基金救場|Emergency Fund Clutch|一次應急清場擊倒四個或以上敵人。|Take out four enemies with one emergency clear.
jet|jet_1000m|bronze|免運免疫體|Promo Immune|單局飛到 1,000 米。|Fly 1,000 m in one run.
jet|jet_ace|silver|王牌機師|Ace Pilot|單局用兩次神秘載具兼飛到 2,000 米。|Use two mystery vehicles and fly 2,000 m in one run.
jet|jet_dodge_10|silver|千鈞一髮|Close Call Dodger|連續避過十個障礙，冇受擊。|Pass ten hazards in a row without a hit.
jet|jet_monk_800|gold|無欲苦行僧|Zero-Temptation Monk|單局無傷飛到 800 米。|Fly 800 m without taking a hit.
forest|coop_stage1|bronze|初試默契|First Harmony|完成第一關。|Clear Stage 1.
forest|coop_speed45|silver|極速拍檔|Speedrun Duo|45 秒內完成一關。|Clear a stage in under 45 seconds.
forest|coop_perfect|silver|零失誤雙星|Perfect Synergy|零失誤、收齊靈體完成一關。|Clear a stage with no deaths and every spirit.
forest|coop_all9|gold|神殿征服者|Temple Grandmaster|完成九個不同關卡。|Clear all nine stages.
meta|meta_first|bronze|踏出第一步|First Step|完成一局遊戲同站內前測。|Finish a game and complete the built-in pre-survey.
meta|meta_all5|silver|五大先兆剋星|5-Sign Buster|五款遊戲各完成一次。|Complete all five games.
meta|meta_day4|gold|跨過第四日|Past the Day-4 Wall|完成十四日行動卡第四日打卡。|Check in on Day 4 of the action card.
meta|meta_platinum|platinum|四位數傳奇|4-Digit Legend|解鎖十五項其他成就。|Unlock fifteen other achievements.
`.trim().split('\n').map(line=>line.split('|'));
  const groups={all:['全部','All'],defence:['預算防衛戰','Budget Defence'],runner:['散紙追蹤','Change Chase'],garden:['預算守護花園','Budget Garden'],jet:['優惠氣流','Deal Jet'],forest:['冰火同行','Fire & Ice'],meta:['全站','Site-wide']};
  const rarity={bronze:['銅','Bronze'],silver:['銀','Silver'],gold:['金','Gold'],platinum:['白金','Platinum']};
  let state={unlocked:[],cleared:[],forest:[],finished:false};
  try{
    const saved=JSON.parse(localStorage.getItem(key));
    if(saved){
      for(const field of ['unlocked','cleared','forest'])if(Array.isArray(saved[field]))state[field]=[...new Set(saved[field])];
      state.unlocked=state.unlocked.filter(id=>catalogue.some(record=>record[1]===id));
      state.finished=saved.finished===true;
    }
  }catch{}
  const dialog=document.getElementById('achievement-dialog');
  const list=document.getElementById('achievement-list');
  const filters=document.getElementById('achievement-filters');
  const toast=document.getElementById('achievement-toast');
  let tab='all',timer;
  const language=()=>document.documentElement.lang==='en'?1:0;
  function render(){
    const lang=language();
    document.getElementById('achievement-count').textContent=state.unlocked.length+' / '+catalogue.length;
    document.getElementById('achievement-progress').value=state.unlocked.length;
    filters.replaceChildren(...Object.entries(groups).map(([id,label])=>{
      const button=document.createElement('button');
      button.type='button';button.textContent=label[lang];
      button.setAttribute('aria-pressed',String(tab===id));
      button.onclick=()=>{tab=id;render();filters.querySelector('[aria-pressed=true]')?.focus()};
      return button;
    }));
    list.replaceChildren(...catalogue.filter(row=>tab==='all'||row[0]===tab).map(([,id,tier,zh,en,condition,english])=>{
      const item=document.createElement('li');
      const unlocked=state.unlocked.includes(id);
      item.dataset.rarity=tier;item.dataset.unlocked=String(unlocked);
      const label=document.createElement('small');
      label.textContent=rarity[tier][lang]+' · '+(unlocked?(lang?'Unlocked':'已解鎖'):(lang?'Locked':'未解鎖'));
      const name=document.createElement('strong');name.textContent=lang?en:zh;
      const text=document.createElement('p');text.textContent=lang?english:condition;
      item.append(label,name,text);
      return item;
    }));
  }
  function save(){try{localStorage.setItem(key,JSON.stringify(state))}catch{}}
  function announce(records,audio){
    const lang=language();
    toast.textContent=(lang?'Achievement unlocked: ':'解鎖成就：')+records.map(row=>row[lang?4:3]).join(' · ');
    toast.hidden=false;
    clearTimeout(timer);timer=setTimeout(()=>{toast.hidden=true},4100);
    audio?.play('achievement');
  }
  function unlock(ids,audio=window.PFAPAudio){
    const records=catalogue.filter(row=>ids.includes(row[1])&&!state.unlocked.includes(row[1]));
    if(!records.length)return;
    state.unlocked.push(...records.map(row=>row[1]));
    if(state.unlocked.length>=15&&!state.unlocked.includes('meta_platinum')){
      state.unlocked.push('meta_platinum');
      records.push(catalogue.find(row=>row[1]==='meta_platinum'));
    }
    save();if(dialog.open)render();announce(records,audio);
  }
  function first(){
    try{if(state.finished&&JSON.parse(localStorage.getItem('pfap-phase2-survey-v1'))?.before)unlock(['meta_first'])}catch{}
  }
  window.unlockAchievement=id=>{if(id!=='meta_platinum')unlock([id])};
  window.pfapAchievements={
    event(game,ids,audio){if(Array.isArray(ids))unlock(ids.filter(id=>catalogue.some(row=>row[0]===game&&row[1]===id)),audio)},
    finish(){state.finished=true;save();first()},
    clear(game){
      if(!Object.hasOwn(groups,game)||game==='all'||game==='meta')return;
      if(!state.cleared.includes(game)){state.cleared.push(game);save()}
      if(state.cleared.length===5)unlock(['meta_all5']);
    },
    forest(stage,audio){
      if(Number.isInteger(stage)&&stage>=1&&stage<=9&&!state.forest.includes(stage)){state.forest.push(stage);save()}
      if(state.forest.length===9)unlock(['coop_all9'],audio);
    }
  };
  document.querySelector('[data-achievements]').onclick=()=>{render();dialog.showModal()};
  window.addEventListener('site-language-change',()=>{if(dialog.open)render()});
  window.addEventListener('pfap-before-survey',first);
  first();
})();

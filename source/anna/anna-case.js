(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.AnnaCase = model;
})(globalThis, function () {
  'use strict';
  const KEY = 'life-lost-found-anna-v1';
  const VERSION = 1;
  const ACTS = ['警局失物認領處', '阿俊嘅屋企', '咖啡店員工休息室', '自修室 C 區 13 號'];
  const OPENING = ['phone','receipt','diary'];
  const HOUSE = ['fridge','drawer','desk','wardrobe','landlord','bank'];
  const CAFE = ['receipts','notebook'];
  const ROLES = ['社工','醫生','偵探','咒術師','心理學家','黑客'];
  const HOTEL = ['rest','water','window'];
  const CLUES = [...OPENING, ...HOUSE, ...CAFE];
  const CHALLENGES = {
    reserve: {game:'instalments', act:2, requires:HOUSE, title:'預留應急資源'},
    coordinate: {game:'pause', act:2, requires:[], title:'分頭查線索'},
    receipts: {game:'coins', act:3, requires:['receipts'], title:'追查小額支出'},
    offer: {game:'shipping', act:3, requires:['wardrobe','receipts'], title:'比較優惠總支出'},
    verify: {game:'defence', act:4, requires:CAFE, title:'核對新貸款條款'},
  };
  const CHALLENGE_IDS = Object.keys(CHALLENGES);
  const BANK = {
    income: {day:5, time:'18:00', cents:2000000},
    debits: [
      {day:6, time:'00:01', cents:540000},
      {day:6, time:'00:03', cents:420000},
      {day:6, time:'00:05', cents:380000},
    ],
    reportedCents:150,
  };
  const RECEIPTS = [
    ['星巴克咖啡', 4800], ['便利店飯糰', 1200], ['外賣平台配送費', 500],
    ['網購', 19900], ['影片網站自動續費', 1500], ['的士', 8500],
  ];
  function bankMath() {
    const debitCents = BANK.debits.reduce((sum, debit) => sum + debit.cents, 0);
    const calculatedCents = BANK.income.cents - debitCents;
    return {debitCents, calculatedCents, differenceCents:calculatedCents-BANK.reportedCents};
  }
  const receiptTotal = () => RECEIPTS.reduce((sum, row) => sum + row[1], 0);
  const fresh = () => ({version:VERSION, act:0, clues:[], oriented:false, unlocked:false, reconciled:false, challenges:{}, heard:false, completed:false,
    role:'', hotel:null, locker:false, budget:null});
  const includes = (s, list) => list.every(id => s.clues.includes(id));
  const identified = (s, id) => s.clues.includes(id);
  const questReady = (s, id) => Object.hasOwn(CHALLENGES,id) && s.act === CHALLENGES[id].act
    && (s.act !== 2 || s.oriented) && includes(s, CHALLENGES[id].requires)
    && (id !== 'reserve' || s.reconciled) && (id !== 'verify' || s.heard);
  function mayAdvance(s) {
    if(s.act === 1) return includes(s,OPENING);
    if(s.act === 2) return s.oriented && s.reconciled && includes(s,HOUSE) && !!s.challenges.reserve;
    if(s.act === 3) return includes(s,CAFE);
    return false;
  }
  function apply(s, action, value) {
    let next = s;
    if(action==='role' && s.act===0 && ROLES.includes(value) && s.role!==value)next={...s,role:value};
    if(action==='hotel' && s.act===2 && !s.oriented && !s.hotel && HOTEL.includes(value?.choice)
      && Number.isInteger(value.roll) && value.roll>=1 && value.roll<=10)next={...s,hotel:{choice:value.choice,roll:value.roll}};
    if(action==='locker' && s.act===3 && !s.locker)next={...s,locker:true};
    if(action==='budget' && s.act===3 && includes(s,CAFE) && Array.isArray(value) && value.length===RECEIPTS.length
      && value.every(item=>['need','want','recurring'].includes(item)))next={...s,budget:[...value]};
    if(action === 'start' && s.act === 0) next = {...s,act:1};
    if(action === 'orient' && s.act === 2 && !s.oriented) next = {...s,oriented:true};
    if(action === 'clue' && !identified(s,value)) {
      const readable = s.act === 1 && OPENING.includes(value)
        || s.act === 2 && s.oriented && HOUSE.includes(value) && (value !== 'bank' || s.unlocked)
        || s.act === 3 && CAFE.includes(value);
      if(readable) next = {...s,clues:[...s.clues,value],locker:s.locker||s.act===3};
    }
    if(action === 'unlock' && s.act === 2 && identified(s,'desk') && value === '241125' && !s.unlocked) next = {...s,unlocked:true};
    if(action === 'reconcile' && s.act === 2 && identified(s,'bank') && value === 'incomplete' && !s.reconciled) next = {...s,reconciled:true};
    if(action === 'advance' && mayAdvance(s)) next = {...s,act:s.act+1};
    if(action === 'listen' && s.act === 4 && value === 'listen' && !s.heard) next = {...s,heard:true};
    if(action === 'resolve' && value && questReady(s,value.id) && ['game','evidence'].includes(value.via) && !s.challenges[value.id]) {
      next = {...s,challenges:{...s.challenges,[value.id]:value.via}};
    }
    if(action === 'complete' && s.act === 4 && s.heard && s.challenges.verify && !s.completed) next = {...s,completed:true};
    return next;
  }
  function validate(data) {
    if(!data || data.version !== VERSION || !Number.isInteger(data.act) || data.act<0 || data.act>4
      || !Array.isArray(data.clues) || data.clues.some(id=>!CLUES.includes(id)) || new Set(data.clues).size!==data.clues.length
      || !data.challenges || typeof data.challenges!=='object' || Array.isArray(data.challenges)) throw Error('unsupported case save');
    for(const field of ['oriented','unlocked','reconciled','heard','completed']) if(typeof data[field]!=='boolean') throw Error('invalid flag');
    let s = fresh();
    if(data.role)s=apply(s,'role',data.role);
    if(data.role && s.role!==data.role)throw Error('invalid role');
    if(data.act) s = apply(s,'start');
    for(const id of OPENING) if(data.clues.includes(id)) s = apply(s,'clue',id);
    if(data.act>=2) s = apply(s,'advance');
    if(data.hotel){
      s=apply(s,'hotel',data.hotel);
      if(!s.hotel)throw Error('invalid hotel choice');
    }
    if(data.oriented) s = apply(s,'orient');
    for(const id of HOUSE.filter(id=>id!=='bank')) if(data.clues.includes(id)) s = apply(s,'clue',id);
    if(data.unlocked) s = apply(s,'unlock','241125');
    if(data.clues.includes('bank')) s = apply(s,'clue','bank');
    if(data.reconciled) s = apply(s,'reconcile','incomplete');
    function restore(id) {
      if(Object.hasOwn(data.challenges,id)) s = apply(s,'resolve',{id,via:data.challenges[id]});
    }
    restore('coordinate');
    restore('reserve');
    if(data.act>=3) s = apply(s,'advance');
    if(data.locker || data.clues.some(id=>CAFE.includes(id)))s=apply(s,'locker');
    for(const id of CAFE) if(data.clues.includes(id)) s = apply(s,'clue',id);
    if(data.budget){
      s=apply(s,'budget',data.budget);
      if(!s.budget)throw Error('invalid receipt plan');
    }
    restore('receipts');
    restore('offer');
    if(data.act>=4) s = apply(s,'advance');
    if(data.heard) s = apply(s,'listen','listen');
    restore('verify');
    if(data.completed) s = apply(s,'complete');
    if(s.act!==data.act || !includes(s,data.clues) || Object.keys(s.challenges).length!==Object.keys(data.challenges).length
      || ['oriented','unlocked','reconciled','heard','completed'].some(key=>s[key]!==data[key])) throw Error('invalid progress');
    return s;
  }
  function load(storage) {
    let raw;
    try { raw=storage.getItem(KEY); }
    catch { return {status:'temporary', state:fresh()}; }
    if(raw===null) return {status:'ready',state:fresh()};
    try { return {status:'ready',state:validate(JSON.parse(raw))}; }
    catch { return {status:'recovery',state:fresh(),raw}; }
  }
  return {KEY,ACTS,OPENING,HOUSE,CAFE,ROLES,CLUES,CHALLENGES,CHALLENGE_IDS,BANK,RECEIPTS,bankMath,receiptTotal,fresh,includes,identified,questReady,mayAdvance,apply,validate,load};
});

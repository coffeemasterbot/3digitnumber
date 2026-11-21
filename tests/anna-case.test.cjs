const {test} = require('node:test');
const assert = require('node:assert/strict');
const C = require('../source/anna/anna-case.js');

function toHouse() {
  let state = C.apply(C.fresh(),'start');
  for(const id of C.OPENING)state=C.apply(state,'clue',id);
  return C.apply(C.apply(state,'advance'),'orient');
}
function houseClues(state) {
  for(const id of C.HOUSE.filter(id=>id!=='bank'))state=C.apply(state,'clue',id);
  state=C.apply(state,'unlock','241125');
  state=C.apply(state,'clue','bank');
  return C.apply(state,'reconcile','incomplete');
}

test('Anna preserves the reported $1.50 and keeps receipts out of the statement',()=>{
  assert.equal(C.BANK.reportedCents,150);
  assert.deepEqual(C.bankMath(),{debitCents:1340000,calculatedCents:660000,differenceCents:659850});
  assert.equal(C.receiptTotal(),36400);
});

test('required clues and the correct PIN gate the bank record',()=>{
  const s=toHouse();
  assert.equal(C.apply(s,'unlock','241125'),s);
  assert.equal(C.apply(s,'clue','bank'),s);
  const withNote=C.apply(s,'clue','desk');
  assert.equal(C.apply(withNote,'unlock','111111'),withNote);
  assert.equal(C.apply(withNote,'clue','desk'),withNote);
  const first=C.apply(withNote,'unlock','241125');
  assert.equal(first.unlocked,true);
  assert.equal(C.apply(first,'clue','bank').clues.filter(id=>id==='bank').length,1);
});

for(const via of ['evidence','game']){
  test('the four-act case has a valid ending via '+via,()=>{
    let s=houseClues(toHouse());
    assert.equal(C.apply(s,'advance'),s);
    s=C.apply(s,'resolve',{id:'reserve',via});
    assert.equal(C.apply(s,'resolve',{id:'reserve',via}),s);
    s=C.apply(s,'advance');
    for(const id of C.CAFE)s=C.apply(s,'clue',id);
    s=C.apply(s,'advance');
    assert.equal(s.act,4);
    assert.equal(C.apply(s,'resolve',{id:'verify',via}),s);
    s=C.apply(s,'listen','listen');
    s=C.apply(s,'resolve',{id:'verify',via});
    s=C.apply(s,'complete');
    assert.equal(s.completed,true);
    assert.deepEqual(C.validate(s),s);
  });
}

test('corrupt progress is recoverable without reading legacy storage',()=>{
  const raw=JSON.stringify({...C.fresh(),act:4,completed:true});
  const readKeys=[];
  const s=C.load({getItem(key){readKeys.push(key);return raw;}});
  assert.deepEqual(readKeys,[C.KEY]);
  assert.equal(s.status,'recovery');
  assert.equal(s.raw,raw);
  assert.deepEqual(s.state,C.fresh());
  assert.equal(C.load({getItem(){throw Error('unavailable');}}).status,'temporary');
});

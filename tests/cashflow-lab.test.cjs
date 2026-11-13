const {test}=require('node:test');
const assert=require('node:assert/strict');
const {example,calculateCashflow,validateScenario}=require('../source/journey-core.js');
test('arrival date changes the first shortfall but not the closing cash',()=>{
 const a=calculateCashflow(example()),b=calculateCashflow({...example(),payday:5});
 assert.deepEqual([a.firstDeficitDay,a.gapCents,a.closingCents],[null,0,36600]);
 assert.deepEqual([b.firstDeficitDay,b.gapCents,b.closingCents],[3,5800,36600]);
});
test('meal vouchers only offset food, social and phone costs follow their dates',()=>{
 const r=calculateCashflow({...example(),foodCents:1500,socialCostCents:1251,socialDay:4,phoneDay:6});
 assert.equal(r.ledger[0].voucherCents,1500);assert.equal(r.ledger[0].balanceCents,3800);
 assert.equal(r.ledger[3].socialCostCents,1251);assert.equal(r.ledger[5].phoneCents,5000);
});
test('schema rejects invalid dates, amounts and shapes',()=>{
 for(const raw of [null,{},...[-1,NaN,12.4,Infinity].map(openingCents=>({...example(),openingCents})),{...example(),payday:0},{...example(),phoneDay:8}])assert.throws(()=>validateScenario(raw));
});

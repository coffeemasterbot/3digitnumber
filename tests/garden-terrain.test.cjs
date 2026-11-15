const assert=require('node:assert/strict');
const fs=require('node:fs');
const test=require('node:test');
const postcss=require('./../detailed-games/node_modules/postcss');
test('grass texture excludes the active water, lily and ice layers',()=>{
  const css=postcss.parse(fs.readFileSync(require.resolve('../detailed-games/garden/garden-upgrade.css'),'utf8'));
  const states=['.water-lane','[data-base=true]','[data-iced=true]'];
  const backgrounds=new Map();
  css.walkRules(/^#gameBoard \.cell/,rule=>{
    rule.walkDecls(/^background(?:-image)?$/,decl=>{
      if(rule.selector.includes(':not(')) {
        for(const state of states)assert.ok(rule.selector.includes(':not('+state+')'),rule.selector);
      } else if(states.includes(rule.selector.slice('#gameBoard .cell'.length))) {
        backgrounds.set(rule.selector,decl.value);
      }
    });
  });
  assert.equal(new Set(backgrounds.values()).size,3);
});

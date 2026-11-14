const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({channel:'msedge'});try{
 const p=await b.newPage({viewport:{width:1100,height:700}});const requests=[];p.on('request',r=>{if(r.url().includes('/api/'))requests.push(r.url())});
 p.on('pageerror',e=>console.error(e.message));await p.goto('http://127.0.0.1:8789/#dev-tools');await p.locator('#dev-tools summary').click();
 const before=await p.evaluate(()=>JSON.stringify(localStorage));
 for(const [game,target] of [['defence','round-2'],['instalments','garden-7-4'],['coins','pogo'],['shipping','blink'],['pause','temple-8']]){
  await p.locator('#dev-game').selectOption(game);await p.locator('#dev-target').selectOption(target);await p.locator('#dev-start').click();
  const frame=p.frameLocator('#game-frame');await frame.getByRole('button',{name:'下一段',exact:true}).waitFor();
  if(game==='defence'){await frame.locator('[data-action=begin]').click();await frame.locator('[data-action=start]').click();assert.equal(await frame.locator('body').evaluate(()=>fpsSnapshot().enemies.length),5)}
  if(game==='instalments'){await frame.locator('.garden-picker footer button').last().click();assert.equal(await frame.locator('body').evaluate(()=>gameState.wave),4)}
  if(game==='pause'){await frame.locator('#forest-stage').waitFor()}
  await frame.getByRole('button',{name:'下一段',exact:true}).click();await frame.getByRole('button',{name:'退出',exact:true}).click();
  assert.equal(await p.evaluate(()=>JSON.stringify(localStorage)),before);console.log(game,target,'isolated');
 }assert.deepEqual(requests,[]);
 }finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});

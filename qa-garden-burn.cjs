const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:720}});
  await page.goto('http://127.0.0.1:8789/games/garden/');await page.locator('#garden-start').click();
  await page.evaluate(()=>{
   spawnZombie('giant',1);window.burnTarget=gameState.zombies.at(-1);
   const cell=document.querySelector('.cell[data-row="1"][data-col="3"]');
   const sprout=document.createElement('div');cell.append(sprout);
   shoot({element:sprout,type:'firepea',row:1,col:3,lastShot:-10000});
  });
  await page.waitForFunction(()=>window.burnTarget?.burnLeft>0);
  const hit=await page.evaluate(()=>burnTarget.health);
  await page.waitForFunction(()=>burnTarget.burnLeft===0);
  const expired=await page.evaluate(()=>burnTarget.health);
  console.log({hit,expired});assert.equal(hit-expired,4);
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});

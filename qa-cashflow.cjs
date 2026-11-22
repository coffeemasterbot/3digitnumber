const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs/promises');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  console.log('Edge',browser.version());
  for(const [width,height,offline] of [[1440,900,false],[932,430,false],[390,844,true]]){
   const context=await browser.newContext({viewport:{width,height},acceptDownloads:true});
   const page=await context.newPage(), errors=[],requests=[];
   page.on('pageerror',e=>errors.push(e.message));
   if(offline)await context.route(/^https?:/,r=>{requests.push(r.request().url());return r.abort()});
   const url=offline?pathToFileURL(path.resolve('dist/downloads/lost-found-money-offline.html')).href:'http://127.0.0.1:8789/';
   await page.goto(url);await page.locator('[href="#cashflow"]').first().click();
   await page.locator('#lab-detail summary').click();
   const summary=await page.locator('#lab-summary').innerText();
   assert.match(summary,/第 3 日 · 差 \$16\.00/);
   assert.match(summary,/最大缺口\s+\$58\.00/);
   await page.locator('#quick-fields [data-field=openingCents]').fill('80.25');
   await page.locator('#lab-save').click();
   const backup=await page.evaluate(()=>localStorage.getItem('arcade-cashflow-lab-v1'));
   for(const raw of ['null',backup,backup]){
    await page.locator('#lab-import').setInputFiles({name:'test.json',mimeType:'application/json',buffer:Buffer.from(raw)});
    if(raw==='null'){await page.getByText('方案檔案無效。').waitFor();continue}
    await page.locator('#lab-confirm').waitFor();await page.locator('#lab-cancel').click();
   }
   await page.locator('#lab-import').setInputFiles({name:'test.json',mimeType:'application/json',buffer:Buffer.from(backup)});await page.locator('#lab-confirm').click();
   if(process.env.QA_SCREENSHOTS)await page.locator('#cashflow').screenshot({path:path.join(process.env.QA_SCREENSHOTS,'cashflow-'+width+'.png')});
   await page.reload();
   assert.equal(await page.locator('#quick-fields [data-field=openingCents]').inputValue(),'80.25');
   assert.equal(await page.evaluate(()=>localStorage.getItem('life-lost-found-guided-v5')),null);
   await page.locator('#lab-detail summary').click();await page.locator('#cashflow [data-play=plan]').click();
   const card=page.frameLocator('#game-frame');assert.equal(await card.locator('#habit').inputValue(),'付款前先睇到帳日同到期日');await card.locator('#habit').fill('先睇到期日');await card.locator('#trigger').fill('早餐後');
   await card.getByRole('button',{name:'由今日開始十四日'}).click();assert.equal(await card.locator('.stamp.marked').count(),0);
   assert.equal(await card.locator('.stamp').count(),14);
   assert.equal(await card.locator('.stamp').last().isDisabled(),true);
   await page.reload();
   await page.locator('#landing').waitFor();assert.equal(await page.locator('#game-frame').count(),0);
   assert.equal(await page.locator('#habit-section').count(),0);
   await page.locator('[data-progress]').click();await page.locator('#open-action-plan').click();
   assert.equal(await card.locator('#trigger').inputValue(),'早餐後');
   const frame=page.frames().find(f=>f.parentFrame());
   await frame.evaluate(()=>{Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw Error('denied')}}})});
   await card.locator('button[onclick="window.copyHabitStory()"]').click();assert.match(await card.locator('#card-copy').inputValue(),/早餐後/);
   await page.keyboard.press('Escape');
   assert.equal(await card.getByRole('button',{name:'列印',exact:true}).count(),0);
   const download=page.waitForEvent('download');await card.locator('button[onclick="window.downloadActionCard()"]').click();
   const saved=await download;assert.match(saved.suggestedFilename(),/十四日行動卡\.pdf$/);
   const pdf=await fs.readFile(await saved.path());assert.equal(pdf.subarray(0,8).toString(),'%PDF-1.4');
   const source=pdf.toString('latin1');assert.match(source,/\/Count 1/);assert.match(source,/\/MediaBox \[0 0 540 960\]/);
   const offset=Number(source.match(/startxref\n(\d+)/)[1]);assert.equal(pdf.subarray(offset,offset+4).toString(),'xref');
   await page.locator('#back-home').click();
   if(height>width)await page.setViewportSize({width:height,height:width});
   await page.locator('.quick-games [data-play=coins]').click();await page.frameLocator('#game-frame').getByRole('button',{name:'開始跑酷',exact:true}).click();await page.frameLocator('#game-frame').locator('canvas').first().waitFor({state:'attached'});
   assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);console.log(width,height,offline?'offline':'local','passed');await context.close();
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});

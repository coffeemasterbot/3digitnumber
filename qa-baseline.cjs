const {chromium}=require('C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs');
(async()=>{const b=await chromium.launch({headless:true,channel:'msedge',args:['--no-proxy-server']});const p=await b.newPage();const report={errors:[],observations:[]};p.on('pageerror',e=>report.errors.push(e.message));
await p.goto('http://127.0.0.1:8789/story/');await p.getByRole('button',{name:'打開佢留低嘅箱',exact:true}).click();
await p.evaluate(()=>{window.openMini('coins');window.startArcade('coins')});await p.waitForTimeout(100);await p.evaluate(()=>window.finishArcade());
report.observations.push({case:'Exit arcade before financial decision',mini:await p.evaluate(()=>s.mini),screen:await p.locator('#modal-body').innerText()});
await p.evaluate(()=>localStorage.setItem('life-lost-found-guided-v5',JSON.stringify({version:5,started:true,stage:2,clues:[],witnesses:[99],mini:null,kit:'bad'})));await p.reload();report.observations.push({case:'Malformed save',screen:await p.locator('#app').innerText()});
fs.writeFileSync('qa-baseline-results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await b.close()})().catch(e=>{console.error(e);process.exit(1)});

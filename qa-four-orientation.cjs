const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
const {chromium}=require('C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const server=http.createServer((q,r)=>{let f=path.join('dist',decodeURIComponent(new URL(q.url,'http://localhost').pathname));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){r.writeHead(404).end();return}r.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(r)});await new Promise(ok=>server.listen(0,'127.0.0.1',ok));let b;
try {
 b=await chromium.launch({channel:'msedge',args:['--enable-unsafe-swiftshader']});
 console.log('Edge',b.version());
 const url='http://127.0.0.1:'+server.address().port;
 for(const [game,route,start] of [
 ['garden','games/garden/','#garden-start'],['jet','games/jet/','text=開始飛行'],
 ['runner','games/runner/','text=開始跑酷'],['forest','story/index.html?arcade=pause','text=進入森林']]){
  const p=await b.newPage({viewport:{width:844,height:390},hasTouch:true});
  p.setDefaultTimeout(5000);
  await p.goto(url+'/'+route);await p.locator(start).first().click();
  if(game==='forest')await p.getByRole('button',{name:'準備好，開始',exact:true}).click();
  await p.waitForTimeout(300);
  await p.setViewportSize({width:390,height:844});
  await p.locator('dialog[open] h2').filter({hasText:'請橫放裝置'}).waitFor();
  const snapshot=()=>p.evaluate(g=>g==='forest'?moneyJourneySnapshot().remaining:g==='garden'?gardenBattleSnapshot().wave.elapsed:g==='jet'?detailedGameSnapshot().seconds:detailedGameSnapshot().distance,game);
  const before=await snapshot();await p.waitForTimeout(10050);assert.equal(await snapshot(),before);
  await p.setViewportSize({width:932,height:430});
  await p.locator('dialog[open]').filter({hasText:'準備好繼續？'}).getByRole('button',{name:'繼續',exact:true}).click();
  await p.waitForTimeout(500);assert.notEqual(await snapshot(),before);
  console.log(game,'portrait frozen 10s; landscape resumed');await p.close();
 }
}finally{await b?.close();server.close()}})().catch(e=>{console.error(e);process.exitCode=1});

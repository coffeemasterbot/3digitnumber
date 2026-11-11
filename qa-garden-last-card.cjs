const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
const {chromium}=require('C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const server=http.createServer((q,r)=>{let f=path.join('dist',decodeURIComponent(new URL(q.url,'http://localhost').pathname));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){r.writeHead(404).end();return}r.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(r)});await new Promise(ok=>server.listen(0,'127.0.0.1',ok));let b;
try{
 b=await chromium.launch({channel:'msedge'});
 for(const [width,height,embed] of [[1280,720,false],[932,430,false],[844,390,true]]){
 const p=await b.newPage({viewport:{width,height},hasTouch:width<1000});
 await p.goto('http://127.0.0.1:'+server.address().port+(embed?'/':'/games/garden/'));
 let f=p;if(embed){await p.locator('[data-play=instalments]').first().click();f=await(await p.locator('#game-frame').elementHandle()).contentFrame()}
 await f.locator('#garden-start').click();
 const last=f.locator('#plantSelection [data-plant]').last();
 await last.scrollIntoViewIfNeeded();
 const type=await last.getAttribute('data-plant');
 if(width<1000)await last.tap();else await last.click();
 assert.equal(await f.evaluate(()=>gameState.selectedPlant?.type),type);
 assert.ok(await f.evaluate(()=>document.querySelector('#plantSelection').getBoundingClientRect().right<=document.querySelector('#controlButtons').getBoundingClientRect().left));
 await p.screenshot({path:'qa-garden-seeds-'+width+'.png'});
 console.log(width,height,embed,type);await p.close();
 }
}finally{await b?.close();server.closeAllConnections();server.close()}})().catch(e=>{console.error(e);process.exitCode=1});

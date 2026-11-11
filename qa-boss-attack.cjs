const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
const {chromium}=require('C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const server=http.createServer((q,r)=>{let f=path.join('dist',decodeURIComponent(new URL(q.url,'http://localhost').pathname));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){r.writeHead(404).end();return}r.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(r)});await new Promise(ok=>server.listen(0,'127.0.0.1',ok));let b;
try{
 b=await chromium.launch({channel:'msedge'});
 const p=await b.newPage({viewport:{width:932,height:430}});
 await p.goto('http://127.0.0.1:'+server.address().port+'/games/garden/');await p.locator('#garden-start').click();
 // Isolate the encounter for rendering and real counter input.
 await p.evaluate(()=>GardenBoss.start());
 const ball=p.locator('.boss-attack.fire');await ball.waitFor();const first=await ball.boundingBox();
 await p.waitForTimeout(450);const second=await ball.boundingBox();assert.ok(second.x<first.x);
 await p.screenshot({path:'qa-garden-boss-fire.png'});
 await p.locator('#mechanical-boss button').click();assert.equal(await ball.count(),0);
 console.log('Visible fireball moved toward plant row; emergency card removed it');
}finally{await b?.close();server.closeAllConnections();server.close()}})().catch(e=>{console.error(e);process.exitCode=1});

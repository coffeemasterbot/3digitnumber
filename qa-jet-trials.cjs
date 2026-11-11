const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
const {chromium}=require('C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const server=http.createServer((q,r)=>{let f=path.join('dist',decodeURIComponent(new URL(q.url,'http://localhost').pathname));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){r.writeHead(404).end();return}r.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(r)});await new Promise(ok=>server.listen(0,'127.0.0.1',ok));let b;
try{
 b=await chromium.launch({channel:'msedge'});
 const p=await b.newPage({viewport:{width:932,height:430}});
 const url='http://127.0.0.1:'+server.address().port+'/games/jet/';
 for(const vehicle of ['mecha','glider','drill','gravity','blink','dragon']){
 await p.goto(url);await p.getByLabel('飛行模式').selectOption('trial');
 await p.getByLabel('試駕載具').selectOption(vehicle);await p.getByRole('button',{name:'開始飛行'}).click();
 await p.waitForFunction(v=>detailedGameSnapshot().player.power===v&&detailedGameSnapshot().seconds>0,vehicle);
 await p.keyboard.down('Space');await p.waitForTimeout(180);await p.keyboard.up('Space');
 const snapshot=await p.evaluate(()=>detailedGameSnapshot());
 assert.ok(snapshot.player.timer>0&&snapshot.player.timer<1200);
 console.log(vehicle,snapshot.mode,snapshot.seconds);
 }
}finally{await b?.close();server.closeAllConnections();server.close()}})().catch(e=>{console.error(e);process.exitCode=1});

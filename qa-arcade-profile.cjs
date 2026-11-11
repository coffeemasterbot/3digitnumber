const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
const {chromium}=require('C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const server=http.createServer((q,r)=>{let f=path.join('dist',decodeURIComponent(new URL(q.url,'http://localhost').pathname));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){r.writeHead(404).end();return}r.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(r)});await new Promise(ok=>server.listen(0,'127.0.0.1',ok));let b;
try{
 b=await chromium.launch({channel:'msedge'});const p=await b.newPage();
 await p.goto('http://127.0.0.1:'+server.address().port);
 const profile=p.locator('#arcade-profile');await profile.locator('summary').click();
 const file=profile.locator('input[type=file]');
 const backup={version:2,profile:{name:'測試玩家',recent:'coins'},records:{coins:{best:150,plays:2}}};
 await file.setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(backup))});
 await profile.locator('[data-import]').click();
 assert.match(await profile.locator('ul').innerText(),/150 分 · 2 局/);
 const [download]=await Promise.all([p.waitForEvent('download'),profile.locator('[data-export]').click()]);
 assert.deepEqual(JSON.parse(fs.readFileSync(await download.path())),backup);
 await file.setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from('null')});
 await profile.locator('output').filter({hasText:'格式或版本有誤'}).waitFor();
 await profile.locator('[data-resume]').click();await p.frameLocator('#game-frame').getByText('開始跑酷',{exact:true}).waitFor();
 console.log('Edge',b.version(),'import preview, score merge, export round trip, malformed backup and recent launch passed');
}finally{await b?.close();server.closeAllConnections();server.close()}})().catch(e=>{console.error(e);process.exitCode=1});

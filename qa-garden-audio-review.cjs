const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
const {chromium}=require('C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const server=http.createServer((q,r)=>{let f=path.join('dist',decodeURIComponent(new URL(q.url,'http://localhost').pathname));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){r.writeHead(404).end();return}r.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(r)});await new Promise(ok=>server.listen(0,'127.0.0.1',ok));let b;
try {
 b=await chromium.launch({channel:'msedge'});
 const p=await b.newPage({viewport:{width:932,height:430}});
 await p.addInitScript(()=>{
   const Native=window.AudioContext;
   window.AudioContext=class extends Native{
     constructor(...args){
       super(...args);
       const recording=this.createMediaStreamDestination();
       const connect=AudioNode.prototype.connect;
       const destination=this.destination;
       const previous=AudioNode.prototype.connect;
       AudioNode.prototype.connect=function(target,...rest){
         if(target===destination)connect.call(this,recording);
         return previous.call(this,target,...rest);
       };
       const recorder=new MediaRecorder(recording.stream),chunks=[];
       recorder.ondataavailable=e=>chunks.push(e.data);
       recorder.start();
       window.finishAudio=()=>new Promise(done=>{recorder.onstop=async()=>done(Array.from(new Uint8Array(await new Blob(chunks).arrayBuffer())));recorder.stop()});
     }
   };
 });
 await p.goto('http://127.0.0.1:'+server.address().port+'/games/garden/');
 await p.locator('#garden-start').click();
 await p.locator('[data-plant=mine]').click();
 await p.locator('.cell[data-row="0"][data-col="2"]').click();
 assert.equal(await p.evaluate(()=>gameState.plants.some(plant=>plant.type==='mine')),true);
 await p.waitForTimeout(6500);
 assert.equal(await p.evaluate(()=>gameState.plants.find(plant=>plant.type==='mine')?.element.title),'已布防');
 const bytes=await p.evaluate(()=>window.finishAudio());
 fs.writeFileSync('garden-audio-preview.webm',Buffer.from(bytes));
 console.log('Mine armed; recorded',bytes.length,'bytes of game audio');
}finally{await b?.close();server.closeAllConnections();server.close()}})().catch(e=>{console.error(e);process.exitCode=1});

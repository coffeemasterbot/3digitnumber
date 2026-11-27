import{test}from'node:test';import assert from'node:assert/strict';import{DatabaseSync}from'node:sqlite';import fs from'node:fs';import{api,validateResult}from'../worker/index.mjs';
function database(){
 const sqlite=new DatabaseSync(':memory:');
 for(const f of fs.readdirSync('drizzle').filter(f=>f.endsWith('.sql')))sqlite.exec(fs.readFileSync('drizzle/'+f,'utf8'));
 const DB={prepare(sql){
  let args=[]; const statement={};
  statement.bind=(...a)=>{args=a;return statement};
  statement.first=async()=>sqlite.prepare(sql).get(...args)||null;
  statement.all=async()=>({results:sqlite.prepare(sql).all(...args)});
  statement.run=async()=>({meta:{changes:Number(sqlite.prepare(sql).run(...args).changes)}});
  return statement;
 }};
 return {sqlite,DB};
}
const request=(path,body,cookie='',origin='https://game.test')=>new Request('https://game.test/api/'+path,{method:body?'POST':'GET',headers:{'content-type':'application/json',origin,cookie},body:body?JSON.stringify(body):undefined});
test('Shared scores persist across visitors, reject duplicates and record every run',async()=>{const {DB,sqlite}=database();const start=await api(request('runs/start',{game:'runner',player:'Alice'}),{DB});assert.equal(start.status,201);const cookie=start.headers.get('set-cookie').split(';')[0],{id}=await start.json();assert.equal((await api(request('runs/finish',{id,score:2,distance:1,duration:.1},cookie),{DB})).status,200);const twice=await api(request('runs/finish',{id,score:999,distance:999,duration:90},cookie),{DB});assert.equal((await twice.json()).duplicate,true);const rows=await(await api(request('leaderboard?game=runner'),{DB})).json();assert.equal(rows.entries.length,1);assert.equal(rows.entries[0].score,2);const next=await api(request('runs/start',{game:'runner',player:'Alice'},cookie),{DB}),second=await next.json();await api(request('runs/finish',{id:second.id,score:1,distance:1,duration:.1},cookie),{DB});const recent=await(await api(request('leaderboard?game=runner&view=recent'),{DB})).json();assert.equal(recent.entries.length,2);sqlite.close()});
test('Run submissions validate ownership, origin, score bounds and elapsed time',async()=>{const {DB,sqlite}=database();assert.equal((await api(request('runs/start',{game:'runner'},'','https://other.test'),{DB})).status,403);const start=await api(request('runs/start',{game:'jet',player:'<b>name</b>'}),{DB}),cookie=start.headers.get('set-cookie').split(';')[0],{id}=await start.json();assert.equal((await api(request('runs/finish',{id,score:1,distance:1,duration:.1}),{DB})).status,404);assert.equal((await api(request('runs/finish',{id,score:1000000,distance:1,duration:.1},cookie),{DB})).status,400);assert.equal((await api(request('runs/finish',{id,score:1,distance:1,duration:90},cookie),{DB})).status,400);assert.equal((await api(request('leaderboard?game=unknown'),{DB})).status,400);assert.equal(validateResult({score:-1,distance:0,duration:0},{game:'runner',started_at:0},0),false);sqlite.close()});
test('Unavailable database returns a recoverable service error',async()=>{assert.equal((await api(request('leaderboard?game=runner'),{})).status,503)});

test('Five game boards share scores while personal results and stage filters stay isolated',async()=>{
 const {DB,sqlite}=database();
 const result=(path,body,cookie)=>api(request(path,body,cookie),{DB});
 for(const [game,board,otherBoard,score] of [
  ['runner','endless','practice',14], ['jet','mission-mix','practice',18],
  ['garden','stage-5','stage-1',5500], ['forest','standard-stage-9','hard-stage-9',4],
  ['defence','2-dispatch','quick',88],
 ]){
  const run=await result('runs/start',{game,board,player:'Same alias'});
  assert.equal(run.status,201);
  const cookie=run.headers.get('set-cookie').split(';')[0];
  const {id}=await run.json();
  const finish=await result('runs/finish',{id,score,duration:1,distance:0},cookie);
  assert.equal(finish.status,200);
  const boardPath='leaderboard?game='+game;
  const read=async(mode,view,who)=>(await(await result(boardPath+'&board='+mode+'&view='+view,undefined,who)).json()).entries;
  assert.equal((await read(board,'top'))[0].score,score);
  assert.equal((await read(board,'mine')).length,0);
  assert.equal((await read(board,'mine',cookie))[0].score,score);
  assert.equal((await read(otherBoard,'top')).length,0);
 }
 sqlite.close();
});
test('Activity counts unique browsers and starts, and requires the team key',async()=>{
 const {DB,sqlite}=database();
 const env={DB,PFAP_METRICS_KEY:'sample key for local tests'};
 const event=(body,cookie)=>api(request('activity',body,cookie),env);
 const a=(await event({type:'visit'})).headers.get('set-cookie').split(';')[0];
 const b=(await event({type:'visit'})).headers.get('set-cookie').split(';')[0];
 await event({type:'visit'},a);
 const id='12345678-abcd-abcd-abcd-123456789abc';
 await event({type:'start',game:'forest',id},a);
 await event({type:'start',game:'forest',id},a);
 await event({type:'start',game:'forest',id},b);
 assert.equal((await event({type:'start',game:'story',id},a)).status,400);
 const summary=headers=>api(new Request('https://game.test/api/activity/summary',{headers}),env);
 assert.equal((await summary({})).status,403);
 assert.equal((await summary({'x-pfap-metrics-key':'wrong'})).status,403);
 const data=await(await summary({'x-pfap-metrics-key':env.PFAP_METRICS_KEY})).json();
 assert.equal(data.visitors,2);assert.equal(data.players,2);
 assert.deepEqual(data.games,[{game:'forest',players:2,starts:2}]);
 sqlite.close();
});
test('GitHub Pages can send anonymous activity without shared cookies or dashboard access',async()=>{
 const {DB,sqlite}=database();
 const origin='https://coffeemasterbot.github.io';
 const preflight=await api(new Request('https://game.test/api/activity',{method:'OPTIONS',headers:{origin}}),{DB});
 assert.equal(preflight.status,204);assert.equal(preflight.headers.get('access-control-allow-origin'),origin);
 const visitor='22345678-abcd-abcd-abcd-123456789abc';
 const visit=()=>api(request('activity',{type:'visit',visitor},'',origin),{DB});
 assert.equal((await visit()).status,200);assert.equal((await visit()).headers.get('set-cookie'),null);
 assert.equal(sqlite.prepare('SELECT COUNT(*) AS n FROM pfap_activity').get().n,1);
 const forbidden=await api(new Request('https://game.test/api/activity/summary',{headers:{origin}}),{DB});
 assert.equal(forbidden.status,403);assert.equal(forbidden.headers.get('access-control-allow-origin'),null);
 sqlite.close();
});
test('A visitor can delete only their own online records',async()=>{const{DB,sqlite}=database();const a=await api(request('runs/start',{game:'runner',player:'A'}),{DB}),cookie=a.headers.get('set-cookie').split(';')[0],{id}=await a.json();await api(request('runs/finish',{id,score:0,distance:0,duration:0},cookie),{DB});const other=new Request('https://game.test/api/runs/mine',{method:'DELETE',headers:{origin:'https://game.test'}});await api(other,{DB});assert.equal(sqlite.prepare('SELECT count(*) AS n FROM arcade_runs').get().n,1);const own=new Request('https://game.test/api/runs/mine',{method:'DELETE',headers:{origin:'https://game.test',cookie}});const result=await(await api(own,{DB})).json();assert.equal(result.deleted,1);assert.equal(sqlite.prepare('SELECT count(*) AS n FROM arcade_runs').get().n,0);sqlite.close()});
test('Pages results use anonymous ownership and share the same public board',async t=>{
 const {DB,sqlite}=database();
 t.after(()=>sqlite.close());
 const origin='https://coffeemasterbot.github.io';
 const owner=crypto.randomUUID();
 const send=(path,{method='GET',body,identity=owner}={})=>api(new Request('https://game.test/api/'+path,{
  method,headers:{origin,'content-type':'application/json','x-pfap-score-owner':identity},body:body&&JSON.stringify(body)
 }),{DB});
 const preflight=await send('runs/start',{method:'OPTIONS'});
 assert.equal(preflight.status,204);
 assert.equal(preflight.headers.get('access-control-allow-origin'),origin);
 const started=await send('runs/start',{method:'POST',body:{game:'runner',board:'endless',player:'Visitor'}});
 assert.equal(started.status,201);
 assert.equal(started.headers.get('set-cookie'),null);
 const {id}=await started.json();
 const result={method:'POST',body:{id,score:10,duration:1,distance:2}};
 assert.equal((await send('runs/finish',{...result,identity:crypto.randomUUID()})).status,404);
 assert.equal((await send('runs/finish',result)).status,200);
 const board='leaderboard?game=runner&board=endless';
 assert.equal((await (await api(request(board),{DB})).json()).entries[0].score,10);
 assert.equal((await (await send('runs/mine',{method:'DELETE'})).json()).deleted,1);
});
test('Top 10 caps the board and manual names are saved only once',async t=>{
 const {DB,sqlite}=database();
 t.after(()=>sqlite.close());
 for(let score=1;score<=11;score++){
  const opened=await api(request('runs/start',{game:'garden',board:'stage-1'}),{DB});
  const owner=opened.headers.get('set-cookie').split(';')[0];
  const {id}=await opened.json();
  const stats={id,score,duration:1,distance:0,nickname:score===11?'  Long display name  ':'Player'};
  assert.equal((await api(request('runs/finish',stats,owner),{DB})).status,200);
  const twice=await api(request('runs/finish',{...stats,nickname:'Changed'},owner),{DB});
  assert.equal((await twice.json()).duplicate,true);
 }
 const board=await api(request('leaderboard?game=garden&board=stage-1'),{DB});
 const {entries}=await board.json();
 assert.deepEqual(entries.map(row=>row.score),[11,10,9,8,7,6,5,4,3,2]);
 assert.equal(entries[0].player,'Long display n');
});

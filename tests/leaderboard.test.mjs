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

test('A visitor can delete only their own online records',async()=>{const{DB,sqlite}=database();const a=await api(request('runs/start',{game:'runner',player:'A'}),{DB}),cookie=a.headers.get('set-cookie').split(';')[0],{id}=await a.json();await api(request('runs/finish',{id,score:0,distance:0,duration:0},cookie),{DB});const other=new Request('https://game.test/api/runs/mine',{method:'DELETE',headers:{origin:'https://game.test'}});await api(other,{DB});assert.equal(sqlite.prepare('SELECT count(*) AS n FROM arcade_runs').get().n,1);const own=new Request('https://game.test/api/runs/mine',{method:'DELETE',headers:{origin:'https://game.test',cookie}});const result=await(await api(own,{DB})).json();assert.equal(result.deleted,1);assert.equal(sqlite.prepare('SELECT count(*) AS n FROM arcade_runs').get().n,0);sqlite.close()});

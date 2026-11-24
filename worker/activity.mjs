const randomId = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
const reply = (value, status=200, extra={}) => new Response(JSON.stringify(value),{status,headers:{
  'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff',...extra,
}});
function cookie(request) {
  const id = request.headers.get('cookie')?.match(/(?:^|;\s*)pfap_activity=([^;]+)/)?.[1];
  return id && randomId.test(id) ? id : null;
}
async function canRead(request,env) {
  const key = typeof env.PFAP_METRICS_KEY==='string' ? env.PFAP_METRICS_KEY : '';
  if (key.length<16) return false;
  const offered = request.headers.get('x-pfap-metrics-key');
  if (!offered || offered.length>3072) return false;
  let decoded;
  try{decoded=decodeURIComponent(offered)}catch{return false}
  if(decoded.length>256)return false;
  const bytes = new TextEncoder().encode(decoded);
  const [actual,expected] = await Promise.all([crypto.subtle.digest('SHA-256',bytes),crypto.subtle.digest('SHA-256',new TextEncoder().encode(key))]);
  const digest=new Uint8Array(actual), target=new Uint8Array(expected);
  let difference=0;
  for(let i=0;i<digest.length;i++)difference|=digest[i]^target[i];
  return difference===0;
}
export async function activityApi(request,env,games) {
  const url = new URL(request.url);
  const db = env.DB;
  try {
    if (url.pathname.endsWith('/summary')) {
      if (request.method!=='GET') return reply({error:'Method not allowed'},405);
      if (!(await canRead(request,env))) return reply({error:'Restricted to approved team members'},403);
      if (!db) return reply({error:'Unavailable'},503);
      const totals=await db.prepare("SELECT COUNT(DISTINCT visitor) AS visitors, COUNT(DISTINCT CASE WHEN game<>'' THEN visitor END) AS players, MIN(created_at) AS first_event FROM pfap_activity").first();
      const entries=await db.prepare("SELECT game, COUNT(DISTINCT visitor) AS players, COUNT(*) AS starts FROM pfap_activity WHERE game<>'' GROUP BY game").all();
      const survey=await db.prepare(`SELECT
        COUNT(CASE WHEN b.phase='before' THEN 1 END) AS before_count,
        COUNT(CASE WHEN b.phase='after' THEN 1 END) AS after_count,
        COUNT(a.pair_id) AS paired,
        AVG(CASE WHEN a.pair_id IS NOT NULL THEN b.attitude END) AS attitude_before,
        AVG(a.attitude) AS attitude_after,
        AVG(CASE WHEN a.pair_id IS NOT NULL THEN b.knowledge END) AS knowledge_before,
        AVG(a.knowledge) AS knowledge_after
        FROM pfap_survey b LEFT JOIN pfap_survey a
          ON a.pair_id=b.pair_id AND a.phase='after' AND b.phase='before'`).first().catch(()=>null);
      return reply({...totals,games:entries.results??[],survey});
    }
    const origin=request.headers.get('origin');
    const fromPages=origin==='https://coffeemasterbot.github.io';
    const cors=fromPages?{'access-control-allow-origin':origin,'vary':'Origin'}:{};
    if(fromPages&&request.method==='OPTIONS')return new Response(null,{status:204,headers:{
      ...cors,'access-control-allow-methods':'POST','access-control-allow-headers':'Content-Type',
    }});
    if (request.method!=='POST') return reply({error:'Method not allowed'},405);
    if (!fromPages&&origin!==url.origin) return reply({error:'Wrong origin'},403);
    if (!db) return reply({error:'Unavailable'},503);
    if (!request.headers.get('content-type')?.startsWith('application/json')) return reply({error:'Expected JSON'},415);
    const raw=await request.text();
    if (raw.length>512) return reply({error:'Invalid event'},400);
    let body;
    try{body=JSON.parse(raw)}catch{return reply({error:'Invalid event'},400)}
    if (!body || (body.type!=='visit' && (body.type!=='start'||!games.has(body.game)||typeof body.id!=='string'||!randomId.test(body.id)))) {
      return reply({error:'Invalid event'},400);
    }
    if(fromPages&&(typeof body.visitor!=='string'||!randomId.test(body.visitor)))return reply({error:'Invalid visitor'},400,cors);
    const existing=fromPages?body.visitor:cookie(request);
    const visitor=existing??crypto.randomUUID();
    const now=Date.now();
    const visit=body.type==='visit';
    if (!visit && !existing) return reply({error:'Visit cookie required'},409);
    await db.prepare('INSERT OR IGNORE INTO pfap_activity(visitor,event,game,created_at) VALUES(?,?,?,?)')
      .bind(visitor,visit?'visit':body.id,visit?'':body.game,now).run();
    const setCookie='pfap_activity='+visitor+'; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000'+(url.protocol==='https:'?'; Secure':'');
    return reply({ok:true},200,fromPages?cors:existing?{}:{'set-cookie':setCookie});
  } catch {
    return reply({error:'Unavailable'},503);
  }
}

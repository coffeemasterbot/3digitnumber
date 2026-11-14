import {bind} from './service.mjs';
export class Rooms {
 constructor(){this.rooms=new Map()}
 async fetch(request){
  const url=new URL(request.url),code=url.searchParams.get('code'),type=url.searchParams.get('action');
  if(type==='create'&&this.rooms.has(code))return new Response('code collision',{status:409});
  if(type!=='create'&&!this.rooms.has(code))return new Response('room unavailable',{status:404});
  const [client,server]=Object.values(new WebSocketPair());server.accept();bind(server,this.rooms,{code,type});
  return new Response(null,{status:101,webSocket:client});
 }
}
export default {async fetch(request,env){
 const url=new URL(request.url),type=url.searchParams.get('action');
 if(url.pathname!=='/rooms'||request.headers.get('Upgrade')?.toLowerCase()!=='websocket')return new Response('WebSocket required',{status:400});
 if(!env.ALLOWED_ORIGINS.split(',').includes(request.headers.get('Origin')))return new Response('Unknown origin',{status:403});
 if(!['create','join','reconnect'].includes(type))return new Response('Unknown action',{status:400});
 for(let retry=0;retry<3;retry++){
  const code=type==='create'?crypto.randomUUID().slice(0,8).toUpperCase():url.searchParams.get('code');
  if(!/^[0-9A-F]{8}$/.test(code))return new Response('Invalid code',{status:400});
  url.searchParams.set('code',code);
  const room=env.ROOMS.get(env.ROOMS.idFromName(code));
  const res=await room.fetch(new Request(url,request));if(res.status!==409)return res;
 }
 return new Response('Try again',{status:503});
}};

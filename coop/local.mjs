import http from 'node:http';
import {createRequire} from 'node:module';
import {bind} from './service.mjs';
const require=createRequire(import.meta.url);
const Server=process.env.COOP_WS_BUNDLE?require(process.env.COOP_WS_BUNDLE).wsServer:require('ws').WebSocketServer;
const rooms=new Map(),server=http.createServer((q,r)=>{r.writeHead(404);r.end()});
const ws=new Server({noServer:true,maxPayload:1024});
server.on('upgrade',(req,socket,head)=>{
 if(req.url.split('?')[0]!=='/rooms'||!['http://127.0.0.1:8789','http://localhost:8789'].includes(req.headers.origin)){socket.destroy();return}
 ws.handleUpgrade(req,socket,head,client=>bind(client,rooms));
});
server.listen(8791,'127.0.0.1',()=>console.log('Local CO-OP listening on 127.0.0.1:8791'));

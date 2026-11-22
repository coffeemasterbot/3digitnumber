import {Room,drive} from './room.mjs';
export function connect(socket,registry,hello,assignedCode){
 if(hello?.v!==3||!['create','join','reconnect'].includes(hello.type))throw Error('房間請求無效');
 let code=hello.code,room;
 if(hello.type==='create'){
  if(assignedCode){code=assignedCode;if(registry.has(code))throw Error('房間碼重複，請再建立')}else do{code=crypto.randomUUID().slice(0,8).toUpperCase()}while(registry.has(code));
  room=new Room(code,hello.mode==='duel'?'duel':'coop');registry.set(code,room);
 }else{room=registry.get(code);if(!room||(hello.mode==='duel'&&room.mode!=='duel'))throw Error('搵唔到房間')}
 const p=room.attach(data=>{if(socket.readyState===1)socket.send(JSON.stringify(data))},{name:hello.name,token:hello.type==='reconnect'?hello.token:null},performance.now());
 if(hello.type==='create'){drive(room);const timer=setInterval(()=>{if(!room.players.length){registry.delete(code);clearInterval(timer)}},5000)}
 return {message(m){room.input(p,m,performance.now())},close(){room.detach(p,performance.now())}};
}
export function bind(socket,rooms,assignment){
 let session,closed=false;const timer=setTimeout(()=>{if(!session)socket.close(1008,'timeout')},5000);
 socket.addEventListener('message',({data})=>{try{if(typeof data!=='string'||data.length>1024)throw Error('訊息無效');
  const m=JSON.parse(data);if(session)session.message(m);else {if(assignment&&(m.type!==assignment.type||(m.type!=='create'&&m.code!==assignment.code)))throw Error('房間碼無效');session=connect(socket,rooms,m,assignment?.code)}
 }catch(e){socket.send(JSON.stringify({v:3,type:'error',message:e.message}));socket.close(1008)}});
 const close=()=>{if(closed)return;closed=true;clearTimeout(timer);session?.close()};
 socket.addEventListener('close',close);socket.addEventListener('error',close);
}

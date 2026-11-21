// Elapsed active seconds; height is feet above track in world units.
export function airRoute(kind,elapsed,startHeight=0){
 const pogo=kind==='pogo',duration=pogo?2:8,t=Math.max(0,Math.min(duration,elapsed));
 const phase=pogo?(t<1?'rise':'fall'):t<1?'takeoff':t<6?'cruise':t<7?'warning':'landing';
 const height=pogo?5*t*(2-t)+startHeight*(1-t/2):t<1?startHeight+(5-startHeight)*t:t<=7?5:5*(8-t);
 return {height,phase,remaining:duration-t};
}

// Distance in track units under constant acceleration, including the capped-speed segment.
export function forwardMotion(speed,seconds,acceleration,limit){
 const rising=Math.min(seconds,Math.max(0,(limit-speed)/acceleration));
 return {distance:speed*rising+.5*acceleration*rising*rising+limit*(seconds-rising),
   speed:Math.min(limit,speed+acceleration*seconds)};
}

export function airCoinRows(kind,startHeight,speed,acceleration,limit){
 const duration=airRoute(kind,0,startHeight).remaining;
 const rows=[];
 for(let t=kind==='jetpack'?.35:.5;t<duration;t+=.5){
   rows.push({ahead:forwardMotion(speed,t,acceleration,limit).distance,
     y:airRoute(kind,t,startHeight).height+1.35});
 }
 return rows;
}

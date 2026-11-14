// Elapsed active seconds; height is feet above track in world units.
export function airRoute(kind,elapsed,startHeight=0){
 const pogo=kind==='pogo',duration=pogo?2:8,t=Math.max(0,Math.min(duration,elapsed));
 const phase=pogo?(t<1?'rise':'fall'):t<1?'takeoff':t<6?'cruise':t<7?'warning':'landing';
 const height=pogo?5*t*(2-t)+startHeight*(1-t/2):t<1?startHeight+(5-startHeight)*t:t<=7?5:5*(8-t);
 return {height,phase,remaining:duration-t};
}

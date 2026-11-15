export type RunnerIconKind = 'coin'|'shoes'|'magnet'|'double'|'board'|'jetpack'|'pogo'|'obstacle';

export function drawRunnerIcon(c: CanvasRenderingContext2D, kind: RunnerIconKind) {
  c.clearRect(0,0,128,128);
  c.fillStyle='#233c49';c.strokeStyle='#f6d895';c.lineWidth=4;
  c.beginPath();c.arc(64,64,57,0,Math.PI*2);c.fill();c.stroke();
  c.lineJoin='round';c.lineCap='round';c.strokeStyle='#624d3d';c.lineWidth=4;
  const fill=(color:string)=>{c.fillStyle=color;c.fill();c.stroke()};
  if(kind==='coin'){
    c.beginPath();c.ellipse(64,64,30,38,0,0,Math.PI*2);fill('#f4be43');
    c.beginPath();c.ellipse(64,64,21,29,0,0,Math.PI*2);c.strokeStyle='#ffec9f';c.stroke();
    c.font='bold 34px system-ui';c.textAlign='center';c.fillStyle='#89621e';c.fillText('$',64,76);
  }else if(kind==='shoes'){
    c.beginPath();c.moveTo(34,27);c.lineTo(63,27);c.lineTo(63,60);c.quadraticCurveTo(72,69,91,72);c.lineTo(94,89);c.lineTo(32,89);c.closePath();fill('#72cadc');
    c.fillStyle='#fff2c7';c.fillRect(31,82,64,8);c.strokeStyle='#fff2c7';c.beginPath();c.moveTo(42,47);c.lineTo(56,47);c.moveTo(42,55);c.lineTo(56,55);c.stroke();
  }else if(kind==='magnet'){
    c.strokeStyle='#d96860';c.lineWidth=18;c.beginPath();c.moveTo(39,28);c.lineTo(39,62);c.arc(64,62,25,Math.PI,0,true);c.lineTo(89,28);c.stroke();
    c.fillStyle='#b8e9eb';c.fillRect(30,25,18,17);c.fillRect(80,25,18,17);
  }else if(kind==='double'){
    c.fillStyle='#ffe18c';c.font='900 56px system-ui';c.textAlign='center';c.fillText('2×',64,83);
  }else if(kind==='board'){
    c.beginPath();c.roundRect(20,48,88,26,13);fill('#efa54d');
    c.strokeStyle='#fff0b7';c.beginPath();c.moveTo(42,52);c.lineTo(56,69);c.lineTo(69,52);c.lineTo(82,69);c.stroke();
  }else if(kind==='jetpack'){
    for(const x of [35,66]){c.beginPath();c.roundRect(x,25,27,55,9);fill('#9ab7b1');c.fillStyle='#e7ba65';c.fillRect(x+4,37,19,7);c.beginPath();c.moveTo(x+5,80);c.lineTo(x+13,102);c.lineTo(x+22,80);fill('#ffc864')}
    c.fillStyle='#765844';c.fillRect(59,37,8,43);
  }else if(kind==='pogo'){
    c.strokeStyle='#eab35d';c.lineWidth=10;c.beginPath();c.moveTo(64,26);c.lineTo(64,83);c.moveTo(46,30);c.lineTo(82,30);c.moveTo(45,70);c.lineTo(83,70);c.stroke();
    c.strokeStyle='#b4dfdf';c.lineWidth=4;c.beginPath();for(let i=0;i<5;i++)c.lineTo(55+(i%2)*18,78+i*5);c.stroke();c.fillStyle='#f4dfad';c.fillRect(52,103,24,7);
  }else{
    c.beginPath();c.moveTo(64,24);c.lineTo(102,94);c.lineTo(26,94);c.closePath();fill('#ecad47');
    c.fillStyle='#324a4a';c.fillRect(60,49,8,23);c.fillRect(60,79,8,7);
  }
}

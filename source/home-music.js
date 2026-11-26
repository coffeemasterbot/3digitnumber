(() => {
  const audio=window.PFAPAudio;
  const scene=document.getElementById('landing');
  const slot=document.querySelector('[data-home-audio]');
  if(!audio || !scene || !slot)return;
  slot.append(audio.controls().querySelector('[data-pfap-audio=bgm]'));

  // The same 60 BPM progression and melody as the fourteen-day action card.
  const chords=[[60,64,67],[53,57,60],[57,60,64],[55,59,62]];
  const melody=[72,null,76,null,79,null,76,null];
  const hz=midi=>440*2**((midi-69)/12);
  let beat=0,timer=null;
  function active(){return !scene.hidden && !document.hidden && audio.enabled('bgm')}
  function playBeat(){
    if(!active() || !audio.now())return;
    if(beat%8===0){
      for(const midi of chords[Math.floor(beat/8)%chords.length])audio.note(hz(midi),1.8,.018);
    }
    const midi=melody[beat%8];
    if(midi!==null)audio.note(hz(midi),.85,.035);
    beat++;
  }
  function sync(){
    if(active()){
      if(timer===null){timer=setInterval(playBeat,1000);playBeat()}
    }else{
      clearInterval(timer);
      timer=null;
      audio.stopMusic();
    }
  }
  new MutationObserver(sync).observe(scene,{attributes:true,attributeFilter:['hidden','style','class']});
  document.addEventListener('visibilitychange',sync);
  window.addEventListener('pfap-audio-change',sync);
  window.addEventListener('pageshow',sync);
  window.addEventListener('pagehide',()=>{clearInterval(timer);timer=null;audio.stopMusic()});
  document.addEventListener('pointerdown',event=>{if(event.isTrusted)sync()});
  document.addEventListener('keydown',event=>{if(event.isTrusted)sync()});
})();

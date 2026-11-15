// One owner per game document. URLs may also be self-contained data URIs.
window.createGameAudio=function(sources,stopLegacyMusic){
  const music=new Map(),effects=new Set(),heard=new Set();
  const storageKey='money-journey-audio-v1',settings={music:.45,effects:.65};
  const clamp=n=>Math.max(0,Math.min(1,n));
  try{
    const saved=JSON.parse(localStorage.getItem(storageKey));
    if(saved&&typeof saved==='object'&&!Array.isArray(saved))
      for(const k of Object.keys(settings))if(Number.isFinite(saved[k]))settings[k]=clamp(saved[k]);
  }catch{}
  let desired=null,current=null,frame=0,unlocked=false,paused=false,disposed=false,position=0;
  function clear(){
    cancelAnimationFrame(frame);
    for(const a of [...music.keys(),...effects])a.pause();
    music.clear();effects.clear();current=null;
  }
  function play(){
    if(disposed||paused||!unlocked||!sources[desired]||current?.id===desired)return;
    stopLegacyMusic?.();
    const a=new Audio(sources[desired]);a.id=desired;a.loop=true;a.volume=0;
    if(position>0)a.currentTime=position;
    current=a;music.set(a,0);a.play().catch(()=>{music.delete(a);if(current===a)current=null});
    cancelAnimationFrame(frame);const start=performance.now(),initial=new Map(music);
    function fade(t){
      const k=clamp((t-start)/350);
      for(const track of music.keys()){
        const gain=track===a?k:(1-k)*(initial.get(track)||0);
        music.set(track,gain);track.volume=gain*settings.music;
        if(k===1&&track!==a){track.pause();music.delete(track)}
      }
      if(k<1)frame=requestAnimationFrame(fade);
    }
    frame=requestAnimationFrame(fade);
  }
  function unlock(){unlocked=true;play()}
  function hidden(){if(document.hidden)api.pause()}
  const api={
    track(id){if(disposed)return;if(id!==desired)position=0;desired=id;if(id==null)clear();else play()},
    effect(id,eventId){
      if(disposed||paused||!unlocked||!sources[id])return;
      if(eventId!=null){const key=id+':'+eventId;if(heard.has(key))return;heard.add(key);if(heard.size>512)heard.delete(heard.values().next().value)}
      if(effects.size>=4||!settings.effects)return;
      const a=new Audio(sources[id]);a.volume=settings.effects;effects.add(a);
      const done=()=>effects.delete(a);a.onended=done;a.onerror=done;a.play().catch(done);
    },
    volume(channel,value){
      if(disposed||!Object.hasOwn(settings,channel)||!Number.isFinite(value))return;
      settings[channel]=clamp(value);
      if(channel==='music'){for(const [a,gain] of music)a.volume=gain*settings.music}
      else for(const a of effects)a.volume=settings.effects;
      try{localStorage.setItem(storageKey,JSON.stringify(settings))}catch{}
    },
    pause(){if(disposed||paused)return;paused=true;position=current?.currentTime||0;clear()},
    resume(){if(disposed)return;paused=false;play()},
    dispose(){disposed=true;clear();heard.clear();document.removeEventListener('pointerdown',unlock,true);document.removeEventListener('keydown',unlock,true);document.removeEventListener('visibilitychange',hidden);window.removeEventListener('pagehide',api.dispose)}
  };
  document.addEventListener('pointerdown',unlock,true);document.addEventListener('keydown',unlock,true);
  document.addEventListener('visibilitychange',hidden);window.addEventListener('pagehide',api.dispose);
  return api;
};

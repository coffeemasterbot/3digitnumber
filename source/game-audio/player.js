// One owner per game document. URLs may also be self-contained data URIs.
(() => {
  const prefix = 'pfap_';
  const preferenceEvent = 'pfap-audio-change';
  const channels = ['bgm', 'sfx'];
  const memory = {bgm:true, sfx:true};
  let preferences = memory;
  try {
    if (window.parent !== window) preferences = window.parent.PFAPAudioPreferences ?? window.parent.PFAPAudio?.preferences ?? memory;
  } catch {}
  for (const channel of channels) {
    try {
      const value = localStorage.getItem(prefix + channel + '_on');
      if (value !== null) preferences[channel] = value !== 'false';
    } catch {}
  }

  const notes = {
    plant_place: [[205,.075,0,'triangle'],[120,.05,.026]],
    sun_collect: [[690,.10],[920,.12,.055],[1380,.16,.11]],
    bomb_detonate: [[64,.34,0,'triangle'],[47,.56,.08,'sine'],[39,.64,.15,'sine']],
    hit_thud: [[100,.075,0,'triangle']],
    wave_horn: [[130,.26,0,'sawtooth'],[174,.32,.18,'triangle']],
    mower_go: [[68,.44,0,'sawtooth'],[106,.35,.10,'triangle']],
    coin_pickup: [[784,.09],[1175,.10,.035]],
    jump: [[320,.08],[470,.12,.04,'triangle']],
    slide: [[240,.08,0,'triangle'],[120,.11,.035,'triangle']],
    shield_break: [[310,.12,0,'square'],[150,.14,.04,'triangle']],
    warning_beep: [[1080,.055],[1080,.055,.11],[1240,.065,.22]],
    missile_warning: [[880,.11,0,'triangle'],[1047,.11,.16,'triangle'],[1318,.19,.32,'triangle']],
    missile_launch: [[155,.15,0,'triangle']],
    vehicle_chord: [[392,.17],[494,.18,.055],[587,.24,.11]],
    fire_jump: [[455,.075,0,'triangle'],[670,.10,.025,'triangle']],
    ice_jump: [[755,.045],[530,.12,.032]],
    lever_click: [[270,.045,0,'square'],[112,.06,.023]],
    gate_rumble: [[63,.27,0,'triangle'],[92,.17,.085,'triangle']],
    stage_clear: [[392,.18],[494,.18,.065],[587,.20,.13],[784,.27,.20]],
    buy_equip: [[490,.04,0,'triangle'],[1120,.07,.025]],
    shoot: [[87,.07,0,'triangle']],
    hit_tick: [[1130,.06],[1530,.055,.024]],
    bomb_beep: [[830,.075]],
    defuse_ok: [[523,.14],[659,.14,.07],[880,.24,.14]],
  };
  const noiseCues = {
    missile_launch: [.2,850,.18],
    lane_whoosh: [.10,1150,.17],
    slide: [.12,690,.09],
    shoot: [.075,550,.20],
    shield_break: [.11,1450,.18],
    gate_rumble: [.29,220,.15],
  };
  let context, master, effects, music, noise, thrust, thrustRequested = false;
  let soundVolume = 1;
  const active = new Set();
  const last = new Map();

  function unlock(event) {
    if (!event.isTrusted || document.hidden) return;
    try {
      if (!context) {
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) return;
        context = new Context();
        master = context.createGain();
        effects = context.createGain();
        music = context.createGain();
        const compressor = context.createDynamicsCompressor();
        compressor.threshold.value = -16;
        compressor.ratio.value = 5;
        master.gain.value = .35;
        master.connect(context.destination);
        effects.connect(compressor);
        music.connect(compressor);
        compressor.connect(master);
        applyPreferences();
      }
      if (context.state === 'suspended') context.resume().then(updateThrust).catch(() => {});
    } catch {}
  }

  function noiseBuffer() {
    if (!noise) {
      noise=context.createBuffer(1,Math.floor(context.sampleRate*.5),context.sampleRate);
      const data=noise.getChannelData(0);
      for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
    }
    return noise;
  }

  function voice(source, destination, duration, volume, delay=0, filter) {
    const t=context.currentTime+delay;
    const envelope=context.createGain();
    envelope.gain.setValueAtTime(.0001,t);
    envelope.gain.linearRampToValueAtTime(volume,t+.008);
    if(duration)envelope.gain.exponentialRampToValueAtTime(.0001,t+duration);
    source.connect(filter||envelope);
    if(filter)filter.connect(envelope);
    envelope.connect(destination);
    const entry={source,destination};
    active.add(entry);
    source.onended=()=>{
      source.disconnect();
      filter?.disconnect();
      envelope.disconnect();
      active.delete(entry);
    };
    source.start(t);
    if(duration)source.stop(t+duration);
    return entry;
  }

  function tone(hz, duration, volume, type, delay, destination) {
    const oscillator=context.createOscillator();
    oscillator.type=type;
    oscillator.frequency.value=hz;
    voice(oscillator,destination,duration,volume,delay);
  }

  function filteredNoise(duration, hz, volume) {
    const source=context.createBufferSource();
    const filter=context.createBiquadFilter();
    source.buffer=noiseBuffer();
    source.loop=!duration;
    filter.type='lowpass';
    filter.frequency.value=hz;
    return voice(source,effects,duration,volume,0,filter);
  }

  function stop(entry) { try { entry.source.stop(); } catch {} }
  function setThrust(active) {
    thrustRequested=active;
    updateThrust();
  }
  function updateThrust() {
    const play=thrustRequested&&preferences.sfx&&!document.hidden&&context?.state==='running';
    if(play&&!thrust)thrust=filteredNoise(0,360,.14);
    if(!play&&thrust){stop(thrust);thrust=null}
  }
  function stopEffects() {
    setThrust(false);
    for(const entry of active)if(entry.destination===effects)stop(entry);
    last.clear();
  }
  function applyPreferences() {
    if(effects)effects.gain.value=preferences.sfx?soundVolume:0;
    if(music)music.gain.value=preferences.bgm?soundVolume:0;
    if(!preferences.sfx){
      for(const entry of active)if(entry.destination===effects)stop(entry);
      thrust=null;
    }
    updateThrust();
    document.querySelectorAll('[data-pfap-audio]').forEach(b=>{
      b.setAttribute('aria-pressed',String(preferences[b.dataset.pfapAudio]));
    });
  }
  function setEnabled(channel,value) {
    if(!channels.includes(channel))return;
    preferences[channel]=Boolean(value);
    try { localStorage.setItem(prefix+channel+'_on',String(preferences[channel])); } catch {}
    let owner=window;
    try { if(window.parent.PFAPAudioPreferences===preferences||window.parent.PFAPAudio?.preferences===preferences)owner=window.parent; } catch {}
    owner.dispatchEvent(new owner.Event(preferenceEvent));
    for(let i=0;i<owner.frames.length;i++){
      try { const frame=owner.frames[i];if(frame.PFAPAudio?.preferences===preferences)frame.dispatchEvent(new frame.Event(preferenceEvent)); } catch {}
    }
  }
  function controls() {
    const group=document.createElement('span');
    group.className='pfap-audio-controls';
    for(const channel of channels){
      const b=document.createElement('button');
      b.type='button';
      b.dataset.pfapAudio=channel;
      const label=channel==='bgm'?'🎵 音樂':'🔊 音效';
      if(window.siteLocale)window.siteLocale.write(b,label);
      else b.textContent=label;
      b.setAttribute('aria-pressed',String(preferences[channel]));
      group.append(b);
    }
    return group;
  }
  function mountControls() {
    document.querySelectorAll('[data-pfap-audio-slot]').forEach(slot=>{
      if(!slot.firstChild)slot.append(controls());
    });
  }
  window.PFAPAudio={
    preferences, controls, mountControls, setEnabled, setThrust, stopEffects,
    stopMusic(){for(const entry of active)if(entry.destination===music)stop(entry)},
    enabled: channel=>Boolean(preferences[channel]),
    now: ()=>context?.currentTime ?? 0,
    setVolume(value) { soundVolume=Math.max(0,Math.min(1,value));applyPreferences(); },
    note(hz,duration,volume,type='sine'){
      if(preferences.bgm&&!document.hidden&&context?.state==='running')tone(hz,duration,volume,type,0,music);
    },
    play(name,pitchStep=0) {
      if(!preferences.sfx||document.hidden||context?.state!=='running')return;
      if(!notes[name]&&!noiseCues[name])return;
      const time=context.currentTime;
      if(time-(last.get(name)??-Infinity)<.06)return;
      last.set(name,time);
      const multiplier=2**(Math.max(0,Math.min(12,Number(pitchStep)||0))/12);
      for(const [hz,duration,delay=0,type='sine'] of notes[name]??[]){
        tone(hz*multiplier,duration,.15,type,delay,effects);
      }
      if(noiseCues[name])filteredNoise(...noiseCues[name]);
    },
  };
  window.addEventListener(preferenceEvent,applyPreferences);
  window.addEventListener('storage',event=>{
    const channel=channels.find(c=>event.key===prefix+c+'_on');
    if(!channel)return;
    preferences[channel]=event.newValue!=='false';
    window.dispatchEvent(new Event(preferenceEvent));
  });
  document.addEventListener('pointerdown',unlock,true);
  document.addEventListener('keydown',unlock,true);
  document.addEventListener('click',event=>{
    const button=event.target.closest?.('[data-pfap-audio]');
    if(button)setEnabled(button.dataset.pfapAudio,!preferences[button.dataset.pfapAudio]);
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopEffects()});
  window.addEventListener('pagehide',()=>{
    stopEffects();
    if(context&&context.state!=='closed')context.close().catch(()=>{});
    context=undefined;
    noise=undefined;
  });
  const style=document.createElement('style');
  style.textContent='.pfap-audio-controls{display:inline-flex;flex-wrap:wrap;gap:.3rem;pointer-events:auto}.pfap-audio-controls button{font:600 .78rem system-ui;padding:.4rem .55rem;border:1px solid #e1c99b;border-radius:.5rem;background:#204139;color:#fff4dc;min-height:2rem;cursor:pointer}.pfap-audio-controls button[aria-pressed=false]{background:#eeeadf;color:#3d4a42;border-color:#817a6c}.pfap-audio-controls button:focus-visible{outline:2px solid #f4bf57;outline-offset:2px}';
  document.head.append(style);
  document.addEventListener('DOMContentLoaded',mountControls);
})();

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
    if(disposed||paused||document.hidden||!window.PFAPAudio.enabled('bgm')||!unlocked||!sources[desired]||current?.id===desired)return;
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
  function unlock(event){if(event.isTrusted){unlocked=true;play()}}
  function syncPreference(){
    if(window.PFAPAudio.enabled('bgm'))play();
    else if(current){position=current.currentTime||0;clear()}
  }
  function hidden(){if(document.hidden)api.pause()}
  const api={
    track(id){if(disposed)return;if(id!==desired)position=0;desired=id;if(id==null)clear();else play()},
    effect(id,eventId){
      if(disposed||paused||!window.PFAPAudio.enabled('sfx')||!unlocked||!sources[id])return;
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
    dispose(){disposed=true;clear();heard.clear();document.removeEventListener('pointerdown',unlock,true);document.removeEventListener('keydown',unlock,true);document.removeEventListener('visibilitychange',hidden);window.removeEventListener('pagehide',api.dispose);window.removeEventListener('pfap-audio-change',syncPreference)}
  };
  document.addEventListener('pointerdown',unlock,true);document.addEventListener('keydown',unlock,true);
  document.addEventListener('visibilitychange',hidden);window.addEventListener('pagehide',api.dispose);
  window.addEventListener('pfap-audio-change',syncPreference);
  return api;
};

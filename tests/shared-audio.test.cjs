const {test}=require('node:test');
const assert=require('node:assert/strict');
const {readFileSync}=require('node:fs');
const {runInNewContext}=require('node:vm');

const source=readFileSync(require.resolve('../source/game-audio/player.js'),'utf8');

test('audio starts on a trusted gesture, throttles each cue, and persists independent settings',()=>{
  const storage=new Map();
  const {audio,document,contexts}=fixture(storage);
  audio.play('coin_pickup',1);
  document.dispatchEvent(new Event('pointerdown'));
  assert.equal(contexts.length,0);
  document.dispatchEvent(trustedGesture());
  const [ctx]=contexts;
  assert.equal(ctx.gains[0].gain.value,.35);
  audio.play('coin_pickup',12);
  audio.play('coin_pickup',12);
  assert.deepEqual(ctx.frequencies,[1568,2350]);
  ctx.currentTime=.061;
  audio.play('coin_pickup');
  audio.setEnabled('bgm',false);
  assert.equal(audio.enabled('sfx'),true);
  audio.setEnabled('sfx',false);
  audio.play('jump');
  assert.deepEqual(ctx.frequencies,[1568,2350,784,1175]);
  const reloaded=fixture(storage).audio;
  assert.equal(reloaded.enabled('bgm'),false);
  assert.equal(reloaded.enabled('sfx'),false);
});

test('muting stops held thrust, and audio still works when storage is blocked',()=>{
  const {audio,document,contexts}=fixture();
  document.dispatchEvent(trustedGesture());
  const [ctx]=contexts;
  audio.setThrust(true);
  audio.setThrust(true);
  assert.equal(ctx.buffers.length,1);
  audio.setEnabled('sfx',false);
  assert.equal(ctx.buffers[0].stops,1);
  audio.stopEffects();
  audio.setEnabled('sfx',true);
  assert.equal(ctx.buffers.length,1);
});

function trustedGesture(){
  return Object.defineProperty(new Event('pointerdown'),'isTrusted',{value:true});
}

test('missile warning has three distinct notes and launch uses a separate sound',()=>{
  const {audio,document,contexts}=fixture();
  document.dispatchEvent(trustedGesture());
  const [ctx]=contexts;
  audio.play('missile_warning');
  audio.play('missile_warning');
  assert.deepEqual(ctx.frequencies,[880,1047,1318]);
  audio.play('missile_launch');
  assert.deepEqual(ctx.frequencies,[880,1047,1318,155]);
  assert.equal(ctx.buffers.length,1);
});

function fixture(storage){
  const contexts=[];
  const node=()=>({connect(){},disconnect(){},start(){},stops:0,stop(){this.stops++}});
  const parameter=()=>({value:0,setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}});
  class Context {
    state='running';
    currentTime=0;
    sampleRate=100;
    gains=[];
    frequencies=[];
    buffers=[];
    constructor(){contexts.push(this)}
    createGain(){const g={...node(),gain:parameter()};this.gains.push(g);return g}
    createDynamicsCompressor(){return {...node(),threshold:parameter(),ratio:parameter()}}
    createOscillator(){
      const frequencies=this.frequencies;
      return {...node(),frequency:{set value(hz){frequencies.push(hz)}}};
    }
    createBuffer(_,size){return {getChannelData:()=>new Float32Array(size)}}
    createBiquadFilter(){return {...node(),frequency:parameter()}}
    createBufferSource(){const b=node();this.buffers.push(b);return b}
  }
  const document=Object.assign(new EventTarget(),{
    createElement:()=>({}),
    head:{append(){}},
    hidden:false,
    querySelectorAll:()=>[],
  });
  const window=Object.assign(new EventTarget(),{AudioContext:Context,Event,frames:[]});
  window.parent=window;
  const localStorage={
    getItem(key){if(!storage)throw Error('blocked');return storage.get(key)??null},
    setItem(key,value){if(!storage)throw Error('blocked');storage.set(key,value)},
  };
  runInNewContext(source,{window,document,localStorage,Event});
  return {audio:window.PFAPAudio,document,contexts};
}

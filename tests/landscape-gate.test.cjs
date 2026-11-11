const {test}=require('node:test');
const assert=require('node:assert/strict');
const {runInNewContext}=require('node:vm');
const {readFileSync}=require('node:fs');
const source=readFileSync(require.resolve('../source/landscape-gate.js'),'utf8');
for(const initial of ['playing','paused','menu','results']){
  test('parent rotation preserves '+initial,()=>{
    const frame=Object.assign(new EventTarget(),{innerWidth:844,innerHeight:390});
    const parent=Object.assign(new EventTarget(),{document:{},innerWidth:932,innerHeight:430});
    frame.top=parent;
    const buttons=[{},{}],dialog={style:{},querySelectorAll:()=>buttons,querySelector:()=>({}),showModal(){this.open=true},close(){this.open=false},remove(){}};
    runInNewContext(source,{window:frame,innerWidth:844,innerHeight:390,document:{createElement:()=>dialog,body:{append(){}}},Event,AbortController});
    let state=initial,resumes=0;
    const cleanup=frame.installLandscapeGate({playing:()=>state==='playing',pause:()=>state='paused',resume:()=>{resumes++;state='playing'},leave(){}});
    parent.innerHeight=1000;parent.dispatchEvent(new Event('resize'));
    assert.equal(dialog.open,true);assert.notEqual(state,'playing');
    parent.innerHeight=430;parent.dispatchEvent(new Event('resize'));
    if(initial==='playing'){assert.equal(state,'paused');buttons[0].onclick();}
    assert.equal(dialog.open,false);assert.equal(state,initial);
    assert.equal(resumes,Number(initial==='playing'));cleanup();
  });
}

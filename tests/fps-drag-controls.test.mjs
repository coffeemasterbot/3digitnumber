import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bindMatchPointer} from '../detailed-games/fps-pointer.mjs';

test('only right drag turns the view and left click can fire during the drag',()=>{
  const before=globalThis.window;
  globalThis.window=new EventTarget();
  try{
    const canvas=Object.assign(new EventTarget(),{focus(){}});
    const movements=[],shots=[];
    const controls=bindMatchPointer({
      on:(target,event,fn)=>target.addEventListener(event,fn),
      canvas,active:()=>true,look:(dx,dy)=>movements.push([dx,dy]),
      fire:pressed=>shots.push(pressed),clearInput:()=>shots.push(false),
    });
    const mouse=(target,type,values)=>target.dispatchEvent(Object.assign(new Event(type,{cancelable:true}),values));
    mouse(canvas,'mousedown',{button:2,clientX:30,clientY:50});
    mouse(window,'mousemove',{buttons:2,clientX:50,clientY:55});
    mouse(canvas,'mousedown',{button:0,clientX:50,clientY:55});
    mouse(window,'mousemove',{buttons:3,clientX:80,clientY:50});
    mouse(window,'mouseup',{button:2});
    mouse(window,'mousemove',{buttons:1,clientX:110,clientY:80});
    mouse(window,'mouseup',{button:0});
    assert.deepEqual(movements,[[20,5],[30,-5]]);
    assert.deepEqual(shots,[true,false]);
    mouse(canvas,'mousedown',{button:2,clientX:40,clientY:40});
    controls.clear();
    mouse(window,'mousemove',{buttons:2,clientX:70,clientY:70});
    assert.equal(movements.length,2);
    assert.equal(shots.at(-1),false);
  }finally{globalThis.window=before;}
});

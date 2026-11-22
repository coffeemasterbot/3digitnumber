import { useEffect, useRef } from 'react';
import { audio } from '@/hooks/useSound';

export default function SoundButton() {
  const slot=useRef<HTMLSpanElement>(null);
  useEffect(()=>{
    const node=slot.current;
    const controls=audio()?.controls();
    if(controls)node?.append(controls);
    return ()=>controls?.remove();
  },[]);
  return <span ref={slot}/>;
}

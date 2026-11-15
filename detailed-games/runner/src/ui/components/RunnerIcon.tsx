import React, { useEffect, useRef } from 'react';
import { drawRunnerIcon, type RunnerIconKind } from '../../game/runner-icons';

export function RunnerIcon({kind}: {kind: RunnerIconKind}) {
  const canvas=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{const context=canvas.current?.getContext('2d');if(context)drawRunnerIcon(context,kind)},[kind]);
  return <canvas ref={canvas} width={128} height={128} aria-hidden="true" style={{width:28,height:28,verticalAlign:'middle'}} />;
}

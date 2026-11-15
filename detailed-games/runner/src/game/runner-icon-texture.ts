import { drawRunnerIcon, type RunnerIconKind } from './runner-icons';
import { CanvasTexture, SRGBColorSpace } from 'three';

export function createRunnerIconTexture(kind: RunnerIconKind) {
  const canvas=document.createElement('canvas');
  canvas.width=canvas.height=128;
  drawRunnerIcon(canvas.getContext('2d')!,kind);
  const texture=new CanvasTexture(canvas);
  texture.colorSpace=SRGBColorSpace;
  return texture;
}

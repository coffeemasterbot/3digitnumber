import { TorusGeometry, type BufferGeometry } from 'three';
import { artGeometry } from './art-geometry';
import type { RunnerIconKind } from './runner-icons';

export function runnerPowerProp(kind: RunnerIconKind): BufferGeometry {
  const art = artGeometry();
  const brass = '#ddaa57';
  const lamp = '#f9e099';
  const ink = '#304f55';
  const mint = '#77bda0';
  const coral = '#c7694d';
  switch (kind) {
    case 'board':
      art.oval([0, -.076, 0], [.56, .069, .184], brass);
      art.oval([0, -.02, 0], [.53, .018, .15], ink);
      art.box([0, .003, 0], [.69, .021, .038], mint);
      for (const x of [-.34, .34]) for (const z of [-.158, .158]) {
        art.tube([x, -.15, z], [.065, .065, .081], ink, [Math.PI / 2, 0, 0]);
        art.tube([x, -.15, z * 1.28], [.034, .034, .014], lamp, [Math.PI / 2, 0, 0]);
      }
      break;
    case 'shoes':
      for (const x of [-.206, .206]) {
        art.oval([x, -.02, -.04], [.165, .092, .253], coral);
        art.oval([x, .088, .085], [.133, .17, .15], brass);
        art.box([x, -.104, -.026], [.294, .046, .455], lamp);
        for (const y of [-.145, -.18, -.215]) art.tube([x, y, .104], [.083, .083, .023], brass);
      }
      break;
    case 'jetpack':
      art.box([0, .032, 0], [.32, .57, .26], ink);
      art.box([0, .121, .138], [.24, .1, .025], mint);
      for (const x of [-.287, .287]) {
        art.oval([x, .065, 0], [.156, .335, .166], coral);
        art.tube([x, -.221, 0], [.128, .103, .176], ink);
        art.tube([x, -.322, 0], [.083, .05, .06], mint);
      }
      break;
    case 'pogo':
      art.tube([0, .016, 0], [.045, .05, .72], brass, [0, 0, .18]);
      art.box([-.034, .35, 0], [.56, .095, .087], ink);
      art.box([.026, -.18, 0], [.48, .07, .18], mint);
      for (const y of [-.225, -.264, -.303, -.34]) art.tube([.052, y, 0], [.093, .093, .024], lamp);
      art.tube([.052, -.388, 0], [.072, .093, .057], ink);
      break;
    case 'magnet':
      art.part(new TorusGeometry(.262, .084, 8, 14, Math.PI), coral, [0, .052, 0], [0, 0, Math.PI]);
      for (const x of [-.263, .263]) {
        art.box([x, .159, 0], [.168, .249, .165], coral);
        art.box([x, .291, 0], [.185, .105, .18], lamp);
        art.box([x, .242, 0], [.187, .026, .19], ink);
      }
      break;
    case 'double':
      for (const offset of [-.18, .18]) for (const side of [-1, 1]) {
        art.box([side * .121, offset + side * .11, 0], [.32, .107, .135], side > 0 ? lamp : brass, [0, 0, -side * .71]);
      }
      break;
  }
  return art.finish();
}

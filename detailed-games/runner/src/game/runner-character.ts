import { artGeometry } from './art-geometry';

const teal = '#286d65';
const seam = '#194e4e';
const amber = '#e2a744';
const cloth = '#354958';
const skin = '#bc7957';
const ivory = '#f0e0bf';
const dark = '#253839';

export function runnerCharacter() {
  const body = artGeometry();
  body.oval([0, .16, 0], [.32, .38, .215], teal);
  body.oval([0, -.15, .01], [.257, .155, .19], cloth);
  body.box([0, -.07, .188], [.43, .082, .075], seam);
  body.tube([0, .528, 0], [.122, .138, .175], skin);
  body.oval([0, .426, .13], [.21, .14, .17], seam);
  body.oval([0, .426, .212], [.157, .075, .1], '#459080');

  const head = artGeometry();
  head.oval([0, .76, 0], [.258, .265, .245], skin);
  head.oval([0, .839, .064], [.259, .199, .2], '#322d2c');
  for (const side of [-1, 1]) {
    head.oval([side * .249, .734, .007], [.04, .067, .05], skin);
    head.oval([side * .072, .801, -.221], [.022, .023, .014], '#45342e');
  }
  head.oval([0, .926, -.027], [.278, .133, .27], '#b34f3a');
  head.oval([0, .887, .205], [.224, .033, .162], '#c7684a');
  head.oval([0, 1.047, -.019], [.036, .018, .036], '#efaf69');
  head.box([0, .886, -.238], [.15, .036, .025], ivory);

  const pack = artGeometry();
  pack.oval([0, .155, .285], [.234, .292, .152], '#264957');
  pack.oval([0, .162, .376], [.205, .25, .095], '#417084');
  pack.oval([0, .08, .449], [.166, .098, .045], '#cf8e43');
  pack.box([0, .124, .49], [.225, .025, .019], ivory);
  pack.box([.065, .122, .505], [.047, .043, .023], '#523f33');
  pack.box([0, .294, .451], [.126, .069, .026], ivory);
  pack.box([0, .294, .468], [.08, .014, .012], amber);
  for (const side of [-1, 1]) {
    pack.oval([side * .206, .164, .361], [.053, .143, .089], dark);
    pack.box([side * .19, .25, .217], [.055, .43, .05], amber, [0, 0, side * .13]);
  }

  const sleeve = artGeometry();
  sleeve.oval([0, -.065, 0], [.129, .155, .123], teal);
  sleeve.oval([0, -.202, 0], [.098, .134, .095], seam);
  sleeve.box([0, -.18, .08], [.144, .04, .044], amber);
  const forearm = artGeometry();
  forearm.oval([0, -.111, 0], [.081, .15, .077], skin);
  forearm.oval([0, -.209, -.009], [.085, .078, .085], skin);
  forearm.tube([0, -.036, 0], [.089, .089, .044], seam);

  const upperLeg = artGeometry();
  upperLeg.oval([0, -.139, 0], [.128, .225, .136], cloth);
  upperLeg.box([0, -.154, .104], [.18, .115, .05], '#497081');
  const lowerLeg = artGeometry();
  lowerLeg.oval([0, -.111, -.005], [.105, .174, .116], cloth);
  lowerLeg.tube([0, -.219, 0], [.104, .09, .064], '#455966');

  function shoe(boost: boolean) {
    const shoe = artGeometry();
    shoe.oval([0, -.026, -.09], [.143, .077, .218], boost ? amber : '#b95545');
    shoe.oval([0, .024, -.013], [.113, .091, .136], boost ? '#cc7833' : '#b95545');
    shoe.box([0, -.076, -.085], [.273, .049, .371], '#213c40');
    shoe.oval([0, -.055, -.107], [.146, .036, .223], ivory);
    if (boost) {
      // Heel coil and side plate are legible from the chase camera.
      shoe.tube([0, -.084, .06], [.058, .058, .088], '#714524');
      for (const y of [-.063, -.085, -.107]) shoe.tube([0, y, .06], [.083, .083, .015], '#fff1a1');
      shoe.box([0, -.138, .055], [.286, .04, .162], '#d2853c');
    } else {
      for (const z of [-.14, -.19]) shoe.box([0, .05, z], [.107, .016, .022], ivory);
    }
    return shoe.finish();
  }

  const board = artGeometry();
  board.oval([0, -.031, 0], [.305, .064, .803], '#294f59');
  board.oval([0, .015, 0], [.291, .037, .79], '#df9337');
  board.oval([0, .048, 0], [.242, .012, .61], '#344e53');
  for (const z of [-.3, .3]) board.box([0, .06, z], [.45, .026, .07], '#edbe63');
  board.box([0, .051, 0], [.074, .026, .86], '#4ba090');
  for (const z of [-.48, .48]) for (const x of [-.25, .25]) {
    board.tube([x, -.09, z], [.097, .097, .08], '#26363f', [0, 0, Math.PI / 2]);
    board.tube([x * 1.11, -.09, z], [.059, .059, .018], '#dfac50', [0, 0, Math.PI / 2]);
  }

  const flight = artGeometry();
  flight.oval([0, .145, .41], [.226, .255, .133], '#2c4d62');
  flight.box([0, .199, .542], [.246, .152, .033], '#497c85');
  flight.box([0, .193, .564], [.142, .043, .015], '#a4e6d9');
  for (const x of [-.255, .255]) {
    flight.oval([x, .14, .358], [.155, .279, .161], '#b9703c');
    flight.tube([x, -.077, .354], [.13, .109, .145], '#3d5258');
    flight.tube([x, -.148, .354], [.097, .083, .028], '#83decc');
    flight.box([x, .217, .487], [.125, .052, .043], '#f4c871');
  }

  const pogo = artGeometry();
  pogo.tube([0, -.16, 0], [.046, .051, .56], '#2c4d62');
  pogo.tube([0, -.31, 0], [.066, .066, .23], '#e6b26a');
  pogo.tube([0, -.43, 0], [.079, .091, .09], dark);
  for (const y of [-.22, -.27, -.32, -.37]) pogo.tube([0, y, 0], [.092, .092, .029], ivory);
  pogo.box([0, -.056, .008], [.52, .073, .18], '#286d65');

  return {
    body:body.finish(), head:head.finish(), pack:pack.finish(), sleeve:sleeve.finish(), forearm:forearm.finish(),
    thigh:upperLeg.finish(), calf:lowerLeg.finish(), shoe:shoe(false), boot:shoe(true),
    board:board.finish(), flight:flight.finish(), pogo:pogo.finish(),
  };
}

module.exports = function injectHeadScripts(page, scripts) {
  // Older preserved bundles have unmarked scripts at the very start of the head.
  const owned = /^<script(?: data-build-runtime)?>([\s\S]*?)<\/script>/;
  const head = page.indexOf('<head>');
  if (head < 0) throw Error('Missing document head');
  const start = head + '<head>'.length;
  let rest = page.slice(start);
  for (let match; (match = owned.exec(rest));) {
    const script = match[1];
    if (!match[0].startsWith('<script data-build-runtime>') &&
        !(script.startsWith('(function(root,factory){') && script.includes('root.GardenRules=factory()') && script.includes('window.arcadeDevTargets=targets')) &&
        !(script.includes('window.createGameAudio=function(') && script.includes(';window.gameAudio=createGameAudio('))) break;
    rest = rest.slice(match[0].length);
  }
  return page.slice(0, start) + scripts.map(code => '<script data-build-runtime>' + code + '</script>').join('') + rest;
};

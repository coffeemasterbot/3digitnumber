export function siteText(value) {
  return globalThis.siteLocale?.text(value) ?? value;
}

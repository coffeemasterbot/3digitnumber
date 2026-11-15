const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const section = fs.readFileSync('source/presentation-section.html', 'utf8');
const slides = fs.readFileSync('source/presentation.js', 'utf8');
const landing = fs.readFileSync('landing-build.cjs', 'utf8');
const built = fs.readFileSync('dist/index.html', 'utf8');
const builtSlides = fs.readFileSync('dist/presentation.js', 'utf8');
const offline = fs.readFileSync('dist/downloads/lost-found-money-offline.html', 'utf8');

test('presentation links to the team Instagram in a new tab', () => {
  assert.match(section, /href="https:\/\/www\.instagram\.com\/poor_guysssss\/" target="_blank" rel="noopener noreferrer"/);
});

test('completed talks appear in both languages and built editions', () => {
  for (const page of [landing,built,offline]) assert.match(page,/十一月講座回顧/);
  for (const page of [slides,builtSlides,offline]) assert.match(page,/rooms 1104 and 1103/);
});

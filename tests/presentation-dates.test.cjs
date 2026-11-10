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

test('presentation keeps the unverified date as a date and includes the official consultation period in both languages', () => {
  assert.match(slides, /09\/11：理財教育計劃諮詢；16\/11/);
  assert.match(slides, /16\/11 暫只保留日期，活動未有可信來源核實/);
  assert.match(slides, /09\/11: programme consultation · 16\/11/);
  assert.match(slides, /16\/11 is kept as a date only until its activity is verified/);
  assert.doesNotMatch(slides, /16\/11 校園講座|16 November\.?'?\s*,['"]Guest speaker/);
  assert.match(landing, /官方計劃日程列明，11 月 9 至 13 日為理財教育計劃諮詢環節/);
  assert.match(landing, /未找到可信來源確認活動內容，暫只保留日期/);
  assert.doesNotMatch(landing, /郭旭昇先生主講|18:00–19:00|Academic Building 1104|Academic Building 6580/);
  assert.match(built, /未找到可信來源確認活動內容，暫只保留日期/);
  assert.match(builtSlides, /16\/11 暫只保留日期，活動未有可信來源核實/);
  assert.match(offline, /href="https:\/\/www\.instagram\.com\/poor_guysssss\/" target="_blank" rel="noopener noreferrer"/);
  assert.match(offline, /16\/11 is kept as a date only until its activity is verified/);
});

/*
  Checks for the trickiest parts of build.js. GitHub runs this before each rebuild; a failure stops the rebuild,
  so a broken builder never reaches the site.   Run it yourself with:   node --test source/build.test.js
*/
'use strict';
const test = require('node:test'), assert = require('node:assert/strict');
const { slugify, toneOf, trackAddress, inlineDrawing } = require('./build.js');

test('a project name becomes a clean address', () => {
  assert.equal(slugify('Ply Table'), 'ply-table');
  assert.equal(slugify("  Café & Bar's  "), 'cafe-and-bars');
});

test('drawing colours become tones of the text and page colours', () => {
  assert.equal(toneOf('#000'), 'currentColor');
  assert.equal(toneOf('#ffffff'), 'var(--bg)');
  assert.equal(toneOf('none'), null);
});

test('every reference inside a drawing points at an id that exists', () => {
  const html = inlineDrawing({ name: 'test', slug: 'test' }, { drawing: '../test/gradient.svg' }, 1, null);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const refs = [...html.matchAll(/url\(#([^)]+)\)/g)].map(m => m[1]);
  assert.equal(ids.length, 2);
  assert.equal(refs.length, 3);                      // two in the style block, one written on a shape
  refs.forEach(r => assert.ok(ids.includes(r), 'url(#' + r + ') has no matching id'));
  assert.match(html, /stroke:currentColor/);
});

test('an old address still forwards after a rename and a move to another tab', () => {
  const rec = { current: 'ply-table', old: [] };     // a record from before tabs were stored
  trackAddress(rec, 'carpentry', 'ply-table');
  assert.deepEqual(rec.old, []);
  trackAddress(rec, 'furniture', 'big-ply-table');
  assert.deepEqual(rec.old, ['carpentry/ply-table']);
  trackAddress(rec, 'furniture', 'ply-table');
  assert.deepEqual(rec.old, ['carpentry/ply-table', 'furniture/big-ply-table']);
  trackAddress(rec, 'carpentry', 'ply-table');       // moved back: its own address must not forward to itself
  assert.deepEqual(rec.old, ['furniture/big-ply-table', 'furniture/ply-table']);
});

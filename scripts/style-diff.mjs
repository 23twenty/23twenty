// Compares two style-snapshot.mjs outputs. Box differences under `tol` px are ignored.
// `node scripts/style-diff.mjs before.json after.json [tol]`
import { readFileSync } from 'node:fs';

const [a, b, tol = '1'] = process.argv.slice(2);
// Values that render identically: the primary font family is what matters (fallbacks only
// apply if it fails to load), "start" is "left" in a left-to-right page, and text colour on
// an image or icon is invisible.
function normalize(key, prop, value) {
  if (prop === 'font-family') return value.split(',')[0].replace(/["']/g, '').trim();
  if (prop === 'text-align' && value === 'start') return 'left';
  if (prop === 'color' && /^(img|svg) /.test(key)) return '';
  return value;
}
const before = JSON.parse(readFileSync(a, 'utf8'));
const after = JSON.parse(readFileSync(b, 'utf8'));
let count = 0;
for (const pageKey of Object.keys(before)) {
  const A = before[pageKey], B = after[pageKey] ?? {};
  const lines = [];
  for (const k of new Set([...Object.keys(A), ...Object.keys(B)])) {
    if (!A[k]) { lines.push(`  + ${k}`); continue; }
    if (!B[k]) { lines.push(`  - ${k}`); continue; }
    const diffs = [];
    for (const p of Object.keys(A[k])) {
      if (p === 'box') {
        const d = A[k].box.map((v, i) => Math.abs(v - B[k].box[i]));
        if (d.some((x) => x > Number(tol))) diffs.push(`box ${A[k].box} → ${B[k].box}`);
      } else if (normalize(k, p, A[k][p]) !== normalize(k, p, B[k][p])) diffs.push(`${p}: ${A[k][p]} → ${B[k][p]}`);
    }
    if (diffs.length) lines.push(`  ~ ${k}\n      ${diffs.join('\n      ')}`);
  }
  if (lines.length) { console.log(`## ${pageKey}`); console.log(lines.join('\n')); count += lines.length; }
}
console.log(`${count} differences`);

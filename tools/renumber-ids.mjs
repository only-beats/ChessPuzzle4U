// Renumber ALL puzzles in puzzles-lichess*.js into one continuous sequence, grouped  Mate in 1 -> 2 -> 3 -> 4 -> 5.
// Usage (run in the repo folder):   node tools/renumber-ids.mjs [--by-rating] [--start=334]
//   default      : inside each category the CURRENT order is kept (most popular first)
//   --by-rating  : inside each category easiest -> hardest
//   --start=N    : first id (default = highest id in puzzles-seed.js + 1)
// Each file keeps the same number of puzzles it has now. Duplicate Lichess puzzles and wrong "Mate in N" puzzles are dropped.
import fs from 'fs';
const FILES = ['puzzles-lichess.js', 'puzzles-lichess1.js', 'puzzles-lichess2.js', 'puzzles-lichess3.js'];
const byRating = process.argv.includes('--by-rating');
let start = +((process.argv.find(a => a.startsWith('--start=')) || '').split('=')[1] || 0);
if (!start) { const ids = [...fs.readFileSync('puzzles-seed.js', 'utf8').matchAll(/\bid:\s*(\d+)/g)].map(m => +m[1]); start = (ids.length ? Math.max(...ids) : 0) + 1; }

const all = [], sizes = [], seen = new Set(); let dropped = 0;
for (const f of FILES) {
  if (!fs.existsSync(f)) continue; let n = 0;
  for (const ln of fs.readFileSync(f, 'utf8').split('\n')) {
    const s = ln.trim().replace(/,$/, ''); if (!s.startsWith('{"id"')) continue;
    const p = JSON.parse(s), m = /^Mate in (\d+)$/.exec(p.category || '');
    const ok = m && +m[1] >= 1 && +m[1] <= 5 && Math.ceil(p.solution.length / 2) === +m[1] && !seen.has(p.lichess);
    if (!ok) { dropped++; continue; } seen.add(p.lichess); p._k = +m[1]; p._o = all.length; all.push(p); n++;
  }
  sizes.push([f, n]);
}
all.sort((a, b) => a._k - b._k || (byRating ? a.rating - b.rating : 0) || a._o - b._o);
let id = start, i = 0;
for (const [f, n] of sizes) {
  const rows = all.slice(i, i + n).map(p => { const { _k, _o, ...q } = p; q.id = id++; return '  ' + JSON.stringify(q); });
  i += n; fs.writeFileSync(f, 'export const SEED = [\n' + rows.join(',\n') + '\n];\n');
  console.log(f, rows.length, 'puzzles, ids', id - rows.length, '->', id - 1);
}
console.log('dropped', dropped, '| total', all.length, '| order:', byRating ? 'rating inside each category' : 'current order inside each category');

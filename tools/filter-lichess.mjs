// Usage:  node tools/filter-lichess.mjs lichess_db_puzzle.csv out.csv [total=10000] [minRating=0] [maxRating=4000]
import fs from 'fs'; import readline from 'readline';
const [inp, outp, total = 10000, lo = 0, hi = 4000] = process.argv.slice(2);
if (!inp || !outp) { console.log('Usage: node tools/filter-lichess.mjs in.csv out.csv [total] [minRating] [maxRating]'); process.exit(1); }
const T = +total, cap = T;
const keep = { 1: [], 2: [], 3: [], 4: [], 5: [] }, seen = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const rl = readline.createInterface({ input: fs.createReadStream(inp), crlfDelay: Infinity });
for await (const line of rl) {
  const c = line.split(','); if (c.length < 8) continue;
  const m = c[7].match(/mateIn([1-5])/); if (!m) continue;
  const r = +c[3]; if (!(r >= +lo && r <= +hi)) continue;
  const k = m[1], a = keep[k]; seen[k]++; a.push({ pop: +c[5] || 0, line });
  if (a.length > cap * 2) { a.sort((x, y) => y.pop - x.pop); a.length = cap; }
}
for (const k in keep) keep[k].sort((x, y) => y.pop - x.pop);
const take = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }; let left = Math.min(T, Object.values(keep).reduce((s, a) => s + a.length, 0));
while (left > 0) {
  const open = Object.keys(keep).filter(k => take[k] < keep[k].length); if (!open.length) break;
  const share = Math.max(1, Math.floor(left / open.length));
  for (const k of open) { const n = Math.min(share, keep[k].length - take[k], left); take[k] += n; left -= n; if (left <= 0) break; }
}
const out = [];
for (const k in keep) { out.push(...keep[k].slice(0, take[k]).map(x => x.line)); console.log(`mateIn${k}: ${take[k]}  (found ${seen[k]})`); }
fs.writeFileSync(outp, out.join('\n') + '\n'); console.log('Wrote', out.length, 'puzzles to', outp);

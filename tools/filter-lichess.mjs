// Usage:  node tools/filter-lichess.mjs lichess_db_puzzle.csv out.csv [perTheme=200] [minRating=0] [maxRating=3000]
// First decompress the download:  zstd -d lichess_db_puzzle.csv.zst
// Keeps up to <perTheme> puzzles for each of mateIn1..mateIn5 (highest "popularity" first) and writes a small CSV
// that you can import with the admin panel ("Import puzzle.js / Lichess .csv").
import fs from 'fs'; import readline from 'readline';
const [inp, outp, per = 200, lo = 0, hi = 3000] = process.argv.slice(2);
if (!inp || !outp) { console.log('Usage: node tools/filter-lichess.mjs in.csv out.csv [perTheme] [minRating] [maxRating]'); process.exit(1); }
const keep = { 1: [], 2: [], 3: [], 4: [], 5: [] };
const rl = readline.createInterface({ input: fs.createReadStream(inp), crlfDelay: Infinity });
for await (const line of rl) {
  const c = line.split(','); if (c.length < 8) continue;
  const m = c[7].match(/mateIn([1-5])/); if (!m) continue;
  const r = +c[3]; if (!(r >= +lo && r <= +hi)) continue;
  const a = keep[m[1]]; a.push({ pop: +c[5] || 0, line });
  if (a.length > per * 4) { a.sort((x, y) => y.pop - x.pop); a.length = +per; }      // keep memory small
}
const out = [];
for (const k in keep) { keep[k].sort((x, y) => y.pop - x.pop); out.push(...keep[k].slice(0, +per).map(x => x.line)); console.log(`mateIn${k}: ${Math.min(keep[k].length, +per)}`); }
fs.writeFileSync(outp, out.join('\n') + '\n'); console.log('Wrote', out.length, 'puzzles to', outp);

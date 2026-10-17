import fs from 'fs';
const names = ['puzzles-lichess.js', 'puzzles-lichess1.js', 'puzzles-lichess2.js', 'puzzles-lichess3.js'];
const sets = names.map(f => new Set([...fs.readFileSync(f, 'utf8').matchAll(/"lichess":"([^"]+)"/g)].map(m => m[1])));
sets.forEach((s, i) => console.log(names[i], s.size));
for (let i = 1; i < sets.length; i++) for (let j = 0; j < i; j++) console.log(`${i} in ${j}:`, [...sets[i]].filter(x => sets[j].has(x)).length);
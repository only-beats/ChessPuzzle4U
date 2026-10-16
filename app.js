import { firebaseConfig, SOUNDS, CATS } from './config.js';
import { SEED } from './puzzles-seed.js';
import { initAnalysis } from './Analysis.js';
import { initBattle } from './battle.js';

const $ = s => document.querySelector(s);
const norm = s => (s || '').replace(/[+#!?]/g, '');
const CDN = 'https://www.gstatic.com/firebasejs/10.12.2';
const LICHESS = (c, t) => `https://cdn.jsdelivr.net/gh/lichess-org/lila@master/public/piece/cburnett/${c}${t.toUpperCase()}.svg`;
const CC = 'https://images.chesscomfiles.com/chess-themes';          // chess.com boards + pieces
const PIECES = [
  { k: 'neo', n: 'Neo' }, { k: 'game_room', n: 'Castle' }, { k: 'classic', n: 'Classic' }, { k: 'neo_wood', n: 'Neo Wood' },
  { k: 'cases', n: 'Cases' }, { k: 'alpha', n: 'Alpha' }, { k: 'wood', n: 'Wood' }, { k: 'light', n: 'Light' }, { k: 'lichess', n: 'Lichess (cburnett)' }, { k: 'vintage', n: 'vintage' },
  { k: 'tournament', n: 'Tournament' }, { k: 'luca', n: 'Luca' }, { k: 'club', n: 'Club' }, { k: 'staunton', n: '3D Staunton', dir: '3d_staunton' },

];
const BOARDS = [
  { k: 'aquamarine', n: 'Aquamarine', l: '#eaf3ef', d: '#6dbea4' },
  { k: 'walnut', n: 'Walnut', img: 'walnut', a: '#7b5539' }, { k: 'newspaper', n: 'Newspaper', img: 'newspaper', a: '#8a8a86' }, { k: 'wood', n: 'Wood', img: 'dark_wood', a: '#6e4a2c' },
  { k: 'marble', n: 'Marble', img: 'marble', a: '#6f6b66' }, { k: 'icy_sea', n: 'Icy Sea', img: 'icy_sea', a: '#7f9fc2' }, { k: 'stone', n: 'Stone', img: 'stone', a: '#4f4f4f' },
  { k: 'bases', n: 'Bases', img: 'bases', a: '#c0703a' }, { k: 'dash', n: 'Dash', img: 'dash', a: '#5e3d2c' }, { k: 'checkers', n: 'Checkers', img: 'checkers', a: '#b0524f' },
  { k: 'metal', n: 'Metal', img: 'metal', a: '#6a6a6a' }, { k: 'red', n: 'Red', img: 'red', a: '#b5594a' }, { k: 'classic', n: 'Classic', img: 'light', a: '#a9a9a9' },
  { k: 'brown', n: 'Brown', l: '#edd6b0', d: '#b88762' }, { k: 'blue', n: 'Blue', l: '#dee3e6', d: '#8ca2ad' },
  { k: 'green', n: 'Green', l: '#eeeed2', d: '#769656' }, { k: 'lavender', n: 'Lavender', l: '#efeff3', d: '#8476ba' }, { k: 'pink', n: 'Pink', l: '#fbe9ee', d: '#e49bb0' },
  { k: 'sand', n: 'Sand', img: 'sand', a: '#b8a590' }
];
const BOTS = [{ k: 'jade', n: 'Jade', img: 'Bots/Jade.png' }, { k: 'oliver', n: 'Oliver', img: 'Bots/Oliver.png' }, { k: 'sakura', n: 'Sakura', img: 'Bots/Sakura.png' }, { k: 'off', n: 'Voice off' }];
const cfg = { board: localStorage.cp4uBoard || 'aquamarine', pieces: localStorage.cp4uPieces || 'neo', bot: localStorage.cp4uBot || 'jade', sound: localStorage.cp4uSound !== '0' };
const PIECE = (c, t) => {
  const p = PIECES.find(x => x.k === cfg.pieces) || PIECES[0];
  return p.k === 'lichess' ? LICHESS(c, t) : `${CC}/pieces/${p.dir || p.k}/150/${c}${t}.png`;
};
const PIECE_PREVIEW = p => p.k === 'lichess' ? LICHESS('w', 'n') : `${CC}/pieces/${p.dir || p.k}/150/wn.png`;
let fbList = [...SEED], fileList = [], fbIds = new Set();                  // fbList = Firebase (or built-in) puzzles, fileList = Lichess puzzles from the GitHub file
function rebuild() {                                                       // merge both sources (Firebase wins when the same id exists in both)
  const m = new Map(); fileList.forEach(p => m.set(p.id, p)); fbList.forEach(p => m.set(p.id, p));
  puzzles = [...m.values()].sort((x, y) => x.id - y.id); setupElo();
}
async function loadFilePuzzles() {
  const want = wantId;
  try {
    const res = await fetch(PUZ_FILE + '?v=' + PUZ_VER);
    if (!res.ok) { msg('puzzles-lichess.js not found (HTTP ' + res.status + ')', 'err'); return; }
    const txt = await res.text();
    const rows = JSON.parse(txt.slice(txt.indexOf('['), txt.lastIndexOf(']') + 1));
    fileList = [];
    for (const p of rows) {
      if (!p || !p.fen || !p.lichess) continue;
      const mate = /\d/.exec(p.category || ''), side = String(p.fen).split(' ')[1] === 'b' ? 'Black' : 'White';
      fileList.push({
        result: '', date: 'Rating ' + (p.rating || ''), category: 'Tactic',
        description: `${side} to move${mate ? ' and mate in ' + mate[0] : ' – find the best moves'}.`,
        ...p, id: +p.id, white: 'Unknown', black: 'Unknown'
      });
    }
    rebuild(); renderList();
    if (want && (!cur || cur.id !== want) && !step) { const w = puzzles.find(x => x.id === want); if (w) open(w); }
    if ($('#qSearch').value.trim()) runSearch();
  } catch (e) { msg('Could not load puzzles-lichess.js: ' + e.message, 'err'); console.warn(e); }
}
const PER = 5;                                                           // puzzles shown per page in the list
const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const PUZ_FILE = './puzzles-lichess.js';
const PUZ_VER = 2;   // change to 3, 4 ... each time you upload a new puzzles-lichess.js
const FB = !String(firebaseConfig.apiKey).startsWith('PASTE');
let puzzles = [...SEED], db = null, auth = null, F = {}, isAdmin = false, catK = 0;
let BT = null, cur, game, sol, alt, tree, node, autoT, page = 0, promoMove = null, step = 0, user, flip, last, sel, targets = [], wrong, busy, done, hintLvl, fbSq, fbIcon, log = [];
let wantId = +location.hash.slice(1) || +localStorage.cp4uLast;
let prog = JSON.parse(localStorage.cp4u || '{"s":[],"streak":0}');
const saveProg = () => { localStorage.cp4u = JSON.stringify(prog); stats(); };
const stats = () => {
  $('#stSolved').innerHTML = '<img class="sti" src="svg/checklist.svg" alt="solved"> ' + prog.s.length;
  $('#stStreak').innerHTML = '<img class="sti" src="svg/fire.svg" alt="streak"> ' + prog.streak;
};

/* ---------- sound (files in Audio/, falls back to WebAudio beeps) ---------- */
let ac;
function beep(name) {
  ac = ac || new (window.AudioContext || window.webkitAudioContext)();
  const f = { move: [440], capture: [300], check: [660, 520], correct: [600, 800], wrong: [200, 150], win: [520, 660, 800], promote: [500, 700, 900, 1100] }[name] || [440];
  f.forEach((hz, i) => {
    const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = hz; o.connect(g); g.connect(ac.destination);
    const t = ac.currentTime + i * .1; g.gain.setValueAtTime(.12, t); g.gain.exponentialRampToValueAtTime(.001, t + .15); o.start(t); o.stop(t + .16);
  });
}
function sound(name) { if (!cfg.sound) return; try { const a = new Audio(SOUNDS[name]); a.play().catch(() => beep(name)); } catch { beep(name); } }
const moveSound = (m, skipPromo) => sound(m.promotion && !skipPromo ? 'promote' : game.in_check() ? 'check' : m.captured ? 'capture' : 'move');

/* ---------- brilliant sacrifice voice (files in Audio/voice/) ---------- */
const VAL = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
const PNAME = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
let voiceTok = 0, voiceAudio = null;

// returns e.g. "brilliant-queen" if the move just played is a real sacrifice, otherwise ''
function sacVoice(mv) {
  if (mv.piece === 'k') return '';
  if (mv.promotion) return 'brilliant-promotion-' + PNAME[mv.promotion];   // dxe1=N → knight promotion
  const taken = mv.captured ? VAL[mv.captured] : 0, worth = VAL[mv.piece] > taken;
  // 1) the piece can really be captured on its next move = a real sacrifice
  if (worth && game.moves({ verbose: true }).some(o => o.to === mv.to && o.captured)) return 'brilliant-' + PNAME[mv.piece];
  // 2) it gives check / mate and cannot be captured -> the "check" / "move" voice speaks instead
  if (game.in_check()) return '';
  // 3) quiet capture of a smaller piece that cannot be recaptured (Bxg2) -> still a sacrifice
  return mv.captured && worth ? 'brilliant-' + PNAME[mv.piece] : '';
}
const voiceText = v => {
  const p = v.split('-');
  if (p[1] === 'promotion') return 'What a brilliant ' + p[2] + ' promotion!';
  return 'What a brilliant ' + p[1] + (v.startsWith('move-') ? ' move!' : v.startsWith('check-') ? ' check!' : ' sacrifice!');
};
// plays the file, then calls done() when it ends (also if the file is missing, so the game never gets stuck)
function playVoice(file, done) {
  const tok = voiceTok; let fired = false;
  const go = () => { if (fired) return; fired = true; if (tok === voiceTok && done) done(); };
  try {
    voiceAudio = new Audio('Audio/voice/' + cfg.bot + '/' + file + '.mp3');
    voiceAudio.onended = go; voiceAudio.onerror = go;
    voiceAudio.play().catch(go);
    setTimeout(go, 6000);
  } catch { go(); }
}

/* ---------- board (8x8 equal cells, piece fills its cell, a-h / 1-8 labels) ---------- */
function draw() {
  let h = '';
  for (let r = 0; r < 8; r++) for (let f = 0; f < 8; f++) {
    const file = flip ? 7 - f : f, rank = flip ? r : 7 - r, name = 'abcdefgh'[file], sq = name + (rank + 1), pc = game.get(sq);
    const cls = ['sq', (file + rank) % 2 ? 'l' : 'd', sel === sq && 'sel', last && (last.from === sq || last.to === sq) && 'last', targets.includes(sq) && 'tgt'].filter(Boolean).join(' ');
    const coord = (f === 0 ? `<span class="co rk">${rank + 1}</span>` : '') + (r === 7 ? `<span class="co fl">${name}</span>` : '');
    const piece = pc ? `<img class="pc" src="${PIECE(pc.color, pc.type)}" alt="${pc.color}${pc.type}" draggable="false" decoding="sync" onerror="this.onerror=null;this.src='${LICHESS(pc.color, pc.type)}'">` : '';
    const badge = fbSq === sq ? `<img class="fbi" src="icons/${fbIcon}.png" alt="">` : '';
    const logo = r === 7 && f === 0 ? '<img class="dlogo" src="src/dany-logo.png" alt="" draggable="false" onerror="this.remove()">' : '';
    h += `<div class="${cls}" data-sq="${sq}">${logo}${coord}${piece}${badge}</div>`;
  }
  $('#board').innerHTML = h;
  $('#moves').innerHTML = log.map((s, i) => (i % 2 === 0 ? `<b>${Math.floor(i / 2) + 1}.</b> ` : '') + s).join(' ');
}
const msg = (t, c = '') => { const m = $('#msg'); m.textContent = t; m.className = 'msg ' + c; };
function preloadPieces() { for (const c of 'wb') for (const t of 'pnbrqk') new Image().src = PIECE(c, t); }

/* ---------- move tree: PGN with variations  "1. Rxe8+ Qxe8 2. Bxd6+ (2. Qe6 ...) 2... Qe7" ---------- */
const RES = /^(1-0|0-1|1\/2-1\/2|\*)$/;
function parseTree(text) {
  const toks = String(text || '').replace(/\{[^}]*\}/g, ' ').replace(/\$\d+/g, ' ').replace(/([()])/g, ' $1 ').split(/\s+/).filter(Boolean);
  const root = { san: '', raw: '', kids: [] }; let i = 0;
  (function seq(start) {
    let prev = start, before = null;
    while (i < toks.length) {
      const t = toks[i++];
      if (t === ')') return;
      if (t === '(') { if (before) seq(before); else { let d = 1; while (i < toks.length && d) { const x = toks[i++]; d += x === '(' ? 1 : x === ')' ? -1 : 0; } } continue; }
      if (RES.test(t) || /^\d+\.+$/.test(t)) continue;
      const raw = t.replace(/^\d+\.+/, ''); if (!raw) continue;
      const nd = { san: norm(raw), raw, kids: [] }; prev.kids.push(nd); before = prev; prev = nd;     // "(" = alternative to the move just played
    }
  })(root);
  return root;
}
const mainLine = r => { const out = []; for (let n = r.kids[0]; n; n = n.kids[0]) out.push(n.raw); return out; };
function checkTree(nd, g) {
  for (const k of nd.kids) { if (!g.move(k.san, { sloppy: true })) throw Error(`Illegal move "${k.raw}" in the pgn line`); checkTree(k, g); g.undo(); }
}

/* ---------- solver ---------- */
function open(p, scroll = false) {
  clearTimeout(autoT); voiceTok++; if (voiceAudio) voiceAudio.pause();
  cur = p; game = new Chess(p.fen); alt = {};
  tree = p.pgn ? parseTree(p.pgn) : null; node = tree;
  sol = tree ? mainLine(tree) : p.solution;
  for (const k in (p.alternatives || {})) alt[norm(k)] = p.alternatives[k];
  step = 0; user = game.turn(); flip = user === 'b'; last = sel = fbSq = null; targets = []; wrong = hintLvl = 0; busy = done = false; log = []; promoMove = null;
  $('#promo').classList.add('hidden');
  $('#pTitle').textContent = `${p.white} vs ${p.black}`;
  $('#pSub').textContent = `#${p.id} · ${p.date || ''} · ${p.category || ''} · ${p.result || ''}`;

  msg(p.description || 'Find the best moves.');
  const idx = filtered().findIndex(x => x.id === p.id); if (idx >= 0) page = Math.floor(idx / PER);
  draw(); renderList(); fitBoard(); localStorage.cp4uLast = p.id; history.replaceState(null, '', '#' + p.id);
  if (scroll && window.innerWidth < 900 && $('#solver').getBoundingClientRect().top < 0) $('#solver').scrollIntoView({ behavior: 'smooth', block: 'start' });   // only when picked from the list and the board is off-screen
}
// old format (solution + alternatives)
const accepted = () => {
  const e = sol[step], pv = sol[step - 1];
  return [e, ...(alt[norm(e)] || []), ...(step === 0 ? alt.first_move || [] : []), ...(pv ? alt[norm(pv)] || [] : [])].map(norm);
};
// new format (pgn with variations): every move listed at this point of the tree is accepted
const kidFor = mv => node.kids.find(k => k.san === norm(mv.san));

function tryMove(from, to, promo = 'q') {
  if (BT && BT.locked()) return false;
  const mv = game.move({ from, to, promotion: promo });
  if (!mv) return false;
  sel = null; targets = [];
  const kid = tree ? kidFor(mv) : null;
  const good = (tree ? !!kid : accepted().includes(norm(mv.san))) || game.in_checkmate();
  if (good) {
    const brilliant = step === 0 || /!!/.test(tree ? (kid ? kid.raw : '') : (sol[step] || ''));   // first move (or any "!!" move)
    last = mv; step++; log.push(mv.san); fbSq = mv.to; fbIcon = brilliant ? 'brilliant' : 'best';
    if (tree) node = kid || { san: norm(mv.san), raw: mv.san, kids: [] };
    moveSound(mv, true);                                                  // promote.mp3 already played when the dialog opened
    const kind = !brilliant ? '' : game.in_checkmate() ? 'move-' : game.in_check() ? 'check-' : '';
    const v = (cfg.bot === 'off' || !cfg.sound || BT) ? '' : (brilliant ? sacVoice(mv) : '') || (kind ? kind + PNAME[mv.piece] : '');
    console.log('move:', mv.san, '| piece:', mv.piece, '| lichess:', !!cur.lichess, '| mate:', game.in_checkmate(), '| voice:', v || 'none');
    if (game.in_checkmate() || (tree ? !node.kids.length : step >= sol.length)) {
      draw();
      if (v) { busy = true; msg(voiceText(v), 'ok'); setTimeout(() => playVoice(v, finish), 350); }
      else finish();
      return true;
    }
    busy = true; msg(v ? voiceText(v) : '✔ Correct!', 'ok'); draw();
    if (v) setTimeout(() => playVoice(v, () => setTimeout(reply, 400)), 350);   // voice first, then the opponent's move
    else setTimeout(reply, 600);
  } else {
    game.undo(); wrong++; fbSq = to; fbIcon = 'blunder'; sound('wrong'); if (BT) { draw(); BT.wrong(); return true; } msg('✖ Not the best move – try again.', 'err'); draw();
    setTimeout(() => { fbSq = null; draw(); }, 700);                      // no shake
  }
  return true;
}
function reply() {
  let m;
  if (tree) { const r = node.kids[0]; m = game.move(r.san, { sloppy: true }); node = r; }
  else m = game.move(sol[step], { sloppy: true });
  m = m || game.move(game.moves({ verbose: true })[0]);
  last = m; step++; log.push(m.san); fbSq = null; busy = false; moveSound(m);
  if (tree && !node.kids.length) { draw(); return finish(); }
  msg('Your move.'); draw();
}
const nextInList = () => { const l = filtered(), i = l.findIndex(p => p.id === cur.id); return i >= 0 ? l[i + 1] : l[0]; };
function finish() {
  done = true; sound('win'); if (BT) return BT.solved();
  const nx = nextInList();
  msg((wrong ? 'Solved!' : 'Perfect – solved without a mistake!') + (nx ? ' Loading next puzzle…' : 'End of this category!'), 'ok');
  if (!prog.s.includes(cur.id)) prog.s.push(cur.id);
  prog.streak = wrong ? 0 : prog.streak + 1; saveProg(); renderList();
  if (nx) { const id = cur.id; clearTimeout(autoT); autoT = setTimeout(() => { if (cur && cur.id === id && done) open(nx); }, 2500); }
}

/* promotion chooser */
const isPromo = (from, to) => game.moves({ square: from, verbose: true }).some(m => m.to === to && m.flags.includes('p'));
function askPromo(from, to) {
  promoMove = { from, to }; sound('promote');                              // plays Audio/promote.mp3 when the dialog opens
  const names = { q: 'Queen', r: 'Rook', b: 'Bishop', n: 'Knight' };
  $('#promo .pbox').innerHTML = ['q', 'r', 'b', 'n'].map(t => `<button type="button" data-t="${t}" title="${names[t]}"><img src="${PIECE(user, t)}" alt="${names[t]}" onerror="this.onerror=null;this.src='${LICHESS(user, t)}'"></button>`).join('');
  $('#promo').classList.remove('hidden');
}
$('#promo').onclick = e => {
  const b = e.target.closest('button[data-t]'), pm = promoMove; promoMove = null; $('#promo').classList.add('hidden');
  if (b && pm) tryMove(pm.from, pm.to, b.dataset.t); else { sel = null; targets = []; draw(); }
};

$('#board').onclick = e => {
  const el = e.target.closest('.sq'); if (!el || !cur || busy || done) return;
  const sq = el.dataset.sq;
  if (sel && sel !== sq) { if (isPromo(sel, sq)) return askPromo(sel, sq); if (tryMove(sel, sq)) return; }
  const pc = game.get(sq); sel = pc && pc.color === user ? sq : null;
  targets = sel ? game.moves({ square: sq, verbose: true }).map(m => m.to) : []; draw();
};
$('#bHint').onclick = () => {
  if (!cur || done || busy) return;
  const want = tree ? node.kids.map(k => k.san) : [norm(sol[step])];
  const m = game.moves({ verbose: true }).find(m => want.includes(norm(m.san))); if (!m) return;
  sel = m.from; targets = hintLvl ? [m.to] : []; hintLvl++; msg(hintLvl > 1 ? 'Play the highlighted move.' : 'Hint: move this piece.'); draw();
};
$('#bReset').onclick = () => cur && open(cur);
$('#bNext').onclick = () => {
  const l = filtered(); if (!l.length) return;
  open(l.find(p => !prog.s.includes(p.id) && p.id !== cur?.id) || l[(l.findIndex(p => p.id === cur?.id) + 1) % l.length]);
};
$('#bSol').onclick = () => {
  if (!cur) return; open(cur); done = busy = true; msg('Solution:');
  sol.forEach((s, i) => setTimeout(() => { const m = game.move(s, { sloppy: true }); if (!m) return; last = m; log.push(m.san); moveSound(m); draw(); }, 850 * (i + 1)));
};

/* ---------- list ---------- */
const _k = new WeakMap();
const catOf = p => { let k = _k.get(p); if (k === undefined) { k = +((p.category || '').match(/\d+/) || [0])[0]; _k.set(p, k); } return k; }; const picked = new Set();                                                 // admin: puzzles ticked for bulk delete
let minElo = 0, maxElo = 0;                                               // rating filter (Lichess puzzles carry a rating)
const filtered = () => puzzles.filter(p => (!catK || catOf(p) === catK)
  && (!(minElo || maxElo) || ((p.rating || 0) > 0 && (p.rating || 0) >= minElo && (!maxElo || p.rating <= maxElo))));
const eloText = () => minElo || maxElo ? `rating ${minElo || 0}${maxElo ? '–' + maxElo : '+'}` : '';
function renderList() {
  $('#cats').innerHTML = CATS.map(c => `<div class="cat ${c.k === catK ? 'on' : ''}" data-k="${c.k}"><img src="${c.img}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('b'),{textContent:'${c.k || '∞'}'}))">${c.label}</div>`).join('');
  const all = filtered(), pages = Math.max(1, Math.ceil(all.length / PER)); page = Math.max(0, Math.min(page, pages - 1));
  $('#list').innerHTML = all.slice(page * PER, page * PER + PER).map(p => `<div class="pcard ${cur && cur.id === p.id ? 'on' : ''}" data-id="${p.id}"><div><b>#${p.id} · ${esc(p.category || '')}</b><br><small>${esc(p.white)} vs ${esc(p.black)} · ${esc(p.date || '')}</small></div>
    <div>${prog.s.includes(p.id) ? '<span class="tick">✔</span>' : ''}${isAdmin ? `<span class="adm"><input type="checkbox" data-s="${p.id}" ${picked.has(p.id) ? 'checked' : ''}><button data-e="${p.id}">✎</button><button data-x="${p.id}">✕</button></span>` : ''}</div></div>`).join('') || `<p class="mut">${minElo || maxElo ? 'No puzzles with ' + eloText() + ' in this category.' : 'No puzzles yet.'}</p>`;
  const ci = cur ? all.findIndex(p => p.id === cur.id) : -1;
  $('#pager').innerHTML = `<button data-nav="-1" ${ci > 0 ? '' : 'disabled'}>‹ Prev</button><span>${ci >= 0 ? ci + 1 : '–'} / ${all.length}</span><button data-nav="1" ${ci < all.length - 1 ? '' : 'disabled'}>Next ›</button>`;
}
$('#pager').onclick = e => {
  const b = e.target.closest('[data-nav]'); if (!b) return;
  const l = filtered(), i = (cur ? l.findIndex(p => p.id === cur.id) : -1) + +b.dataset.nav; if (l[i]) open(l[i]);
};
$('#cats').onclick = e => { const c = e.target.closest('.cat'); if (c) { catK = +c.dataset.k; page = 0; const f = filtered()[0]; if (f) open(f, true); else renderList(); } };
/* custom dropdowns (instead of the browser's native select popup) */
const closeDd = () => document.querySelectorAll('.dd-menu').forEach(m => m.classList.add('hidden'));
document.addEventListener('click', closeDd); document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDd(); });
function enhanceSelect(sel) {
  const w = document.createElement('span'), btn = document.createElement('button'), menu = document.createElement('ul');
  w.className = 'dd'; btn.type = 'button'; btn.className = 'dd-btn'; menu.className = 'dd-menu hidden';
  menu.innerHTML = [...sel.options].map((o, i) => `<li data-i="${i}">${esc(o.text)}</li>`).join('');
  sel.before(w); w.append(btn, menu, sel); sel.style.display = 'none';
  const sync = () => { btn.textContent = sel.options[sel.selectedIndex]?.text || '';[...menu.children].forEach((li, i) => li.classList.toggle('on', i === sel.selectedIndex)); };
  btn.onclick = e => { e.stopPropagation(); const open = menu.classList.contains('hidden'); closeDd(); if (open) menu.classList.remove('hidden'); };
  menu.onclick = e => {
    e.preventDefault(); e.stopPropagation(); const li = e.target.closest('li'); if (!li) return;
    sel.selectedIndex = +li.dataset.i; sync(); menu.classList.add('hidden'); sel.dispatchEvent(new Event('change'));
  };
  sel._sync = sync; sync();
}
['#dCat', '#dSrc'].forEach(q => enhanceSelect($(q)));

/* rating slider: A = lowest point, B = highest point; limits are the lowest / highest rated puzzle that exists */
const eloA = $('#eloA'), eloB = $('#eloB');
let eloLo = 0, eloHi = 0;
function paintElo() {
  const a = +eloA.value, b = +eloB.value, span = Math.max(1, eloHi - eloLo);
  $('#rsFill').style.left = (a - eloLo) / span * 100 + '%'; $('#rsFill').style.width = (b - a) / span * 100 + '%';
  $('#eloTxt').textContent = a <= eloLo && b >= eloHi ? 'Any rating' : `${a} – ${b}`;
  eloA.style.zIndex = a > eloLo + span / 2 ? 4 : 3;                         // when both thumbs meet, the one that can still move stays on top
}
function setupElo() {
  let lo = 0, hi = 0;
  for (const p of puzzles) { const r = p.rating || 0; if (r > 0) { lo = lo ? Math.min(lo, r) : r; hi = Math.max(hi, r); } }
  eloLo = lo; eloHi = hi; $('#eloBox').classList.toggle('hidden', !hi);
  for (const el of [eloA, eloB]) { el.min = lo; el.max = hi; el.step = 1; }
  eloA.value = minElo ? Math.max(lo, Math.min(minElo, hi)) : lo; eloB.value = maxElo ? Math.min(hi, Math.max(maxElo, lo)) : hi;
  $('#eloLo').textContent = lo; $('#eloHi').textContent = hi; paintElo();
}
function applyElo() {
  const a = +eloA.value, b = +eloB.value;
  minElo = a > eloLo ? a : 0; maxElo = b < eloHi ? b : 0; page = 0; paintElo();
  const f = filtered()[0]; if (f) open(f, true); else { renderList(); msg(`No puzzles with ${eloText()} here – move the slider or change category.`, 'err'); }
}
eloA.oninput = () => { if (+eloA.value > +eloB.value) eloA.value = eloB.value; paintElo(); };
eloB.oninput = () => { if (+eloB.value < +eloA.value) eloB.value = eloA.value; paintElo(); };
eloA.onchange = eloB.onchange = applyElo;                                   // load a puzzle when the thumb is released
$('#eloReset').onclick = () => { eloA.value = eloLo; eloB.value = eloHi; applyElo(); };
$('#list').onclick = async e => {
  const p = id => puzzles.find(x => x.id === +id);
  if (e.target.dataset.s) { const i = +e.target.dataset.s; e.target.checked ? picked.add(i) : picked.delete(i); return delUi(); }
  if (e.target.dataset.x) { if (!fbIds.has(+e.target.dataset.x)) return alert('This puzzle comes from the GitHub file (' + PUZ_FILE.slice(2) + ') – remove it there.'); if (confirm('Delete puzzle #' + e.target.dataset.x + '?')) await F.remove(F.ref(db, 'puzzles/' + e.target.dataset.x)); return; }
  if (e.target.dataset.e) { const pz = p(e.target.dataset.e); analysis.loadPuzzle(pz); return; }
  const c = e.target.closest('.pcard'); if (c) open(p(c.dataset.id), true);
};

/* ---------- admin: parse + validate ---------- */
/* ---------- Lichess puzzle DB (CSV rows) ➜ our puzzle format ----------
   Lichess row: PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl,OpeningTags
   Lichess FEN is the position BEFORE the opponent's last move: Moves[0] is played automatically, the solver then plays Moves[1], Moves[2]... (UCI). */
const isLichessCsv = t => /^[\w-]{3,8},[^,\s]+\/[^,]+,[a-h][1-8][a-h][1-8]/m.test(t);
const uci = m => ({ from: m.slice(0, 2), to: m.slice(2, 4), promotion: m[4] || undefined });
function lichessRow(line, have, takeId) {
  const c = line.trim().split(',');
  if (c.length < 8 || !/^[a-h][1-8][a-h][1-8]/.test(c[2])) return null;
  const [lid, fen, mv, rating, , , , themes, url] = c;
  const g = new Chess(fen), m = mv.trim().split(/\s+/);
  if (!g.move(uci(m.shift()))) return null;
  const start = g.fen(), sol = [];
  for (const u of m) { const x = g.move(uci(u)); if (!x) return null; sol.push(x.san); }
  if (!sol.length) return null;
  const mate = (themes.match(/mateIn(\d)/) || [])[1], side = start.split(' ')[1] === 'w' ? 'White' : 'Black';
  return {
    id: have.get(lid) ?? takeId(), date: 'Rating ' + rating, white: 'Unknown', black: 'Unknown', result: '', fen: start, solution: sol,
    category: mate ? 'Mate in ' + mate : 'Tactic',
    description: `${side} to move${mate ? ' and mate in ' + mate : ' – find the best moves'}.`,
    lichess: lid, rating: +rating || 0, themes, url: url || ''
  };
}
const lichessIds = () => new Map(puzzles.filter(p => p.lichess).map(p => [p.lichess, p.id]));
function fromLichess(t) {
  const out = [], have = lichessIds(); let id = nextId();
  for (const line of t.split(/\r?\n/)) { const p = lichessRow(line, have, () => id++); if (p) out.push(p); }
  if (!out.length) throw Error('No new Lichess puzzles found in that text.');
  return out;
}
async function fromLichessAsync(t, onProgress) {
  const lines = t.split(/\r?\n/), out = [], have = lichessIds(); let id = nextId();
  for (let i = 0; i < lines.length; i++) {
    const p = lichessRow(lines[i], have, () => id++); if (p) out.push(p);
    if (i % 500 === 499) { if (onProgress) onProgress(i + 1, lines.length, out.length); await new Promise(r => setTimeout(r)); }
  }
  if (!out.length) throw Error('No Lichess puzzles found in that file.');
  return out;
}
function parsePuzzles(t) {
  if (isLichessCsv(t)) return fromLichess(t);
  t = t.replace(/```\w*/g, '').replace(/^\s*(?:export\s+)?(?:const|let|var)\s+\w+\s*=\s*/, '').replace(/;\s*$/, '').trim();
  try { const j = JSON.parse(t); return Array.isArray(j) ? j : [j]; } catch { /* JS-style object syntax */ }   // strict JSON first (URLs contain "//")
  t = t.replace(/\/\/.*$/gm, '').trim();
  const j = t.replace(/([{,]\s*)([A-Za-z_]\w*)\s*:/g, '$1"$2":').replace(/,(\s*[\]}])/g, '$1').replace(/,\s*$/, '');
  return JSON.parse(j.startsWith('[') ? j : '[' + j + ']');
}
const nextId = () => puzzles.reduce((m, p) => Math.max(m, p.id), 0) + 1;
function validate(p) {
  let sl = p.solution, pgn = '';
  if (p.pgn) { const t = parseTree(p.pgn); if (!t.kids.length) throw Error('Empty pgn line in puzzle ' + (p.id || '(new)')); sl = mainLine(t); pgn = String(p.pgn).trim(); }
  if (!p.fen || !Array.isArray(sl) || !sl.length) throw Error('Each puzzle needs "fen" and "solution" (or "pgn").');
  const g = new Chess(); if (!g.load(p.fen)) throw Error('Bad FEN: ' + p.fen);
  const turn = g.turn();
  if (pgn) try { checkTree(parseTree(pgn), g); } catch (e) { throw Error(`${e.message} (puzzle ${p.id || 'new'})`); }
  for (const m of sl) if (!g.move(m, { sloppy: true })) throw Error(`Illegal move "${m}" in puzzle ${p.id || '(new)'}`);
  const n = Math.ceil(sl.length / 2), mate = g.in_checkmate();
  const out = {
    id: +p.id || nextId(), date: String(p.date || ''), white: p.white || '?', black: p.black || '?', result: p.result || '', fen: p.fen, solution: sl,
    description: p.description || `${turn === 'w' ? 'White' : 'Black'} moves and wins${mate ? ' in ' + n : ''}.`, category: p.category || (mate ? 'Mate in ' + n : 'Tactic')
  };
  if (pgn) out.pgn = pgn;
  if (p.lichess) Object.assign(out, { lichess: p.lichess, rating: p.rating || 0, themes: p.themes || '', url: p.url || '' });
  if (p.alternatives) { out.alternatives = {}; for (const k in p.alternatives) out.alternatives[k === 'first_move' ? k : norm(k)] = p.alternatives[k]; }
  return out;
}
const amsg = (t, c) => { $('#amsg').textContent = t; $('#amsg').className = 'msg ' + (c || ''); };
/* ---------- admin: bulk delete ---------- */
const delUi = () => { const b = $('#dSel'); if (b) b.textContent = `Delete ticked (${picked.size})`; };
async function removeIds(ids, label) {
  if (!isAdmin) return amsg('Admin login required.', 'err');
  const del = ids.filter(id => fbIds.has(id)), fileOnly = ids.length - del.length;     // puzzles that come from the GitHub file can't be deleted here
  if (!del.length) return amsg(fileOnly ? `These ${fileOnly} puzzle(s) come from ${PUZ_FILE.slice(2)} on GitHub – remove them by editing that file.` : 'Nothing to delete.', 'err');
  if (!confirm(`Delete ${del.length} puzzle(s) from Firebase${label ? ' – ' + label : ''}? This cannot be undone.`)) return;
  try {
    for (let i = 0; i < del.length; i += 500) { const up = {}; del.slice(i, i + 500).forEach(id => up[id] = null); await F.update(F.ref(db, 'puzzles'), up); }
    ids.forEach(id => picked.delete(id)); delUi();
    amsg(`✔ Deleted ${del.length} puzzle(s) from Firebase.` + (fileOnly ? ` ${fileOnly} come from the GitHub file and were skipped.` : ''), 'ok');
  } catch (e) { amsg('✖ ' + e.message, 'err'); }
}
$('#dSel').onclick = () => removeIds([...picked], 'ticked ones');
$('#dAll').onclick = () => { filtered().forEach(p => picked.add(p.id)); renderList(); delUi(); amsg(`Ticked ${picked.size} puzzle(s) in the current category.`, 'ok'); };
$('#dNone').onclick = () => { picked.clear(); renderList(); delUi(); };
$('#dGo').onclick = () => {
  const k = +$('#dCat').value, src = $('#dSrc').value, n = Math.max(0, +$('#dNum').value || 0);
  let l = puzzles.filter(p => (!k || catOf(p) === k) && (src === 'all' || p.lichess)).sort((x, y) => y.id - x.id);
  if (n) l = l.slice(0, n);
  removeIds(l.map(p => p.id), `${src === 'all' ? 'all sources' : 'Lichess only'}, ${k ? 'Mate in ' + k : 'all categories'}${n ? ', newest ' + n : ''}`);
};
async function savePuzzles(list) {
  if (!isAdmin) return amsg('Admin login required.', 'err');
  const ok = [], bad = [], used = new Set(); let n = nextId();
  for (const raw of list) { try { const p = validate(raw); if (used.has(p.id)) p.id = n++; used.add(p.id); ok.push(p); } catch (e) { bad.push(`#${raw && raw.id}: ${e.message}`); } }
  if (!ok.length) return amsg('✖ ' + (bad[0] || 'Nothing to save.'), 'err');
  try {
    const up = {}; ok.forEach(p => up[p.id] = p); await F.update(F.ref(db, 'puzzles'), up);
    amsg(`✔ Saved ${ok.length} puzzle(s).` + (bad.length ? ` Skipped ${bad.length}: ` + bad.slice(0, 5).join(' | ') : ''), bad.length ? 'err' : 'ok');
  }
  catch (e) { amsg('✖ ' + e.message + (/permission/i.test(e.message) ? ' (check database rules + /admins/<UID> – see README)' : ''), 'err'); }
}
/* admin: download the database puzzles (honours the category + rating currently chosen; none chosen = everything)
   in the same format the Import button reads (puzzles-seed.js style) */
function downloadAll() {
  const l = [...filtered()].sort((x, y) => x.id - y.id); if (!l.length) return { n: 0 };
  const name = 'puzzles-database' + (catK ? '-mate' + catK : '') + (minElo || maxElo ? '-r' + minElo + '-' + (maxElo || 'max') : '') + '.js';
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['export const SEED = ' + JSON.stringify(l, null, 1) + ';\n'], { type: 'text/javascript' })); a.download = name;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  return { n: l.length, name };
}
async function makeLichessFile(f, onProgress) {
  const tell = t => { amsg(t); if (onProgress) onProgress(t); };
  try {
    tell('Reading ' + f.name + '…');
    const text = await f.text();
    const list = await fromLichessAsync(text, (i, n, ok) => tell(`Converting… ${i.toLocaleString()} / ${n.toLocaleString()} rows (${ok.toLocaleString()} puzzles) – keep this tab open`));
    const rows = list.map(p => '  ' + JSON.stringify({ id: p.id, fen: p.fen, solution: p.solution, lichess: p.lichess, rating: p.rating, category: p.category }));
    const blob = new Blob(['export const SEED = [\n', rows.join(',\n'), '\n];\n'], { type: 'text/javascript' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'puzzles-lichess.js';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    tell(`⬇ Done: ${list.length.toLocaleString()} puzzles, ${(blob.size / 1048576).toFixed(1)} MB → puzzles-lichess.js. Put it in your GitHub repo next to index.html.`);
    return { n: list.length };
  } catch (err) { tell('✖ ' + err.message); return { n: 0 }; }
}
async function importFile(f) {                                              // used by the Analysis board "Import" button
  try { const list = parsePuzzles(await f.text()); amsg(`Read ${list.length} puzzle(s) from ${f.name} – saving...`, 'ok'); await savePuzzles(list); }
  catch (err) { amsg('✖ Could not read file: ' + err.message, 'err'); }
}

/* ---------- Firebase auth ---------- */
const renderAdmin = () => { $('#admin').classList.toggle('hidden', !isAdmin); $('#btnLogin').textContent = isAdmin ? 'Admin ✔' : 'Admin'; analysis.onAdmin(isAdmin); };
$('#btnLogin').onclick = () => {
  if (isAdmin) return $('#admin').scrollIntoView({ behavior: 'smooth' });
  if (!FB) return alert('Add your Firebase apiKey/appId in config.js first (see README).'); $('#dlg').showModal();
};
$('#lCancel').onclick = () => $('#dlg').close();
const lmsg = (t, c = 'err') => { $('#lMsg').textContent = t; $('#lMsg').className = 'msg ' + c; };
$('#lGo').onclick = async e => {
  e.preventDefault();
  try {
    await F.signInWithEmailAndPassword(auth, $('#lEmail').value, $('#lPass').value); $('#dlg').close(); $('#lPass').value = ''; lmsg('', '');
    setTimeout(() => !isAdmin && alert('Logged in, but this account is not in /admins.'), 1200);
  }
  catch (err) {
    lmsg(/network/.test(err.code) ? 'Network error.' : /unauthorized-domain/.test(err.code) ? 'Add this domain in Firebase > Authentication > Settings > Authorized domains.'
      : /operation-not-allowed/.test(err.code) ? 'Enable Email/Password sign-in in Firebase.' : 'Wrong email or password.');
  }
};
$('#lForgot').onclick = async () => {
  const em = $('#lEmail').value.trim(); if (!em) return lmsg('Type your email first.');
  try { await F.sendPasswordResetEmail(auth, em); lmsg('Reset email sent – check your inbox.', 'ok'); } catch { lmsg('Could not send reset email.'); }
};
$('#bLogout').onclick = () => F.signOut(auth);

async function initFirebase() {
  if (!FB) return;
  const [app, A, D] = await Promise.all(['app', 'auth', 'database'].map(m => import(`${CDN}/firebase-${m}.js`)));
  const a = app.initializeApp(firebaseConfig); auth = A.getAuth(a); db = D.getDatabase(a); F = { ...A, ...D };
  D.onValue(D.ref(db, 'puzzles'), s => {
    const v = s.val();
    if (v) { fbList = Object.entries(v).filter(([, p]) => p && p.fen).map(([k, p]) => ({ ...p, id: +(p.id ?? k), ...(p.lichess ? { white: 'Unknown', black: 'Unknown' } : {}) })).sort((x, y) => x.id - y.id); fbIds = new Set(fbList.map(p => p.id)); } else fbIds = new Set();
    rebuild();
    renderList();
    if (wantId && cur && cur.id !== wantId && !step) { const w = puzzles.find(x => x.id === wantId); if (w) open(w); }
    wantId = 0; if ($('#qSearch').value.trim()) runSearch();
  },
    err => { console.error(err); if (!cur) msg('⚠ Could not load puzzles from Firebase (' + err.message + ') – showing built-in puzzles.', 'err'); });
  A.onAuthStateChanged(auth, async u => {
    isAdmin = false;
    if (u && !u.isAnonymous) try { isAdmin = (await D.get(D.ref(db, 'admins/' + u.uid))).val() === true; } catch { /* not admin */ }
    renderAdmin(); renderList();
  });
}

/* ---------- search by ID or player name ---------- */
const fold = s => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const hay = p => fold([p.id, p.white, p.black, p.date, p.result, p.category, p.description].join(' '));
function runSearch() {
  const box = $('#qRes'), q = fold($('#qSearch').value).trim();
  if (!q) { box.classList.add('hidden'); box.innerHTML = ''; return; }
  const toks = q.split(/\s+/).map(t => t.replace(/^#/, '')).filter(Boolean);
  const hits = puzzles.filter(p => { const h = hay(p); return toks.every(t => h.includes(t)); })
    .sort((a, b) => (toks.includes(String(b.id)) - toks.includes(String(a.id))) || a.id - b.id);
  box.innerHTML = hits.length
    ? hits.slice(0, 50).map(p => `<div class="qi" data-id="${esc(p.id)}"><b>#${esc(p.id)} · ${esc(p.category || '')}</b><br><small>${esc(p.white)} vs ${esc(p.black)} · ${esc(p.date || '')} · ${esc(p.result || '')}</small></div>`).join('')
    + (hits.length > 50 ? `<div class="qnone">Showing 50 of ${hits.length} – refine your search.</div>` : '')
    : '<div class="qnone">No puzzle found.</div>';
  box.classList.remove('hidden');
}
$('#qSearch').oninput = runSearch;
$('#qSearch').onkeydown = e => { if (e.key === 'Enter') runSearch(); };
$('#qGo').onclick = runSearch;
$('#qClear').onclick = () => { $('#qSearch').value = ''; runSearch(); };
$('#qRes').onclick = e => {
  const c = e.target.closest('.qi'); if (!c) return;
  const p = puzzles.find(x => x.id === +c.dataset.id); if (p) { catK = 0; open(p, true); $('#qRes').classList.add('hidden'); }
};

/* ---------- chess.com board + piece themes ---------- */
/* page theme = dark shade of the selected board's dark-square colour */
function hslOf(hex) {
  const n = parseInt(hex.slice(1), 16), r = (n >> 16 & 255) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255,
    mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn; let h = 0;
  if (d) { h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h = (h * 60 + 360) % 360; }
  const l = (mx + mn) / 2; return [h, d ? d / (1 - Math.abs(2 * l - 1)) * 100 : 0];
}
function applyTheme(hex) {
  const [h, s] = hslOf(hex), set = (k, v) => document.documentElement.style.setProperty(k, v), c = (sat, l) => `hsl(${h.toFixed(0)},${sat.toFixed(0)}%,${l}%)`;
  const sat = Math.min(s, 45), as = Math.max(35, Math.min(s, 65));
  set('--bg', c(sat * .8, 7)); set('--card', c(sat * .55, 11)); set('--glow', c(sat, 17)); set('--hl', c(sat * .8, 16));
  set('--g', c(as, 56)); set('--g1', c(as, 66)); set('--g2', c(as, 46));
}
function applyBoard() {
  const b = BOARDS.find(x => x.k === cfg.board) || BOARDS[0], el = $('#board'), root = document.documentElement.style;
  const colors = (l, d) => { root.setProperty('--l', l); root.setProperty('--d', d); el.classList.remove('img'); el.style.backgroundImage = ''; };
  if (b.img) {
    colors('#eeeed2', '#769656');                                          // plain board shows instantly while the picture loads
    const url = `${CC}/boards/${b.img}/150.png`, im = new Image();
    im.onload = () => { if (cfg.board === b.k) { el.style.backgroundImage = `url(${url})`; el.classList.add('img'); } };
    im.onerror = () => { if (cfg.board === b.k) colors('#eeeed2', '#769656'); };
    im.src = url;
  } else colors(b.l, b.d);
  applyTheme(b.a || b.d);
  $('#curBoard').textContent = b.n;
}
function renderSettings() {
  $('#boardOpts').innerHTML = BOARDS.map(b => `<button type="button" class="opt ${b.k === cfg.board ? 'on' : ''}" data-b="${b.k}" title="${b.n}">${b.img ? `<img src="${CC}/boards/_previews_/square/${b.img}.png" alt="${b.n}">` : `<i style="background:conic-gradient(${b.l} 25%,${b.d} 0 50%,${b.l} 0 75%,${b.d} 0)"></i>`}</button>`).join('');
  $('#pieceOpts').innerHTML = PIECES.map(p => `<button type="button" class="opt ${p.k === cfg.pieces ? 'on' : ''}" data-p="${p.k}" title="${p.n}"><img src="${PIECE_PREVIEW(p)}" alt="${p.n}"></button>`).join('');
  $('#pieceOpts').classList.add('pcs');
  $('#curPieces').textContent = (PIECES.find(p => p.k === cfg.pieces) || PIECES[0]).n;
  $('#botOpts').innerHTML = BOTS.map(b => `<button type="button" class="opt ${b.k === cfg.bot ? 'on' : ''}" data-v="${b.k}" title="${b.n}">${b.img ? `<img src="${b.img}" alt="${b.n}">` : '<b>Off</b>'}</button>`).join('');
  $('#curBot').textContent = (BOTS.find(b => b.k === cfg.bot) || BOTS[0]).n;

  $('#sndTog').classList.toggle('on', cfg.sound);
  $('#sndTog').setAttribute('aria-pressed', cfg.sound);
  $('#sndIco').className = 'sndico ' + (cfg.sound ? 'on' : 'off');
  $('#sndIco').innerHTML = cfg.sound
    ? '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M3 9v6h4l5 4V5L7 9H3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
    : '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M3 9v6h4l5 4V5L7 9H3z"/><path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
}
$('#btnSet').onclick = () => { renderSettings(); $('#setDlg').showModal(); };
$('#setClose').onclick = () => $('#setDlg').close();
$('#setDlg').onclick = e => {
  if (e.target.closest('#sndTog')) { cfg.sound = !cfg.sound; localStorage.cp4uSound = cfg.sound ? '1' : '0'; if (!cfg.sound && voiceAudio) voiceAudio.pause(); renderSettings(); return; }
  const b = e.target.closest('[data-b]'), p = e.target.closest('[data-p]'), vb = e.target.closest('[data-v]');
  if (vb) { cfg.bot = vb.dataset.v; localStorage.cp4uBot = cfg.bot; renderSettings(); }
  if (b) { cfg.board = b.dataset.b; localStorage.cp4uBoard = cfg.board; applyBoard(); renderSettings(); analysis.refresh(); }
  if (p) { cfg.pieces = p.dataset.p; localStorage.cp4uPieces = cfg.pieces; preloadPieces(); renderSettings(); if (game) draw(); analysis.refresh(); }
};

/* ---------- fit: on desktop the whole puzzle card (board + buttons) fits in one screen, no scrolling ---------- */
function fitBoard() {
  const root = document.documentElement.style, card = $('#solver'), wrap = $('.bwrap');
  if (window.innerWidth <= 860) return root.removeProperty('--bs');          // phones/tablets: normal page scroll
  const cs = getComputedStyle(card), ms = getComputedStyle($('main'));
  const inner = card.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  const other = card.offsetHeight - wrap.offsetHeight;                        // everything in the card except the board
  const room = window.innerHeight - $('header').offsetHeight - parseFloat(ms.paddingTop) - parseFloat(ms.paddingBottom) - other - 2;
  root.setProperty('--bs', Math.max(260, Math.min(inner, Math.floor(room))) + 'px');
}
window.addEventListener('resize', fitBoard); window.addEventListener('orientationchange', () => setTimeout(fitBoard, 200));
window.addEventListener('load', fitBoard); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitBoard);

/* ---------- turn pill (king of the chosen piece set) + share ---------- */
const SITE = 'https://only-beats.github.io/ChessPuzzle4U/';

$('#bShare').onclick = async () => {
  if (!cur) return;
  const text = `ChessPuzzle4U | Sharpen your Chess skills.\n${SITE}#${cur.id}`;
  if (navigator.share) { try { await navigator.share({ text }); return; } catch (e) { if (e.name === 'AbortError') return; } }
  try { await navigator.clipboard.writeText(text); }
  catch { const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch { } ta.remove(); }
  const b = $('#bShare'); b.title = 'Copied!'; setTimeout(() => b.title = '', 1500);
};

/* ---------- Analysis.js (admin board editor) ---------- */
const analysis = initAnalysis({
  PIECE, LICHESS, parseTree, validate, savePuzzles, nextId,
  has: id => puzzles.some(p => p.id === id),
  importFile, makeLichessFile, seed: () => savePuzzles(SEED), download: downloadAll,
  current: () => cur,
  status: () => ({ text: $('#amsg').textContent, cls: $('#amsg').className })
});

/* ---------- start ---------- */
game = new Chess(); user = 'w'; flip = false; draw();                      // empty-puzzle start position so the board is never blank
preloadPieces(); stats(); applyBoard(); renderList();
{ const p = puzzles.find(x => x.id === wantId) || puzzles.find(x => !prog.s.includes(x.id)) || puzzles[0]; if (p) open(p); }
fitBoard(); loadFilePuzzles(); const fbReady = initFirebase();
initBattle({ $, ready: fbReady, getFB: () => ({ db, F, auth }), getPuzzles: () => puzzles, catOf, open, setBT: b => { BT = b; } });
document.body.classList.remove('sk-on');                                   // skeleton off: the real page is ready
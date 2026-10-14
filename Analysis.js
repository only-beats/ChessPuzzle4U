/* =====================================================================
   Analysis.js  –  admin-only board editor + analysis board
   1) Edit position : place / move / erase pieces, side to move, castling -> FEN
   2) Analyse moves : play the solution on the board (extra moves = variations)
   3) Output        : FEN, PGN (with variations) and ready-to-upload puzzle code
   Used from app.js:  const analysis = initAnalysis({...});
   ===================================================================== */
const FILES = 'abcdefgh';
const START = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const CSS = `
#analysis{grid-column:1/-1}
#analysis h3{margin:0 0 12px;display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
#analysis h3 span{font-size:12px;font-weight:500}
.an-grid{display:grid;grid-template-columns:minmax(0,560px) minmax(300px,1fr);gap:18px;align-items:start}
.an-left,.an-right{display:flex;flex-direction:column;gap:10px;min-width:0}
.an-tabs{display:flex;gap:6px}.an-tabs button{flex:1}.an-tabs button.on{background:linear-gradient(180deg,var(--g1),var(--g2));color:#10150a}
.an-pal{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
.an-pal button{padding:3px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;border:2px solid transparent;background:var(--bg);font-size:12px}
.an-pal button.on{border-color:var(--g);background:var(--hl)}
.an-pal img{width:100%;height:100%;object-fit:contain;pointer-events:none}
.abwrap{position:relative;width:100%;aspect-ratio:1/1}
.an-nav{display:flex;gap:6px}.an-nav button{flex:1;padding:9px 4px}
.an-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.an-row button{flex:1 1 auto}
.an-row label{display:flex;align-items:center;gap:5px;font-size:13px;color:var(--m);white-space:nowrap}
#analysis input[type=checkbox]{width:auto;margin:0;padding:0}
#analysis select{background:var(--bg);color:var(--t);border:1px solid var(--line);border-radius:10px;padding:9px;font:inherit}
#analysis .an-right input,#analysis .an-right textarea{margin:0}
.an-l{font-size:12px;color:var(--m);margin-bottom:-6px}
#analysis input.bad{border-color:#ff7b72}
.an-moves{min-height:64px;max-height:170px;overflow:auto;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:10px;line-height:2;font-size:14px}
.am{cursor:pointer;padding:1px 5px;border-radius:6px}.am:hover{background:rgba(255,255,255,.14)}.am.on{background:var(--g);color:#10150a;font-weight:700}
.an-var{color:var(--m)}.an-num{color:var(--m);margin-left:4px}
.an-meta{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}
.an-meta label{font-size:12px;color:var(--m);display:flex;flex-direction:column;gap:3px;min-width:0}
#analysis .msg{margin:2px 0;min-height:20px}
@media(max-width:860px){.an-grid{grid-template-columns:minmax(0,1fr)}.an-meta{grid-template-columns:repeat(2,minmax(0,1fr))}}
#analysis{scroll-margin-top:66px}
.abwrap{align-self:center}
.an-pal button{aspect-ratio:auto;height:42px}
.an-arrows{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:6}
.an-lines{display:grid;gap:6px;max-height:260px;overflow:auto;margin-top:8px}
.an-line{display:flex;gap:10px;align-items:flex-start;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:8px 10px;font-size:13px;line-height:1.8}
.an-ev{flex:none;min-width:60px;text-align:center;padding:3px 6px;border-radius:6px;font-weight:700;background:#fff;color:#111}
.an-ev.neg{background:#111;color:#fff;border:1px solid #555}
.el{cursor:pointer;padding:0 3px;border-radius:4px}.el:hover{background:rgba(255,255,255,.18)}
`;

export function initAnalysis(api) {
    const root = document.getElementById('analysis');
    const noop = { onAdmin() { }, refresh() { }, loadPuzzle() { } };
    if (!root) return noop;
    if (!document.getElementById('an-css')) { const st = document.createElement('style'); st.id = 'an-css'; st.textContent = CSS; document.head.appendChild(st); }

    root.innerHTML = `
  <h3>Analysis board <span class="mut">set up a position, play the solution, then copy FEN / PGN / puzzle code</span></h3>
  <div class="an-grid">
    <div class="an-left">
      <div class="an-tabs"><button type="button" data-act="edit" id="anTabEdit">Edit position</button><button type="button" data-act="play" id="anTabPlay">Analyse moves</button></div>
      <div id="anPal" class="an-pal"></div>
      <div class="abwrap"><div id="anBoard" class="board"></div><svg id="anArrows" class="an-arrows" viewBox="0 0 100 100" preserveAspectRatio="none"></svg><div id="anPromo" class="promo hidden"><div class="pbox"></div></div></div>
      <div id="anNav" class="an-nav hidden">
        <button type="button" data-act="first" title="Start">&#9198;</button><button type="button" data-act="prev" title="Back">&#9664;</button>
        <button type="button" data-act="next" title="Forward">&#9654;</button><button type="button" data-act="last" title="End">&#9197;</button>
        <button type="button" data-act="flip">Flip</button>
      </div>
    </div>
    <div class="an-right">
      <div id="anEditCtl" class="an-row">
        <select id="anTurn"><option value="w">White to move</option><option value="b">Black to move</option></select>
        <label><input type="checkbox" id="anK" checked>White O-O</label><label><input type="checkbox" id="anQ" checked>White O-O-O</label>
        <label><input type="checkbox" id="ank" checked>Black O-O</label><label><input type="checkbox" id="anq" checked>Black O-O-O</label>
        <button type="button" data-act="startpos">Start position</button><button type="button" data-act="clear">Clear board</button>
        <button type="button" data-act="flip">Flip</button><button type="button" data-act="loadcur">Load current puzzle</button>
      </div>
      <div class="an-l">Start FEN (you can type or paste a FEN here)</div>
      <input id="anFen" spellcheck="false" autocomplete="off">
      <div class="an-l">FEN of the position on the board now</div>
      <input id="anCur" readonly>
      <div id="anMovesBox">
        <div class="an-l">Moves (click a move to jump to it; a different move at the same spot becomes a variation)</div> 
        <div class="an-l" style="margin-top:8px">
        <div id="anMoves" class="an-moves"></div>
        <div class="an-row" style="margin-top:8px"><button type="button" data-act="del">Delete this move</button><button type="button" data-act="main">Make main line</button></div>
        <div class="an-row" style="margin-top:10px">
          <label><input type="checkbox" id="anEngOn" checked>Engine</label>
          <label><input type="checkbox" id="anArrowOn" checked>Arrows</label>
          <label>Lines <select id="anPV"><option>1</option><option>2</option><option>3</option><option selected>4</option><option>5</option></select></label>
          <label>Depth <select id="anDepth"><option>12</option><option selected>16</option><option>20</option><option>24</option></select></label>
          <span id="anEngInfo" class="mut"></span>
        </div>
        <div id="anLines" class="an-lines"></div>
      </div>
       <div class="an-l" style="margin-top:8px">
      <div class="an-l">PGN (with FEN header and variations)</div>
       <div class="an-l" style="margin-top:8px">
      <textarea id="anPgn" rows="6" readonly spellcheck="false"></textarea>
      <div class="an-meta">
        <label>ID<input id="anId" type="number" min="1"></label>
        <label>Year<input id="anYear" placeholder="?"></label>
        <label>White<input id="anW" placeholder="Unknown"></label>
        <label>Black<input id="anB" placeholder="Unknown"></label>
        <label>Result<select id="anRes"><option>1-0</option><option>0-1</option></select></label>
      </div>
      <div class="an-l">Puzzle code (same format as puzzles-seed.js)</div>
       <div class="an-l" style="margin-top:8px">
      <textarea id="anCode" rows="4" readonly spellcheck="false"></textarea>
      <div class="an-row">
        <button type="button" data-act="copyfen">Copy FEN</button><button type="button" data-act="copypgn">Copy PGN</button>
        <button type="button" data-act="copycode">Copy puzzle code</button><button type="button" data-act="send">Send to upload box</button>
        <button type="button" class="pri" data-act="save">Save to Firebase</button>
      </div>
      <div id="anMsg" class="msg"></div>
    </div>
  </div>`;

    const $ = s => root.querySelector(s);
    const ab = $('#anBoard'), mainBoard = document.getElementById('board');

    /* ---------------- state ---------------- */
    let mode = 'edit';                       // 'edit' | 'play'
    let grid = {};                           // edit position: square -> 'wp','bk',...
    let turn = 'w', castle = { K: true, Q: true, k: true, q: true }, half = 0, full = 1;
    let tool = 'move', flip = false, selSq = null, targets = [];
    let startFen = START, game = null, rootN = null, curN = null, lastMv = null, nid = 1, promoMove = null, shown = false;
    let sf = null, sfReady = false, running = false, want = false, ignoring = false, engFen = '', sfInfo = {}, lineData = [], sfTimer = null, drawT = null;

    /* ---------------- FEN helpers ---------------- */
    function setFromFen(fen) {
        const parts = String(fen).trim().split(/\s+/), rows = (parts[0] || '').split('/');
        if (rows.length !== 8) return false;
        const g = {};
        for (let r = 0; r < 8; r++) {
            let f = 0;
            for (const ch of rows[r]) {
                if (/[1-8]/.test(ch)) f += +ch;
                else if (/[pnbrqkPNBRQK]/.test(ch)) { if (f > 7) return false; g[FILES[f] + (8 - r)] = (ch === ch.toUpperCase() ? 'w' : 'b') + ch.toLowerCase(); f++; }
                else return false;
            }
            if (f !== 8) return false;
        }
        grid = g; turn = parts[1] === 'b' ? 'b' : 'w';
        const c = parts[2] || '-'; castle = { K: c.includes('K'), Q: c.includes('Q'), k: c.includes('k'), q: c.includes('q') };
        half = parseInt(parts[4]) || 0; full = Math.max(1, parseInt(parts[5]) || 1);
        return true;
    }
    function gridFen() {
        const rows = [];
        for (let r = 8; r >= 1; r--) {
            let s = '', e = 0;
            for (let f = 0; f < 8; f++) { const p = grid[FILES[f] + r]; if (!p) e++; else { if (e) { s += e; e = 0; } s += p[0] === 'w' ? p[1].toUpperCase() : p[1]; } }
            if (e) s += e; rows.push(s);
        }
        const rights = (castle.K && grid.e1 === 'wk' && grid.h1 === 'wr' ? 'K' : '') + (castle.Q && grid.e1 === 'wk' && grid.a1 === 'wr' ? 'Q' : '')
            + (castle.k && grid.e8 === 'bk' && grid.h8 === 'br' ? 'k' : '') + (castle.q && grid.e8 === 'bk' && grid.a8 === 'br' ? 'q' : '');
        return `${rows.join('/')} ${turn} ${rights || '-'} - ${half} ${full}`;
    }
    const syncControls = () => {
        $('#anTurn').value = turn; $('#anK').checked = castle.K; $('#anQ').checked = castle.Q; $('#ank').checked = castle.k; $('#anq').checked = castle.q;
    };
    const posFromGame = () => { const m = {}; game.board().forEach((row, i) => row.forEach((p, j) => { if (p) m[FILES[j] + (8 - i)] = p.color + p.type; })); return m; };

    /* ---------------- move tree ---------------- */
    // text of the continuation after `parent`; wrap(node, san) lets us make plain text or clickable html
    function cont(parent, color, num, force, wrap) {
        const ks = parent.kids; if (!ks.length) return '';
        const nc = color === 'w' ? 'b' : 'w', nn = color === 'b' ? num + 1 : num;
        const mv = (n, c, k, f) => (c === 'w' ? `${k}. ` : f ? `${k}... ` : '') + wrap(n, n.san);
        let s = mv(ks[0], color, num, force), vars = '';
        for (const v of ks.slice(1)) { const rest = cont(v, nc, nn, false, wrap); vars += ' (' + mv(v, color, num, true) + (rest ? ' ' + rest : '') + ')'; }
        s += vars;
        const rest = cont(ks[0], nc, nn, vars !== '', wrap);
        return s + (rest ? ' ' + rest : '');
    }
    const startInfo = () => { const t = startFen.split(/\s+/); return { color: t[1] === 'b' ? 'b' : 'w', num: Math.max(1, parseInt(t[5]) || 1) }; };
    const moveText = () => { const { color, num } = startInfo(); return cont(rootN, color, num, color === 'b', (n, s) => s); };
    const mainSans = () => { const out = []; for (let n = rootN.kids[0]; n; n = n.kids[0]) out.push(n.san); return out; };
    const anyVariation = n => n.kids.length > 1 || n.kids.some(anyVariation);
    const nodeById = id => { let f = null; (function w(n) { if (n.id === id) f = n; else n.kids.forEach(w); })(rootN); return f; };

    function goTo(node) {
        curN = node; const path = []; for (let n = node; n && n.parent; n = n.parent) path.unshift(n);
        game = new Chess(startFen); lastMv = null; for (const n of path) lastMv = game.move(n.san, { sloppy: true });
        selSq = null; targets = []; render(); updateOut(true); onPos();
    }

    /* ---------------- rendering ---------------- */
    function syncBg() { ab.style.backgroundImage = mainBoard ? mainBoard.style.backgroundImage : ''; ab.classList.toggle('img', !!mainBoard && mainBoard.classList.contains('img')); }
    function renderPalette() {
        const row = (c) => ['k', 'q', 'r', 'b', 'n', 'p'].map(t => `<button type="button" data-tool="${c + t}" class="${tool === c + t ? 'on' : ''}" title="${c === 'w' ? 'White' : 'Black'} piece"><img src="${api.PIECE(c, t)}" alt="${c + t}" onerror="this.onerror=null;this.src='${api.LICHESS(c, t)}'"></button>`).join('');
        $('#anPal').innerHTML = row('w') + `<button type="button" data-tool="move" class="${tool === 'move' ? 'on' : ''}">Move</button>` + row('b') + `<button type="button" data-tool="erase" class="${tool === 'erase' ? 'on' : ''}">Erase</button>`;
    }
    function render() {
        syncBg();
        const pos = mode === 'edit' ? grid : posFromGame();
        let h = '';
        for (let r = 0; r < 8; r++) for (let f = 0; f < 8; f++) {
            const file = flip ? 7 - f : f, rank = flip ? r : 7 - r, name = FILES[file], sq = name + (rank + 1), pc = pos[sq];
            const last = mode === 'play' && lastMv && (lastMv.from === sq || lastMv.to === sq);
            const cls = ['sq', (file + rank) % 2 ? 'l' : 'd', selSq === sq && 'sel', last && 'last', targets.includes(sq) && 'tgt'].filter(Boolean).join(' ');
            const coord = (f === 0 ? `<span class="co rk">${rank + 1}</span>` : '') + (r === 7 ? `<span class="co fl">${name}</span>` : '');
            const piece = pc ? `<img class="pc" src="${api.PIECE(pc[0], pc[1])}" alt="${pc}" draggable="false" onerror="this.onerror=null;this.src='${api.LICHESS(pc[0], pc[1])}'">` : '';
            h += `<div class="${cls}" data-sq="${sq}">${coord}${piece}</div>`;
        }
        ab.innerHTML = h;
        $('#anTabEdit').classList.toggle('on', mode === 'edit'); $('#anTabPlay').classList.toggle('on', mode === 'play');
        $('#anPal').classList.toggle('hidden', mode !== 'edit'); $('#anEditCtl').classList.toggle('hidden', mode !== 'edit');
        $('#anNav').classList.toggle('hidden', mode !== 'play'); $('#anMovesBox').classList.toggle('hidden', mode !== 'play');
        $('#anFen').readOnly = mode === 'play';
        fitAn();
    }
    const say = (t, c = '') => { const m = $('#anMsg'); m.textContent = t; m.className = 'msg ' + c; };

    function buildPuzzle() {
        if (mode !== 'play' || !rootN || !rootN.kids.length) throw Error('Click "Analyse moves" and play the solution moves on the board.');
        const res = $('#anRes').value, idv = +$('#anId').value;
        const p = { id: idv || api.nextId(), date: $('#anYear').value.trim(), white: $('#anW').value.trim() || 'Unknown', black: $('#anB').value.trim() || 'Unknown', result: res, fen: startFen };
        if (anyVariation(rootN)) p.pgn = moveText() + ' ' + res; else p.solution = mainSans();
        return api.validate(p);
    }
    function codeOf(o) {
        const q = s => JSON.stringify(String(s)), sol = `solution: [${o.solution.map(q).join(', ')}]`;
        return `{ id: ${o.id}, date: ${q(o.date)}, white: ${q(o.white)}, black: ${q(o.black)}, result: ${q(o.result)}, fen: ${q(o.fen)}, ${o.pgn ? `pgn: ${q(o.pgn)}, ` : ''}${sol}, description: ${q(o.description)}, category: ${q(o.category)} },`;
    }
    function fullPgn() {
        const w = $('#anW').value.trim() || 'Unknown', b = $('#anB').value.trim() || 'Unknown', res = $('#anRes').value;
        return `[Event "ChessPuzzle4U"]\n[White "${w}"]\n[Black "${b}"]\n[Result "${res}"]\n[SetUp "1"]\n[FEN "${startFen}"]\n\n${rootN && rootN.kids.length ? moveText() + ' ' : ''}${res}`;
    }
    function updateOut(keepFenBox) {
        const fen = mode === 'edit' ? gridFen() : startFen;
        if (!keepFenBox && document.activeElement !== $('#anFen')) $('#anFen').value = fen;
        $('#anCur').value = mode === 'play' && game ? game.fen() : gridFen();
        $('#anPgn').value = mode === 'play' ? fullPgn() : '';
        const mv = $('#anMoves');
        if (mode === 'play' && rootN) {
            const { color, num } = startInfo();
            const html = cont(rootN, color, num, color === 'b', (n, s) => `<span class="am ${n === curN ? 'on' : ''}" data-id="${n.id}">${esc(s)}</span>`);
            mv.innerHTML = html ? html.replace(/\(/g, '<span class="an-var">(</span>').replace(/\)/g, '<span class="an-var">)</span>') : '<span class="mut">No moves yet – play the first solution move on the board.</span>';
        }
        $('#anId').placeholder = 'auto ' + api.nextId();
        try { $('#anCode').value = codeOf(buildPuzzle()); } catch (e) { $('#anCode').value = ''; $('#anCode').placeholder = e.message; }
    }

    /* ---------------- actions ---------------- */
    function startPlay() {
        const fen = gridFen(), g = new Chess();
        if (!g.load(fen)) { const v = g.validate_fen ? g.validate_fen(fen) : {}; say('Invalid position: ' + (v.error || 'check that each side has one king.'), 'err'); return false; }
        if (!rootN || fen !== startFen) { rootN = { id: 0, kids: [], parent: null }; nid = 1; startFen = fen; curN = rootN; }
        mode = 'play'; flip = turn === 'b' ? flip : flip; say('Play the solution moves on the board. A different move at the same spot becomes a variation.', 'ok');
        goTo(curN || rootN); root.scrollIntoView({ behavior: 'smooth', block: 'start' }); return true;
    }
    function backToEdit() { engineStop(); mode = 'edit'; selSq = null; targets = []; promoMove = null; $('#anPromo').classList.add('hidden'); render(); updateOut(); say(''); root.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    function playMove(from, to, promo) {
        const m = game.move({ from, to, promotion: promo || 'q' }); if (!m) return false;
        let kid = curN.kids.find(k => k.san === m.san);
        if (!kid) { kid = { id: nid++, san: m.san, kids: [], parent: curN }; curN.kids.push(kid); }
        curN = kid; lastMv = m; selSq = null; targets = []; render(); updateOut(true); onPos(); return true;
    }
    function copy(text, label) {
        const done = () => say(label + ' copied.', 'ok');
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
        function fallback() { const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch { say('Copy failed – select the text and copy it yourself.', 'err'); } ta.remove(); }
    }

    /* ---------------- engine (Stockfish.js in a Web Worker) ---------------- */
    const SF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/stockfish.js/10.0.2/stockfish.js';
    const engOn = () => $('#anEngOn').checked, pvN = () => +$('#anPV').value, depthN = () => +$('#anDepth').value;
    const engSay = t => { $('#anEngInfo').textContent = t; };

    function engineEnsure() {
        if (sf || !engOn()) return;
        try { sf = new Worker(URL.createObjectURL(new Blob([`importScripts('${SF_URL}');`], { type: 'application/javascript' }))); }
        catch (e) { sf = null; return engSay('Engine could not start: ' + e.message); }
        engSay('Loading engine…');
        sf.onmessage = ev => onEngine(String(ev.data));
        sf.onerror = () => { engSay('Engine failed to load (internet / ad-blocker?).'); sf = null; sfReady = false; running = false; };
        sf.postMessage('uci');
    }
    function onEngine(line) {
        if (line === 'uciok') { sf.postMessage('isready'); return; }
        if (line === 'readyok') { sfReady = true; request(); return; }
        if (line.startsWith('bestmove')) { running = false; ignoring = false; if (want) startSearch(); else drawSoon(); return; }
        if (ignoring || !line.startsWith('info') || /lowerbound|upperbound/.test(line)) return;
        const m = line.match(/depth (\d+).*?multipv (\d+).*?score (cp|mate) (-?\d+).*? pv (.+)$/); if (!m) return;
        sfInfo[+m[2]] = { depth: +m[1], kind: m[3], val: +m[4], pv: m[5].trim().split(/\s+/) };
        drawSoon();
    }
    function startSearch() {
        want = false; sfInfo = {}; lineData = [];
        if (!game || mode !== 'play' || !engOn()) { drawSoon(); return; }
        if (game.game_over()) { engSay('Game over – no engine moves.'); drawSoon(); return; }
        engFen = game.fen(); running = true; ignoring = false;
        sf.postMessage('setoption name MultiPV value ' + pvN()); sf.postMessage('position fen ' + engFen); sf.postMessage('go depth ' + depthN());
        drawSoon();
    }
    function request() {                         // analyse the position that is on the board now
        if (!engOn() || mode !== 'play') return;
        engineEnsure(); if (!sf || !sfReady) return;
        clearTimeout(sfTimer);
        sfTimer = setTimeout(() => { if (running) { want = true; ignoring = true; sf.postMessage('stop'); } else startSearch(); }, 200);
    }
    function engineStop() { clearTimeout(sfTimer); want = false; if (sf && running) { ignoring = true; sf.postMessage('stop'); } sfInfo = {}; lineData = []; engFen = ''; engSay(''); drawLines(); }
    function onPos() { sfInfo = {}; lineData = []; drawLines(); request(); }     // the board position changed
    const drawSoon = () => { if (!drawT) drawT = setTimeout(() => { drawT = null; drawLines(); }, 120); };

    function pvToSan(fen, pv, max) {
        const g = new Chess(fen), out = [];
        for (const u of pv.slice(0, max)) { const m = g.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }); if (!m) break; out.push(m.san); }
        return out;
    }
    function arrow(a, b, color, op, w) {
        const c = s => { const f = FILES.indexOf(s[0]), r = +s[1] - 1, col = flip ? 7 - f : f, row = flip ? r : 7 - r; return [(col + .5) * 12.5, (row + .5) * 12.5]; };
        const [x1, y1] = c(a), [x2, y2] = c(b), dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len, hl = 3.8, hw = 2.7;
        const sx = x1 + ux * 2, sy = y1 + uy * 2, ex = x2 - ux * (hl + .8), ey = y2 - uy * (hl + .8);
        const tx = x2 - ux * 1, ty = y2 - uy * 1, bx = x2 - ux * (hl + 1), by = y2 - uy * (hl + 1), px = -uy, py = ux;
        return `<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" stroke="${color}" stroke-width="${w}" stroke-linecap="round" opacity="${op}"/>`
            + `<polygon points="${tx},${ty} ${bx + px * hw},${by + py * hw} ${bx - px * hw},${by - py * hw}" fill="${color}" opacity="${op}"/>`;
    }
    function drawLines() {
        const box = $('#anLines'), svg = $('#anArrows');
        if (!engOn() || mode !== 'play' || !game) { box.innerHTML = ''; svg.innerHTML = ''; if (!engOn()) engSay(''); return; }
        const keys = Object.keys(sfInfo).map(Number).sort((a, b) => a - b);
        if (!keys.length || !engFen) { box.innerHTML = sf ? '<div class="mut">Engine is thinking…</div>' : ''; svg.innerHTML = ''; return; }
        const parts = engFen.split(' '), whiteToMove = parts[1] === 'w', mul = whiteToMove ? 1 : -1, num0 = parseInt(parts[5]) || 1;
        lineData = []; let html = '';
        keys.forEach((k, i) => {
            const r = sfInfo[k], sans = pvToSan(engFen, r.pv, 14); if (!sans.length) return;
            lineData[i] = { uci: r.pv.slice(0, sans.length), sans };
            const wv = (r.kind === 'mate' ? (r.val > 0 ? 1e4 : -1e4) : r.val) * mul;
            const ev = r.kind === 'mate' ? (r.val * mul < 0 ? '-' : '') + '#' + Math.abs(r.val) : (wv > 0 ? '+' : '') + (wv / 100).toFixed(2);
            let n = num0, c = parts[1], mv = '';
            sans.forEach((san, j) => { mv += (c === 'w' ? `<span class="mut">${n}.</span> ` : j === 0 ? `<span class="mut">${n}...</span> ` : '') + `<span class="el" data-l="${i}" data-k="${j}">${esc(san)}</span> `; if (c === 'b') n++; c = c === 'w' ? 'b' : 'w'; });
            html += `<div class="an-line"><span class="an-ev ${wv < 0 ? 'neg' : ''}">${ev}</span><div>${mv}</div></div>`;
        });
        box.innerHTML = html;
        svg.innerHTML = $('#anArrowOn').checked ? lineData.slice(0, 3).map((L, i) => L && L.uci[0] ? arrow(L.uci[0].slice(0, 2), L.uci[0].slice(2, 4), i === 0 ? '#4da3ff' : '#f0a030', i === 0 ? .9 : .55, i === 0 ? 1.7 : 1.2) : '').reverse().join('') : '';
        engSay('depth ' + sfInfo[keys[0]].depth + (running ? ' – thinking…' : ' – done'));
    }
    function playLine(l, k) {                    // click a move of an engine line: play the line up to that move
        const L = lineData[l]; if (!L || mode !== 'play') return;
        for (let i = 0; i <= k; i++) {
            const u = L.uci[i], m = game.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }); if (!m) break;
            let kid = curN.kids.find(x => x.san === m.san);
            if (!kid) { kid = { id: nid++, san: m.san, kids: [], parent: curN }; curN.kids.push(kid); }
            curN = kid; lastMv = m;
        }
        selSq = null; targets = []; render(); updateOut(true); onPos();
    }
    function fitAn() {                            // make the whole board fit on the screen
        const wrap = $('.abwrap'), col = $('.an-left');
        if (window.innerWidth <= 860 || root.classList.contains('hidden')) { wrap.style.width = ''; return; }
        const hdr = (document.querySelector('header') || {}).offsetHeight || 0, rs = getComputedStyle(root), h3 = $('h3');
        const pad = parseFloat(rs.paddingTop) + parseFloat(rs.paddingBottom), head = h3.offsetHeight + parseFloat(getComputedStyle(h3).marginBottom);
        const room = window.innerHeight - hdr - pad - head - (col.offsetHeight - wrap.offsetHeight) - 10;
        wrap.style.width = Math.max(300, Math.min(col.clientWidth, Math.floor(room))) + 'px';
    }
    window.addEventListener('resize', fitAn);

    /* ---------------- events ---------------- */
    ab.onclick = e => {
        const el = e.target.closest('.sq'); if (!el) return;
        const sq = el.dataset.sq;
        if (mode === 'edit') {
            if (tool === 'erase') delete grid[sq];
            else if (tool === 'move') {
                if (selSq && selSq !== sq) { grid[sq] = grid[selSq]; delete grid[selSq]; selSq = null; }
                else selSq = grid[sq] && selSq !== sq ? sq : null;
            } else {
                if (tool[1] === 'p' && (sq[1] === '1' || sq[1] === '8')) return say('Pawns cannot stand on the first or last rank.', 'err');
                grid[sq] = tool;
            }
            render(); updateOut(); return;
        }
        // analysis: click a piece of the side to move, then its destination
        const pc = game.get(sq);
        if (selSq && selSq !== sq) {
            const isPromo = game.moves({ square: selSq, verbose: true }).some(m => m.to === sq && m.flags.includes('p'));
            if (isPromo) {
                promoMove = { from: selSq, to: sq };
                const c = game.turn();
                $('#anPromo .pbox').innerHTML = ['q', 'r', 'b', 'n'].map(t => `<button type="button" data-t="${t}"><img src="${api.PIECE(c, t)}" alt="${t}" onerror="this.onerror=null;this.src='${api.LICHESS(c, t)}'"></button>`).join('');
                $('#anPromo').classList.remove('hidden'); return;
            }
            if (playMove(selSq, sq)) return;
        }
        selSq = pc && pc.color === game.turn() ? sq : null;
        targets = selSq ? game.moves({ square: sq, verbose: true }).map(m => m.to) : [];
        render();
    };
    $('#anPromo').onclick = e => {
        const b = e.target.closest('button[data-t]'), pm = promoMove; promoMove = null; $('#anPromo').classList.add('hidden');
        if (b && pm) playMove(pm.from, pm.to, b.dataset.t); else { selSq = null; targets = []; render(); }
    };
    $('#anFen').oninput = e => {
        if (mode !== 'edit') return;
        const ok = setFromFen(e.target.value); e.target.classList.toggle('bad', !ok);
        if (ok) { syncControls(); selSq = null; render(); updateOut(true); }
    };
    const ctl = () => { turn = $('#anTurn').value; castle = { K: $('#anK').checked, Q: $('#anQ').checked, k: $('#ank').checked, q: $('#anq').checked }; updateOut(); };
    ['#anTurn', '#anK', '#anQ', '#ank', '#anq'].forEach(s => { $(s).onchange = ctl; });
    ['#anId', '#anYear', '#anW', '#anB', '#anRes'].forEach(s => { $(s).oninput = () => updateOut(true); });
    ['#anEngOn', '#anArrowOn', '#anPV', '#anDepth'].forEach(s => { $(s).onchange = () => { if (!engOn()) engineStop(); else if (s === '#anArrowOn') drawLines(); else onPos(); }; });

    root.addEventListener('click', e => {
        const t = e.target.closest('[data-tool]');
        if (t) { tool = t.dataset.tool; selSq = null; renderPalette(); render(); return; }
        const el = e.target.closest('.el'); if (el) { playLine(+el.dataset.l, +el.dataset.k); return; }
        const am = e.target.closest('.am'); if (am && rootN) { const n = nodeById(+am.dataset.id); if (n) goTo(n); return; }
        const a = e.target.closest('[data-act]'); if (!a) return;
        switch (a.dataset.act) {
            case 'edit': backToEdit(); break;
            case 'play': startPlay(); break;
            case 'flip': flip = !flip; render(); drawLines(); break;
            case 'startpos': setFromFen(START); syncControls(); selSq = null; render(); updateOut(); break;
            case 'clear': grid = {}; selSq = null; render(); updateOut(); break;
            case 'loadcur': { const p = api.current(); if (p) loadPuzzle(p); else say('No puzzle is open.', 'err'); break; }
            case 'first': if (rootN) goTo(rootN); break;
            case 'prev': if (curN && curN.parent) goTo(curN.parent); break;
            case 'next': if (curN && curN.kids[0]) goTo(curN.kids[0]); break;
            case 'last': { let n = curN; while (n && n.kids[0]) n = n.kids[0]; if (n) goTo(n); break; }
            case 'del': if (curN && curN.parent) { const p = curN.parent; p.kids = p.kids.filter(k => k !== curN); goTo(p); } break;
            case 'main': if (curN && curN.parent) { const p = curN.parent, i = p.kids.indexOf(curN); if (i > 0) { p.kids.splice(i, 1); p.kids.unshift(curN); updateOut(true); } } break;
            case 'copyfen': copy(mode === 'play' && game ? game.fen() : gridFen(), 'FEN'); break;
            case 'copypgn': if (mode === 'play') copy(fullPgn(), 'PGN'); else say('Switch to "Analyse moves" first.', 'err'); break;
            case 'copycode': try { copy(codeOf(buildPuzzle()), 'Puzzle code'); } catch (er) { say(er.message, 'err'); } break;
            case 'send': try { api.setText(codeOf(buildPuzzle())); say('Sent to the upload box above – press "Validate & save to Firebase" there, or use Save here.', 'ok'); } catch (er) { say(er.message, 'err'); } break;
            case 'save': {
                let o; try { o = buildPuzzle(); } catch (er) { return say(er.message, 'err'); }
                const replace = api.has(o.id);
                if (replace && !confirm('Puzzle #' + o.id + ' already exists. Replace it?')) return;
                say('Saving…');
                Promise.resolve(api.savePuzzles([o])).then(() => { const s = api.status(); say(s.text || 'Done.', /err/.test(s.cls) ? 'err' : 'ok'); });
                break;
            }
        }
    });

    /* load an existing puzzle (solution or pgn with variations) into the analysis board */
    function loadPuzzle(p) {
        if (!p || !p.fen) return;
        if (!setFromFen(p.fen)) return say('Could not read the FEN of puzzle #' + p.id, 'err');
        const g = new Chess();
        if (!g.load(p.fen)) return say('Puzzle #' + p.id + ' has an invalid FEN.', 'err');
        startFen = p.fen; rootN = { id: 0, kids: [], parent: null }; nid = 1; curN = rootN;
        const add = (dst, san) => { const m = g.move(san, { sloppy: true }); if (!m) return null; const n = { id: nid++, san: m.san, kids: [], parent: dst }; dst.kids.push(n); return n; };
        if (p.pgn) {
            (function build(src, dst) { for (const k of src.kids) { const n = add(dst, k.san); if (n) { build(k, n); g.undo(); } } })(api.parseTree(p.pgn), rootN);
        } else { let d = rootN; for (const s of p.solution || []) { d = add(d, s); if (!d) break; } }
        $('#anId').value = p.id; $('#anYear').value = p.date && p.date !== '?' ? p.date : ''; $('#anW').value = p.white && p.white !== 'Unknown' ? p.white : ''; $('#anB').value = p.black && p.black !== 'Unknown' ? p.black : '';
        $('#anRes').value = p.result === '0-1' ? '0-1' : '1-0';
        mode = 'play'; syncControls(); root.classList.remove('hidden'); renderPalette(); goTo(rootN);
        say('Puzzle #' + p.id + ' loaded – edit the moves, then Save.', 'ok');
        root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* observe the main board so the theme (picture boards) stays in sync */
    if (mainBoard && window.MutationObserver) new MutationObserver(syncBg).observe(mainBoard, { attributes: true, attributeFilter: ['style', 'class'] });

    return {
        onAdmin(flag) {
            root.classList.toggle('hidden', !flag);
            if (flag && !shown) { shown = true; setFromFen(START); syncControls(); renderPalette(); render(); updateOut(); }
        },
        refresh() { if (!shown) return; renderPalette(); render(); },
        loadPuzzle
    };
}

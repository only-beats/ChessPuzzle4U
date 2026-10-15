// battle.js – Puzzle Battles: 2 players, same puzzles, most solved wins, 3 lives each.
// Data lives in Firebase Realtime DB at  battles/<room>  and is deleted when both players leave.

// read the invite link NOW (app.js rewrites the hash as soon as it opens a puzzle)
const HASH_ROOM = (location.hash.match(/battle=([a-z0-9]+)/i) || [])[1] || '';

export function initBattle(api) {
    const { $, ready, getFB, getPuzzles, catOf, open } = api;
    const LS = 'cp4uRoom', NICK = 'cp4uNick', LIVES = 3;
    const CATN = ['All', 'Mate in 1', 'Mate in 2', 'Mate in 3', 'Mate in 4', 'Mate in 5'];
    const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const fmt = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };

    let db, F, auth, uid, offset = 0, room = '', joinId = HASH_ROOM, data = null, unsub = null, tick = null, disc = null;
    let my = null, started = false, over = false, lock = true, err = '';
    const sel = { time: 180, cat: 0, lo: null, hi: null };   // lo/hi null = whole rating range
    const now = () => Date.now() + offset;
    const R = p => F.ref(db, 'battles/' + room + (p ? '/' + p : ''));

    /* ---------- UI shell (built here, so index.html needs no change) ---------- */
    document.body.insertAdjacentHTML('beforeend', '<dialog id="btDlg"></dialog>');
    $('#solver').insertAdjacentHTML('afterbegin',
        '<div id="btHud" class="bt-hud hidden"><div id="btMe" class="bt-pl"></div><div id="btTime" class="bt-time">0:00</div>' +
        '<div id="btOp" class="bt-pl r"></div><button id="btLeave" class="ghost" type="button">Leave</button></div>');
    $('.bwrap').insertAdjacentHTML('beforeend', '<div id="btOv" class="bt-ov hidden"></div>');
    $('#solver .btns').insertAdjacentHTML('beforeend', '<button id="btnBattle" type="button">Play Online Puzzle Battle</button>');

    const dlg = $('#btDlg');
    const ov = h => { const o = $('#btOv'); o.innerHTML = h; o.classList.toggle('hidden', !h); };
    const hearts = n => '♥'.repeat(Math.max(0, n)) + '<span class="x">' + '♥'.repeat(LIVES - Math.max(0, n)) + '</span>';
    const others = () => Object.entries((data && data.players) || {}).filter(([k]) => k !== uid).map(([, p]) => p);

    /* ---------- connection ---------- */
    async function connect() {
        if (db) return true;
        try {
            await ready; const fb = getFB();
            if (!fb.db) throw new Error('Firebase is not configured.');
            ({ db, F, auth } = fb);
            await auth.authStateReady();
            if (!auth.currentUser) await F.signInAnonymously(auth);
            uid = auth.currentUser.uid;
            F.onValue(F.ref(db, '.info/serverTimeOffset'), s => { offset = s.val() || 0; });
            F.onValue(F.ref(db, '.info/connected'), s => { if (s.val() && room) presence(); });
            return true;
        } catch (e) { err = 'Could not connect: ' + (e.code || e.message) + ' (is Anonymous sign-in enabled in Firebase?)'; db = null; return false; }
    }
    function presence() {                                   // online dot; survives refresh because progress is stored in the DB
        const o = R('players/' + uid + '/online');
        disc = F.onDisconnect(o); disc.set(false); F.set(o, true);
    }

    /* ---------- dialog ---------- */
    function ratings() { const r = getPuzzles().map(p => p.rating).filter(x => typeof x === 'number'); return r.length ? [Math.min(...r), Math.max(...r)] : [400, 3000]; }
    function view() {
        let h = '<h3>Puzzle Battle <button class="ghost" data-a="close" type="button">✕</button></h3>';
        if (err) h += `<div class="msg err">${esc(err)}</div>`;
        if (room && data) {                                                       // ----- lobby
            const link = location.origin + location.pathname + '#battle=' + room;
            const ps = Object.values(data.players || {});
            h += `<div class="setlbl">Send this link to your opponent</div><div class="srow"><input id="btLink" readonly value="${esc(link)}"><button class="pri" data-a="copy" type="button">Copy</button></div>`;
            h += `<div class="setlbl">${data.time / 60} min · ${CATN[data.cat]} · rating ${data.lo}–${data.hi}</div><div class="bt-list">` +
                ps.map(p => `<div class="bt-row"><i class="dot ${p.online ? 'on' : ''}"></i><b>${esc(p.name)}</b><span>${p.ready ? '✔ ready' : ' not ready'}</span></div>`).join('') + '</div>';
            h += ps.length < 2 ? '<div class="mut">Waiting for the second player…</div>' : '';
            h += `<div class="btns"><button class="pri" data-a="ready" type="button" ${ps.length < 2 || (data.players[uid] || {}).ready ? 'disabled' : ''}>I'm ready</button><button class="danger" data-a="leave" type="button">Leave room</button></div>`;
        } else if (joinId) {                                                      // ----- invited by link
            h += `<div class="setlbl">You were invited to a puzzle battle</div><input id="btNick" maxlength="16" placeholder="Your nickname" value="${esc(localStorage[NICK] || '')}">` +
                '<div class="btns"><button class="pri" data-a="join" type="button">Join battle</button></div>';
        } else {                                                                  // ----- create
            const [a, b] = ratings(), lo = sel.lo == null ? a : Math.max(a, Math.min(sel.lo, b)), hi = sel.hi == null ? b : Math.min(b, Math.max(sel.hi, a));
            const chips = (arr, key) => '<div class="opts">' + arr.map(v => `<button type="button" class="bt-chip ${sel[key] === v[0] ? 'on' : ''}" data-k="${key}" data-v="${v[0]}">${v[1]}</button>`).join('') + '</div>';
            h += `<input id="btNick" maxlength="16" placeholder="Your nickname" value="${esc(localStorage[NICK] || '')}">` +
                '<div class="setlbl">Time</div>' + chips([[60, '1 min'], [180, '3 min'], [300, '5 min']], 'time') +
                '<div class="setlbl">Puzzles</div>' + chips(CATN.map((n, i) => [i, n]), 'cat') +
                '<div class="setlbl">Rating : <b id="btRate"></b></div>' +
                `<div class="elo bt-elo"><div class="rs"><div class="rs-track"><div class="rs-fill" id="btFill"></div></div>` +
                `<input type="range" id="btLo" min="${a}" max="${b}" step="1" value="${lo}"><input type="range" id="btHi" min="${a}" max="${b}" step="1" value="${hi}"></div>` +
                `<div class="rs-ends"><span>Lowest <b>${a}</b></span><span>Highest <b>${b}</b></span></div></div>` +
                '<div class="btns"><button class="pri" data-a="create" type="button">Create room</button></div>';
        }
        dlg.innerHTML = h; if (!dlg.open) dlg.showModal(); paint();
    }
    const closeDlg = () => { if (dlg.open) dlg.close(); };

    dlg.addEventListener('click', async e => {
        const chip = e.target.closest('.bt-chip');
        if (chip) { sel[chip.dataset.k] = +chip.dataset.v; chip.parentElement.querySelectorAll('.bt-chip').forEach(c => c.classList.toggle('on', c === chip)); return; }
        const a = e.target.closest('[data-a]')?.dataset.a; if (!a) return;
        err = '';
        if (a === 'close') return closeDlg();
        if (a === 'copy') return share();
        if (a === 'create') return create();
        if (a === 'join') return join(joinId);
        if (a === 'ready') return F.set(R('players/' + uid + '/ready'), true);
        if (a === 'leave') return leave();
    });
    function paint() {                                                          // same look as the main rating slider
        const A = $('#btLo'), B = $('#btHi'); if (!A || !B) return;
        const mn = +A.min, mx = +A.max, span = Math.max(1, mx - mn), a = +A.value, b = +B.value;
        $('#btFill').style.left = (a - mn) / span * 100 + '%'; $('#btFill').style.width = (b - a) / span * 100 + '%';
        $('#btRate').textContent = a <= mn && b >= mx ? 'Any rating' : a + ' – ' + b;
        A.style.zIndex = a > mn + span / 2 ? 4 : 3;
    }
    dlg.addEventListener('input', e => {
        if (e.target.id !== 'btLo' && e.target.id !== 'btHi') return;
        const A = $('#btLo'), B = $('#btHi');
        if (+A.value > +B.value) { if (e.target.id === 'btLo') A.value = B.value; else B.value = A.value; }
        const [mn, mx] = ratings();
        sel.lo = +A.value <= mn ? null : +A.value; sel.hi = +B.value >= mx ? null : +B.value; paint();
    });
    async function share() {
        const link = $('#btLink').value;
        if (navigator.share) { try { await navigator.share({ text: 'Puzzle battle on ChessPuzzle4U – join me!\n' + link }); return; } catch (e) { if (e.name === 'AbortError') return; } }
        try { await navigator.clipboard.writeText(link); } catch { $('#btLink').select(); document.execCommand('copy'); }
        const b = dlg.querySelector('[data-a=copy]'); b.textContent = 'Copied!'; setTimeout(() => { b.textContent = 'Copy'; }, 1500);
    }

    /* ---------- create / join / leave ---------- */
    const nick = () => { const n = ($('#btNick').value || '').trim().slice(0, 16); if (n) localStorage[NICK] = n; return n; };
    function pickPuzzles(lo, hi) {
        const all = getPuzzles().filter(p => p.lichess && (!sel.cat || catOf(p) === sel.cat) && (p.rating || 0) >= lo && (p.rating || 0) <= hi);
        for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[all[i], all[j]] = [all[j], all[i]]; }
        return all.slice(0, 120).map(p => p.id);
    }
    const newPlayer = name => ({ name, ready: false, idx: 0, solved: 0, lives: LIVES, out: false, online: true });
    async function create() {
        const name = nick(); if (!name) { err = 'Enter a nickname first.'; return view(); }
        if (!await connect()) return view();
        const [ra, rb] = ratings(), lo = sel.lo ?? ra, hi = sel.hi ?? rb, q = pickPuzzles(lo, hi); if (q.length < 5) { err = 'Not enough puzzles for that selection – widen the rating range.'; return view(); }
        const id = Math.random().toString(36).slice(2, 8);
        try {
            await F.set(F.ref(db, 'battles/' + id), { host: uid, createdAt: F.serverTimestamp(), status: 'lobby', time: sel.time, cat: sel.cat, lo, hi, queue: q.join(','), players: { [uid]: newPlayer(name) } });
        } catch (e) { err = 'Could not create the room: ' + e.code; return view(); }
        enter(id);
    }
    async function join(id) {
        const name = nick(); if (!name) { err = 'Enter a nickname first.'; return view(); }
        if (!await connect()) return view();
        try {
            const s = await F.get(F.ref(db, 'battles/' + id)); if (!s.exists()) throw { code: 'This room no longer exists.' };
            const d = s.val(), pl = d.players || {};
            if (!pl[uid]) {
                if (Object.keys(pl).length >= 2) throw { code: 'This room is full (2 players only).' };
                if (d.status !== 'lobby') throw { code: 'This battle has already started.' };
                await F.set(F.ref(db, 'battles/' + id + '/players/' + uid), newPlayer(name));
            }
        } catch (e) { err = e.code || e.message; joinId = ''; return view(); }
        joinId = ''; enter(id);
    }
    function enter(id) {
        room = id; localStorage[LS] = id; started = over = false; lock = true; err = '';
        if (unsub) unsub();
        unsub = F.onValue(R(), s => { data = s.val(); if (!data) return reset('The room was closed.'); onData(); });
        presence();
    }
    async function leave() {
        const r = room; if (!r) return;
        if (disc) disc.cancel().catch(() => { });
        reset();
        try {
            await F.runTransaction(F.ref(db, 'battles/' + r), d => {
                if (!d) return d;
                if (d.players) delete d.players[uid];
                return d.players && Object.keys(d.players).length ? d : null;           // last one out → whole room is deleted
            });
        } catch (e) { console.warn(e); }
    }
    function reset(note) {
        if (unsub) unsub(); unsub = null; clearInterval(tick); tick = null;
        room = ''; data = null; my = null; started = over = false; lock = true; localStorage.removeItem(LS);
        document.body.classList.remove('bt'); api.setBT(null); $('#btHud').classList.add('hidden'); ov(''); window.dispatchEvent(new Event('resize'));
        if (note) { err = note; view(); } else closeDlg();
    }

    /* ---------- live data ---------- */
    function onData() {
        if (data.status === 'lobby') {
            view();
            const ps = Object.values(data.players || {});
            if (ps.length === 2 && ps.every(p => p.ready))
                F.runTransaction(R(), d => { if (d && d.status === 'lobby') { d.status = 'playing'; d.startAt = now() + 3000; d.endAt = d.startAt + d.time * 1000; } return d; });
            return;
        }
        if (!tick) play();
        hud(); if (over) result(); else if (my && my.out) outScreen();
    }
    function hud() {
        const m = my || data.players[uid] || {}, o = others()[0];
        $('#btMe').innerHTML = `<b class="nm">${esc(m.name)}</b><span class="sc">✔ ${m.solved || 0} &nbsp;<span class="hrt">${hearts(m.lives)}</span></span>`;
        $('#btOp').innerHTML = o ? `<b class="nm">${esc(o.name)}${o.online ? '' : ' <i class="mut">(offline)</i>'}</b><span class="sc">✔ ${o.solved || 0} &nbsp;<span class="hrt">${hearts(o.lives)}</span></span>` : '<i class="mut">opponent left</i>';
    }
    function play() {
        closeDlg(); document.body.classList.add('bt'); api.setBT(BT); $('#btHud').classList.remove('hidden'); window.dispatchEvent(new Event('resize'));
        my = { ...data.players[uid] };
        tick = setInterval(loop, 250); loop();
    }
    function loop() {
        const t = now();
        if (t < data.startAt) { ov(`<div class="bt-big">${Math.ceil((data.startAt - t) / 1000)}</div><div>Get ready…</div>`); lock = true; return; }
        if (!started) { started = true; ov(''); my.out ? outScreen() : next(); }
        const left = data.endAt - t; $('#btTime').textContent = fmt(left);
        const everyoneOut = Object.entries(data.players).every(([k, p]) => k === uid ? my.out : p.out);
        if (left <= 0 || data.status === 'over' || everyoneOut || !others().length) end();
    }
    function end() {
        if (over) return; over = true; lock = true; clearInterval(tick);
        if (data.status !== 'over') F.update(R(), { status: 'over' });
        result();
    }
    function push(o) { Object.assign(my, o); F.update(R('players/' + uid), o); hud(); }

    /* ---------- puzzles ---------- */
    function next() {
        const id = +data.queue.split(',')[my.idx];
        if (!id) return push({ out: true }), outScreen();                           // ran out of puzzles
        const p = getPuzzles().find(x => x.id === id);
        if (!p) { if (getPuzzles().length > 50) { push({ idx: my.idx + 1 }); return next(); } return void setTimeout(next, 400); }
        lock = false; open(p);
    }
    const BT = {                                                                   // called from app.js
        locked: () => lock || !started || over || !!(my && my.out),
        solved() { lock = true; push({ solved: my.solved + 1, idx: my.idx + 1 }); setTimeout(next, 600); },
        wrong() {
            lock = true; const lives = my.lives - 1; push({ lives, idx: my.idx + 1, out: lives <= 0 });
            if (lives <= 0) setTimeout(outScreen, 700); else setTimeout(next, 900);
            return true;
        }
    };
    function outScreen() { if (!over) ov('<div class="bt-big">Game over</div><div>You used all 3 lives. Your opponent is still playing…</div>'); }
    function result() {
        const m = data.players[uid], o = others()[0];
        let t;
        if (!o) t = 'Opponent left – you win!';
        else if (m.solved !== o.solved) t = m.solved > o.solved ? 'You win!' : 'You lose';
        else t = m.lives === o.lives ? 'Draw' : m.lives > o.lives ? 'You win (fewer mistakes)' : 'You lose (more mistakes)';
        ov(`<div class="bt-big">${t}</div><div>${esc(m.name)}: ${m.solved} solved · ${LIVES - m.lives} wrong</div>` +
            (o ? `<div>${esc(o.name)}: ${o.solved} solved · ${LIVES - o.lives} wrong</div>` : '') + '<button class="pri" id="btOvLeave" type="button">Leave room</button>');
        const b = $('#btOvLeave'); if (b) b.onclick = leave;
    }

    /* ---------- wiring ---------- */
    $('#btnBattle').onclick = async () => { err = ''; if (room && data && data.status !== 'lobby') return; view(); };
    $('#btLeave').onclick = () => { if (confirm('Leave the battle room?')) leave(); };
    dlg.addEventListener('cancel', e => { if (room && data && data.status === 'lobby') return; });   // Esc just closes

    (async function boot() {                                                       // resume after refresh / reopen
        const saved = localStorage[LS];
        if (HASH_ROOM && saved !== HASH_ROOM) return view();                         // invite link → ask for a nickname
        if (!saved) return;
        if (!await connect()) return;
        const s = await F.get(F.ref(db, 'battles/' + saved)).catch(() => null);
        if (s && s.exists() && (s.val().players || {})[uid]) enter(saved); else localStorage.removeItem(LS);
    })();
}
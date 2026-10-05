const T = {
  en: {
    title: 'Smart Escape', sub: 'Interactive evacuation route simulator', importB: 'Import building.json', sampleB: 'Load sample',
    mStart: 'Select start', mHaz: 'Toggle hazards', resetB: 'Reset hazards', startL: 'Start location', pick: '— choose a start —',
    note: 'Educational simulation only. Not a certified real-world evacuation planning tool.',
    helpStart: 'Click a room or junction on the map (or use the list) to choose where you start. Switch to "Toggle hazards" to change conditions.',
    helpHaz: 'Click a room or junction to block/unblock it, an exit to close/reopen it, or a corridor to block/unblock it.',
    lRoom: 'Room', lJunc: 'Junction', lExit: 'Exit', lBN: 'Blocked room/junction', lCE: 'Closed exit', lBE: 'Blocked corridor', lRoute: 'Route', lStart: 'Start',
    selStart: 'Select a start room or junction.', noRoute: 'No route available', startBlocked: 'Starting location blocked',
    found: 'Route found', seq: 'Node sequence', exitL: 'Exit', cost: 'Total cost', loaded: 'Loaded “{0}”: {1} locations, {2} corridors.',
    notStart: 'Only an unblocked room or junction can be a start.', tag: { room: 'R', junction: 'J', exit: 'E' }, mapLabel: 'Building map',
    e_json: 'File is not valid JSON.', e_obj: 'The file must contain a JSON object.', e_building: '"building" must be a non-empty name.',
    e_nodes: '"nodes" must be an array.', e_edges: '"edges" must be an array.', e_ncount: 'Between 2 and 60 nodes are required.',
    e_ecount: 'Between 1 and 150 edges are required.', e_nid: 'Every node needs a non-empty string id.', e_dupn: 'Duplicate node id: {0}.',
    e_label: 'Node {0} needs a non-empty label.', e_type: 'Node {0} type must be room, junction or exit.', e_xy: 'Node {0} needs numeric x and y.',
    e_noroom: 'At least one room or junction is required.', e_noexit: 'At least one exit is required.', e_eid: 'Every edge needs a non-empty string id.',
    e_dupe: 'Duplicate edge id: {0}.', e_ref: 'Edge {0} refers to a node that does not exist.', e_loop: 'Edge {0} connects a node to itself.',
    e_cost: 'Edge {0} cost must be a positive integer.', e_pair: 'Edge {0} repeats an existing node pair.', e_state: '"initial_state" is missing.',
    e_statearr: 'initial_state.{0} must be an array of IDs.', e_bn: 'blocked_nodes: "{0}" must be an existing room or junction.',
    e_be: 'blocked_edges: "{0}" is not an existing edge.', e_ce: 'closed_exits: "{0}" must be an existing exit.', errPrefix: 'Import failed: '
  },
  bn: {
    title: 'স্মার্ট এসকেপ', sub: 'ইন্টারঅ্যাক্টিভ ইভ্যাকুয়েশন রুট সিমুলেটর', importB: 'building.json ইমপোর্ট করুন', sampleB: 'নমুনা লোড করুন',
    mStart: 'শুরুর স্থান বাছুন', mHaz: 'ঝুঁকি পরিবর্তন', resetB: 'ঝুঁকি রিসেট', startL: 'শুরুর স্থান', pick: '— শুরুর স্থান বাছুন —',
    note: 'এটি শুধুমাত্র শিক্ষামূলক সিমুলেশন; বাস্তব উদ্ধার পরিকল্পনার জন্য প্রত্যয়িত টুল নয়।',
    helpStart: 'কোথা থেকে শুরু করবেন তা বাছতে মানচিত্রে কক্ষ বা জংশনে ক্লিক করুন (অথবা তালিকা ব্যবহার করুন)। অবস্থা বদলাতে "ঝুঁকি পরিবর্তন" মোডে যান।',
    helpHaz: 'কক্ষ/জংশন ব্লক বা আনব্লক করতে তাতে ক্লিক করুন, প্রস্থান বন্ধ বা চালু করতে প্রস্থানে ক্লিক করুন, আর করিডোর ব্লক/আনব্লক করতে করিডোরে ক্লিক করুন।',
    lRoom: 'কক্ষ', lJunc: 'জংশন', lExit: 'প্রস্থান', lBN: 'অবরুদ্ধ কক্ষ/জংশন', lCE: 'বন্ধ প্রস্থান', lBE: 'অবরুদ্ধ করিডোর', lRoute: 'পথ', lStart: 'শুরু',
    selStart: 'একটি শুরুর কক্ষ বা জংশন বাছুন।', noRoute: 'কোনো পথ পাওয়া যায়নি', startBlocked: 'শুরুর স্থান অবরুদ্ধ',
    found: 'পথ পাওয়া গেছে', seq: 'নোডের ক্রম', exitL: 'প্রস্থান', cost: 'মোট খরচ', loaded: '“{0}” লোড হয়েছে: {1}টি স্থান, {2}টি করিডোর।',
    notStart: 'শুধু অবরুদ্ধ নয় এমন কক্ষ বা জংশন শুরুর স্থান হতে পারে।', tag: { room: 'ক', junction: 'জ', exit: 'প্র' }, mapLabel: 'ভবনের মানচিত্র',
    e_json: 'ফাইলটি বৈধ JSON নয়।', e_obj: 'ফাইলে একটি JSON অবজেক্ট থাকতে হবে।', e_building: '"building" একটি অ-খালি নাম হতে হবে।',
    e_nodes: '"nodes" অবশ্যই অ্যারে হতে হবে।', e_edges: '"edges" অবশ্যই অ্যারে হতে হবে।', e_ncount: '২ থেকে ৬০টি নোড প্রয়োজন।',
    e_ecount: '১ থেকে ১৫০টি এজ প্রয়োজন।', e_nid: 'প্রতিটি নোডের একটি অ-খালি স্ট্রিং id থাকতে হবে।', e_dupn: 'নোড id পুনরাবৃত্ত: {0}।',
    e_label: 'নোড {0}-এর অ-খালি label প্রয়োজন।', e_type: 'নোড {0}-এর type হতে হবে room, junction বা exit।', e_xy: 'নোড {0}-এর সংখ্যাসূচক x ও y প্রয়োজন।',
    e_noroom: 'কমপক্ষে একটি কক্ষ বা জংশন প্রয়োজন।', e_noexit: 'কমপক্ষে একটি প্রস্থান প্রয়োজন।', e_eid: 'প্রতিটি এজের একটি অ-খালি স্ট্রিং id থাকতে হবে।',
    e_dupe: 'এজ id পুনরাবৃত্ত: {0}।', e_ref: 'এজ {0} এমন নোড উল্লেখ করেছে যা নেই।', e_loop: 'এজ {0} একটি নোডকে নিজের সাথেই যুক্ত করেছে।',
    e_cost: 'এজ {0}-এর cost ধনাত্মক পূর্ণসংখ্যা হতে হবে।', e_pair: 'এজ {0} আগের একটি নোড-জোড়া পুনরাবৃত্তি করেছে।', e_state: '"initial_state" নেই।',
    e_statearr: 'initial_state.{0} অবশ্যই ID-র অ্যারে হতে হবে।', e_bn: 'blocked_nodes: "{0}" অবশ্যই বিদ্যমান কক্ষ বা জংশন হতে হবে।',
    e_be: 'blocked_edges: "{0}" বিদ্যমান এজ নয়।', e_ce: 'closed_exits: "{0}" অবশ্যই বিদ্যমান প্রস্থান হতে হবে।', errPrefix: 'ইমপোর্ট ব্যর্থ: '
  }
};

if (typeof document !== 'undefined') (function () {
  const $ = id => document.getElementById(id), NS = 'http://www.w3.org/2000/svg';
  let L = 'en'; try { L = localStorage.getItem('se-lang') || 'en'; } catch (e) {}
  const t = (k, ...a) => { const s = T[L][k] ?? T.en[k] ?? k; return typeof s === 'string' ? s.replace(/\{(\d)\}/g, (_, i) => a[i]) : s; };
  let M = null, S = null, start = '', mode = 'start', errState = null, notice = '';
  const els = { nodes: new Map(), edges: new Map() };
  const mk = (tag, attrs = {}, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent && parent.appendChild(e); return e; };

  function load(data) {
    try { M = validate(data); } catch (e) {
      if (e instanceof VErr) { errState = e; renderErr(); return; } throw e;
    }
    errState = null; S = newState(M); start = ''; notice = t('loaded', M.name, M.N.size, M.Ed.size);
    build(); render();
  }
  function renderErr() {
    const b = $('err'); b.hidden = !errState;
    if (errState) b.textContent = t('errPrefix') + t(errState.k, ...errState.a);
  }

  function build() {
    const svg = $('map'); svg.innerHTML = ''; els.nodes.clear(); els.edges.clear();
    const W = 900, H = 560, P = 70, ns = [...M.N.values()];
    const xs = ns.map(n => n.x), ys = ns.map(n => n.y), x0 = Math.min(...xs), y0 = Math.min(...ys);
    const sx = Math.max(...xs) - x0 || 1, sy = Math.max(...ys) - y0 || 1, k = Math.min((W - 2 * P) / sx, (H - 2 * P) / sy);
    const ox = (W - sx * k) / 2, oy = (H - sy * k) / 2, pos = {};
    ns.forEach(n => pos[n.id] = [ox + (n.x - x0) * k, oy + (n.y - y0) * k]);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const eg = mk('g', {}, svg), ng = mk('g', {}, svg);
    for (const e of M.Ed.values()) {
      const [ax, ay] = pos[e.from], [bx, by] = pos[e.to];
      const g = mk('g', { class: 'edge', 'data-id': e.id }, eg);
      mk('line', { class: 'hit', x1: ax, y1: ay, x2: bx, y2: by }, g);
      const line = mk('line', { class: 'line', x1: ax, y1: ay, x2: bx, y2: by }, g);
      const mx = (ax + bx) / 2, my = (ay + by) / 2, txt = String(e.cost), w = 12 + 9 * txt.length;
      mk('rect', { x: mx - w / 2, y: my - 11, width: w, height: 22 }, g);
      mk('text', { x: mx, y: my }, g).textContent = txt;
      g.addEventListener('click', () => clickEdge(e.id));
      els.edges.set(e.id, { g, line });
    }
    for (const n of ns) {
      const [x, y] = pos[n.id];
      const g = mk('g', { class: 'node ' + n.type, 'data-id': n.id, tabindex: 0, role: 'button' }, ng);
      let shape;
      if (n.type === 'room') shape = mk('rect', { class: 'shape', x: x - 17, y: y - 17, width: 34, height: 34, rx: 6 }, g);
      else if (n.type === 'junction') shape = mk('circle', { class: 'shape', cx: x, cy: y, r: 16 }, g);
      else shape = mk('polygon', { class: 'shape', points: `${x},${y - 21} ${x + 21},${y} ${x},${y + 21} ${x - 21},${y}` }, g);
      const tag = mk('text', { class: 'tag', x, y }, g);
      const glyph = mk('text', { class: 'glyph', x, y }, g);
      mk('text', { class: 'lbl', x, y: y + 38 }, g).textContent = n.label;
      const title = mk('title', {}, g);
      g.addEventListener('click', () => clickNode(n.id));
      g.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); clickNode(n.id); } });
      els.nodes.set(n.id, { g, tag, glyph, title });
    }
    const sel = $('startSel'); sel.innerHTML = '';
    const o0 = document.createElement('option'); o0.value = ''; sel.appendChild(o0);
    ns.filter(n => n.type !== 'exit').forEach(n => { const o = document.createElement('option'); o.value = n.id; o.textContent = `${n.id} – ${n.label}`; sel.appendChild(o); });
  }

  function clickNode(id) {
    if (!M) return; const n = M.N.get(id); notice = '';
    if (mode === 'start') {
      if (n.type === 'exit' || S.bn.has(id)) notice = t('notStart'); else start = id;
    } else if (n.type === 'exit') toggle(S.ce, id); else toggle(S.bn, id);
    render();
  }
  function clickEdge(id) { if (mode === 'haz') { notice = ''; toggle(S.be, id); render(); } }
  const toggle = (set, id) => set.has(id) ? set.delete(id) : set.add(id);

  function render() {
    if (!M) return;
    document.body.className = 'm-' + mode;
    $('mStart').setAttribute('aria-pressed', mode === 'start'); $('mHaz').setAttribute('aria-pressed', mode === 'haz');
    $('bname').textContent = M.name; $('startSel').value = start;
    $('help').textContent = t(mode === 'start' ? 'helpStart' : 'helpHaz');
    const r = solve(M, S, start), onN = new Set(r.path || []), onE = new Set(r.edges || []);
    for (const [id, o] of els.nodes) {
      const n = M.N.get(id), g = o.g;
      g.classList.toggle('blocked', S.bn.has(id)); g.classList.toggle('closed', S.ce.has(id));
      g.classList.toggle('onroute', onN.has(id)); g.classList.toggle('isstart', id === start);
      g.classList.toggle('sel-ok', n.type !== 'exit' && !S.bn.has(id));
      o.tag.textContent = (S.bn.has(id) || S.ce.has(id)) ? '' : t('tag')[n.type];
      o.glyph.textContent = (S.bn.has(id) || S.ce.has(id)) ? '✕' : '';
      const st = S.bn.has(id) ? t('lBN') : S.ce.has(id) ? t('lCE') : t(n.type === 'room' ? 'lRoom' : n.type === 'exit' ? 'lExit' : 'lJunc');
      o.title.textContent = `${id} – ${n.label} (${st})`; g.setAttribute('aria-label', o.title.textContent);
      g.setAttribute('aria-pressed', S.bn.has(id) || S.ce.has(id));
    }
    for (const [id, o] of els.edges) {
      o.g.classList.toggle('blocked', S.be.has(id));
      const was = o.g.classList.contains('route'), now = onE.has(id);
      if (now && !was) { o.g.classList.remove('route'); void o.g.getBoundingClientRect(); }
      o.g.classList.toggle('route', now);
    }
    const box = $('status'); let h = '';
    const note = notice ? `<p>${esc(notice)}</p>` : '';
    if (r.status === 'ok') {
      box.className = 'status ok';
      h = `<strong>${t('found')}</strong><div>${t('seq')}:</div><div class="seq">${r.path.map(p => `<span class="chip">${esc(p)}</span>`).join('')}</div>` +
        `<div>${t('exitL')}: <b>${esc(r.exit)}</b> (${esc(M.N.get(r.exit).label)})</div><div>${t('cost')}: <b>${r.cost}</b></div>`;
    } else if (r.status === 'none') { box.className = 'status'; h = `<strong>${t('selStart')}</strong>`; }
    else { box.className = 'status bad'; h = `<strong>${t(r.status)}</strong>`; }
    box.innerHTML = h + note;
    $('map').setAttribute('aria-label', t('mapLabel'));
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function applyLang() {
    document.documentElement.lang = L; document.title = t('title');
    document.querySelectorAll('[data-i]').forEach(e => e.textContent = t(e.dataset.i));
    $('lang').textContent = L === 'en' ? 'বাংলা' : 'English';
    $('lang').setAttribute('aria-label', L === 'en' ? 'Switch to Bangla' : 'Switch to English');
    const first = $('startSel').options[0]; if (first) first.textContent = t('pick');
    $('legend').innerHTML = [['lRoom', 'var(--room)', 'r'], ['lJunc', 'var(--junc)', 'c'], ['lExit', 'var(--exit)', 'd'], ['lBN', '#c62f2f55', 'x'], ['lCE', 'var(--mute)', 'z'], ['lBE', '', 'e'], ['lRoute', 'var(--route)', 'l'], ['lStart', '', 's']]
      .map(([k, c, s]) => {
        const sw = s === 'e' ? '<svg width="26" height="12"><line x1="2" y1="6" x2="24" y2="6" stroke="#c62f2f" stroke-width="4" stroke-dasharray="3 6" stroke-linecap="round"/></svg>'
          : s === 'l' ? '<svg width="26" height="12"><line x1="2" y1="6" x2="24" y2="6" stroke="var(--route)" stroke-width="7"/></svg>'
          : s === 's' ? '<svg width="16" height="16"><circle cx="8" cy="8" r="6" fill="none" stroke="var(--route)" stroke-width="3"/></svg>'
          : `<svg width="16" height="16"><${s === 'r' ? 'rect x="1" y="1" width="14" height="14" rx="3"' : s === 'd' ? 'polygon points="8,0 16,8 8,16 0,8"' : 'circle cx="8" cy="8" r="7"'} fill="${c}" stroke="${s === 'x' || s === 'z' ? '#c62f2f' : 'currentColor'}" stroke-width="2"${s === 'z' ? ' stroke-dasharray="3 2"' : ''}/></svg>`;
        return `<li>${sw}${t(k)}</li>`;
      }).join('');
    if (errState) renderErr();
    if (M) { if (notice && /^(Loaded|“|.*লোড হয়েছে)/.test(notice)) notice = t('loaded', M.name, M.N.size, M.Ed.size); render(); }
  }

  $('lang').onclick = () => { L = L === 'en' ? 'bn' : 'en'; try { localStorage.setItem('se-lang', L); } catch (e) {} applyLang(); };
  $('mStart').onclick = () => { mode = 'start'; notice = ''; render(); };
  $('mHaz').onclick = () => { mode = 'haz'; notice = ''; render(); };
  $('reset').onclick = () => { if (M) { S = newState(M); notice = ''; render(); } };
  $('startSel').onchange = e => { start = e.target.value; notice = ''; render(); };
  $('sample').onclick = () => fetch('building.json').then(r => r.json()).then(load).catch(() => load(SAMPLE));
  $('file').onchange = e => {
    const f = e.target.files[0]; if (!f) return; const fr = new FileReader();
    fr.onload = () => { let d; try { d = JSON.parse(fr.result); } catch (x) { errState = new VErr('e_json'); renderErr(); return; } load(d); };
    fr.readAsText(f); e.target.value = '';
  };
  const SAMPLE = {"building":"Sample Building","nodes":[{"id":"R1","label":"Room 1","type":"room","x":100,"y":100},{"id":"C1","label":"Corridor 1","type":"junction","x":260,"y":100},{"id":"C2","label":"Corridor 2","type":"junction","x":420,"y":100},{"id":"E1","label":"Exit 1","type":"exit","x":580,"y":100},{"id":"R2","label":"Room 2","type":"room","x":100,"y":240},{"id":"C3","label":"Corridor 3","type":"junction","x":260,"y":240},{"id":"C4","label":"Corridor 4","type":"junction","x":420,"y":240},{"id":"E2","label":"Exit 2","type":"exit","x":580,"y":240}],"edges":[{"id":"e1","from":"R1","to":"C1","cost":2},{"id":"e2","from":"C1","to":"C2","cost":3},{"id":"e3","from":"C2","to":"E1","cost":2},{"id":"e4","from":"R2","to":"C3","cost":2},{"id":"e5","from":"C3","to":"C4","cost":3},{"id":"e6","from":"C4","to":"E2","cost":2},{"id":"e7","from":"R1","to":"R2","cost":4},{"id":"e8","from":"C1","to":"C3","cost":4},{"id":"e9","from":"C2","to":"C4","cost":4}],"initial_state":{"blocked_nodes":[],"blocked_edges":[],"closed_exits":[]}};
  window.__se = { click: clickNode, setMode: m => { mode = m; render(); } };
  applyLang(); load(SAMPLE);
})();

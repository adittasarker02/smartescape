/* Smart Escape core: validation + routing (no DOM). */
class VErr extends Error { constructor(k, ...a) { super(k); this.k = k; this.a = a; } }

function validate(d) {
  const E = (k, ...a) => { throw new VErr(k, ...a); };
  if (!d || typeof d !== 'object' || Array.isArray(d)) E('e_obj');
  if (typeof d.building !== 'string' || !d.building.trim()) E('e_building');
  if (!Array.isArray(d.nodes)) E('e_nodes');
  if (!Array.isArray(d.edges)) E('e_edges');
  if (d.nodes.length < 2 || d.nodes.length > 60) E('e_ncount');
  if (d.edges.length < 1 || d.edges.length > 150) E('e_ecount');
  const N = new Map();
  for (const n of d.nodes) {
    if (!n || typeof n !== 'object' || typeof n.id !== 'string' || !n.id) E('e_nid');
    if (N.has(n.id)) E('e_dupn', n.id);
    if (typeof n.label !== 'string' || !n.label.trim()) E('e_label', n.id);
    if (!['room', 'junction', 'exit'].includes(n.type)) E('e_type', n.id);
    if (!Number.isFinite(n.x) || !Number.isFinite(n.y)) E('e_xy', n.id);
    N.set(n.id, { id: n.id, label: n.label, type: n.type, x: n.x, y: n.y });
  }
  if (![...N.values()].some(n => n.type !== 'exit')) E('e_noroom');
  if (![...N.values()].some(n => n.type === 'exit')) E('e_noexit');
  const Ed = new Map(), pairs = new Set(), adj = new Map([...N.keys()].map(k => [k, []]));
  for (const e of d.edges) {
    if (!e || typeof e !== 'object' || typeof e.id !== 'string' || !e.id) E('e_eid');
    if (Ed.has(e.id)) E('e_dupe', e.id);
    if (typeof e.from !== 'string' || typeof e.to !== 'string' || !N.has(e.from) || !N.has(e.to)) E('e_ref', e.id);
    if (e.from === e.to) E('e_loop', e.id);
    if (!Number.isInteger(e.cost) || e.cost <= 0) E('e_cost', e.id);
    const pk = JSON.stringify([e.from, e.to].sort());
    if (pairs.has(pk)) E('e_pair', e.id);
    pairs.add(pk);
    Ed.set(e.id, { id: e.id, from: e.from, to: e.to, cost: e.cost });
    adj.get(e.from).push({ to: e.to, w: e.cost, eid: e.id });
    adj.get(e.to).push({ to: e.from, w: e.cost, eid: e.id });
  }
  const s = d.initial_state;
  if (!s || typeof s !== 'object') E('e_state');
  const arr = k => {
    if (!Array.isArray(s[k]) || s[k].some(x => typeof x !== 'string')) E('e_statearr', k);
    return [...new Set(s[k])];
  };
  const bn = arr('blocked_nodes'), be = arr('blocked_edges'), ce = arr('closed_exits');
  bn.forEach(id => { if (!N.has(id) || N.get(id).type === 'exit') E('e_bn', id); });
  be.forEach(id => { if (!Ed.has(id)) E('e_be', id); });
  ce.forEach(id => { if (!N.has(id) || N.get(id).type !== 'exit') E('e_ce', id); });
  return { name: d.building, N, Ed, adj, init: { bn, be, ce } };
}

const newState = M => ({ bn: new Set(M.init.bn), be: new Set(M.init.be), ce: new Set(M.init.ce) });

function dijkstra(M, S, src) {
  const dist = new Map([[src, 0]]), done = new Set();
  for (;;) {
    let u = null;
    for (const [k, v] of dist) if (!done.has(k) && (u === null || v < dist.get(u))) u = k;
    if (u === null) break;
    done.add(u);
    for (const { to, w, eid } of M.adj.get(u)) {
      if (S.bn.has(to) || S.ce.has(to) || S.be.has(eid)) continue;
      const nd = dist.get(u) + w;
      if (!dist.has(to) || nd < dist.get(to)) dist.set(to, nd);
    }
  }
  return dist;
}

/* Returns {status:'none'|'startBlocked'|'noRoute'|'ok', path, edges, exit, cost} */
function solve(M, S, start) {
  if (!start || !M.N.has(start)) return { status: 'none' };
  if (S.bn.has(start)) return { status: 'startBlocked' };
  const ds = dijkstra(M, S, start);
  let exit = null;
  for (const n of M.N.values()) {
    if (n.type !== 'exit' || S.ce.has(n.id) || !ds.has(n.id)) continue;
    if (exit === null || ds.get(n.id) < ds.get(exit) || (ds.get(n.id) === ds.get(exit) && n.id < exit)) exit = n.id;
  }
  if (exit === null) return { status: 'noRoute' };
  const dt = dijkstra(M, S, exit); // undirected graph: distance to exit
  const path = [start], edges = [];
  let cur = start;
  while (cur !== exit) {
    let pick = null;
    for (const { to, w, eid } of M.adj.get(cur)) {
      if (S.bn.has(to) || S.ce.has(to) && to !== exit || S.be.has(eid) || !dt.has(to)) continue;
      if (w + dt.get(to) !== dt.get(cur)) continue;
      if (pick === null || to < pick.to) pick = { to, eid };
    }
    path.push(pick.to); edges.push(pick.eid); cur = pick.to;
  }
  return { status: 'ok', path, edges, exit, cost: ds.get(exit) };
}

if (typeof module !== 'undefined') module.exports = { validate, newState, solve, VErr };

const assert = require('assert');
const { validate, newState, solve } = require('./core.js');
const raw = () => JSON.parse(require('fs').readFileSync(__dirname + '/building.json'));
const M = validate(raw());
const run = (start, f) => { const S = newState(M); f && f(S); return solve(M, S, start); };
let r = run('R1'); assert.deepEqual(r.path, ['R1','C1','C2','E1']); assert.equal(r.cost, 7);
r = run('R1', S => S.bn.add('C2')); assert.deepEqual(r.path, ['R1','C1','C3','C4','E2']); assert.equal(r.cost, 11);
assert.equal(run('R1', S => { S.ce.add('E1'); S.ce.add('E2'); }).status, 'noRoute');
r = run('R2'); assert.deepEqual(r.path, ['R2','C3','C4','E2']); assert.equal(r.cost, 7);
assert.equal(run('R1', S => S.bn.add('R1')).status, 'startBlocked');
// blocked edge only removes the corridor
r = run('R1', S => S.be.add('e2')); assert.equal(r.cost, 11);
// tie: equal cost -> smallest exit id, then smallest node sequence
const t = { building:'T', nodes:[{id:'S',label:'S',type:'room',x:0,y:0},{id:'B',label:'B',type:'junction',x:1,y:0},{id:'A',label:'A',type:'junction',x:1,y:1},{id:'X2',label:'x',type:'exit',x:2,y:0},{id:'X1',label:'x',type:'exit',x:2,y:1}],
  edges:[{id:'1',from:'S',to:'B',cost:1},{id:'2',from:'S',to:'A',cost:1},{id:'3',from:'B',to:'X1',cost:1},{id:'4',from:'A',to:'X1',cost:1},{id:'5',from:'B',to:'X2',cost:1}],
  initial_state:{blocked_nodes:[],blocked_edges:[],closed_exits:[]} };
const T = validate(t); r = solve(T, newState(T), 'S');
assert.equal(r.exit, 'X1'); assert.deepEqual(r.path, ['S','A','X1']);
// closed exit is not an intermediate node; disconnected is valid
const d = raw(); d.nodes.push({id:'Z',label:'Z',type:'room',x:5,y:5}); const D = validate(d);
assert.equal(solve(D, newState(D), 'Z').status, 'noRoute');
// invalid inputs
const bad = f => { const x = raw(); f(x); assert.throws(() => validate(x)); };
bad(x => x.edges[0].cost = 0); bad(x => x.edges[0].cost = 1.5); bad(x => x.edges[0].to = 'ZZ');
bad(x => x.edges[0].to = 'R1'); bad(x => x.edges[1] = { id:'z', from:'C1', to:'R1', cost:1 });
bad(x => x.nodes[0].type = 'hall'); bad(x => x.initial_state.blocked_nodes = ['E1']);
bad(x => x.initial_state.closed_exits = ['R1']); bad(x => delete x.initial_state); bad(x => x.nodes[1].id = 'R1');
console.log('All tests passed');

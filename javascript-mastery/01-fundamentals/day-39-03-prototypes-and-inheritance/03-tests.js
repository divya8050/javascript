const assert = require('assert');
const { Task } = require('./01-core.js');
const { createWithProto } = require('./02-practical.js');

const t = new Task('Deploy app', 'urgent');
assert.strictEqual(t.completed, false);
t.complete();
assert.strictEqual(t.completed, true);

const proto = { active: true };
const obj = createWithProto(proto);
assert.strictEqual(obj.active, true);

console.log('All tests passed.');

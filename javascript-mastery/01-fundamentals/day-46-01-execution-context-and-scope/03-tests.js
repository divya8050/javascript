const assert = require('assert');
const { greet, increment } = require('./01-core.js');
const { CallStackTracker, calculate } = require('./02-practical.js');

// Simple verification
assert.strictEqual(greet('Sam'), 'Hello, Sam');
assert.strictEqual(increment(), 12);
assert.strictEqual(calculate(2, 3), 5);

const tracker = new CallStackTracker();
tracker.enter('test');
assert.strictEqual(tracker.depth(), 1);
tracker.leave();
assert.strictEqual(tracker.depth(), 0);

console.log('All tests passed.');

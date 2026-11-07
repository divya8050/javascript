const assert = require('assert');
const { createCounter } = require('./01-core.js');
const { memoize } = require('./02-practical.js');

// Test counter
const c = createCounter(10);
assert.strictEqual(c.add(2), 12);
assert.strictEqual(c.sub(5), 7);
assert.strictEqual(c.get(), 7);

// Test memoize
let runs = 0;
const double = memoize(x => {
  runs++;
  return x * 2;
});

assert.strictEqual(double(4), 8);
assert.strictEqual(double(4), 8);
assert.strictEqual(runs, 1);

console.log('All tests passed.');

/**
 * Day 38: Closures - Tests
 * Date: 2026-11-04
 */

const assert = require('assert');

// Import functions from core and practical files
const { createGreeter } = require('./01-core.js');
const { createCounter } = require('./02-practical.js');

// --- Test 01-core.js: Closure for private state --- 
console.log('Running tests for 01-core.js (createGreeter)');

const greetMorning = createGreeter('Good Morning');
const greetEvening = createGreeter('Good Evening');

assert.strictEqual(greetMorning('Alice'), 'Good Morning, Alice!', 'Test Case 1 Failed: Morning greeting for Alice');
assert.strictEqual(greetEvening('Bob'), 'Good Evening, Bob!', 'Test Case 2 Failed: Evening greeting for Bob');

// Verify independence of closures
const anotherMorning = createGreeter('Good Morning');
assert.strictEqual(anotherMorning('Charlie'), 'Good Morning, Charlie!', 'Test Case 3 Failed: Another morning greeter instance');

console.log('All 01-core.js tests passed!');

// --- Test 02-practical.js: Closure for counter --- 
console.log('\nRunning tests for 02-practical.js (createCounter)');

const counterA = createCounter();
const counterB = createCounter();

// Test counterA
assert.strictEqual(counterA.getCount(), 0, 'Test Case 4 Failed: Counter A initial count');
assert.strictEqual(counterA.increment(), 1, 'Test Case 5 Failed: Counter A increment once');
assert.strictEqual(counterA.increment(), 2, 'Test Case 6 Failed: Counter A increment twice');
assert.strictEqual(counterA.getCount(), 2, 'Test Case 7 Failed: Counter A get final count');
assert.strictEqual(counterA.decrement(), 1, 'Test Case 8 Failed: Counter A decrement once');
assert.strictEqual(counterA.getCount(), 1, 'Test Case 9 Failed: Counter A get count after decrement');

// Test counterB - ensure it's independent
assert.strictEqual(counterB.getCount(), 0, 'Test Case 10 Failed: Counter B initial count');
assert.strictEqual(counterB.increment(), 1, 'Test Case 11 Failed: Counter B increment once');
assert.strictEqual(counterB.getCount(), 1, 'Test Case 12 Failed: Counter B get final count');

// Further check independence
assert.strictEqual(counterA.getCount(), 1, 'Test Case 13 Failed: Counter A should remain independent');

console.log('All 02-practical.js tests passed!');

console.log('\nAll closure practice tests completed successfully!');
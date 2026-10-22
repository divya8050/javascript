// 03-tests.js
// self-contained tests for 'this' keyword behavior and the IntervalCounter class

const assert = require('assert');

// --- Test 01-core.js concepts ---

console.log('--- Testing core \'this\' concepts ---');

// Test 1: Global 'this'
function testGlobalThis() {
  // In Node.js, 'this' in the global script scope is `globalThis`
  assert.strictEqual(this, globalThis, 'Global this should be globalThis');
}
testGlobalThis();
console.log('  Passed: Global this check');

// Test 2: Function 'this' (non-strict mode default for simple function calls)
function getFunctionThis() {
  return this;
}
assert.strictEqual(getFunctionThis(), globalThis, 'Function this should be globalThis when called directly');
console.log('  Passed: Function this check');

// Test 3: Method 'this'
const testObj = {
  name: 'Test Object',
  getMethodThis() {
    return this;
  }
};
assert.strictEqual(testObj.getMethodThis(), testObj, 'Method this should be the object itself');
console.log('  Passed: Method this check');

// Test 4: Arrow function 'this' (lexical scope)
// The 'this' for testArrowObj.getArrowThis is the 'this' of the scope where testArrowObj is defined,
// which is the global scope in this script.
const outerThisForArrow = this; // globalThis in Node
const testArrowObj = {
  name: 'Arrow Object',
  getArrowThis: () => {
    return this;
  }
};
assert.strictEqual(testArrowObj.getArrowThis(), outerThisForArrow, 'Arrow function this should be lexically bound to outer scope');
assert.strictEqual(testArrowObj.getArrowThis(), globalThis, 'Arrow function this should be globalThis here');
console.log('  Passed: Arrow function this check');

// Test 5: Explicit binding with .call()
function getName() {
  return this.name;
}
const personA = { name: 'Alice' };
assert.strictEqual(getName.call(personA), 'Alice', '.call() should bind this correctly');
console.log('  Passed: Explicit binding (.call()) check');

// --- Test 02-practical.js concepts (IntervalCounter class) ---

console.log('
--- Testing IntervalCounter class ---');

// Define a simplified version of the class for self-contained testing
class IntervalCounterForTest {
  constructor(initialValue = 0) {
    this.count = initialValue;
    this.intervalId = null;
  }

  increment = () => { // Arrow function method
    this.count++;
  }

  start(intervalMs = 1000, name = 'Test Counter') {
    if (this.intervalId) return;
    this.name = name; // Store name for consistent output
    this.intervalId = setInterval(this.increment, intervalMs);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  getCurrentCount() {
    return this.count;
  }
}

// Test 6: Counter initialization and direct increment
const counterTest1 = new IntervalCounterForTest(5);
assert.strictEqual(counterTest1.getCurrentCount(), 5, 'Counter should initialize with correct value');
counterTest1.increment(); // Directly call increment
assert.strictEqual(counterTest1.getCurrentCount(), 6, 'Direct increment should increase count');
console.log('  Passed: Counter initialization and direct increment');

// Test 7: 'this' binding in increment method (crucial for setInterval)
// Because `increment` is an arrow function property, its `this` is bound to the instance.
// Calling it out of context still maintains the correct `this`.
const counterTest2 = new IntervalCounterForTest(10);
const detachedIncrement = counterTest2.increment; // Get a reference to the method
detachedIncrement(); // Call it 'globally'
assert.strictEqual(counterTest2.getCurrentCount(), 11, 'Arrow function method should maintain `this` context when detached');
console.log('  Passed: Arrow function method maintains `this` context');

// Test 8: Starting and stopping (async behavior is hard to test synchronously, check setup/teardown)
const counterTest3 = new IntervalCounterForTest(0);
counterTest3.start(100, 'Async Test');
assert.ok(counterTest3.intervalId !== null, 'Interval ID should be set after starting');
counterTest3.stop();
assert.strictEqual(counterTest3.intervalId, null, 'Interval ID should be cleared after stopping');
// We cannot reliably test incrementing over time synchronously, but we confirm the mechanism is set up.
console.log('  Passed: Counter start and stop mechanism');

console.log('
All tests passed successfully!');
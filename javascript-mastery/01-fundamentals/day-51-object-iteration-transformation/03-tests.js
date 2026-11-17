// Day 51 of JavaScript mastery.
// Date: 2026-11-17.
// Topic: Object Iteration and Transformation

const assert = require('assert');
const mapObjectValues = require('./02-practical');

console.log('Running tests for mapObjectValues utility...');

// Test Case 1: Basic transformation (doubling numbers)
const numbers = { a: 1, b: 2, c: 3 };
const doubledNumbers = mapObjectValues(numbers, (value) => value * 2);
assert.deepStrictEqual(doubledNumbers, { a: 2, b: 4, c: 6 }, 'Test Case 1 Failed: Doubling numbers');
console.log('✅ Test Case 1 Passed: Doubling numbers');

// Test Case 2: Transforming specific keys (adding currency symbol)
const prices = { item1: 100, item2: 250, item3: 50 };
const formattedPrices = mapObjectValues(prices, (value, key) => {
  if (typeof value === 'number') {
    return `$${value.toFixed(2)}`;
  }
  return value;
});
assert.deepStrictEqual(formattedPrices, { item1: '$100.00', item2: '$250.00', item3: '$50.00' }, 'Test Case 2 Failed: Formatting prices');
console.log('✅ Test Case 2 Passed: Formatting prices');

// Test Case 3: No transformation (identity function)
const originalObj = { x: 10, y: 'hello', z: true };
const copiedObj = mapObjectValues(originalObj, (value) => value);
assert.deepStrictEqual(copiedObj, originalObj, 'Test Case 3 Failed: Identity function should return deep copy');
// Note: mapObjectValues creates a new object, so deepStrictEqual is appropriate.
assert.notStrictEqual(copiedObj, originalObj, 'Test Case 3 Failed: Should return a new object reference');
console.log('✅ Test Case 3 Passed: Identity function and new object reference');


// Test Case 4: Empty object
const emptyObj = {};
const transformedEmpty = mapObjectValues(emptyObj, (value) => value + 'x');
assert.deepStrictEqual(transformedEmpty, {}, 'Test Case 4 Failed: Empty object transformation');
console.log('✅ Test Case 4 Passed: Empty object');

// Test Case 5: Complex object with mixed types and nested objects (mutation of nested object)
const userData = {
  id: 123,
  name: 'John Doe',
  email: 'john.doe@example.com',
  settings: { theme: 'dark', notifications: true },
  isActive: true
};
const maskedUserData = mapObjectValues(userData, (value, key) => {
  if (key === 'email') return 'masked@example.com';
  // When dealing with nested objects, the transformer needs to handle them explicitly
  if (key === 'settings' && typeof value === 'object' && value !== null) {
    return { ...value, notifications: false }; // Create a new settings object
  }
  return value;
});
assert.deepStrictEqual(maskedUserData, {
  id: 123,
  name: 'John Doe',
  email: 'masked@example.com',
  settings: { theme: 'dark', notifications: false },
  isActive: true
}, 'Test Case 5 Failed: Masking complex object');
console.log('✅ Test Case 5 Passed: Masking complex object');

// Test Case 6: Error handling for invalid object input
assert.throws(() => mapObjectValues(null, (v) => v), TypeError, 'Test Case 6 Failed: Null input should throw TypeError');
assert.throws(() => mapObjectValues(undefined, (v) => v), TypeError, 'Test Case 6 Failed: Undefined input should throw TypeError');
assert.throws(() => mapObjectValues('string', (v) => v), TypeError, 'Test Case 6 Failed: String input should throw TypeError');
assert.throws(() => mapObjectValues(123, (v) => v), TypeError, 'Test Case 6 Failed: Number input should throw TypeError');
assert.throws(() => mapObjectValues([], (v) => v), TypeError, 'Test Case 6 Failed: Array input should throw TypeError');
console.log('✅ Test Case 6 Passed: Handles invalid object input');


// Test Case 7: Error handling for non-function transformer
const validObj = { a: 1 };
assert.throws(() => mapObjectValues(validObj, null), TypeError, 'Test Case 7 Failed: Null transformer should throw TypeError');
assert.throws(() => mapObjectValues(validObj, 'notAFunction'), TypeError, 'Test Case 7 Failed: String transformer should throw TypeError');
assert.throws(() => mapObjectValues(validObj, 123), TypeError, 'Test Case 7 Failed: Number transformer should throw TypeError');
console.log('✅ Test Case 7 Passed: Handles non-function transformer');


console.log('\nAll tests passed!');

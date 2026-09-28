// Day 1: Simple tests for the user greeting function

const assert = require('assert');
const generateUserGreeting = require('./02-practical');

console.log('Running tests for generateUserGreeting...');

// Test Case 1: Standard valid inputs
let result1 = generateUserGreeting("Alice", 28, "New York");
let expected1 = "Hello, Alice! You are 28 years old and live in New York. Welcome!";
assert.strictEqual(result1, expected1, 'Test Case 1 Failed: Should return correct greeting for valid inputs.');
console.log('Test Case 1 Passed.');

// Test Case 2: Different valid inputs
let result2 = generateUserGreeting("Bob", 35, "London");
let expected2 = "Hello, Bob! You are 35 years old and live in London. Welcome!";
assert.strictEqual(result2, expected2, 'Test Case 2 Failed: Should return correct greeting for different valid inputs.');
console.log('Test Case 2 Passed.');

// Test Case 3: Empty name string
let result3 = generateUserGreeting("", 25, "Paris");
let expected3 = "Hello there! I couldn't get your name.";
assert.strictEqual(result3, expected3, 'Test Case 3 Failed: Should handle empty name string.');
console.log('Test Case 3 Passed.');

// Test Case 4: Invalid age (zero)
let result4 = generateUserGreeting("Charlie", 0, "Berlin");
let expected4 = "Hello, Charlie! Your age seems invalid.";
assert.strictEqual(result4, expected4, 'Test Case 4 Failed: Should handle zero age.');
console.log('Test Case 4 Passed.');

// Test Case 5: Invalid age (negative)
let result5 = generateUserGreeting("David", -5, "Rome");
let expected5 = "Hello, David! Your age seems invalid.";
assert.strictEqual(result5, expected5, 'Test Case 5 Failed: Should handle negative age.');
console.log('Test Case 5 Passed.');

// Test Case 6: Empty city string
let result6 = generateUserGreeting("Eve", 22, "");
let expected6 = "Hello, Eve! Age 22. Your city is unknown.";
assert.strictEqual(result6, expected6, 'Test Case 6 Failed: Should handle empty city string.');
console.log('Test Case 6 Passed.');

// Test Case 7: Null name (type check)
let result7 = generateUserGreeting(null, 30, "Tokyo");
let expected7 = "Hello there! I couldn't get your name.";
assert.strictEqual(result7, expected7, 'Test Case 7 Failed: Should handle null name.');
console.log('Test Case 7 Passed.');

// Test Case 8: Undefined age (type check)
let result8 = generateUserGreeting("Frank", undefined, "Sydney");
let expected8 = "Hello, Frank! Your age seems invalid.";
assert.strictEqual(result8, expected8, 'Test Case 8 Failed: Should handle undefined age.');
console.log('Test Case 8 Passed.');

console.log('\nAll tests passed!');

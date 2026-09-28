const assert = require('assert');
const createUserProfile = require('./02-practical.js');

console.log('Running user profile tests...');

// Test Case 1: Valid input for a typical user
const profile1 = createUserProfile("Alice", 30, "Paris");
assert.strictEqual(typeof profile1, 'string', 'Test 1 Failed: Should return a string');
assert.ok(profile1.includes('Name: Alice'), 'Test 1 Failed: Name mismatch');
assert.ok(profile1.includes('Age: 30 years old'), 'Test 1 Failed: Age mismatch');
assert.ok(profile1.includes('City: Paris'), 'Test 1 Failed: City mismatch');
assert.ok(profile1.includes('Estimated birth year: 1996'), 'Test 1 Failed: Birth year calculation incorrect');
console.log('  Passed: Valid profile for Alice.');

// Test Case 2: Another valid input
const profile2 = createUserProfile("Bob", 22, "Berlin");
assert.ok(profile2.includes('Name: Bob'), 'Test 2 Failed: Name mismatch');
assert.ok(profile2.includes('Age: 22 years old'), 'Test 2 Failed: Age mismatch');
assert.ok(profile2.includes('Estimated birth year: 2004'), 'Test 2 Failed: Birth year calculation incorrect');
console.log('  Passed: Valid profile for Bob.');

// Test Case 3: Invalid age type (string instead of number)
const profile3 = createUserProfile("Charlie", "twenty", "Rome");
assert.strictEqual(profile3, 'Error: Invalid input types.', 'Test 3 Failed: Should handle invalid age type');
console.log('  Passed: Handles invalid age type.');

// Test Case 4: Invalid age value (zero)
const profile4 = createUserProfile("David", 0, "Tokyo");
assert.strictEqual(profile4, 'Error: Age must be positive.', 'Test 4 Failed: Should handle zero age');
console.log('  Passed: Handles zero age.');

// Test Case 5: Invalid age value (negative)
const profile5 = createUserProfile("Eve", -5, "Sydney");
assert.strictEqual(profile5, 'Error: Age must be positive.', 'Test 5 Failed: Should handle negative age');
console.log('  Passed: Handles negative age.');

// Test Case 6: Invalid name type (number instead of string)
const profile6 = createUserProfile(123, 25, "Madrid");
assert.strictEqual(profile6, 'Error: Invalid input types.', 'Test 6 Failed: Should handle invalid name type');
console.log('  Passed: Handles invalid name type.');

// Test Case 7: Invalid city type (number instead of string)
const profile7 = createUserProfile("Frank", 40, 789);
assert.strictEqual(profile7, 'Error: Invalid input types.', 'Test 7 Failed: Should handle invalid city type');
console.log('  Passed: Handles invalid city type.');

console.log('\nAll user profile tests passed successfully!');
// Day 2: Simple tests for user access status utility
// Date: 2026-09-29

const assert = require('assert');
const getUserAccessStatus = require('./02-practical');

console.log('Running tests for getUserAccessStatus...');

// Test Case 1: Adult with premium subscription
assert.strictEqual(getUserAccessStatus(25, true), 'Full Access', 'Test Case 1 Failed: Adult with premium');

// Test Case 2: Adult without premium subscription
assert.strictEqual(getUserAccessStatus(30, false), 'Limited Access', 'Test Case 2 Failed: Adult without premium');

// Test Case 3: Minor with premium subscription
assert.strictEqual(getUserAccessStatus(16, true), 'Parental Supervision Required', 'Test Case 3 Failed: Minor with premium');

// Test Case 4: Older minor (13-17) without premium
assert.strictEqual(getUserAccessStatus(15, false), 'Guest Access', 'Test Case 4 Failed: Older minor without premium');
assert.strictEqual(getUserAccessStatus(13, false), 'Guest Access', 'Test Case 5 Failed: 13-year-old without premium');

// Test Case 6: Young minor (<13) without premium
assert.strictEqual(getUserAccessStatus(8, false), 'Restricted', 'Test Case 6 Failed: Young minor without premium');
assert.strictEqual(getUserAccessStatus(12, false), 'Restricted', 'Test Case 7 Failed: 12-year-old without premium');

// Test Case 8: Edge case - exactly 18 with premium
assert.strictEqual(getUserAccessStatus(18, true), 'Full Access', 'Test Case 8 Failed: Edge case 18 with premium');

// Test Case 9: Edge case - exactly 18 without premium
assert.strictEqual(getUserAccessStatus(18, false), 'Limited Access', 'Test Case 9 Failed: Edge case 18 without premium');

// Test Case 10: Edge case - exactly 17 with premium
assert.strictEqual(getUserAccessStatus(17, true), 'Parental Supervision Required', 'Test Case 10 Failed: Edge case 17 with premium');

console.log('All tests passed!');

// Day 1 Tests: Verifying core concepts and the practical utility
const assert = require('assert');
const generateUserProfileSummary = require('./02-practical'); // Import the practical function

console.log("--- Running Day 1 Tests ---");

// --- Test Core Concepts (indirectly via variables) ---
console.log("\nVerifying basic variable assignments and types...");
let testString = "Hello JS";
const testNumber = 123;
let testBoolean = true;

assert.strictEqual(testString, "Hello JS", "Test string value should match");
assert.strictEqual(typeof testString, "string", "Test string should be of type 'string'");

assert.strictEqual(testNumber, 123, "Test number value should match");
assert.strictEqual(typeof testNumber, "number", "Test number should be of type 'number'");

assert.strictEqual(testBoolean, true, "Test boolean value should be true");
assert.strictEqual(typeof testBoolean, "boolean", "Test boolean should be of type 'boolean'");

console.log("Basic variable checks passed!");

// --- Test Practical Utility: generateUserProfileSummary ---
console.log("\nVerifying generateUserProfileSummary function...");

// Test Case 1: Standard active user
const summary1 = generateUserProfileSummary("Alice", 30, "alice@example.com", "Gold", true);
const expected1 = "User Profile for: Alice\nAge: 30 years\nEmail: alice@example.com\nMembership: Gold\nStatus: Active";
assert.strictEqual(summary1, expected1, "Test Case 1 Failed: Standard user summary mismatch");

// Test Case 2: Minor user
const summary2 = generateUserProfileSummary("Bob", 15, "bob@example.com", "Basic", true);
const expected2 = "User Profile for: Bob\nAge: 15 years\nEmail: bob@example.com\nMembership: Basic\nStatus: Active\nNote: This user is a minor.";
assert.strictEqual(summary2, expected2, "Test Case 2 Failed: Minor user summary mismatch");

// Test Case 3: Inactive user (not minor)
const summary3 = generateUserProfileSummary("Charlie", 40, "charlie@example.com", "Silver", false);
const expected3 = "User Profile for: Charlie\nAge: 40 years\nEmail: charlie@example.com\nMembership: Silver\nStatus: Inactive\nAction: Account requires reactivation.";
assert.strictEqual(summary3, expected3, "Test Case 3 Failed: Inactive user summary mismatch");

// Test Case 4: Inactive and minor user (minor note should take precedence or be combined)
// Based on the code, 'minor' condition is checked first, then 'inactive'.
// The code checks 'age < 18' then 'else if (!isActive)'. So, minor takes precedence.
const summary4 = generateUserProfileSummary("Diana", 10, "diana@example.com", "Basic", false);
const expected4 = "User Profile for: Diana\nAge: 10 years\nEmail: diana@example.com\nMembership: Basic\nStatus: Inactive\nNote: This user is a minor.";
assert.strictEqual(summary4, expected4, "Test Case 4 Failed: Inactive minor user summary mismatch");

console.log("All generateUserProfileSummary tests passed!");

console.log("\n--- All Day 1 tests completed successfully! --- ");
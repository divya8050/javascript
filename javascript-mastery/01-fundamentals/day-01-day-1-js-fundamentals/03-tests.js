// --- Day 1: Tests for User Profile Greeting ---

const assert = require('assert');
const generateWelcomeMessage = require('./02-practical.js');

console.log('Running tests for generateWelcomeMessage...');

// Test Case 1: Standard premium user
const premiumUserMessage = generateWelcomeMessage("Charlie", 40, true);
const expectedPremium = "Hello, Charlie! You are 40 years old. As a premium member, you have exclusive access.";
assert.strictEqual(premiumUserMessage, expectedPremium, "Test Case 1 Failed: Premium user message incorrect");
console.log('Test 1 Passed: Premium user');

// Test Case 2: Standard non-premium user
const basicUserMessage = generateWelcomeMessage("Diana", 22, false);
const expectedBasic = "Hello, Diana! You are 22 years old. Upgrade to premium for more features!";
assert.strictEqual(basicUserMessage, expectedBasic, "Test Case 2 Failed: Basic user message incorrect");
console.log('Test 2 Passed: Basic user');

// Test Case 3: Edge case - young premium user
const youngPremiumUserMessage = generateWelcomeMessage("Eve", 18, true);
const expectedYoungPremium = "Hello, Eve! You are 18 years old. As a premium member, you have exclusive access.";
assert.strictEqual(youngPremiumUserMessage, expectedYoungPremium, "Test Case 3 Failed: Young premium user message incorrect");
console.log('Test 3 Passed: Young premium user');

// Test Case 4: Edge case - older non-premium user
const olderBasicUserMessage = generateWelcomeMessage("Frank", 65, false);
const expectedOlderBasic = "Hello, Frank! You are 65 years old. Upgrade to premium for more features!";
assert.strictEqual(olderBasicUserMessage, expectedOlderBasic, "Test Case 4 Failed: Older basic user message incorrect");
console.log('Test 4 Passed: Older basic user');

console.log('\nAll tests passed!');

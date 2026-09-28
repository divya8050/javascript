const assert = require('assert');
const { createUserProfile, formatProfileDisplay } = require('./02-practical.js');

console.log('Running tests for user profile functionality...');

// Test Case 1: Basic profile creation with active status
let profile1 = createUserProfile("Alice", 30, "alice@example.com", "active");
assert.strictEqual(profile1.userName, "Alice", "Test 1 Failed: Name mismatch");
assert.strictEqual(profile1.userAge, 30, "Test 1 Failed: Age mismatch");
assert.strictEqual(profile1.isOnline, true, "Test 1 Failed: isOnline should be true");
console.log('  ✓ Test 1 Passed: Active profile created correctly.');

// Test Case 2: Profile creation with inactive status
let profile2 = createUserProfile("Bob", 25, "bob@example.com", "inactive");
assert.strictEqual(profile2.userName, "Bob", "Test 2 Failed: Name mismatch");
assert.strictEqual(profile2.isOnline, false, "Test 2 Failed: isOnline should be false");
console.log('  ✓ Test 2 Passed: Inactive profile created correctly.');

// Test Case 3: Profile creation with default status (should be active)
let profile3 = createUserProfile("Charlie", 35, "charlie@example.com");
assert.strictEqual(profile3.userName, "Charlie", "Test 3 Failed: Name mismatch");
assert.strictEqual(profile3.isOnline, true, "Test 3 Failed: Default status should be active");
console.log('  ✓ Test 3 Passed: Profile defaults to active status.');

// Test Case 4: Format profile display for an active user
let formattedProfile1 = formatProfileDisplay(profile1);
let expectedFormat1 = `Alice (30) - alice@example.com. Status: Online. Registered: ${profile1.registrationDate}`;
assert.strictEqual(formattedProfile1, expectedFormat1, "Test 4 Failed: Formatted string mismatch for active user");
console.log('  ✓ Test 4 Passed: Active user profile formatted correctly.');

// Test Case 5: Format profile display for an inactive user
let formattedProfile2 = formatProfileDisplay(profile2);
let expectedFormat2 = `Bob (25) - bob@example.com. Status: Offline. Registered: ${profile2.registrationDate}`;
assert.strictEqual(formattedProfile2, expectedFormat2, "Test 5 Failed: Formatted string mismatch for inactive user");
console.log('  ✓ Test 5 Passed: Inactive user profile formatted correctly.');

// Test Case 6: Format profile display with invalid input
let invalidFormat = formatProfileDisplay(null);
assert.strictEqual(invalidFormat, "Invalid profile data provided.", "Test 6 Failed: Invalid input handling");
console.log('  ✓ Test 6 Passed: Handles invalid profile input gracefully.');

console.log('\nAll user profile tests passed successfully!');
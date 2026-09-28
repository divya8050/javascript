// Self-contained verification tests for the user details formatter

const assert = require('assert'); // Node.js built-in assert module
const formatUserDetails = require('./02-practical'); // Import the function to test

// Test Case 1: Verify output for a standard user
let result1 = formatUserDetails("Alice", 30, false);
assert.strictEqual(result1, "Name: Alice, Age: 30, Role: Standard User.", "Test Case 1 Failed: Standard user output is incorrect.");
console.log("Test Case 1 Passed: Standard user.");

// Test Case 2: Verify output for an administrator user
let result2 = formatUserDetails("Bob", 45, true);
assert.strictEqual(result2, "Name: Bob, Age: 45, Role: Administrator.", "Test Case 2 Failed: Administrator user output is incorrect.");
console.log("Test Case 2 Passed: Administrator user.");

// Test Case 3: Verify output with different age and status
let result3 = formatUserDetails("Charlie", 18, false);
assert.strictEqual(result3, "Name: Charlie, Age: 18, Role: Standard User.", "Test Case 3 Failed: Different age user output is incorrect.");
console.log("Test Case 3 Passed: Different age, standard user.");

// Test Case 4: Another admin scenario
let result4 = formatUserDetails("Diana", 28, true);
assert.strictEqual(result4, "Name: Diana, Age: 28, Role: Administrator.", "Test Case 4 Failed: Another admin output is incorrect.");
console.log("Test Case 4 Passed: Another admin user.");

console.log("\nAll tests passed successfully!");

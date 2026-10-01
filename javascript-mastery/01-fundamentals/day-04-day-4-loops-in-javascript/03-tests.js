// 03-tests.js

const assert = require('assert');
const { getEvenNumbersUpTo, calculateSumUpTo } = require('./02-practical');

console.log("Running tests for practical loop functions...");

// Test case 1: getEvenNumbersUpTo
try {
  const evens10 = getEvenNumbersUpTo(10);
  assert.deepStrictEqual(evens10, [0, 2, 4, 6, 8, 10], "Test Case 1 Failed: Even numbers up to 10");
  console.log("Test Case 1 Passed: Even numbers up to 10");

  const evens5 = getEvenNumbersUpTo(5);
  assert.deepStrictEqual(evens5, [0, 2, 4], "Test Case 2 Failed: Even numbers up to 5");
  console.log("Test Case 2 Passed: Even numbers up to 5");

  const evens0 = getEvenNumbersUpTo(0);
  assert.deepStrictEqual(evens0, [0], "Test Case 3 Failed: Even numbers up to 0");
  console.log("Test Case 3 Passed: Even numbers up to 0");

  const evensNegative = getEvenNumbersUpTo(-1);
  assert.deepStrictEqual(evensNegative, [], "Test Case 4 Failed: Even numbers up to negative");
  console.log("Test Case 4 Passed: Even numbers up to negative");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}

// Test case 2: calculateSumUpTo
try {
  assert.strictEqual(calculateSumUpTo(5), 15, "Test Case 5 Failed: Sum up to 5"); // 1+2+3+4+5 = 15
  console.log("Test Case 5 Passed: Sum up to 5");

  assert.strictEqual(calculateSumUpTo(1), 1, "Test Case 6 Failed: Sum up to 1");
  console.log("Test Case 6 Passed: Sum up to 1");

  assert.strictEqual(calculateSumUpTo(0), 0, "Test Case 7 Failed: Sum up to 0");
  console.log("Test Case 7 Passed: Sum up to 0");

  assert.strictEqual(calculateSumUpTo(3), 6, "Test Case 8 Failed: Sum up to 3"); // 1+2+3 = 6
  console.log("Test Case 8 Passed: Sum up to 3");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}

console.log("\nAll tests completed.");

// Day 61: Self-contained tests for error handling
// Date: 2026-11-27

const assert = require('assert');
const { divideNumbers, parseJSONString, ValidationError, validateUserData } = require('./01-core');
const { NetworkError, DataValidationError, simulateFetch, safeFetchAndProcessData } = require('./02-practical');

console.log("Running error handling tests...");

// --- Tests for 01-core.js ---

// Test divideNumbers
assert.strictEqual(divideNumbers(10, 2), 5, 'Test Case 1: divideNumbers should return correct result');
assert.throws(() => divideNumbers(10, 0), Error, 'Test Case 2: divideNumbers should throw an error for division by zero');
assert.throws(() => divideNumbers(10, 0), /Division by zero/, 'Test Case 3: divideNumbers error message should contain specific text');

// Test parseJSONString
assert.deepStrictEqual(parseJSONString('{"a":1}'), { a: 1 }, 'Test Case 4: parseJSONString should parse valid JSON');
assert.strictEqual(parseJSONString('{"a":1,'), null, 'Test Case 5: parseJSONString should return null for invalid JSON');

// Test validateUserData with custom ValidationError
assert.deepStrictEqual(
  validateUserData("validuser", "valid@example.com"),
  { username: "validuser", email: "valid@example.com" },
  'Test Case 6: validateUserData should return user object for valid data'
);

assert.throws(
  () => validateUserData("ab", "test@example.com"),
  (err) => {
    return err instanceof ValidationError && err.field === 'username' && err.message.includes('Username must be at least 3');
  },
  'Test Case 7: validateUserData should throw ValidationError for short username'
);

assert.throws(
  () => validateUserData("user123", "invalid-email"),
  (err) => {
    return err instanceof ValidationError && err.field === 'email' && err.message.includes('Invalid email format');
  },
  'Test Case 8: validateUserData should throw ValidationError for invalid email'
);

// --- Tests for 02-practical.js ---

// Test simulateFetch
(async () => {
  try {
    await assert.doesNotReject(simulateFetch('https://api.example.com/data/valid-data'), 'Test Case 9: simulateFetch should resolve for valid data url');
    await assert.rejects(simulateFetch('https://api.example.com/data/error-network'), NetworkError, 'Test Case 10: simulateFetch should reject with NetworkError for network error url');
    await assert.rejects(
      simulateFetch('https://api.example.com/data/non-existent'),
      (err) => err instanceof NetworkError && err.statusCode === 404,
      'Test Case 11: simulateFetch should reject with 404 NetworkError for unknown endpoint'
    );

    // Test safeFetchAndProcessData
    const validResult = await safeFetchAndProcessData('https://api.example.com/data/valid-data');
    assert.deepStrictEqual(validResult, { id: 1, name: 'Sample Item', price: 99.99 }, 'Test Case 12: safeFetchAndProcessData should return processed data for valid input');

    const networkErrorResult = await safeFetchAndProcessData('https://api.example.com/data/error-network');
    assert.strictEqual(networkErrorResult, null, 'Test Case 13: safeFetchAndProcessData should return null for network errors');

    const invalidJsonResult = await safeFetchAndProcessData('https://api.example.com/data/invalid-json');
    assert.strictEqual(invalidJsonResult, null, 'Test Case 14: safeFetchAndProcessData should return null for invalid JSON');

    const missingPriceResult = await safeFetchAndProcessData('https://api.example.com/data/missing-price');
    assert.strictEqual(missingPriceResult, null, 'Test Case 15: safeFetchAndProcessData should return null for data validation errors (missing price)');

    console.log("All tests passed!\n");
  } catch (e) {
    console.error("Tests failed!\n", e);
    process.exit(1);
  }
})();

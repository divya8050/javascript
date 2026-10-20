// Day 23: Tests for Async Utilities
const assert = require('assert');
const { fetchUserById, fetchMultipleUsers } = require('./02-practical.js');

async function runAllTests() {
  console.log('Running async utility tests...');

  // Test 1: fetchUserById - success case
  try {
    const result = await fetchUserById(101);
    assert.strictEqual(result.success, true, 'Test 1 Failed: Should indicate success');
    assert.strictEqual(result.data.id, 101, 'Test 1 Failed: Should fetch correct user ID');
    assert.strictEqual(result.data.name, 'Alice Smith', 'Test 1 Failed: Should fetch correct user name');
    console.log('✓ Test 1: fetchUserById success passed.');
  } catch (e) {
    console.error('✗ Test 1: fetchUserById success failed:', e.message);
    process.exit(1);
  }

  // Test 2: fetchUserById - not found case
  try {
    await fetchUserById(999);
    assert.fail('Test 2 Failed: Should have rejected for non-existent user');
  } catch (errorObj) {
    assert.strictEqual(errorObj.success, false, 'Test 2 Failed: Should indicate failure');
    assert.strictEqual(errorObj.error.message, 'User with ID 999 not found.', 'Test 2 Failed: Incorrect error message');
    console.log('✓ Test 2: fetchUserById not found passed.');
  }

  // Test 3: fetchMultipleUsers - mixed success and failure
  try {
    const userIds = [101, 999, 102];
    const results = await fetchMultipleUsers(userIds);

    assert.strictEqual(results.length, 3, 'Test 3 Failed: Should return results for all requested IDs');

    // Check successful user 101
    assert.strictEqual(results[0].id, 101, 'Test 3 Failed: User 101 ID mismatch');
    assert.strictEqual(results[0].name, 'Alice Smith', 'Test 3 Failed: User 101 name mismatch');

    // Check failed user 999
    assert.strictEqual(results[1].id, 999, 'Test 3 Failed: Error object for 999 should contain ID');
    assert.strictEqual(results[1].error, 'User with ID 999 not found.', 'Test 3 Failed: Error message for 999 mismatch');

    // Check successful user 102
    assert.strictEqual(results[2].id, 102, 'Test 3 Failed: User 102 ID mismatch');
    assert.strictEqual(results[2].name, 'Bob Johnson', 'Test 3 Failed: User 102 name mismatch');

    console.log('✓ Test 3: fetchMultipleUsers mixed success/failure passed.');
  } catch (e) {
    console.error('✗ Test 3: fetchMultipleUsers mixed success/failure failed:', e.message);
    process.exit(1);
  }

  console.log('\nAll tests completed.');
}

runAllTests();
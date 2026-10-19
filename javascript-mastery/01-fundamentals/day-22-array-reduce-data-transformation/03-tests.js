/**
 * Day 22 of JavaScript mastery: Tests for reduce() examples
 * Date: 2026-10-19
 */

const assert = require('assert');
const coreExamples = require('./01-core');
const practicalExamples = require('./02-practical');

console.log('Running tests for Day 22: Array Reduce Mastery');

// Test 1: Basic sum
assert.strictEqual(coreExamples.sum, 15, 'Test 1 Failed: Basic sum is incorrect');
console.log('  ✅ Test 1 Passed: Basic sum');

// Test 2: Flattening an array
assert.deepStrictEqual(coreExamples.flattenedArray, [1, 2, 3, 4, 5], 'Test 2 Failed: Flattened array is incorrect');
console.log('  ✅ Test 2 Passed: Flattened array');

// Test 3: Grouping objects by city
const expectedPeopleByCity = {
  'New York': [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Charlie', age: 30, city: 'New York' }
  ],
  'Los Angeles': [
    { name: 'Bob', age: 24, city: 'Los Angeles' }
  ],
  'Chicago': [
    { name: 'David', age: 35, city: 'Chicago' }
  ]
};
assert.deepStrictEqual(coreExamples.peopleByCity, expectedPeopleByCity, 'Test 3 Failed: People grouped by city is incorrect');
console.log('  ✅ Test 3 Passed: Grouped people by city');

// Test 4: Creating product lookup map
const expectedProductLookup = {
  'p001': { id: 'p001', name: 'Laptop', price: 1200 },
  'p002': { id: 'p002', name: 'Mouse', price: 25 },
  'p003': { id: 'p003', name: 'Keyboard', price: 75 }
};
assert.deepStrictEqual(coreExamples.productLookup, expectedProductLookup, 'Test 4 Failed: Product lookup map is incorrect');
console.log('  ✅ Test 4 Passed: Product lookup map');

// Test 5: Practical sales report generation
const salesReport = practicalExamples.generateSalesReport(practicalExamples.salesRecords);

const expectedSalesReport = {
  totalRevenue: 4945,
  categories: {
    'Electronics': {
      totalQuantity: 4,
      totalRevenue: 4800
    },
    'Accessories': {
      totalQuantity: 3,
      totalRevenue: 125
    },
    'Books': {
      totalQuantity: 3,
      totalRevenue: 45
    }
  }
};

assert.deepStrictEqual(salesReport, expectedSalesReport, 'Test 5 Failed: Sales report is incorrect');
console.log('  ✅ Test 5 Passed: Sales report generation');

console.log('\nAll tests passed successfully!');

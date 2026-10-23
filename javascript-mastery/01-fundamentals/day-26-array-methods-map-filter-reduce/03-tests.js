import assert from 'assert';
import {
  numbers,
  doubledNumbers,
  evenNumbers,
  sumOfNumbers,
  words,
  wordCounts
} from './01-core.js';

import {
  products,
  getInStockProducts,
  getDiscountedProductInfo,
  calculateTotalInStockValue
} from './02-practical.js';

console.log('Running tests...');

// --- Tests for 01-core.js ---

// Test map functionality
assert.deepStrictEqual(doubledNumbers, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 'map test failed: doubled numbers mismatch');

// Test filter functionality
assert.deepStrictEqual(evenNumbers, [2, 4, 6, 8, 10], 'filter test failed: even numbers mismatch');

// Test reduce functionality (sum)
assert.strictEqual(sumOfNumbers, 55, 'reduce test failed: sum mismatch');

// Test reduce functionality (word counts)
assert.deepStrictEqual(wordCounts, { apple: 3, banana: 2, orange: 1 }, 'reduce test failed: word counts mismatch');

console.log('01-core.js tests passed!');

// --- Tests for 02-practical.js ---

// Test getInStockProducts
const expectedInStock = [
  { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', inStock: true },
  { id: 'p2', name: 'Mouse', price: 25, category: 'Electronics', inStock: true },
  { id: 'p4', name: 'Monitor', price: 300, category: 'Electronics', inStock: true },
  { id: 'p5', name: 'Desk Chair', price: 150, category: 'Furniture', inStock: true }
];
assert.deepStrictEqual(getInStockProducts(products), expectedInStock, 'practical test failed: in-stock products mismatch');

// Test getDiscountedProductInfo
const electronicsProducts = products.filter(p => p.category === 'Electronics' && p.inStock);
const expectedDiscounted = [
  { name: 'Laptop', originalPrice: 1200, discountedPrice: 1080.00 },
  { name: 'Mouse', originalPrice: 25, discountedPrice: 22.50 },
  { name: 'Monitor', originalPrice: 300, discountedPrice: 270.00 }
];
assert.deepStrictEqual(getDiscountedProductInfo(electronicsProducts, 10), expectedDiscounted, 'practical test failed: discounted info mismatch');

// Test calculateTotalInStockValue
assert.strictEqual(calculateTotalInStockValue(products), 1675, 'practical test failed: total in-stock value mismatch');

console.log('02-practical.js tests passed!');

console.log('All tests completed successfully!');

/**
 * Day 1: Tests - Variables, Data Types, and Basic Operators
 * Target Date: 2026-09-28
 *
 * This file contains self-contained unit tests using Node.js 'assert' module.
 * It covers the fundamental concepts introduced in Day 1: variable declarations,
 * primitive data types, basic operators, and the practical calculator utility.
 */

const assert = require('assert');
const MathUtils = require('./02-practical'); // Import the utility from Part 2

console.log('// --- Running Day 1 Tests ---');

// Test Suite 1: Variable Declarations (var, let, const)
console.log('\n--- Test Suite 1: Variable Declarations ---');

// Test 1.1: `var` hoisting and function scope
(function() {
  var var_test_val = 'initial';
  assert.strictEqual(var_test_val, 'initial', 'Test 1.1.1: var should be accessible after declaration.');

  // Test hoisting (value is undefined before assignment)
  var hoisted_var;
  assert.strictEqual(hoisted_var, undefined, 'Test 1.1.2: var should be undefined before assignment due to hoisting.');
  hoisted_var = 'hoisted';
  assert.strictEqual(hoisted_var, 'hoisted', 'Test 1.1.3: var should be assignable after hoisting.');

  // Test function scope (demonstrating it's not block-scoped)
  if (true) {
    var block_var = 'inside block';
  }
  assert.strictEqual(block_var, 'inside block', 'Test 1.1.4: var should be accessible outside if block (function scope).');
})();

// Test 1.2: `let` block scope and TDZ
(function() {
  let let_test_val = 10;
  assert.strictEqual(let_test_val, 10, 'Test 1.2.1: let should be accessible after declaration.');
  let_test_val = 20;
  assert.strictEqual(let_test_val, 20, 'Test 1.2.2: let should be reassignable.');

  // Test block scope
  if (true) {
    let block_let = 'inside block';
    assert.strictEqual(block_let, 'inside block', 'Test 1.2.3: let should be accessible inside its block.');
  }
  // assert.throws(() => console.log(block_let), ReferenceError, 'Test 1.2.4: let should not be accessible outside its block.'); // This test would stop execution
})();

// Test 1.3: `const` block scope and immutability of binding
(function() {
  const const_test_val = true;
  assert.strictEqual(const_test_val, true, 'Test 1.3.1: const should be accessible after declaration.');

  // Test immutability of primitive binding
  assert.throws(
    () => { const_test_val = false; },
    TypeError,
    'Test 1.3.2: const primitive should not be reassignable.'
  );

  // Test immutability of object reference, mutability of object content
  const user = { name: 'Bob' };
  assert.strictEqual(user.name, 'Bob', 'Test 1.3.3: const object property should be accessible.');
  user.name = 'Charlie';
  assert.strictEqual(user.name, 'Charlie', 'Test 1.3.4: const object properties should be mutable.');
  assert.throws(
    () => { user = { name: 'David' }; },
    TypeError,
    'Test 1.3.5: const object reference should not be reassignable.'
  );
})();

// Test Suite 2: Primitive Data Types
console.log('\n--- Test Suite 2: Primitive Data Types ---');

// Test 2.1: Number type
assert.strictEqual(typeof 123, 'number', 'Test 2.1.1: Integer literal is number.');
assert.strictEqual(typeof 3.14, 'number', 'Test 2.1.2: Float literal is number.');
assert.strictEqual(typeof NaN, 'number', 'Test 2.1.3: NaN is type number.');
assert.strictEqual(typeof Infinity, 'number', 'Test 2.1.4: Infinity is type number.');

// Test 2.2: String type
assert.strictEqual(typeof 'hello', 'string', 'Test 2.2.1: String literal is string.');
assert.strictEqual(typeof `template`, 'string', 'Test 2.2.2: Template literal is string.');

// Test 2.3: Boolean type
assert.strictEqual(typeof true, 'boolean', 'Test 2.3.1: true is boolean.');
assert.strictEqual(typeof false, 'boolean', 'Test 2.3.2: false is boolean.');

// Test 2.4: Undefined and Null types
let testUndefined;
assert.strictEqual(typeof testUndefined, 'undefined', 'Test 2.4.1: Undeclared variable is undefined.');
assert.strictEqual(testUndefined, undefined, 'Test 2.4.2: Undeclared variable value is undefined.');
assert.strictEqual(typeof null, 'object', 'Test 2.4.3: typeof null is object (historical bug).');
assert.strictEqual(null, null, 'Test 2.4.4: null value is null.');
assert.notStrictEqual(null, undefined, 'Test 2.4.5: null is not strictly equal to undefined.');
assert.equal(null, undefined, 'Test 2.4.6: null is loosely equal to undefined.');

// Test 2.5: Symbol type
const sym1 = Symbol('desc');
const sym2 = Symbol('desc');
assert.strictEqual(typeof sym1, 'symbol', 'Test 2.5.1: Symbol is symbol type.');
assert.notStrictEqual(sym1, sym2, 'Test 2.5.2: Symbols with same description are not strictly equal.');

// Test 2.6: BigInt type
assert.strictEqual(typeof 10n, 'bigint', 'Test 2.6.1: BigInt literal is bigint type.');
assert.strictEqual(10n + 5n, 15n, 'Test 2.6.2: BigInt addition works.');
assert.throws(
  () => 10n + 5, 
  TypeError, 
  'Test 2.6.3: Cannot mix BigInt and Number in operations without explicit conversion.'
);

// Test Suite 3: Basic Operators
console.log('\n--- Test Suite 3: Basic Operators ---');

// Test 3.1: Arithmetic Operators
assert.strictEqual(10 + 5, 15, 'Test 3.1.1: Addition.');
assert.strictEqual(10 - 5, 5, 'Test 3.1.2: Subtraction.');
assert.strictEqual(10 * 5, 50, 'Test 3.1.3: Multiplication.');
assert.strictEqual(10 / 5, 2, 'Test 3.1.4: Division.');
assert.strictEqual(10 % 3, 1, 'Test 3.1.5: Modulo.');
assert.strictEqual(2 ** 3, 8, 'Test 3.1.6: Exponentiation.');

// Test 3.2: Assignment Operators
let op_a = 10;
op_a += 5; assert.strictEqual(op_a, 15, 'Test 3.2.1: += operator.');
op_a -= 3; assert.strictEqual(op_a, 12, 'Test 3.2.2: -= operator.');
op_a *= 2; assert.strictEqual(op_a, 24, 'Test 3.2.3: *= operator.');
op_a /= 4; assert.strictEqual(op_a, 6, 'Test 3.2.4: /= operator.');
op_a %= 5; assert.strictEqual(op_a, 1, 'Test 3.2.5: %= operator.');
op_a **= 3; assert.strictEqual(op_a, 1, 'Test 3.2.6: **= operator.');

// Test 3.3: Comparison Operators (Strict vs. Loose)
assert.strictEqual(10 === 10, true, 'Test 3.3.1: Strict equality (same type, same value).');
assert.strictEqual(10 === '10', false, 'Test 3.3.2: Strict equality (different types).');
assert.strictEqual(10 == '10', true, 'Test 3.3.3: Loose equality (type coercion).');
assert.strictEqual(null === undefined, false, 'Test 3.3.4: null !== undefined (strict).');
assert.strictEqual(null == undefined, true, 'Test 3.3.5: null == undefined (loose).');
assert.strictEqual(5 > 3, true, 'Test 3.3.6: Greater than.');
assert.strictEqual(5 < 3, false, 'Test 3.3.7: Less than.');
assert.strictEqual(5 >= 5, true, 'Test 3.3.8: Greater than or equal.');
assert.strictEqual(5 <= 5, true, 'Test 3.3.9: Less than or equal.');

// Test 3.4: Logical Operators
assert.strictEqual(true && false, false, 'Test 3.4.1: Logical AND.');
assert.strictEqual(true || false, true, 'Test 3.4.2: Logical OR.');
assert.strictEqual(!true, false, 'Test 3.4.3: Logical NOT.');
assert.strictEqual(10 && 'hello', 'hello', 'Test 3.4.4: Logical AND short-circuiting.');
assert.strictEqual(0 || 'default', 'default', 'Test 3.4.5: Logical OR short-circuiting.');

// Test Suite 4: MathUtils from 02-practical.js
console.log('\n--- Test Suite 4: MathUtils Utility ---');

// Test 4.1: safeAdd
assert.strictEqual(MathUtils.safeAdd(5, 3), 8, 'Test 4.1.1: safeAdd with valid numbers.');
assert.strictEqual(MathUtils.safeAdd(0.1, 0.2), 0.30000000000000004, 'Test 4.1.2: safeAdd with floats.');
assert.strictEqual(MathUtils.safeAdd(-5, 3), -2, 'Test 4.1.3: safeAdd with negative numbers.');
assert.strictEqual(MathUtils.safeAdd('5', 3), 'Error: Both inputs must be valid numbers for addition.', 'Test 4.1.4: safeAdd with string input.');
assert.strictEqual(MathUtils.safeAdd(5, null), 'Error: Both inputs must be valid numbers for addition.', 'Test 4.1.5: safeAdd with null input.');
assert.strictEqual(MathUtils.safeAdd(5, undefined), 'Error: Both inputs must be valid numbers for addition.', 'Test 4.1.6: safeAdd with undefined input.');
assert.strictEqual(MathUtils.safeAdd(5, NaN), 'Error: Both inputs must be valid numbers for addition.', 'Test 4.1.7: safeAdd with NaN input.');

// Test 4.2: safeSubtract
assert.strictEqual(MathUtils.safeSubtract(10, 4), 6, 'Test 4.2.1: safeSubtract with valid numbers.');
assert.strictEqual(MathUtils.safeSubtract(4, 10), -6, 'Test 4.2.2: safeSubtract with negative result.');
assert.strictEqual(MathUtils.safeSubtract('10', 4), 'Error: Both inputs must be valid numbers for subtraction.', 'Test 4.2.3: safeSubtract with string input.');

// Test 4.3: safeMultiply
assert.strictEqual(MathUtils.safeMultiply(2, 6), 12, 'Test 4.3.1: safeMultiply with valid numbers.');
assert.strictEqual(MathUtils.safeMultiply(2.5, 2), 5, 'Test 4.3.2: safeMultiply with float.');
assert.strictEqual(MathUtils.safeMultiply(0, 100), 0, 'Test 4.3.3: safeMultiply with zero.');
assert.strictEqual(MathUtils.safeMultiply(null, 6), 'Error: Both inputs must be valid numbers for multiplication.', 'Test 4.3.4: safeMultiply with null input.');

// Test 4.4: safeDivide
assert.strictEqual(MathUtils.safeDivide(15, 3), 5, 'Test 4.4.1: safeDivide with valid numbers.');
assert.strictEqual(MathUtils.safeDivide(10, 0), 'Error: Division by zero is not allowed.', 'Test 4.4.2: safeDivide with division by zero.');
assert.strictEqual(MathUtils.safeDivide(0, 5), 0, 'Test 4.4.3: safeDivide with zero dividend.');
assert.strictEqual(MathUtils.safeDivide('10', 2), 'Error: Both inputs must be valid numbers for division.', 'Test 4.4.4: safeDivide with string input.');
assert.strictEqual(MathUtils.safeDivide(null, 2), 'Error: Both inputs must be valid numbers for division.', 'Test 4.4.5: safeDivide with null input.');
assert.strictEqual(MathUtils.safeDivide(0, 0), 'Error: Division by zero is not allowed.', 'Test 4.4.6: safeDivide with 0/0 (should also catch division by zero).');

// Test 4.5: safePower
assert.strictEqual(MathUtils.safePower(2, 3), 8, 'Test 4.5.1: safePower with positive exponent.');
assert.strictEqual(MathUtils.safePower(5, 0), 1, 'Test 4.5.2: safePower with zero exponent.');
assert.strictEqual(MathUtils.safePower(4, 0.5), 2, 'Test 4.5.3: safePower with fractional exponent (square root).');
assert.strictEqual(MathUtils.safePower(2, -1), 0.5, 'Test 4.5.4: safePower with negative exponent.');
assert.strictEqual(MathUtils.safePower('2', 3), 'Error: Both base and exponent must be valid numbers for power calculation.', 'Test 4.5.5: safePower with string base.');
assert.strictEqual(MathUtils.safePower(2, undefined), 'Error: Both base and exponent must be valid numbers for power calculation.', 'Test 4.5.6: safePower with undefined exponent.');

console.log('\nAll Day 1 Tests Passed Successfully!');

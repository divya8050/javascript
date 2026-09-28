/**
 * Day 1: Practical Application - Safe Arithmetic Calculator Utility
 * Target Date: 2026-09-28
 *
 * This practical exercise builds a simple, robust calculator utility that demonstrates
 * the concepts of variables, data types, and basic operators. It focuses on handling
 * different input types gracefully and preventing common JavaScript pitfalls like
 * unexpected type coercion in arithmetic operations.
 *
 * The goal is to create a 'production-ready' helper that performs basic arithmetic
 * operations while ensuring inputs are valid numbers and returning meaningful errors
 * or default values for invalid operations.
 */

/**
 * @module MathUtils
 * @description A collection of safe arithmetic utility functions.
 */
const MathUtils = {};

/**
 * Checks if a value is a valid finite number.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a finite number, false otherwise.
 */
function isValidNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

/**
 * Performs a safe addition of two numbers.
 * @param {*} a - The first operand.
 * @param {*} b - The second operand.
 * @returns {number | string} The sum of 'a' and 'b', or an error message if inputs are invalid.
 */
MathUtils.safeAdd = (a, b) => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return 'Error: Both inputs must be valid numbers for addition.';
  }
  return a + b;
};

/**
 * Performs a safe subtraction of two numbers.
 * @param {*} a - The first operand.
 * @param {*} b - The second operand.
 * @returns {number | string} The difference of 'a' and 'b', or an error message if inputs are invalid.
 */
MathUtils.safeSubtract = (a, b) => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return 'Error: Both inputs must be valid numbers for subtraction.';
  }
  return a - b;
};

/**
 * Performs a safe multiplication of two numbers.
 * @param {*} a - The first operand.
 * @param {*} b - The second operand.
 * @returns {number | string} The product of 'a' and 'b', or an error message if inputs are invalid.
 */
MathUtils.safeMultiply = (a, b) => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return 'Error: Both inputs must be valid numbers for multiplication.';
  }
  return a * b;
};

/**
 * Performs a safe division of two numbers.
 * Handles division by zero gracefully.
 * @param {*} a - The dividend.
 * @param {*} b - The divisor.
 * @returns {number | string} The quotient of 'a' and 'b', an error message for invalid inputs, or 'Division by zero' error.
 */
MathUtils.safeDivide = (a, b) => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return 'Error: Both inputs must be valid numbers for division.';
  }
  if (b === 0) {
    return 'Error: Division by zero is not allowed.';
  }
  return a / b;
};

/**
 * Calculates the safe power of a base to an exponent.
 * @param {*} base - The base number.
 * @param {*} exponent - The exponent number.
 * @returns {number | string} The result of base raised to the power of exponent, or an error message.
 */
MathUtils.safePower = (base, exponent) => {
  if (!isValidNumber(base) || !isValidNumber(exponent)) {
    return 'Error: Both base and exponent must be valid numbers for power calculation.';
  }
  return base ** exponent;
};

// --- Demonstration and Usage Examples ---
console.log('// --- MathUtils Demonstration ---');

// Valid operations
console.log('5 + 3 =', MathUtils.safeAdd(5, 3));              // Expected: 8
console.log('10 - 4 =', MathUtils.safeSubtract(10, 4));        // Expected: 6
console.log('2 * 6 =', MathUtils.safeMultiply(2, 6));          // Expected: 12
console.log('15 / 3 =', MathUtils.safeDivide(15, 3));          // Expected: 5
console.log('2 ^ 3 =', MathUtils.safePower(2, 3));             // Expected: 8

// Invalid input types
console.log('\n// --- Handling Invalid Inputs ---');
console.log('"5" + 3 =', MathUtils.safeAdd('5', 3));          // Expected: Error message
console.log('10 - null =', MathUtils.safeSubtract(10, null));  // Expected: Error message
console.log('undefined * 6 =', MathUtils.safeMultiply(undefined, 6)); // Expected: Error message

// Division by zero
console.log('\n// --- Handling Edge Cases ---');
console.log('10 / 0 =', MathUtils.safeDivide(10, 0));          // Expected: Division by zero error
console.log('0 / 0 =', MathUtils.safeDivide(0, 0));            // Expected: Division by zero error (NaN is a number, but this function specifically checks for 0 divisor)

// Operations with floating point numbers
console.log('\n// --- Floating Point Operations ---');
console.log('0.1 + 0.2 =', MathUtils.safeAdd(0.1, 0.2));        // Expected: 0.30000000000000004 (Standard floating point precision issue)
console.log('7.5 * 2.2 =', MathUtils.safeMultiply(7.5, 2.2));    // Expected: 16.5

// Export the utility for testing or use in other modules
// In a real-world scenario, you might use `export default MathUtils;` or `module.exports = MathUtils;`
// For this self-contained example, we'll just expose it globally or through a direct export if using modules.

// For Node.js CommonJS module system (used by 'assert' tests)
module.exports = MathUtils;

console.log('\nDay 1: Safe Arithmetic Calculator Utility - Practical Application Complete.');

/**
 * Day 15 of JavaScript mastery: Error Handling Tests
 * Topic: Verifying error throwing and catching behavior
 * Date: 2026-10-12
 */

const assert = require('assert');

// --- From 01-core.js ---
function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return numerator / denominator;
}

// --- From 02-practical.js ---
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateProductData(product) {
  if (!product || typeof product !== 'object') {
    throw new TypeError("Product data must be an object.");
  }

  if (typeof product.name !== 'string' || product.name.trim() === '') {
    throw new ValidationError("Product name cannot be empty.", "name");
  }

  if (typeof product.price !== 'number' || product.price <= 0) {
    throw new ValidationError("Product price must be a positive number.", "price");
  }

  if (typeof product.quantity !== 'number' || !Number.isInteger(product.quantity) || product.quantity < 0) {
    throw new ValidationError("Product quantity must be a non-negative integer.", "quantity");
  }

  return true;
}

// Helper to capture console output for testing
let consoleOutput = [];
const originalConsoleError = console.error;
const originalConsoleLog = console.log;

function captureConsole() {
  consoleOutput = [];
  console.error = (...args) => consoleOutput.push(`ERROR: ${args.join(' ')}`);
  console.log = (...args) => consoleOutput.push(`LOG: ${args.join(' ')}`);
}

function restoreConsole() {
  console.error = originalConsoleError;
  console.log = originalConsoleLog;
  consoleOutput = [];
}

// Function to simulate submitting product data (modified to capture output for tests)
function submitProductForTest(productData) {
  captureConsole();
  try {
    validateProductData(productData);
    console.log(`SUCCESS: Product '${productData.name}' submitted successfully.`);
    return { success: true, message: "Product submitted." };
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`FAILURE: Validation error for field '${error.field}': ${error.message}`);
    } else if (error instanceof TypeError) {
      console.error(`FAILURE: Invalid data type: ${error.message}`);
    } else {
      console.error(`FAILURE: An unexpected error occurred: ${error.message}`);
    }
    return { success: false, message: error.message };
  } finally {
    console.log("Product submission process finished.\n");
    const output = consoleOutput.slice(); // Get a copy of the output
    restoreConsole();
    return { ...this.result, output }; // Return the result along with captured output
  }
}


console.log("Running tests for Day 15 error handling...");

// --- Test 1: divideNumbers function ---
assert.strictEqual(divideNumbers(10, 2), 5, "Test 1.1: divideNumbers should return correct result for valid input.");

assert.throws(
  () => divideNumbers(10, 0),
  Error,
  "Test 1.2: divideNumbers should throw an Error for division by zero."
);

assert.throws(
  () => divideNumbers(10, 0),
  (err) => err.message === "Division by zero is not allowed.",
  "Test 1.3: divideNumbers should throw an Error with specific message."
);

// --- Test 2: validateProductData function ---
assert.strictEqual(validateProductData({ name: "Book", price: 20, quantity: 1 }), true, "Test 2.1: Valid product data should pass validation.");

assert.throws(
  () => validateProductData(null),
  TypeError,
  "Test 2.2: validateProductData should throw TypeError for null input."
);

assert.throws(
  () => validateProductData({ name: "", price: 10, quantity: 1 }),
  ValidationError,
  "Test 2.3: validateProductData should throw ValidationError for empty name."
);

assert.throws(
  () => validateProductData({ name: "Item", price: 0, quantity: 1 }),
  ValidationError,
  "Test 2.4: validateProductData should throw ValidationError for zero price."
);

assert.throws(
  () => validateProductData({ name: "Item", price: 10, quantity: -1 }),
  ValidationError,
  "Test 2.5: validateProductData should throw ValidationError for negative quantity."
);

assert.throws(
  () => validateProductData({ name: "Item", price: 10, quantity: 1.5 }),
  ValidationError,
  "Test 2.6: validateProductData should throw ValidationError for non-integer quantity."
);

// --- Test 3: submitProductForTest function (checks return values and captured output) ---

// Test 3.1: Valid submission
let resultValid = submitProductForTest({ name: "Keyboard", price: 75.00, quantity: 10 });
assert.strictEqual(resultValid.success, true, "Test 3.1: Valid product submission should be successful.");
assert.ok(resultValid.output.some(line => line.includes("SUCCESS: Product 'Keyboard' submitted successfully.")), "Test 3.1: Valid submission should log success message.");

// Test 3.2: Invalid name
let resultInvalidName = submitProductForTest({ name: "", price: 50.00, quantity: 5 });
assert.strictEqual(resultInvalidName.success, false, "Test 3.2: Invalid name submission should fail.");
assert.ok(resultInvalidName.output.some(line => line.includes("FAILURE: Validation error for field 'name': Product name cannot be empty.")), "Test 3.2: Invalid name submission should log validation error.");

// Test 3.3: Invalid price
let resultInvalidPrice = submitProductForTest({ name: "Mouse", price: -10, quantity: 20 });
assert.strictEqual(resultInvalidPrice.success, false, "Test 3.3: Invalid price submission should fail.");
assert.ok(resultInvalidPrice.output.some(line => line.includes("FAILURE: Validation error for field 'price': Product price must be a positive number.")), "Test 3.3: Invalid price submission should log validation error.");

// Test 3.4: Invalid data type (null)
let resultInvalidType = submitProductForTest(null);
assert.strictEqual(resultInvalidType.success, false, "Test 3.4: Invalid data type (null) submission should fail.");
assert.ok(resultInvalidType.output.some(line => line.includes("FAILURE: Invalid data type: Product data must be an object.")), "Test 3.4: Invalid data type submission should log type error.");

console.log("All tests passed!");

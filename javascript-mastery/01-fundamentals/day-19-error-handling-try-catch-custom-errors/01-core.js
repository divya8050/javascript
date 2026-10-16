// 01-core.js
// Basic error handling with try...catch and finally

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Example 1: Basic try...catch
try {
  console.log("Attempting division (10 / 2):", divide(10, 2));
  console.log("Attempting division (10 / 0):");
  console.log(divide(10, 0)); // This will throw an error
} catch (error) {
  console.error("Caught an error in Example 1:", error.message);
} finally {
  console.log("Example 1: Finally block always executes.");
}

console.log("\n---");

// Example 2: Catching specific error types
function processInput(input) {
  if (typeof input !== 'string') {
    throw new TypeError("Input must be a string.");
  }
  if (input.length === 0) {
    throw new Error("Input string cannot be empty.");
  }
  return `Processed: ${input.toUpperCase()}`;
}

try {
  console.log("Processing 'hello':", processInput("hello"));
  console.log("Processing '':");
  console.log(processInput(""));
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Caught a TypeError in Example 2:", error.message);
  } else if (error instanceof Error) {
    console.error("Caught a generic Error in Example 2:", error.message);
  } else {
    console.error("Caught an unknown error in Example 2:", error);
  }
} finally {
  console.log("Example 2: Finally block always executes.");
}

console.log("\n---");

// Example 3: Custom Error Class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateUserData(username, email) {
  if (!username || username.length < 3) {
    throw new ValidationError("Username must be at least 3 characters.", "username");
  }
  if (!email || !email.includes('@')) {
    throw new ValidationError("Invalid email format.", "email");
  }
  return { username, email };
}

try {
  console.log("Validating user 'john_doe', 'john@example.com':", validateUserData("john_doe", "john@example.com"));
  console.log("Validating user 'jd', 'bad-email':");
  validateUserData("jd", "bad-email"); // This will throw a ValidationError
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Caught a ValidationError for field '${error.field}':`, error.message);
  } else {
    console.error("Caught an unexpected error:", error.message);
  }
} finally {
  console.log("Example 3: Finally block always executes.");
}
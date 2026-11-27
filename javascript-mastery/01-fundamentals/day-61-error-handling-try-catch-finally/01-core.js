// Day 61: Core concepts of try-catch-finally
// Date: 2026-11-27

// Basic division function that can throw an error
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Example 1: Basic try-catch block
console.log("--- Example 1: Basic try-catch ---");
try {
  let result = divideNumbers(10, 2);
  console.log("10 / 2 =", result);

  result = divideNumbers(10, 0); // This will throw an error
  console.log("10 / 0 =", result); // This line will not be reached
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("Example 1: Finally block always executes.");
}

console.log("\n--- Example 2: Catching specific error types ---");

// Function that attempts to parse JSON
function parseJSONString(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("JSON Parsing Error:", error.message);
      return null; // Return null or a default value on parsing failure
    } else {
      // Re-throw other unexpected errors
      throw error;
    }
  } finally {
    console.log("JSON parsing attempt finished.");
  }
}

console.log("Valid JSON:", parseJSONString('{"name": "Alice", "age": 30}'));
console.log("Invalid JSON:", parseJSONString('{"name": "Bob", "age": }'));

console.log("\n--- Example 3: Custom Error Classes ---");

// Define a custom error class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateUserData(username, email) {
  if (!username || username.length < 3) {
    throw new ValidationError("Username must be at least 3 characters long.", "username");
  }
  if (!email || !email.includes('@')) {
    throw new ValidationError("Invalid email format.", "email");
  }
  return { username, email };
}

try {
  console.log("Valid user:", validateUserData("johndoe", "john@example.com"));
  console.log("\nInvalid user (short username):");
  validateUserData("jd", "jd@example.com");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation Failed for field '${error.field}': ${error.message}`);
  } else {
    console.error("An unexpected error occurred:", error.message);
  }
} finally {
  console.log("User data validation attempt completed.");
}

try {
  console.log("\nInvalid user (bad email):");
  validateUserData("janedoe", "jane.example.com");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation Failed for field '${error.field}': ${error.message}`);
  } else {
    console.error("An unexpected error occurred:", error.message);
  }
}

// Export for testing
module.exports = {
  divideNumbers,
  parseJSONString,
  ValidationError,
  validateUserData
};

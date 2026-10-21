// Day 24: Error Handling Fundamentals

// Basic try-catch-finally block
function simpleOperation(value) {
  try {
    if (typeof value !== 'number') {
      // Throwing a standard built-in error
      throw new TypeError('Input must be a number.');
    }
    const result = value * 2;
    console.log(`Operation successful: ${result}`);
    return result;
  } catch (error) {
    // Catching and logging the error
    console.error(`Caught an error: ${error.message}`);
    // Returning null or re-throwing for higher-level handling
    return null;
  } finally {
    // This block always executes, regardless of try/catch outcome
    console.log('Finally block always executes.');
  }
}

// Custom Error Class: Extend built-in Error
class CustomValidationError extends Error {
  constructor(message, errorCode = 400) {
    super(message);
    this.name = 'CustomValidationError'; // Custom error name is good practice
    this.errorCode = errorCode;
  }
}

function processUserData(data) {
  try {
    if (!data || typeof data !== 'object' || !data.username) {
      throw new CustomValidationError('Invalid user data provided.', 400);
    }
    if (data.username.length < 3) {
      throw new CustomValidationError('Username must be at least 3 characters.', 401);
    }
    console.log(`User data processed for: ${data.username}`);
    return true;
  } catch (error) {
    // Distinguish between custom errors and other errors
    if (error instanceof CustomValidationError) {
      console.error(`Custom validation error (${error.errorCode}): ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }
    return false;
  }
}

// Demonstrations (uncomment to run)
// console.log('\n--- Simple Operation ---');
// simpleOperation(10);
// simpleOperation('hello');

// console.log('\n--- User Data Processing ---');
// processUserData({ username: 'js' }); // Too short
// processUserData({ username: 'john_doe', email: 'john@example.com' }); // Valid
// processUserData(null); // Invalid data type

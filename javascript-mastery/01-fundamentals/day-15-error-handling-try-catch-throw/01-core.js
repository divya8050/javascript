/**
 * Day 15 of JavaScript mastery: Understanding Error Handling
 * Topic: try...catch, throw, and the Error object
 * Date: 2026-10-12
 */

// A function that might throw an error
function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    // Throw a new Error object when an invalid operation occurs
    throw new Error("Division by zero is not allowed.");
  }
  return numerator / denominator;
}

// Using try...catch to handle potential errors
function performDivision(a, b) {
  console.log(`Attempting to divide ${a} by ${b}...`);
  try {
    // Code that might throw an error goes in the try block
    const result = divideNumbers(a, b);
    console.log(`Result: ${result}`);
  } catch (error) {
    // If an error is thrown in the try block, control jumps here
    // The 'error' variable contains the thrown Error object
    console.error(`Error caught: ${error.message}`);
  } finally {
    // The finally block always executes, regardless of whether an error occurred or not
    console.log("Division attempt finished.\n");
  }
}

// Test cases
performDivision(10, 2);
performDivision(7, 0);
performDivision(100, 10);

// Another example: throwing a different type of error
function processInput(value) {
  if (typeof value !== 'number') {
    // We can throw different built-in error types as well
    throw new TypeError("Input must be a number.");
  }
  if (value < 0) {
    throw new RangeError("Input must be a positive number.");
  }
  console.log(`Processing positive number: ${value}`);
}

function handleInput(data) {
  console.log(`Handling input: ${data}...`);
  try {
    processInput(data);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(`Type Error: ${error.message}`);
    } else if (error instanceof RangeError) {
      console.error(`Range Error: ${error.message}`);
    } else {
      console.error(`Unknown Error: ${error.message}`);
    }
  } finally {
    console.log("Input handling complete.\n");
  }
}

handleInput(50);
handleInput("hello");
handleInput(-10);

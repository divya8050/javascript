// 01-core.js
// Day 7: Exploring JavaScript functions

// 1. Function Declaration
// A named function, can be called before its definition (hoisted).
function greetUser(name) {
  return `Hello, ${name}! Welcome.`;
}

// 2. Function Expression
// An anonymous function assigned to a variable. Not hoisted like declarations.
const sayGoodbye = function(name) {
  return `Goodbye, ${name}. See you next time!`;
};

// 3. Arrow Function
// A more concise syntax, especially for simple functions.
// Implicit return for single expressions.
const multiply = (a, b) => a * b;

// Arrow function with block body for multiple statements or explicit return.
const calculateArea = (length, width) => {
  const area = length * width;
  return `The area is ${area} square units.`;
};

// Function with default parameters
function describeProduct(name, price = 0, inStock = true) {
  return `${name} costs $${price}. In stock: ${inStock ? 'Yes' : 'No'}.`;
}

// Exporting functions for use in other modules (e.g., tests)
module.exports = {
  greetUser,
  sayGoodbye,
  multiply,
  calculateArea,
  describeProduct
};

// Day 10: Understanding functions in JavaScript

// 1. Function Declaration
// This is the most common way to define a function. It's hoisted.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

// 2. Function Expression
// A function assigned to a variable. Not hoisted like declarations.
const sayGoodbye = function(name) {
  return `Goodbye, ${name}.`;
};

console.log(sayGoodbye('Bob')); // Output: Goodbye, Bob.

// 3. Arrow Function
// A more concise syntax for writing function expressions, especially useful for short functions.
// They also behave differently with `this` (lexical this), which we'll cover later.
const multiply = (a, b) => a * b;

console.log(multiply(5, 3)); // Output: 15

// Arrow function with multiple statements (needs curly braces and an explicit return)
const calculateSum = (num1, num2) => {
  const sum = num1 + num2;
  return `The sum is ${sum}.`;
};

console.log(calculateSum(10, 20)); // Output: The sum is 30.

// 4. Function Parameters and Return Values
function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    return 'Dimensions must be positive.'; // Return an error message or specific value
  }
  const area = length * width;
  return area; // Return the calculated value
}

console.log('Area:', calculateArea(7, 4)); // Output: Area: 28
console.log('Invalid Area:', calculateArea(-2, 5)); // Output: Invalid Area: Dimensions must be positive.

// 5. Function Scope
// Variables defined inside a function are local to that function.
let globalMessage = 'I am a global message.';

function showScope() {
  let functionScopedVar = 'I am local to showScope.';
  console.log(globalMessage); // Can access global variables
  console.log(functionScopedVar); // Can access function-scoped variables

  if (true) {
    let blockScopedVar = 'I am local to this block.';
    console.log(blockScopedVar); // Can access block-scoped variables
  }
  // console.log(blockScopedVar); // This would cause an error (ReferenceError)
}

showScope();
// console.log(functionScopedVar); // This would cause an error (ReferenceError)

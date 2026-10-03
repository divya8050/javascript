// Day 6: JavaScript Functions - Core concepts
// Date: 2026-10-03

// 1. Function Declaration
// A traditional way to define a function. Hoisted to the top.
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Calling a declared function
console.log(greetUser("Alice")); // Output: Hello, Alice!

// 2. Function Expression
// A function defined inside an expression, often assigned to a variable.
// Not hoisted, must be defined before called.
const sayGoodbye = function(name) {
  return `Goodbye, ${name}.`;
};

// Calling an expressed function
console.log(sayGoodbye("Bob")); // Output: Goodbye, Bob.

// 3. Arrow Functions (ES6+)
// A more concise syntax for writing function expressions.
// Useful for short, single-line functions and when 'this' context matters (later topic).
const multiply = (a, b) => a * b;

// Arrow function with multiple lines and explicit return
const calculateSum = (num1, num2) => {
  const sum = num1 + num2; // local variable 'sum'
  return sum;
};

// Calling arrow functions
console.log(multiply(5, 3));    // Output: 15
console.log(calculateSum(10, 20)); // Output: 30

// 4. Function Parameters and Default Values
// Parameters are placeholders for values passed into a function.
// Default values can be set for parameters if no argument is provided.
function introduce(name, greeting = "Hi") {
  return `${greeting}, I'm ${name}.`;
}

console.log(introduce("Charlie"));         // Output: Hi, I'm Charlie.
console.log(introduce("David", "Hey there")); // Output: Hey there, I'm David.

// 5. Returning Values
// Functions can return a value using the 'return' keyword.
// If no return statement, or an empty return, the function returns 'undefined'.
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// Demonstrating scope: variables inside a function are local
let globalVar = "I am global";

function showScope() {
  let localVar = "I am local";
  console.log(globalVar); // Can access globalVar
  console.log(localVar);  // Can access localVar
}

showScope();
// console.log(localVar); // This would cause an error, localVar is not defined outside showScope

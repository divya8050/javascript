/**
 * Day 38: Closures - Core Concept
 * Date: 2026-11-04
 */

// A simple function factory demonstrating closure.
// The inner function 'greeter' closes over the 'greeting' parameter
// from its outer lexical environment (createGreeter).
function createGreeter(greeting) {
  // The returned function 'greeter' remembers the 'greeting' value
  // even after createGreeter has finished executing.
  return function greeter(name) {
    return `${greeting}, ${name}!`;
  };
}

// Create different greeter functions, each with its own 'greeting' captured.
const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');
const sayHola = createGreeter('Hola');

console.log(sayHello('Alice')); // Expected: Hello, Alice!
console.log(sayHi('Bob'));     // Expected: Hi, Bob!
console.log(sayHola('Carlos')); // Expected: Hola, Carlos!

// Export for testing purposes
module.exports = { createGreeter };
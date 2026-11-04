function createGreeter(greeting) {
  // 'greeting' is captured by the inner function, forming a closure
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

// Create different greeter functions, each with its own 'greeting'
const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');
const sayHola = createGreeter('Hola');

console.log(sayHello('Alice')); // Hello, Alice!
console.log(sayHi('Bob'));     // Hi, Bob!
console.log(sayHola('Carlos')); // Hola, Carlos!

// Another common closure pattern: private counter
function createCounter() {
  let count = 0; // This 'count' variable is private to this specific counter instance

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const myCounter = createCounter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.getCount());  // 2

const anotherCounter = createCounter(); // A completely independent counter
console.log(anotherCounter.increment()); // 1
console.log(anotherCounter.getCount());  // 1
console.log(myCounter.getCount());       // 2 (myCounter is unaffected)

module.exports = { createGreeter, createCounter };

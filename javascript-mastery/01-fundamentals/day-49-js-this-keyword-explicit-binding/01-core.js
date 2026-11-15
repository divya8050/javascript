// 01-core.js

// Understanding 'this' in different contexts

// Global context
function showGlobalThis() {
  return this;
}

const obj = {
  name: "MyObject",
  method: function() {
    return this.name;
  },
  arrowMethod: () => {
    // Arrow functions do not have their own 'this' context.
    // They inherit 'this' from their lexical (enclosing) scope.
    // At module top-level in Node.js, 'this' is an empty object {}.
    return this;
  }
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = {
  name: "Alice"
};

const anotherPerson = {
  name: "Bob"
};

// Using .call()
// Invokes the function immediately with a specified 'this' context and arguments passed individually.
const greetAliceCall = greet.call(person, "Hello", "!"); // 'this' is 'person'
const greetBobCall = greet.call(anotherPerson, "Hi", "."); // 'this' is 'anotherPerson'

// Using .apply()
// Invokes the function immediately with a specified 'this' context and arguments passed as an array.
const greetAliceApply = greet.apply(person, ["Greetings", "..."]); // 'this' is 'person'
const greetBobApply = greet.apply(anotherPerson, ["Yo", "!!"]); // 'this' is 'anotherPerson'

// Using .bind()
// Returns a new function with a permanently bound 'this' context. The function is not invoked immediately.
const greetAliceBound = greet.bind(person); // 'this' is permanently 'person' for greetAliceBound
const greetBobBound = greet.bind(anotherPerson, "Hey"); // Can also pre-set arguments

// Exporting for tests
module.exports = {
  showGlobalThis,
  obj,
  greet,
  person,
  anotherPerson,
  greetAliceCall,
  greetBobCall,
  greetAliceApply,
  greetBobApply,
  greetAliceBound,
  greetBobBound
};

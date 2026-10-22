// 01-core.js
// understanding the 'this' keyword and arrow functions

// 1. global context
// In Node.js, 'this' in the global scope refers to the global object (globalThis).
// In a browser, it refers to the window object.
console.log('Global this:', this === globalThis); // Should be true in Node.js

// 2. function context (non-strict mode by default in scripts, but strict in modules/classes)
function showThisInFunction() {
  console.log('Function this:', this === globalThis); // true if called directly
}
showThisInFunction();

// 3. method context
const user = {
  name: 'Alice',
  greet() {
    console.log(`Method this: Hello, my name is ${this.name}`); // 'this' refers to 'user'
  },
  // An arrow function method in an object literal does not bind its own 'this'.
  // It inherits 'this' from its lexical (enclosing) scope.
  // In this case, the lexical scope is the global scope.
  arrowGreet: () => {
    console.log(`Arrow method this: Hello, my name is ${this.name}`); // 'this' refers to globalThis
  }
};
user.greet();
user.arrowGreet(); // Will likely print 'Hello, my name is undefined' or similar as globalThis has no 'name'

// 4. constructor context
function Person(name) {
  this.name = name;
  console.log(`Constructor this: New person created: ${this.name}`); // 'this' refers to the new instance
}
const bob = new Person('Bob');

// 5. explicit binding with .call(), .apply(), .bind()
function introduce(job, city) {
  console.log(`Explicit binding: I am ${this.name}, a ${job} from ${city}.`);
}
const carol = { name: 'Carol' };
introduce.call(carol, 'developer', 'New York'); // 'this' is carol
introduce.apply(carol, ['designer', 'London']); // 'this' is carol

const introduceDave = introduce.bind({ name: 'Dave' }); // Creates a new function with 'this' permanently bound
introduceDave('engineer', 'Paris'); // 'this' is { name: 'Dave' }

// 6. arrow function 'this' - lexical scoping
// Arrow functions do not have their own 'this'. They inherit 'this' from their enclosing scope.
const objWithMethods = {
  value: 100,
  regularMethod() {
    console.log('Regular method this value:', this.value); // 'this' is objWithMethods

    const nestedArrowFunc = () => {
      // 'this' here is inherited from 'regularMethod's scope, which is objWithMethods
      console.log('Nested arrow func this value:', this.value);
    };
    nestedArrowFunc();

    const nestedRegularFunc = function() {
      // 'this' here would be globalThis if not explicitly bound or called as a method
      console.log('Nested regular func this value:', this.value); // undefined, or error in strict mode
    };
    nestedRegularFunc();

    // Correcting 'this' for nested regular function
    const correctlyBoundNestedRegularFunc = nestedRegularFunc.bind(this);
    correctlyBoundNestedRegularFunc();
  },
  // 'this' for this arrow function is the global scope where objWithMethods is defined
  topLevelArrowMethod: () => {
    console.log('Top level arrow method this:', this === globalThis); // true
  }
};

objWithMethods.regularMethod();
objWithMethods.topLevelArrowMethod();

// Summary: Arrow functions simplify 'this' management by providing lexical 'this' binding.
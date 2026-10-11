// Day 14: Learning about classes and 'this' context in JavaScript

// 'this' in a global context (browser: window, node: global/undefined in strict mode)
// In a Node.js script, 'this' at the top level refers to an empty object ({}) unless in an ES module
console.log('Global this (top-level):', this === globalThis); 

// 'this' in a regular function
function showThisRegular() {
  console.log('Regular function this:', this); // depends on how it's called (global, undefined in strict)
}
showThisRegular(); // usually 'global' object in non-strict, 'undefined' in strict mode

// 'this' in an arrow function
// Arrow functions capture 'this' from their surrounding scope (lexical 'this')
const showThisArrow = () => {
  console.log('Arrow function this:', this); // will be the same as the global 'this' here
};
showThisArrow();

// 'this' in an object method
const user = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`); // 'this' refers to the user object
  },
  greetArrow: () => {
    // Arrow function method: 'this' here is still the global 'this', not the user object
    console.log(`Hello from arrow method, name is ${this?.name}`);
  }
};
user.greet();
user.greetArrow(); // will likely output "Hello from arrow method, name is undefined" in Node context

// Constructor functions and 'this'
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.getDetails = function() {
    return `${this.make} ${this.model}`;
  };
}
const myCar = new Car('Honda', 'Civic');
console.log('Constructor car details:', myCar.getDetails());

// ES6 Classes (syntactic sugar over constructor functions)
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Method defined on the prototype
  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  // Another method
  displayProduct() {
    console.log(`${this.name}: ${this.getFormattedPrice()}`);
  }
}

const laptop = new Product('Gaming Laptop', 1200.50);
laptop.displayProduct();

// Understanding prototype chain briefly
console.log('Product prototype check:', Object.getPrototypeOf(laptop) === Product.prototype);
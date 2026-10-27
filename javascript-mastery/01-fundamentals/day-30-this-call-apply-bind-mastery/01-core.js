// Day 30: Mastering 'this' context, call, apply, and bind

// 1. 'this' in global scope
// In a browser, 'this' refers to the window object.
// In Node.js, 'this' refers to the global object (or undefined in strict mode for simple functions).
console.log("1. Global 'this':", this === globalThis); // true in browser, true in Node (for module scope)

// 2. 'this' in a simple function call
function showThis() {
  console.log("2. Simple function 'this':", this === globalThis); // true in non-strict mode browser
  // In strict mode, 'this' would be undefined
}
showThis();

// 3. 'this' as an object method
const user = {
  name: 'Alice',
  greet() {
    console.log("3. Object method 'this': Hello, my name is", this.name);
  },
  sayBye: function() {
    console.log("3a. Object method (func expr) 'this': Goodbye from", this.name);
  }
};
user.greet();
user.sayBye();

// 4. 'this' in an arrow function
// Arrow functions do not have their own 'this'. They lexically inherit 'this' from their enclosing scope.
const userWithArrow = {
  name: 'Bob',
  greetArrow: () => {
    // 'this' here refers to the global object (or module scope in Node) because it's defined in global scope
    console.log("4. Arrow function 'this': Hello, my name is", this?.name || 'unknown (lexical)');
  },
  // A common pattern: arrow function inside a method to preserve 'this'
  info() {
    setTimeout(() => {
      console.log("4a. Arrow inside method 'this': My name is", this.name, "(from setTimeout)");
    }, 100);
  }
};
userWithArrow.greetArrow(); // 'this' will be global, not userWithArrow
userWithArrow.info(); // 'this' inside setTimeout arrow function correctly refers to userWithArrow

// 5. Using call(), apply(), and bind() to explicitly set 'this'
function introduce(city, occupation) {
  console.log(`5. Hello, I'm ${this.name} from ${city}. I work as a ${occupation}.`);
}

const person1 = { name: 'Charlie' };
const person2 = { name: 'Diana' };

// call(): Invokes the function immediately. Arguments are passed individually.
introduce.call(person1, 'New York', 'Engineer');

// apply(): Invokes the function immediately. Arguments are passed as an array.
introduce.apply(person2, ['London', 'Designer']);

// bind(): Returns a *new* function with 'this' permanently bound.
// It does NOT invoke the function immediately.
const introducePerson1 = introduce.bind(person1, 'Paris'); // Partial application of arguments also possible
introducePerson1('Artist'); // Now 'this' is always person1, and 'Paris' is the city

const introducePerson2 = introduce.bind(person2);
introducePerson2('Berlin', 'Writer'); // 'this' is person2, arguments are passed normally

// Example: binding a method for a callback
const button = {
  text: 'Click me',
  onClick() {
    console.log(`5a. Button clicked: ${this.text}`);
  }
};
// If you pass button.onClick directly to an event listener, 'this' would be the event target.
// To preserve 'this' as the button object, use bind.
const boundClickHandler = button.onClick.bind(button);
// In a real scenario, you'd attach this to an actual DOM element:
// document.getElementById('myButton').addEventListener('click', boundClickHandler);
console.log("5a. Simulating button click with bound handler:");
boundClickHandler();

// 'this' in constructor functions (new keyword)
function Car(make, model) {
  this.make = make;
  this.model = model;
  console.log(`6. New Car created: ${this.make} ${this.model}`);
}
const myCar = new Car('Honda', 'Civic');

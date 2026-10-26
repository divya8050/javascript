// Day 29: Understanding 'this' and explicit binding (call, apply, bind)

// 1. 'this' in global context
console.log('Global this:', this === globalThis); // In Node.js, globalThis refers to the global object

// 2. 'this' in a simple function (non-strict mode)
function showThis() {
  console.log('Function this (non-strict):', this === globalThis);
}
showThis();

// 3. 'this' in a simple function (strict mode)
function showThisStrict() {
  'use strict';
  console.log('Function this (strict):', this === undefined);
}
showThisStrict();

// 4. 'this' in a method
const user = {
  name: 'Alice',
  greet: function() {
    console.log(`Method this: Hello, my name is ${this.name}`);
  }
};
user.greet();

// 5. 'this' in an arrow function (lexical 'this')
const person = {
  name: 'Bob',
  sayHi: () => {
    console.log(`Arrow function this: Hi, my name is ${this.name}`); // 'this' refers to global/module scope
  },
  sayHiMethod() {
    const innerArrow = () => {
      console.log(`Arrow function in method this: Hi, my name is ${this.name}`); // 'this' refers to person object
    };
    innerArrow();
  }
};
person.sayHi(); // Will log 'undefined' or global name if it exists
person.sayHiMethod();

console.log('\n--- Explicit Binding with call, apply, bind ---');

// A base function to demonstrate binding
function introduce(city, occupation) {
  console.log(`My name is ${this.name}, I'm ${this.age} years old, from ${city}, and I'm a ${occupation}.`);
}

const person1 = { name: 'Charlie', age: 30 };
const person2 = { name: 'Diana', age: 25 };

// 6. call(): invokes the function immediately with a specified 'this' and arguments passed individually
console.log('Using call():');
introduce.call(person1, 'New York', 'Engineer');
introduce.call(person2, 'London', 'Designer');

// 7. apply(): invokes the function immediately with a specified 'this' and arguments passed as an array
console.log('\nUsing apply():');
introduce.apply(person1, ['San Francisco', 'Developer']);
introduce.apply(person2, ['Paris', 'Artist']);

// 8. bind(): returns a new function with a specified 'this' context (and optional initial arguments) permanently bound
console.log('\nUsing bind():');
const introduceCharlie = introduce.bind(person1, 'Boston'); // Partially apply arguments too
introduceCharlie('Data Scientist'); // Only need to provide the remaining argument

const introduceDiana = introduce.bind(person2);
introduceDiana('Rome', 'Chef'); // All arguments provided at call time
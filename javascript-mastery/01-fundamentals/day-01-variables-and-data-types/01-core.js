const userName = "Alice";
let userAge = 30;

// demonstrating let can be reassigned
userAge = 31;

// const cannot be reassigned (this would throw an error if uncommented)
// userName = "Bob";

// different primitive data types
let productPrice = 129.99; // number
let isActive = true; // boolean
let selectedColor = null; // null
let userAddress; // undefined

// Symbol for unique identifiers (ES6+)
const uniqueId = Symbol('transaction_id');

// BigInt for very large integers (ES2020+)
const largeAmount = 9007199254740991n; // appending 'n' makes it a BigInt

// basic string concatenation
let greeting = "Hello, " + userName + ".";

// using template literals for cleaner strings (ES6+)
let userInfo = `User ${userName} is ${userAge} years old.`;

// console.log examples (commented out for clean file)
// console.log(greeting);
// console.log(userInfo);
// console.log(typeof productPrice);
// console.log(typeof userAddress);
// console.log(typeof uniqueId);
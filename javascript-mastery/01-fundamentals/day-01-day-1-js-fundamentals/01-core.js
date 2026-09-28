// Day 1: Exploring JavaScript fundamentals

// 1. Variables and Data Types

// Using 'let' for values that can change
let userName = "Alice";
let userAge = 30;
let isActiveUser = true;
let userBalance = 1234.56;

// Using 'const' for values that should not change
const appName = "MyDailyApp";
const PI = 3.14159;

// Special values in JavaScript
let emptyValue = null; // Represents intentional absence of any object value
let notAssigned; // This variable is 'undefined' by default

// 2. Basic Operations

// Arithmetic operations
let sum = userAge + 5;
let product = userBalance * 2;
let difference = 100 - userAge;

// String concatenation using template literals (modern way)
let greeting = `Hello, ${userName}! You are ${userAge} years old.`;

// Reassigning 'let' variable values
userName = "Bob";
userAge = 25;

// Trying to reassign a 'const' variable would cause a runtime error
// PI = 3.0; // This line would throw a TypeError if uncommented

// A simple log to see some values (for practice, not for execution in tests)
// console.log(greeting);
// console.log(userName, userAge);

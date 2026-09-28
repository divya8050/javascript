// --- Day 1: JavaScript Fundamentals - Variables and Data Types ---

// 1. Declaring variables
let userName = "Alice"; // can be reassigned
const userAge = 30; // constant, cannot be reassigned

// 2. Primitive Data Types

// Number
let score = 100;
let pi = 3.14;

// String
let greeting = "Hello, " + userName + "!"; // string concatenation
let welcomeMessage = `Welcome, ${userName}! You are ${userAge} years old.`; // template literal

// Boolean
let isActive = true;
let hasPermission = false;

// Undefined (variable declared but not assigned a value)
let favoriteColor;

// Null (intentional absence of any object value)
let selectedItem = null;

// 3. Basic Operators
let num1 = 10;
let num2 = 3;

let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
let remainder = num1 % num2; // Modulus

// 4. Checking types with typeof
// console.log(typeof userName); // string
// console.log(typeof userAge); // number
// console.log(typeof isActive); // boolean
// console.log(typeof favoriteColor); // undefined
// console.log(typeof selectedItem); // object (a historical quirk of JavaScript)

// Reassigning a 'let' variable
userName = "Bob";

// Trying to reassign a 'const' variable would cause an error:
// userAge = 31; // TypeError: Assignment to constant variable.

// Outputting some values (for practice)
// console.log(welcomeMessage);
// console.log(`New user name: ${userName}`);
// console.log(`Sum: ${sum}, Remainder: ${remainder}`);

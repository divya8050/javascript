// Day 1: Exploring fundamental JavaScript concepts

// 1. Variables: let and const
let userName = "Alice"; // A variable whose value can be reassigned
const userAge = 30; // A constant variable, cannot be reassigned

console.log("User Name:", userName);
console.log("User Age:", userAge);

userName = "Bob"; // Reassigning let variable
console.log("Updated User Name:", userName);

// userAge = 31; // This would cause an error: Assignment to constant variable.

// 2. Basic Data Types
// Number
let price = 99.99;
let quantity = 5;
let total = price * quantity; // Arithmetic operation
console.log("Total price:", total);

// String
let greeting = "Hello, ";
let message = greeting + userName + "!"; // String concatenation
console.log("Message:", message);

// Boolean
let isActive = true;
let hasPermission = false;
console.log("Is active user?",
// declare and assign variables
let userName = "Alice";
const userAge = 30; // const for values that don't change
let isStudent = false;

console.log("Hello, " + userName);
console.log("Age:", userAge);
console.log("Is student?", isStudent);

// basic arithmetic operations
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let product = num1 * num2;

console.log("Sum:", sum);
console.log("Product:", product);

// reassigning a let variable
userName = "Bob";
console.log("Updated user name:", userName);

// string concatenation
let greeting = "Welcome, " + userName + "!";
console.log(greeting);

// template literals for better string handling
let personalGreeting = `Hello ${userName}, you are ${userAge} years old.`;
console.log(personalGreeting);

// basic comparison
let isAdult = userAge >= 18;
console.log("Is adult?", isAdult);
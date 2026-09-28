// Day 1: Exploring variables, basic data types, and console logging

// Using 'let' for variables that can be reassigned
let userName = "Alice";
let userAge = 25;
let hasLoggedIn = false;

console.log("Initial user data:");
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Logged in:", hasLoggedIn);

// Using 'const' for variables whose value won't change after initialization
const appName = "MyJSApp";
const releaseYear = 2026;

console.log("\nApplication Info:");
console.log("App Name:", appName);
console.log("Release Year:", releaseYear);

// Reassigning 'let' variables
userName = "Bob";
userAge = 26;
hasLoggedIn = true;

console.log("\nUpdated user data:");
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Logged in:", hasLoggedIn);

// Basic operations with different data types
let greeting = "Hello, " + userName + "!"; // String concatenation
let nextYearAge = userAge + 1; // Number addition
let statusMessage = "User " + userName + " is " + (hasLoggedIn ? "active" : "inactive") + ".";

console.log("\nMessages:");
console.log(greeting);
console.log("Next year, " + userName + " will be " + nextYearAge + " years old.");
console.log(statusMessage);

// Checking data types using typeof operator
console.log("\nType checks:");
console.log("Type of userName:", typeof userName); // string
console.log("Type of userAge:", typeof userAge);   // number
console.log("Type of hasLoggedIn:", typeof hasLoggedIn); // boolean
console.log("Type of appName:", typeof appName);     // string
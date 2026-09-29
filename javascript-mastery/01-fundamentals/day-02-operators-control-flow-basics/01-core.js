// Day 2: Understanding JavaScript Operators and Control Flow
// Date: 2026-09-29

// --- Arithmetic Operators ---
let num1 = 10;
let num2 = 3;

console.log('Addition:', num1 + num2);      // 13
console.log('Subtraction:', num1 - num2);   // 7
console.log('Multiplication:', num1 * num2); // 30
console.log('Division:', num1 / num2);      // 3.333...
console.log('Modulus:', num1 % num2);       // 1 (remainder)

// Increment and Decrement
let counter = 0;
counter++; // counter is now 1
console.log('Incremented:', counter);
counter--; // counter is now 0
console.log('Decremented:', counter);

// --- Comparison Operators ---
let a = 5;
let b = '5';

console.log('Loose equality (==):', a == b);   // true (compares value)
console.log('Strict equality (===):', a === b); // false (compares value AND type)
console.log('Not equal (!=):', a != b);       // false
console.log('Strict not equal (!==):', a !== b); // true

console.log('Greater than (>):', a > 3);      // true
console.log('Less than (<):', a < 3);         // false
console.log('Greater or equal (>=):', a >= 5); // true
console.log('Less or equal (<=):', a <= 5);   // true

// --- Logical Operators ---
let isSunny = true;
let isWarm = false;

console.log('AND (&&):', isSunny && isWarm); // false (both must be true)
console.log('OR (||):', isSunny || isWarm);  // true (at least one must be true)
console.log('NOT (!):', !isSunny);          // false (inverts boolean value)

// --- Basic Control Flow: if/else if/else ---
let temperature = 25;

if (temperature > 30) {
  console.log('It\'s very hot outside!');
} else if (temperature > 20) {
  console.log('It\'s a pleasant warm day.');
} else if (temperature > 10) {
  console.log('It\'s a bit cool.');
} else {
  console.log('It\'s cold!');
}

let userLoggedIn = true;
let userHasPermission = false;

if (userLoggedIn && userHasPermission) {
  console.log('Access granted to dashboard.');
} else if (userLoggedIn && !userHasPermission) {
  console.log('Logged in but no permission.');
} else {
  console.log('Please log in to continue.');
}
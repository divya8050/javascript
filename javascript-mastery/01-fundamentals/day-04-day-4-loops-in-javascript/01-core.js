// 01-core.js

// Day 4: Exploring JavaScript Loops

console.log("--- For Loop ---");
// Basic for loop to count from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(`For loop count: ${i}`);
}

console.log("\n--- While Loop ---");
let count = 0;
// While loop to count from 0 to 3
while (count < 4) {
  console.log(`While loop count: ${count}`);
  count++;
}

console.log("\n--- Do...While Loop ---");
let starter = 0;
// Do-while loop always executes at least once
do {
  console.log(`Do-while loop count: ${starter}`);
  starter++;
} while (starter < 3);

// Example: iterating over an array with for...of
const fruits = ["apple", "banana", "cherry"];
console.log("\n--- For...of Loop (for arrays) ---");
for (const fruit of fruits) {
  console.log(`I like ${fruit}`);
}
// Day 53 of JavaScript mastery.
// Date: 2026-11-19.

// Core functional array methods: map, filter, reduce

const numbers = [1, 2, 3, 4, 5, 6];

// .map(): Transforms each element in an array and returns a new array.
const doubledNumbers = numbers.map(num => num * 2);
// console.log('Doubled:', doubledNumbers); // Expected: [2, 4, 6, 8, 10, 12]

// .filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log('Evens:', evenNumbers); // Expected: [2, 4, 6]

// .reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log('Sum:', sumOfNumbers); // Expected: 21 (1+2+3+4+5+6)

// Chaining methods: Combine map, filter, and reduce for complex operations.
// Get the sum of squares of all odd numbers.
const sumOfSquaresOfOdds = numbers
  .filter(num => num % 2 !== 0) // [1, 3, 5]
  .map(num => num * num)       // [1, 9, 25]
  .reduce((acc, curr) => acc + curr, 0); // 1 + 9 + 25 = 35
// console.log('Sum of squares of odds:', sumOfSquaresOfOdds); // Expected: 35

module.exports = {
  doubledNumbers,
  evenNumbers,
  sumOfNumbers,
  sumOfSquaresOfOdds
};

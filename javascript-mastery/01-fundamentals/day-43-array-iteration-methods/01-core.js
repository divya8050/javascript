// Day 43: Mastering array iteration methods
// Date: 2026-11-09

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Original numbers:', numbers);

// Using map to transform elements: create a new array with results of calling a provided function
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers (map):', doubledNumbers);

// Using filter to select elements: create a new array with all elements that pass the test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers (filter):', evenNumbers);

// Using reduce to aggregate values: execute a reducer function on each element of the array
const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of numbers (reduce):', sumOfNumbers);

// Finding the maximum number using reduce
const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
console.log('Maximum number (reduce):', maxNumber);

// Chaining methods for complex transformations
// Get the sum of squares of all odd numbers
const sumOfSquaresOfOddNumbers = numbers
  .filter(num => num % 2 !== 0) // [1, 3, 5, 7, 9]
  .map(num => num * num)       // [1, 9, 25, 49, 81]
  .reduce((acc, current) => acc + current, 0); // 1 + 9 + 25 + 49 + 81 = 165
console.log('Sum of squares of odd numbers:', sumOfSquaresOfOddNumbers);

const words = ['apple', 'banana', 'cat', 'dog', 'elephant'];
const longWords = words.filter(word => word.length > 3);
console.log('Long words:', longWords);

const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log('Capitalized words:', capitalizedWords);
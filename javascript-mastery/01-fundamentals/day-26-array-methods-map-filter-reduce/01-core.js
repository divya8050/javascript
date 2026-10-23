const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using map to transform each element
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

// using filter to select elements based on a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// using reduce to aggregate all elements into a single value
const sumOfNumbers = numbers.reduce((accumulator, currentNum) => {
  return accumulator + currentNum;
}, 0); // 0 is the initial value of the accumulator
console.log('Sum of numbers:', sumOfNumbers);

// a more complex reduce example: counting occurrences
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordCounts = words.reduce((counts, word) => {
  counts[word] = (counts[word] || 0) + 1;
  return counts;
}, {});
console.log('Word counts:', wordCounts);

export { numbers, doubledNumbers, evenNumbers, sumOfNumbers, words, wordCounts };

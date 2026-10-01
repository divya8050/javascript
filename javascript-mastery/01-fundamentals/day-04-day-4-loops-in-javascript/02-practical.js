// 02-practical.js

// Function to generate even numbers up to a given limit
function getEvenNumbersUpTo(limit) {
  const evenNumbers = [];
  // Start from 0 and increment by 2
  for (let i = 0; i <= limit; i += 2) {
    evenNumbers.push(i);
  }
  return evenNumbers;
}

// Another practical example: calculating sum of numbers
function calculateSumUpTo(n) {
  let sum = 0;
  let current = 1;
  while (current <= n) {
    sum += current;
    current++;
  }
  return sum;
}

// Export for testing
module.exports = {
  getEvenNumbersUpTo,
  calculateSumUpTo,
};

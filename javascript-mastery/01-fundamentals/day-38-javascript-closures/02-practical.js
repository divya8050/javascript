/**
 * Day 38: Closures - Practical Application
 * Date: 2026-11-04
 */

// A practical use case: creating a private counter using closures.
// The 'count' variable is private to each counter instance.
function createCounter() {
  let count = 0; // 'count' is closed over by the returned methods

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

// Create multiple independent counter instances.
const counter1 = createCounter();
const counter2 = createCounter();

console.log('Counter 1 initial:', counter1.getCount()); // 0
counter1.increment();
counter1.increment();
console.log('Counter 1 after increments:', counter1.getCount()); // 2

console.log('Counter 2 initial:', counter2.getCount()); // 0
counter2.increment();
console.log('Counter 2 after increment:', counter2.getCount()); // 1

counter1.decrement();
console.log('Counter 1 after decrement:', counter1.getCount()); // 1

// Export for testing purposes
module.exports = { createCounter };
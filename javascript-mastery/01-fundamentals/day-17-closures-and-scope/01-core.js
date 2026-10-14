// 01-core.js
// Day 17: Closures and Scope
// Date: 2026-10-14

/**
 * Creates a simple counter function that retains its count
 * using a closure. Each call to createCounter returns a
 * new, independent counter.
 */
function createCounter() {
  let count = 0; // 'count' is in the outer function's scope

  // The returned inner function 'closes over' the 'count' variable
  return function increment() {
    count++;
    return count;
  };
}

// Example usage:
// const counter1 = createCounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2

// const counter2 = createCounter(); // A new, independent counter instance
// console.log(counter2()); // 1
// console.log(counter1()); // 3 (counter1 is unaffected by counter2)

// Export for testing if using module system, otherwise just for practice
// module.exports = { createCounter };
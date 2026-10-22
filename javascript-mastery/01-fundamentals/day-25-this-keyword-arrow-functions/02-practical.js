// 02-practical.js
// practical application of 'this' binding: a simple counter class

class IntervalCounter {
  constructor(initialValue = 0) {
    this.count = initialValue;
    this.intervalId = null;

    // If `increment` were a regular method (e.g., `increment() { this.count++; }`),
    // we would need to bind 'this' here for it to work correctly with `setInterval`.
    // e.g., `this.increment = this.increment.bind(this);`
    // However, by defining `increment` as an arrow function property, 'this' is lexically bound.
  }

  // Using an arrow function as a class property ensures 'this' is always
  // bound to the instance of IntervalCounter, regardless of how it's called.
  increment = () => {
    this.count++;
    console.log(`[${this.name || 'Unnamed Counter'}] Current count: ${this.count}`);
  }

  start(intervalMs = 1000, name = 'Counter') {
    if (this.intervalId) {
      console.log(`[${name}] Counter is already running.`);
      return;
    }
    this.name = name;
    console.log(`[${this.name}] Starting counter from ${this.count}...`);
    // 'this.increment' is an arrow function, so its 'this' correctly refers to the class instance.
    this.intervalId = setInterval(this.increment, intervalMs);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log(`[${this.name}] Counter stopped at ${this.count}.`);
    } else {
      console.log(`[${this.name}] Counter not running.`);
    }
  }

  getCurrentCount() {
    return this.count;
  }
}

// --- Example Usage ---

const myCounter = new IntervalCounter(0);
myCounter.start(1000, 'My Counter'); // Start counting every second

setTimeout(() => {
  myCounter.stop();
  console.log('Final count for My Counter:', myCounter.getCurrentCount());
}, 5500); // Stop after 5.5 seconds (should have 5 increments)


const fastCounter = new IntervalCounter(10);
setTimeout(() => {
  fastCounter.start(500, 'Fast Counter'); // Start later, count faster
}, 2000);

setTimeout(() => {
  fastCounter.stop();
  console.log('Final count for Fast Counter:', fastCounter.getCurrentCount());
}, 4500); // Stop after 4.5 seconds (should have 5 increments from 10 to 15)


// Demonstrating the problem if 'increment' were a regular function without binding:
/*
class BrokenCounter {
  constructor(initialValue = 0) {
    this.count = initialValue;
    this.intervalId = null;
  }

  increment() { // This is a regular method
    // 'this' here would refer to the global object (or undefined in strict mode)
    // when called by setInterval, causing 'this.count' to fail.
    this.count++;
    console.log(`Broken Counter: ${this.count}`);
  }

  start(intervalMs = 1000) {
    console.log('Starting broken counter...');
    this.intervalId = setInterval(this.increment, intervalMs); // 'this' context is lost!
  }

  stop() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}

const broken = new BrokenCounter(0);
// broken.start(1000); // Uncomment to see it fail (this.count would be NaN or error)
*/
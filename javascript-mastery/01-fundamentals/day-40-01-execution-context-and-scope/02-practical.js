// Tracking execution steps using a lightweight call stack helper

class CallStackTracker {
  constructor() {
    this.stack = [];
  }

  // Push context when entering a function
  enter(name) {
    this.stack.push({ name, time: Date.now() });
  }

  // Pop context when leaving
  leave() {
    return this.stack.pop();
  }

  depth() {
    return this.stack.length;
  }
}

const tracker = new CallStackTracker();

function calculate(a, b) {
  tracker.enter('calculate');
  const sum = a + b;
  tracker.leave();
  return sum;
}

console.log('Calculated:', calculate(5, 10));

module.exports = { CallStackTracker, calculate };

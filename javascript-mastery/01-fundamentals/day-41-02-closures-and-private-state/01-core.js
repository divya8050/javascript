// Closure holding private counter state

function createCounter(initial = 0) {
  let value = initial;

  return {
    add(n = 1) {
      value += n;
      return value;
    },
    sub(n = 1) {
      value -= n;
      return value;
    },
    get() {
      return value;
    }
  };
}

const counter = createCounter(5);
console.log('Counter:', counter.add(3)); // 8

module.exports = { createCounter };

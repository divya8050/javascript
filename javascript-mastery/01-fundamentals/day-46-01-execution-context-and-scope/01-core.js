// Testing variable hoisting and function declarations

function greet(name) {
  return `Hello, ${name}`;
}

// Function declarations are available anywhere in scope
const message = greet('developer');
console.log(message);

// var is hoisted as undefined, let/const stay in TDZ
var count = 10;
let step = 1;

function increment() {
  count += step;
  return count;
}

console.log('Result:', increment());

module.exports = { greet, increment };

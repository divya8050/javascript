// Day 11: Learning ES6 Classes
// Core concept: Basic class definition, constructor, and instance methods.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // An instance method
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Another instance method
  getAgeInMonths() {
    return this.age * 12;
  }
}

// Example usage:
const alice = new Person('Alice', 30);
const bob = new Person('Bob', 24);

// console.log(alice.greet());
// console.log(`${bob.name} is ${bob.getAgeInMonths()} months old.`);

// Export for testing or other modules
module.exports = Person;

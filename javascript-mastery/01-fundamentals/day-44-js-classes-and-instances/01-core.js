class Person {
  // The constructor method is called automatically when a new object is created.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to describe the person
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Method to celebrate a birthday
  haveBirthday() {
    this.age++;
    return `Happy birthday, ${this.name}! You are now ${this.age}.`;
  }
}

// Creating instances of the Person class
const alice = new Person('Alice', 30);
const bob = new Person('Bob', 24);

// console.log(alice.greet());
// console.log(bob.greet());

// alice.haveBirthday();
// console.log(alice.greet());
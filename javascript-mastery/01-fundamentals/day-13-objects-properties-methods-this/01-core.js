// Day 13: Exploring JavaScript Objects
// Date: 2026-10-10

// 1. Object Literal Syntax: The most common way to create an object.
const person = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 30,
  occupation: 'Software Developer',
  hobbies: ['reading', 'hiking', 'coding'],

  // 2. Object Methods: Functions stored as object properties.
  // 'this' keyword refers to the object on which the method is called.
  greet: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  },

  getBirthYear: function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
};

console.log('--- Initial Person Object ---');
console.log(person);
console.log(person.greet()); // Calling a method
console.log(`Born in: ${person.getBirthYear()}`);

// 3. Accessing Properties: Using dot notation or bracket notation.
console.log('
--- Accessing Properties ---');
console.log(`First Name (dot notation): ${person.firstName}`);
console.log(`Occupation (bracket notation): ${person['occupation']}`);

const propName = 'age';
console.log(`Age (dynamic bracket notation): ${person[propName]}`);

// 4. Modifying Properties: Assigning new values.
console.log('
--- Modifying Properties ---');
person.age = 31; // Update existing property
person.email = 'alice.smith@example.com'; // Add a new property

console.log(`Updated Age: ${person.age}`);
console.log(`New Email: ${person.email}`);

// 5. Deleting Properties: Using the 'delete' operator.
console.log('
--- Deleting Properties ---');
delete person.hobbies;
console.log('Hobbies after deletion:', person.hobbies); // Should be undefined

// Understanding 'this' context (briefly):
// When a method is extracted and called as a standalone function,
// 'this' might not refer to the original object.
const standaloneGreet = person.greet;
// console.log(standaloneGreet()); // In strict mode Node.js, this would be undefined, causing an error.

// We can explicitly set 'this' using call(), apply(), or bind().
const anotherPerson = { firstName: 'Bob', lastName: 'Johnson' };
console.log(person.greet.call(anotherPerson)); // 'this' is now 'anotherPerson'

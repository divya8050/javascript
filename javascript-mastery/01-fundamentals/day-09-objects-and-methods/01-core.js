// Day 9: Objects and Object Methods
// Date: 2026-10-06

// 1. Object Literal: The most common way to create an object.
const userProfile = {
  firstName: 'Lena',
  lastName: 'Martinez',
  age: 28,
  isActive: true,
  // A method is a function stored as a property.
  greet: function() {
    // `this` refers to the object itself.
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
  getBirthYear: function() {
    return new Date().getFullYear() - this.age;
  }
};

console.log('--- User Profile ---');
console.log(userProfile.firstName); // Accessing properties using dot notation
console.log(userProfile['lastName']); // Accessing properties using bracket notation
userProfile.greet(); // Calling a method
console.log(`Born in: ${userProfile.getBirthYear()}`);

// 2. Adding new properties and methods
userProfile.email = 'lena.m@example.com';
userProfile.updateAge = function(newAge) {
  this.age = newAge;
  console.log(`Age updated to ${this.age}.`);
};

console.log('\n--- Updated User Profile ---');
console.log(userProfile.email);
userProfile.updateAge(29);

// 3. Deleting properties
delete userProfile.isActive;
console.log('isActive property after deletion:', userProfile.isActive); // undefined

// 4. Object constructor (less common for simple objects)
const product = new Object();
product.name = 'Laptop';
product.price = 1200;
product.description = 'Powerful computing machine';
product.displayInfo = function() {
  console.log(`Product: ${this.name}, Price: $${this.price}`);
};

console.log('\n--- Product Info ---');
product.displayInfo();

// 5. Checking for properties
console.log('Does userProfile have age?', 'age' in userProfile); // true
console.log('Does userProfile have isActive?', 'isActive' in userProfile); // false

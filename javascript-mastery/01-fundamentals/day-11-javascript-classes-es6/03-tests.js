// Day 11: Testing ES6 Classes
// Using Node's built-in 'assert' module for basic tests.

const assert = require('assert');
const Person = require('./01-core');
const { Vehicle, Car, Motorcycle } = require('./02-practical');

// Test 01-core.js - Person class
console.log('--- Testing Person Class ---');

const alice = new Person('Alice', 30);
assert.strictEqual(alice.name, 'Alice', 'Person name should be Alice');
assert.strictEqual(alice.age, 30, 'Person age should be 30');
assert.strictEqual(alice.greet(), 'Hello, my name is Alice and I am 30 years old.', 'Person greet method is incorrect');
assert.strictEqual(alice.getAgeInMonths(), 360, 'Person age in months is incorrect');

console.log('Person class tests passed!');

// Test 02-practical.js - Vehicle, Car, Motorcycle classes
console.log('\n--- Testing Vehicle Hierarchy ---');

// Test Vehicle base class
const genericVehicle = new Vehicle('BrandX', 'ModelY', 2018);
assert.strictEqual(genericVehicle.make, 'BrandX', 'Vehicle make should be BrandX');
assert.strictEqual(genericVehicle.model, 'ModelY', 'Vehicle model should be ModelY');
assert.strictEqual(genericVehicle.year, 2018, 'Vehicle year should be 2018');
assert.strictEqual(genericVehicle.getDetails(), '2018 BrandX ModelY', 'Vehicle getDetails method is incorrect');

// Test Vehicle getter 'age'
const currentYear = new Date().getFullYear();
assert.strictEqual(genericVehicle.age, currentYear - 2018, 'Vehicle age getter is incorrect');

// Test Vehicle static method
assert.strictEqual(Vehicle.describeVehicleType(), 'This is a generic vehicle class.', 'Vehicle static method is incorrect');

// Test Car subclass
const myCar = new Car('Toyota', 'Camry', 2020, 4);
assert.strictEqual(myCar.make, 'Toyota', 'Car make should be Toyota');
assert.strictEqual(myCar.numDoors, 4, 'Car numDoors should be 4');
assert.strictEqual(myCar.getDetails(), '2020 Toyota Camry with 4 doors.', 'Car getDetails method (overridden) is incorrect');
assert.strictEqual(myCar.honk(), 'Beep beep!', 'Car honk method is incorrect');

// Test Motorcycle subclass
const myMotorcycle = new Motorcycle('Harley', 'Iron', 2022, false);
assert.strictEqual(myMotorcycle.model, 'Iron', 'Motorcycle model should be Iron');
assert.strictEqual(myMotorcycle.hasSidecar, false, 'Motorcycle hasSidecar should be false');
assert.strictEqual(myMotorcycle.ride(), 'Riding the Harley Iron.', 'Motorcycle ride method is incorrect');

const sidecarMotorcycle = new Motorcycle('BMW', 'R75', 1942, true);
assert.strictEqual(sidecarMotorcycle.ride(), 'Riding the BMW R75 with a sidecar.', 'Motorcycle ride with sidecar is incorrect');

console.log('Vehicle hierarchy tests passed!');

console.log('\nAll Day 11 class tests completed successfully!');

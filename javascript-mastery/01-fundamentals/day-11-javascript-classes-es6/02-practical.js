// Day 11: Practical application of ES6 Classes
// Concept: Inheritance, getters/setters, and static methods.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Instance method
  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  // Getter for calculated property
  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  // Static method - belongs to the class itself, not instances
  static describeVehicleType() {
    return "This is a generic vehicle class.";
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year); // Call parent class constructor
    this.numDoors = numDoors;
  }

  // Override parent method or add new one
  getDetails() {
    return `${super.getDetails()} with ${this.numDoors} doors.`;
  }

  // Specific car method
  honk() {
    return "Beep beep!";
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, hasSidecar) {
    super(make, model, year);
    this.hasSidecar = hasSidecar;
  }

  ride() {
    return `Riding the ${this.make} ${this.model}${this.hasSidecar ? ' with a sidecar' : ''}.`;
  }
}

// Example usage:
// const myCar = new Car('Toyota', 'Camry', 2020, 4);
// console.log(myCar.getDetails());
// console.log(`Car age: ${myCar.age} years`);
// console.log(myCar.honk());

// const myMotorcycle = new Motorcycle('Harley-Davidson', 'Fat Boy', 2022, false);
// console.log(myMotorcycle.ride());
// console.log(Vehicle.describeVehicleType()); // Calling static method

module.exports = { Vehicle, Car, Motorcycle };

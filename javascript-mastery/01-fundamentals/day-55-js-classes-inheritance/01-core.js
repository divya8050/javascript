class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  startEngine() {
    return `${this.make} ${this.model} engine started.`
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year); // Call parent class constructor
    this.doors = doors;
  }

  getDetails() {
    // Override parent method and extend functionality
    return `${super.getDetails()}, ${this.doors} doors`;
  }

  honk() {
    return `${this.model} goes 'beep beep!'`;
  }
}

// Export for testing or practical usage
module.exports = { Vehicle, Car };

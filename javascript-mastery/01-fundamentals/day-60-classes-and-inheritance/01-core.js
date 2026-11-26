class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.isRunning = false;
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      return `${this.make} ${this.model} started.`;
    }
    return `${this.make} ${this.model} is already running.`;
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      return `${this.make} ${this.model} stopped.`;
    }
    return `${this.make} ${this.model} is already off.`;
  }

  getDetails() {
    return `Vehicle: ${this.make} ${this.model}. Running: ${this.isRunning ? 'Yes' : 'No'}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, fuelType) {
    super(make, model); // Call the parent class constructor
    this.year = year;
    this.fuelType = fuelType;
  }

  honk() {
    return "Beep beep!";
  }

  // Override the getDetails method
  getDetails() {
    // Use super.getDetails() to get parent details and extend them
    const parentDetails = super.getDetails();
    return `${parentDetails}, Year: ${this.year}, Fuel: ${this.fuelType}`;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, engineSize) {
    super(make, model);
    this.engineSize = engineSize;
  }

  wheelie() {
    return "Doing a wheelie!";
  }

  getDetails() {
    return `${super.getDetails()}, Engine: ${this.engineSize}cc`;
  }
}

// Export for testing or use in other modules
module.exports = { Vehicle, Car, Motorcycle };

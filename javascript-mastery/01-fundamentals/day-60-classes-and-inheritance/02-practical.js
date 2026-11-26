const { Vehicle, Car } = require('./01-core'); // Assuming core classes are in 01-core.js

class InventoryItem {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  updateQuantity(amount) {
    this.quantity += amount;
    if (this.quantity < 0) this.quantity = 0; // Prevent negative quantity
    return `Quantity for ${this.name} updated to ${this.quantity}.`;
  }

  displayInfo() {
    return `${this.name} | Price: $${this.price.toFixed(2)} | Qty: ${this.quantity} | Value: $${this.getTotalValue().toFixed(2)}`;
  }
}

class VehicleInventoryItem extends InventoryItem {
  constructor(vehicle, price, quantity) {
    // Vehicle is an instance of Car, Motorcycle, etc.
    super(`${vehicle.make} ${vehicle.model} (${vehicle.year || vehicle.engineSize})`, price, quantity);
    this.vehicleDetails = vehicle; // Store the actual vehicle object
  }

  // Override displayInfo to include vehicle-specific details
  displayInfo() {
    return `${this.name} | Price: $${this.price.toFixed(2)} | Qty: ${this.quantity} | Value: $${this.getTotalValue().toFixed(2)} | ${this.vehicleDetails.getDetails()}`;
  }
}

class InventoryManager {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    const existingItem = this.items.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.updateQuantity(item.quantity); // Just update quantity if item exists
      return `Updated quantity for ${item.name}.`;
    } else {
      this.items.push(item);
      return `Added new item: ${item.name}.`;
    }
  }

  removeItem(itemName) {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.name !== itemName);
    if (this.items.length < initialLength) {
      return `Removed item: ${itemName}.`;
    } else {
      return `Item '${itemName}' not found.`;
    }
  }

  getTotalInventoryValue() {
    return this.items.reduce((total, item) => total + item.getTotalValue(), 0);
  }

  listAllItems() {
    return this.items.map(item => item.displayInfo());
  }
}

// Example Usage:
// const myCar = new Car('Toyota', 'Camry', 2023, 'Petrol');
// const carItem = new VehicleInventoryItem(myCar, 25000, 1);

// const bike = new Motorcycle('Harley', 'Iron 883', 883);
// const bikeItem = new VehicleInventoryItem(bike, 12000, 1);

// const manager = new InventoryManager();
// manager.addItem(carItem);
// manager.addItem(bikeItem);
// console.log(manager.listAllItems());
// console.log('Total Inventory Value:', manager.getTotalInventoryValue());

module.exports = { InventoryItem, VehicleInventoryItem, InventoryManager };

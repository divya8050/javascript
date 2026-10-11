// Day 14: Practical application of classes - a simple inventory system

// Define a Product class
class InventoryItem {
  constructor(id, name, quantity, price) {
    if (!id || !name || quantity === undefined || price === undefined) {
      throw new Error('All item properties (id, name, quantity, price) are required.');
    }
    if (quantity < 0 || price < 0) {
        throw new Error('Quantity and price cannot be negative.');
    }
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  // Method to get item details
  getItemDetails() {
    return `${this.name} (ID: ${this.id}) - Qty: ${this.quantity}, Price: $${this.price.toFixed(2)}`;
  }

  // Method to update quantity
  updateQuantity(newQuantity) {
    if (newQuantity < 0) {
      throw new Error('Quantity cannot be negative.');
    }
    this.quantity = newQuantity;
    return this.quantity;
  }

  // Method to update price
  updatePrice(newPrice) {
    if (newPrice < 0) {
      throw new Error('Price cannot be negative.');
    }
    this.price = newPrice;
    return this.price;
  }
}

// Define an Inventory Manager class
class InventoryManager {
  constructor() {
    this.items = []; // Store InventoryItem objects
  }

  addItem(item) {
    if (!(item instanceof InventoryItem)) {
      throw new Error('Can only add instances of InventoryItem.');
    }
    if (this.items.some(existingItem => existingItem.id === item.id)) {
      throw new Error(`Item with ID ${item.id} already exists.`);
    }
    this.items.push(item);
    return true;
  }

  findItemById(id) {
    return this.items.find(item => item.id === id);
  }

  removeItemById(id) {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.id !== id);
    return this.items.length < initialLength; // True if an item was removed
  }

  getTotalInventoryValue() {
    return this.items.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  listAllItems() {
    if (this.items.length === 0) {
      return 'No items in inventory.';
    }
    return this.items.map(item => item.getItemDetails()).join('\n');
  }
}

// Example usage:
const inventory = new InventoryManager();

const item1 = new InventoryItem('A001', 'Keyboard', 10, 75.99);
const item2 = new InventoryItem('B002', 'Mouse', 25, 25.50);

inventory.addItem(item1);
inventory.addItem(item2);

console.log('Current Inventory:\n', inventory.listAllItems());

const foundItem = inventory.findItemById('A001');
if (foundItem) {
  foundItem.updateQuantity(8);
  foundItem.updatePrice(70.00);
  console.log('\nUpdated item A001:', foundItem.getItemDetails());
}

console.log('\nTotal inventory value:', inventory.getTotalInventoryValue().toFixed(2));

inventory.removeItemById('B002');
console.log('\nInventory after removing B002:\n', inventory.listAllItems());

// Export for testing
module.exports = { InventoryItem, InventoryManager };
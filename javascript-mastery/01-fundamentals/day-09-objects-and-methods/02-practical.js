// Practical application: A simple inventory management system using objects.

const inventoryManager = {
  items: [], // Array to store inventory items

  /**
   * Adds a new item to the inventory or updates quantity if item exists.
   * @param {string} name - The name of the item.
   * @param {number} quantity - The quantity to add.
   * @param {number} price - The price per unit of the item.
   * @returns {object} The item object after adding/updating.
   */
  addItem(name, quantity, price) {
    const existingItem = this.items.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity; // Update quantity if item already exists
      console.log(`Updated quantity for ${name}. New quantity: ${existingItem.quantity}`);
      return existingItem;
    }
    const newItem = { name, quantity, price };
    this.items.push(newItem);
    console.log(`Added new item: ${name} (Qty: ${quantity}, Price: $${price})`);
    return newItem;
  },

  /**
   * Removes an item from the inventory.
   * @param {string} name - The name of the item to remove.
   * @returns {boolean} True if the item was removed, false otherwise.
   */
  removeItem(name) {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.name !== name);
    if (this.items.length < initialLength) {
      console.log(`Removed item: ${name}`);
      return true;
    }
    console.log(`Item not found: ${name}`);
    return false;
  },

  /**
   * Updates the quantity of an existing item.
   * @param {string} name - The name of the item to update.
   * @param {number} newQuantity - The new quantity for the item.
   * @returns {boolean} True if the quantity was updated, false otherwise.
   */
  updateQuantity(name, newQuantity) {
    const item = this.items.find(item => item.name === name);
    if (item) {
      item.quantity = newQuantity;
      console.log(`Quantity for ${name} updated to ${newQuantity}.`);
      return true;
    }
    console.log(`Item not found for quantity update: ${name}`);
    return false;
  },

  /**
   * Calculates the total monetary value of all items in the inventory.
   * @returns {number} The total value.
   */
  getTotalValue() {
    return this.items.reduce((total, item) => total + (item.quantity * item.price), 0);
  },

  /**
   * Lists all items currently in the inventory.
   * @returns {Array<object>} A copy of the items array.
   */
  listItems() {
    return [...this.items]; // Return a shallow copy to prevent external modification of the internal array
  }
};

// Export the manager for testing purposes
module.exports = inventoryManager;

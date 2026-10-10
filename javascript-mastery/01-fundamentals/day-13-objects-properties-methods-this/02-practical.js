// Day 13: Practical - Simple Product Catalog Manager
// Date: 2026-10-10

// A practical object to manage a list of products in a catalog.
const productCatalog = {
  products: [],
  nextId: 1, // Simple ID generator for new products

  /**
   * Adds a new product to the catalog.
   */
  addProduct: function(name, price) {
    if (!name || typeof name !== 'string' || price === undefined || typeof price !== 'number' || price < 0) {
      console.error('Invalid product data: name must be string, price a positive number.');
      return null;
    }
    const newProduct = {
      id: this.nextId++,
      name: name,
      price: price,
      addedDate: new Date().toISOString() // Timestamp for when added
    };
    this.products.push(newProduct);
    console.log(`Added product: ${newProduct.name} (ID: ${newProduct.id})`);
    return newProduct;
  },

  /**
   * Retrieves a product by its ID.
   */
  getProductDetails: function(id) {
    return this.products.find(product => product.id === id);
  },

  /**
   * Updates the price of an existing product.
   */
  updateProductPrice: function(id, newPrice) {
    if (newPrice === undefined || typeof newPrice !== 'number' || newPrice < 0) {
      console.error('Invalid new price: must be a positive number.');
      return false;
    }
    const product = this.getProductDetails(id);
    if (product) {
      product.price = newPrice;
      console.log(`Updated price for ${product.name} (ID: ${product.id}) to $${newPrice}`);
      return true;
    }
    console.warn(`Product with ID ${id} not found for price update.`);
    return false;
  },

  /**
   * Lists all products currently in the catalog.
   */
  listAllProducts: function() {
    // Return a shallow copy to prevent direct external modification of the internal array
    return [...this.products];
  },

  /**
   * Calculates the total monetary value of all products in the catalog.
   */
  getTotalCatalogValue: function() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
};

// Example usage:
console.log('--- Initializing Catalog ---');
const p1 = productCatalog.addProduct('Laptop Pro', 1200.00);
const p2 = productCatalog.addProduct('Mechanical Keyboard', 150.00);
productCatalog.addProduct('Wireless Mouse', 45.50);

console.log('
--- Listing All Products ---');
console.log(productCatalog.listAllProducts());

console.log('
--- Getting Product Details ---');
const laptopDetails = productCatalog.getProductDetails(p1.id);
console.log('Laptop details:', laptopDetails);

const nonExistentProduct = productCatalog.getProductDetails(999);
console.log('Non-existent product:', nonExistentProduct);

console.log('
--- Updating Product Price ---');
productCatalog.updateProductPrice(p2.id, 165.99);
console.log('Keyboard details after update:', productCatalog.getProductDetails(p2.id));

console.log('
--- Final Catalog List ---');
console.log(productCatalog.listAllProducts());

console.log('
--- Total Catalog Value ---');
console.log(`Total value of catalog: $${productCatalog.getTotalCatalogValue().toFixed(2)}`);

// Export the catalog object for testing purposes
module.exports = productCatalog;

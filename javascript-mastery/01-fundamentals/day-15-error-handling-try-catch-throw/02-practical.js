/**
 * Day 15 of JavaScript mastery: Practical Error Handling
 * Topic: Input validation with custom errors for a product management system
 * Date: 2026-10-12
 */

// Define a custom error class for specific validation failures
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field; // Helps identify which field caused the error
  }
}

// Function to validate product data
function validateProductData(product) {
  if (!product || typeof product !== 'object') {
    throw new TypeError("Product data must be an object.");
  }

  if (typeof product.name !== 'string' || product.name.trim() === '') {
    throw new ValidationError("Product name cannot be empty.", "name");
  }

  if (typeof product.price !== 'number' || product.price <= 0) {
    throw new ValidationError("Product price must be a positive number.", "price");
  }

  if (typeof product.quantity !== 'number' || !Number.isInteger(product.quantity) || product.quantity < 0) {
    throw new ValidationError("Product quantity must be a non-negative integer.", "quantity");
  }

  return true; // Data is valid if no errors were thrown
}

// Function to simulate submitting product data to a backend
function submitProduct(productData) {
  console.log(`Attempting to submit product: ${productData ? productData.name : 'N/A'}`);
  try {
    validateProductData(productData);
    // Simulate API call success
    console.log(`SUCCESS: Product '${productData.name}' submitted successfully.`);
    return { success: true, message: "Product submitted." };
  } catch (error) {
    // Handle different types of errors gracefully
    if (error instanceof ValidationError) {
      console.error(`FAILURE: Validation error for field '${error.field}': ${error.message}`);
    } else if (error instanceof TypeError) {
      console.error(`FAILURE: Invalid data type: ${error.message}`);
    } else {
      console.error(`FAILURE: An unexpected error occurred: ${error.message}`);
    }
    return { success: false, message: error.message };
  } finally {
    console.log("Product submission process finished.\n");
  }
}

// --- Usage Examples ---

// Valid product
submitProduct({
  name: "Laptop Pro",
  price: 1200.50,
  quantity: 5
});

// Invalid product: missing name
submitProduct({
  name: "",
  price: 89.99,
  quantity: 10
});

// Invalid product: negative price
submitProduct({
  name: "Gaming Mouse",
  price: -25.00,
  quantity: 20
});

// Invalid product: non-integer quantity
submitProduct({
  name: "USB Hub",
  price: 15.00,
  quantity: 3.5
});

// Invalid product: not an object
submitProduct("just a string");

// Invalid product: null
submitProduct(null);

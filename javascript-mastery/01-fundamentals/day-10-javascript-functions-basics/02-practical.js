// Day 10 Practical: A simple product price calculator function
// This utility calculates the final price of an item after applying quantity and an optional discount.

/**
 * Calculates the final price of a product based on its unit price, quantity, and an optional discount rate.
 * @param {number} unitPrice - The price of a single unit of the product.
 * @param {number} quantity - The number of units purchased.
 * @param {number} [discountRate=0] - The discount percentage (e.g., 0.10 for 10% off). Defaults to 0.
 * @returns {number | string} The final calculated price, or an error message if inputs are invalid.
 */
const calculateFinalPrice = (unitPrice, quantity, discountRate = 0) => {
  // Basic input validation
  if (typeof unitPrice !== 'number' || unitPrice < 0) {
    return 'Error: Unit price must be a non-negative number.';
  }
  if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 0) {
    return 'Error: Quantity must be a non-negative integer.';
  }
  if (typeof discountRate !== 'number' || discountRate < 0 || discountRate > 1) {
    return 'Error: Discount rate must be a number between 0 and 1.';
  }

  const subtotal = unitPrice * quantity;
  const discountAmount = subtotal * discountRate;
  const finalPrice = subtotal - discountAmount;

  // Return price formatted to two decimal places for currency-like values
  return parseFloat(finalPrice.toFixed(2));
};

// Example usage:
console.log('Laptop (no discount):', calculateFinalPrice(1200, 1)); // Expected: 1200
console.log('Books (10% discount):', calculateFinalPrice(25, 4, 0.10)); // Expected: 90 (25*4 = 100, 10% off is 10, so 90)
console.log('Pen (bulk, 5% discount):', calculateFinalPrice(1.50, 100, 0.05)); // Expected: 142.50
console.log('Invalid quantity:', calculateFinalPrice(10, -5)); // Expected: Error message
console.log('Invalid discount:', calculateFinalPrice(50, 2, 1.5)); // Expected: Error message

// Export for testing
module.exports = calculateFinalPrice;

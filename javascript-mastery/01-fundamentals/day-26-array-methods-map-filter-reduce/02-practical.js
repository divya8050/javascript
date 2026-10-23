const products = [
  { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', inStock: true },
  { id: 'p2', name: 'Mouse', price: 25, category: 'Electronics', inStock: true },
  { id: 'p3', name: 'Keyboard', price: 75, category: 'Electronics', inStock: false },
  { id: 'p4', name: 'Monitor', price: 300, category: 'Electronics', inStock: true },
  { id: 'p5', name: 'Desk Chair', price: 150, category: 'Furniture', inStock: true },
  { id: 'p6', name: 'Webcam', price: 50, category: 'Electronics', inStock: false }
];

// function to get only products that are currently in stock
const getInStockProducts = (productList) => {
  return productList.filter(product => product.inStock);
};

// function to list product names and their prices after a discount
const getDiscountedProductInfo = (productList, discountPercentage) => {
  const discountFactor = 1 - (discountPercentage / 100);
  return productList.map(product => ({
    name: product.name,
    originalPrice: product.price,
    discountedPrice: parseFloat((product.price * discountFactor).toFixed(2))
  }));
};

// function to calculate the total value of all in-stock products
const calculateTotalInStockValue = (productList) => {
  return productList.reduce((totalValue, product) => {
    if (product.inStock) {
      return totalValue + product.price;
    }
    return totalValue;
  }, 0);
};

// Example usage:
const availableProducts = getInStockProducts(products);
console.log('Available products:', availableProducts);

const discountedElectronics = getDiscountedProductInfo(
  products.filter(p => p.category === 'Electronics' && p.inStock),
  10
);
console.log('Discounted electronics (10% off):', discountedElectronics);

const totalValue = calculateTotalInStockValue(products);
console.log('Total value of all in-stock items:', totalValue);

export { products, getInStockProducts, getDiscountedProductInfo, calculateTotalInStockValue };

/**
 * Day 22 of JavaScript mastery: Practical application of reduce()
 * Date: 2026-10-19
 */

const salesRecords = [
  { id: 's001', productId: 'p001', category: 'Electronics', quantity: 1, price: 1200, date: '2026-10-15' },
  { id: 's002', productId: 'p002', category: 'Accessories', quantity: 2, price: 25, date: '2026-10-15' },
  { id: 's003', productId: 'p001', category: 'Electronics', quantity: 1, price: 1200, date: '2026-10-16' },
  { id: 's004', productId: 'p003', category: 'Accessories', quantity: 1, price: 75, date: '2026-10-16' },
  { id: 's005', productId: 'p001', category: 'Electronics', quantity: 2, price: 1200, date: '2026-10-17' },
  { id: 's006', productId: 'p004', category: 'Books', quantity: 3, price: 15, date: '2026-10-17' }
];

/**
 * Generates a sales summary report from a list of sales records.
 * The report includes total revenue and total quantity sold per category.
 * @param {Array<Object>} records - An array of sales record objects.
 * @returns {Object} A summary object with total revenue and category-wise breakdown.
 */
function generateSalesReport(records) {
  return records.reduce((report, record) => {
    const { category, quantity, price } = record;
    const saleAmount = quantity * price;

    // Update total revenue
    report.totalRevenue += saleAmount;

    // Update category-wise summary
    if (!report.categories[category]) {
      report.categories[category] = {
        totalQuantity: 0,
        totalRevenue: 0
      };
    }
    report.categories[category].totalQuantity += quantity;
    report.categories[category].totalRevenue += saleAmount;

    return report;
  }, {
    totalRevenue: 0,
    categories: {}
  });
}

const salesReport = generateSalesReport(salesRecords);
// console.log('Sales Report:', JSON.stringify(salesReport, null, 2));

module.exports = {
  generateSalesReport,
  salesRecords
};

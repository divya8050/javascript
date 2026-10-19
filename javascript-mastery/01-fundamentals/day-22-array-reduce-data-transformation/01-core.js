/**
 * Day 22 of JavaScript mastery: Understanding Array.prototype.reduce()
 * Date: 2026-10-19
 */

// 1. Basic sum with an initial value
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log('Sum:', sum); // Expected: 15

// 2. Flattening an array of arrays
const nestedArrays = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArrays.reduce((acc, currentArr) => acc.concat(currentArr), []);
// console.log('Flattened:', flattenedArray); // Expected: [1, 2, 3, 4, 5]

// 3. Grouping objects by a property
const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 24, city: 'Los Angeles' },
  { name: 'Charlie', age: 30, city: 'New York' },
  { name: 'David', age: 35, city: 'Chicago' }
];

const peopleByCity = people.reduce((acc, person) => {
  const { city } = person;
  if (!acc[city]) {
    acc[city] = [];
  }
  acc[city].push(person);
  return acc;
}, {});
// console.log('People by City:', peopleByCity);

// 4. Creating an object lookup map from an array of objects
const products = [
  { id: 'p001', name: 'Laptop', price: 1200 },
  { id: 'p002', name: 'Mouse', price: 25 },
  { id: 'p003', name: 'Keyboard', price: 75 }
];

const productLookup = products.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});
// console.log('Product Lookup:', productLookup);

// Exporting for testing purposes
module.exports = {
  sum,
  flattenedArray,
  peopleByCity,
  productLookup
};

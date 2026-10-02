// 01-core.js
// basic function declarations and expressions

// function declaration: hoisted, can be called before definition
function greetUser(name) {
  return `Hello, ${name}! Welcome.`;
}

console.log(greetUser("Alice"));

// function expression: not hoisted, assigned to a variable
const calculateProduct = function(num1, num2) {
  return num1 * num2;
};

console.log(calculateProduct(7, 8));

// function with default parameter values
function logActivity(action, count = 1) {
  return `Performed '${action}' ${count} time(s).`;
}

console.log(logActivity("login"));
console.log(logActivity("logout", 5));

// understanding return values
function getDiscountedPrice(originalPrice, discountPercentage) {
  if (discountPercentage < 0 || discountPercentage > 100) {
    console.log("Invalid discount percentage.");
    return null; // explicit null return for error or no valid result
  }
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

const finalPrice = getDiscountedPrice(100, 10);
console.log(`Final price: $${finalPrice}`);

const invalidPrice = getDiscountedPrice(50, 120);
console.log(`Invalid price result: ${invalidPrice}`);

// basic scope example
let appName = "MyWebApp"; // global scope

function displayInfo() {
  let userName = "Developer"; // local scope, only accessible inside this function
  console.log(`App: ${appName}, User: ${userName}`);
}

displayInfo();
// console.log(userName); // would cause an error: userName is not defined
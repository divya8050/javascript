// Day 1: Practical application - a simple user greeter

/**
 * Generates a personalized greeting message for a user.
 * @param {string} name - The user's name.
 * @param {number} age - The user's age.
 * @param {string} city - The user's city.
 * @returns {string} A personalized greeting string.
 */
function generateUserGreeting(name, age, city) {
  // Basic validation for inputs, keeping it simple for Day 1
  if (typeof name !== 'string' || name.trim() === '') {
    return "Hello there! I couldn't get your name.";
  }
  if (typeof age !== 'number' || age <= 0) {
    return `Hello, ${name}! Your age seems invalid.`;
  }
  if (typeof city !== 'string' || city.trim() === '') {
    return `Hello, ${name}! Age ${age}. Your city is unknown.`;
  }

  // Using template literals for easy string formatting
  return `Hello, ${name}! You are ${age} years old and live in ${city}. Welcome!`;
}

// Example usage:
const user1Name = "Alice";
const user1Age = 28;
const user1City = "New York";
const user1Greeting = generateUserGreeting(user1Name, user1Age, user1City);
console.log(user1Greeting);

const user2Name = "Bob";
const user2Age = 35;
const user2City = "London";
const user2Greeting = generateUserGreeting(user2Name, user2Age, user2City);
console.log(user2Greeting);

// Exporting the function for testing
module.exports = generateUserGreeting;

// --- Day 1: Practical Application - User Profile Greeting ---

/**
 * Generates a personalized welcome message for a user.
 * @param {string} name - The user's name.
 * @param {number} age - The user's age.
 * @param {boolean} isPremium - True if the user has a premium account.
 * @returns {string} A formatted welcome message.
 */
function generateWelcomeMessage(name, age, isPremium) {
  let message = `Hello, ${name}! You are ${age} years old.`;

  // Basic conditional logic
  if (isPremium) {
    message += " As a premium member, you have exclusive access.";
  } else {
    message += " Upgrade to premium for more features!";
  }

  // Return the complete message
  return message;
}

// Example usage:
// const user1 = generateWelcomeMessage("Alice", 30, true);
// console.log(user1);

// const user2 = generateWelcomeMessage("Bob", 25, false);
// console.log(user2);

// Export the function for testing or use in other modules
module.exports = generateWelcomeMessage;

// function to create a simple user profile summary
function createUserProfile(name, age, city) {
  // basic input validation for robustness
  if (typeof name !== 'string' || typeof age !== 'number' || typeof city !== 'string') {
    return "Error: Invalid input types.";
  }
  if (age <= 0) {
    return "Error: Age must be positive.";
  }

  const currentYear = 2026; // using the current practice year
  const birthYear = currentYear - age;

  let profileSummary = `Name: ${name}\n`;
  profileSummary += `Age: ${age} years old\n`;
  profileSummary += `City: ${city}\n`;
  profileSummary += `Estimated birth year: ${birthYear}`; // simple calculation

  return profileSummary;
}

// example usage
const aliceProfile = createUserProfile("Alice Smith", 28, "New York");
console.log("--- Alice's Profile ---");
console.log(aliceProfile);

const bobProfile = createUserProfile("Bob Johnson", 35, "London");
console.log("\n--- Bob's Profile ---");
console.log(bobProfile);

// export for testing purposes
module.exports = createUserProfile;
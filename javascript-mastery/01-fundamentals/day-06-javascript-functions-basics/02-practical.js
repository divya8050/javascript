// Day 6: JavaScript Functions - Practical Utility
// Date: 2026-10-03

// A practical utility function to format user details into a readable string.
const formatUserProfile = (firstName, lastName, age, city = "Unknown") => {
  // Basic validation to ensure essential data is present and valid
  if (!firstName || !lastName || typeof age !== 'number' || age <= 0) {
    return "Error: Invalid user data provided. Please check name and age.";
  }

  const fullName = `${firstName} ${lastName}`;
  let ageDescription;

  // Determine age group for a more descriptive profile
  if (age < 18) {
    ageDescription = "a minor";
  } else if (age >= 18 && age < 65) {
    ageDescription = "an adult";
  } else {
    ageDescription = "a senior citizen";
  }

  return `${fullName}, ${ageDescription} from ${city}.`;
};

// Another utility: generate a simple username from full name
function generateUsername(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Error: Cannot generate username without first and last name.";
  }
  // Convert to lowercase and combine with a simple format
  const cleanedFirstName = firstName.toLowerCase().replace(/\s/g, '');
  const cleanedLastName = lastName.toLowerCase().replace(/\s/g, '');
  return `${cleanedFirstName}_${cleanedLastName}`; // e.g., john_doe
}

// --- Demonstrating usage ---
console.log("--- User Profile Formatter ---");
console.log(formatUserProfile("Jane", "Doe", 30, "New York"));
// Expected: Jane Doe, an adult from New York.

console.log(formatUserProfile("Peter", "Pan", 12));
// Expected: Peter Pan, a minor from Unknown. (using default city)

console.log(formatUserProfile("John", "Smith", 70, "London"));
// Expected: John Smith, a senior citizen from London.

console.log(formatUserProfile("Invalid", "", 25));
// Expected: Error: Invalid user data provided. Please check name and age.

console.log(formatUserProfile("Test", "User", 0));
// Expected: Error: Invalid user data provided. Please check name and age.

console.log("\n--- Username Generator ---");
console.log(generateUsername("Alice", "Wonderland"));
// Expected: alice_wonderland

console.log(generateUsername("Bob", ""));
// Expected: Error: Cannot generate username without first and last name.

// Day 1 Practical: A simple function to generate a user profile summary
// This uses variables, string concatenation (template literals), and basic conditionals.

function generateUserProfileSummary(name, age, email, membershipType, isActive) {
  // Using template literals for cleaner string construction
  let summary = `User Profile for: ${name}`;
  summary += `\nAge: ${age} years`;
  summary += `\nEmail: ${email}`;
  summary += `\nMembership: ${membershipType}`; // e.g., 'Gold', 'Silver', 'Basic'
  summary += `\nStatus: ${isActive ? "Active" : "Inactive"}`; // Ternary operator for boolean check

  // Add a conditional note based on age or status
  if (age < 18) {
    summary += `\nNote: This user is a minor.`;
  } else if (!isActive) {
    summary += `\nAction: Account requires reactivation.`;
  }

  return summary;
}

// Example usage of the function
const user1Summary = generateUserProfileSummary(
  "Jane Doe",
  30,
  "jane.doe@example.com",
  "Gold",
  true
);
console.log("--- User 1 Profile ---");
console.log(user1Summary);

const user2Summary = generateUserProfileSummary(
  "John Smith",
  16,
  "john.smith@example.com",
  "Basic",
  true
);
console.log("\n--- User 2 Profile ---");
console.log(user2Summary);

const user3Summary = generateUserProfileSummary(
  "Emily White",
  45,
  "emily.white@example.com",
  "Silver",
  false
);
console.log("\n--- User 3 Profile ---");
console.log(user3Summary);

// Export the function for testing purposes
module.exports = generateUserProfileSummary;

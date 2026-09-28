// A practical utility function for formatting user details

function formatUserDetails(name, age, isAdmin) {
  // Determine the user's role based on the isAdmin flag
  let role = isAdmin ? "Administrator" : "Standard User";
  // Use template literals for clean string formatting
  return `Name: ${name}, Age: ${age}, Role: ${role}.`;
}

// Export the function so it can be used by other modules (like tests)
module.exports = formatUserDetails;

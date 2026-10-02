// 02-practical.js
// a simple utility to format and summarize user profile data

/**
 * Formats a user's basic profile details into a readable string.
 * Handles cases where age or city might be missing.
 */
function formatUserProfile(user) {
  const fullName = user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : "Anonymous User";
  const ageString = user.age ? `${user.age} years old` : "age not specified";
  const cityString = user.city ? `from ${user.city}` : "city unknown";

  return `${fullName}, ${ageString}, ${cityString}.`;
}

/**
 * Checks if a given age qualifies as an adult (18 or older).
 */
function isUserAdult(age) {
  return age !== undefined && age >= 18;
}

/**
 * Generates a comprehensive summary for a user, including profile and adult status.
 */
function getUserSummary(user) {
  const profileDetails = formatUserProfile(user);
  const adultStatus = isUserAdult(user.age) ? "is an adult" : "is not an adult";

  return `${profileDetails} This user ${adultStatus}.`;
}

// Example usage:
const user1 = { firstName: "Jane", lastName: "Doe", age: 28, city: "New York" };
const user2 = { firstName: "Mike", lastName: "Smith", city: "London" }; // Missing age
const user3 = { age: 16 }; // Missing name, minor

console.log(getUserSummary(user1));
console.log(getUserSummary(user2));
console.log(getUserSummary(user3));

// In a real Node.js module, you might export these:
// module.exports = {
//   formatUserProfile,
//   isUserAdult,
//   getUserSummary
// };
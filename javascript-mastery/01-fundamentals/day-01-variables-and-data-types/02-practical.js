// a function to create a basic user profile object
function createUserProfile(name, age, email, status = 'active') {
  // status defaults to 'active' if not provided
  const profile = {
    userName: name,
    userAge: age,
    userEmail: email,
    isOnline: status === 'active', // boolean derived from status
    registrationDate: new Date().toISOString().split('T')[0] // current date string
  };
  return profile;
}

// helper function to format profile information for display
function formatProfileDisplay(profile) {
  if (!profile || typeof profile !== 'object' || !profile.userName) {
    return "Invalid profile data provided.";
  }
  const onlineStatus = profile.isOnline ? 'Online' : 'Offline';
  return `${profile.userName} (${profile.userAge}) - ${profile.userEmail}. Status: ${onlineStatus}. Registered: ${profile.registrationDate}`;
}

// export functions for testing or use in other modules
module.exports = {
  createUserProfile,
  formatProfileDisplay
};
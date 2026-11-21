const { Vehicle, Car } = require('./01-core'); // Reusing core concepts

class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
  }

  getProfile() {
    return `User ID: ${this.id}, Username: ${this.username}, Email: ${this.email}`;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
    return `Email updated to ${this.email}`;
  }
}

class AdminUser extends User {
  constructor(id, username, email, permissions) {
    super(id, username, email);
    this.permissions = permissions; // Array of strings, e.g., ['manage_users', 'manage_products']
  }

  getProfile() {
    // Enhance the user profile with admin-specific info
    return `${super.getProfile()}, Permissions: ${this.permissions.join(', ')}`;
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }

  addPermission(permission) {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission);
      return `Added permission: ${permission}`;
    }
    return `Permission '${permission}' already exists.`;
  }
}

module.exports = { User, AdminUser };

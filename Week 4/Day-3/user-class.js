// user-class.js

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.loggedIn = false;
  }

  login() {
    this.loggedIn = true;
    return `${this.name} logged in.`;
  }

  logout() {
    this.loggedIn = false;
    return `${this.name} logged out.`;
  }

  updateProfile({ name, email }) {
    if (name) this.name = name;
    if (email) this.email = email;
    return `Profile updated: ${this.name}, ${this.email}`;
  }
}

class Admin extends User {
  constructor(name, email, role = "admin") {
    super(name, email);
    this.role = role;
  }

  deleteUser(user) {
    return `${this.name} deleted ${user.name}`;
  }
}

module.exports = { User, Admin };

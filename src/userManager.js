// src/userManager.js

class UserManager {
    constructor() {
      this.users = [];
    }
  
    addUser(name, email) {
      if (!name || !email) {
        throw new Error("Name and email are required");
      }
      const user = { name, email };
      this.users.push(user);
      return user;
    }
  
    removeUser(email) {
      const index = this.users.findIndex(user => user.email === email);
      if (index === -1) {
        throw new Error("User not found");
      }
      return this.users.splice(index, 1)[0];
    }
  
    getUser(email) {
      const user = this.users.find(user => user.email === email);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    }
  
    listUsers() {
      return this.users;
    }
  
    countUsers() {
      return this.users.length;
    }
  
    clearUsers() {
      this.users = [];
    }
  }
  
  module.exports = UserManager;
  
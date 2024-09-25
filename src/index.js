// src/index.js

const UserManager = require('./userManager');

const userManager = new UserManager();

userManager.addUser("Alice", "alice@example.com");
userManager.addUser("Bob", "bob@example.com");

console.log("Users added:", userManager.listUsers());

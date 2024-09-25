// test/unit/userManager.test.js

const { expect } = require('chai');
const UserManager = require('../../src/userManager');

describe('UserManager Unit Tests', () => {
  let userManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  // 1. Teste para adicionar um usuário com sucesso
  it('should add a user successfully', () => {
    const user = userManager.addUser("John", "john@example.com");
    expect(user).to.deep.equal({ name: "John", email: "john@example.com" });
    expect(userManager.countUsers()).to.equal(1);
  });

  // 2. Teste para lançar erro ao tentar adicionar um usuário sem nome
  it('should throw an error if no name is provided', () => {
    expect(() => userManager.addUser(null, "john@example.com")).to.throw("Name and email are required");
  });

  // 3. Teste para lançar erro ao tentar adicionar um usuário sem email
  it('should throw an error if no email is provided', () => {
    expect(() => userManager.addUser("John", null)).to.throw("Name and email are required");
  });

  // 4. Teste para remover um usuário com sucesso
  it('should remove a user successfully', () => {
    userManager.addUser("John", "john@example.com");
    const removedUser = userManager.removeUser("john@example.com");
    expect(removedUser).to.deep.equal({ name: "John", email: "john@example.com" });
    expect(userManager.countUsers()).to.equal(0);
  });

  // 5. Teste para lançar erro ao tentar remover um usuário que não existe
  it('should throw an error when removing a non-existent user', () => {
    expect(() => userManager.removeUser("nonexistent@example.com")).to.throw("User not found");
  });

  // 6. Teste para buscar um usuário com sucesso
  it('should get a user successfully', () => {
    userManager.addUser("John", "john@example.com");
    const user = userManager.getUser("john@example.com");
    expect(user).to.deep.equal({ name: "John", email: "john@example.com" });
  });

  // 7. Teste para lançar erro ao tentar buscar um usuário que não existe
  it('should throw an error when getting a non-existent user', () => {
    expect(() => userManager.getUser("nonexistent@example.com")).to.throw("User not found");
  });

  // 8. Teste para listar usuários
  it('should list all users', () => {
    userManager.addUser("John", "john@example.com");
    userManager.addUser("Alice", "alice@example.com");
    const users = userManager.listUsers();
    expect(users).to.deep.equal([
      { name: "John", email: "john@example.com" },
      { name: "Alice", email: "alice@example.com" }
    ]);
  });

  // 9. Teste para contar o número de usuários
  it('should count the number of users', () => {
    userManager.addUser("John", "john@example.com");
    userManager.addUser("Alice", "alice@example.com");
    expect(userManager.countUsers()).to.equal(2);
  });

  // 10. Teste para limpar todos os usuários
  it('should clear all users', () => {
    userManager.addUser("John", "john@example.com");
    userManager.addUser("Alice", "alice@example.com");
    userManager.clearUsers();
    expect(userManager.countUsers()).to.equal(0);
  });
});

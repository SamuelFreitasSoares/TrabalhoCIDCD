// test/integration/userManager.integration.test.js

const { expect } = require('chai');
const UserManager = require('../../src/userManager');

describe('UserManager Integration Tests', () => {
  let userManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  // Teste de integração para adicionar, buscar e remover um usuário
  it('should integrate add, get and remove functionality', () => {
    const user = userManager.addUser("Alice", "alice@example.com");
    const fetchedUser = userManager.getUser("alice@example.com");
    expect(fetchedUser).to.deep.equal(user);

    const removedUser = userManager.removeUser("alice@example.com");
    expect(removedUser).to.deep.equal(user);
    expect(() => userManager.getUser("alice@example.com")).to.throw("User not found");
  });
});

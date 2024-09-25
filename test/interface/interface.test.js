// test/interface/interface.test.js

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('Interface Test', function() {
  it('should add and list users via CLI', function() {
    const output = execSync('node src/index.js').toString();
    expect(output).to.include('Alice');
    expect(output).to.include('Bob');
  });
});

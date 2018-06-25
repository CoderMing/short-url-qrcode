const expect = require('chai').expect

const add = (a, b) => a + b 

describe('假装是测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
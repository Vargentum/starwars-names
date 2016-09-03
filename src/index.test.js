var mocha = require('mocha')
  , expect = require('chai').expect


describe('Setup', function() {
  var actual = true
  var expected = true

  it('should work', function() {
    expect(expected).to.equal(actual)
  })
})

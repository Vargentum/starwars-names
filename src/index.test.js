var mocha = require('mocha')
  , expect = require('chai').expect
  , starWarsNames = require('./index.js')

describe('starwars-names', function() {
  var allNames = starWarsNames.all

  describe('all', function () {
    function checkItemsForStringType (ary) {
      return ary.every(function(item) {return typeof item === 'string'})
    }
  
    it('should provide an array of items', function() {
      expect(allNames).to.be.an('array')
    })
    it('should contain only string items', function() {
      expect(allNames).to.satisfy(checkItemsForStringType)
    })
    it('should always contains "Luke Skywalker"', function() {
      expect(allNames).to.include("Luke Skywalker")
    })
  })

  describe('random', function() {
    var actual = starWarsNames.random()
  
    it('should return a random item from allNames', function() {
      expect(allNames).to.include(actual)
    })
  })
  
})

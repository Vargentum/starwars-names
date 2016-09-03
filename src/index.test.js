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

    it('should return a random item from allNames', function() {
      var actual = starWarsNames.random()
      expect(allNames).to.include(actual)
    })

    it('should return an array of items, if provided a number', function() {
      var actual = starWarsNames.random(3)

      expect(actual).to.be.an('array');
      expect(actual).to.has.length(3);
      actual.forEach(function(item) {
        expect(allNames).to.include(item);
      })
    });
  })
  
})

var starWarsNames = require('./starwars-names.json')
var uniqueRandomArray = require('unique-random-array')
var getRandomItem = uniqueRandomArray(starWarsNames)

module.exports = {
  all: starWarsNames,
  random: random
}

function random (number) {
  if (number === undefined) {
    return getRandomItem()
  } else {
    var items = []
    for (var i = 0; i < number; i++) {
      items.push(getRandomItem())
    }
    return items
  }
}
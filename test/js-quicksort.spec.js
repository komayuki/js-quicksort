var assert = require('assert')
var quickSort = require('../dist/js-quicksort')

describe('quicksort test', function () {
  it ('test sort', function() {
    var list = [9,8,7,6,5,4,3,2,1]
    var sorted = quickSort(list, 0, list.length-1)
    assert.equal(sorted, [1,2,3,4,5,6,7,8,9])
  })
})

var quickSort = require('../dist/js-quicksort')
var chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-sorted"));

describe('quicksort test', function () {

  it ('sort test1', function() {
    var list = [9,8,7,6,5,4,3,2,1]
    var sorted = quickSort(list)
    expect(sorted).to.be.sorted()
  })

  it ('sort test2', function() {
    var [max, min, list] = [1000, 1, []]

    for(var i=0; i < 500; i++) {
      var x = Math.floor(Math.random() * (max - min + 1)) + min
      list.push(x)
    }
    var sorted = quickSort(list)
    expect(sorted).to.be.sorted()
  })
})

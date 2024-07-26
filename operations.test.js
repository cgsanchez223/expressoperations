const {
    findMean,
    findMedian,
    findMode,
} = require("./operations");

describe("findMean", function() {
    it("finds the mean of an empty array", function() {
        expect(findMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function() {
        expect(findMean([1, -1, 4, 2])).toEqual(1.5)
    })
})


describe("#findMedian", function() {
    it("finds median of even set of numbers", function(){
        expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("finds the median of an odd set of numbers", function() {
        expect(findMedian([1, -1, 4])).toEqual(1)
    })
})


describe('#findMode', function() {
    it("finds the mode", function() {
        expect(findMode([1, 1, 1, 2, 2, 3])).toEqual(1)
    })
})
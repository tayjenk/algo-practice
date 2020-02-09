const expect = require("chai").expect
const kadanesAlgorithm = require('../algo-expert/kadanes-algorithim')

describe('happy cases', () => {

  it('works with the original given array', () => {
    expect(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])).to.deep.equal(19)
  })

})
it('works on an array with all positive numbers', () => {
  expect(kadanesAlgorithm([3, 5, 9, 1, 3, 2, 3])).to.deep.equal(26)
})

it('works on an array with all negative numbers', () => {
  expect(kadanesAlgorithm([-3, -5, -9, -1, -3, -2, -3])).to.deep.equal(-1)
})

it('works on an array with one very small negative numbers', () => {
  expect(kadanesAlgorithm([ 1, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10])).to.deep.equal(35)
})

it('works on an array with a mix of negative and positive numbers', () => {
  expect(kadanesAlgorithm([ 3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])).to.deep.equal(19)
})

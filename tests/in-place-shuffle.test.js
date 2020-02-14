const expect = require("chai").expect
const shuffle = require("../arrays-and-strings/in-place-shuffle")

describe.only("in-place shuffle", () => {
  it("returns the input array if empty or has one element", () => {
    expect(shuffle([1])).to.deep.equal([1])
  })
})

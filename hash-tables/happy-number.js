/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

// initialize counter at 0
// initialize empty set
// turn input number into string and loop through, converting back to number and caculating the sum of the sqrs of indiv digits
// if sum === 1 return true
// otherwise check is Set contains sum
// if Set contains sum return false
// otherwise run function again on current Sum (recursive helper function)

const isHappy = function(n) {
  const seenSumSquares = new Set()

  return (function findSumSquares(n) {
      let total = 0
      const nString = n.toString()
      for(let digit of nString) {
        total += Math.pow(+digit, 2)
      }
      if(total === 1) return true
      if(seenSumSquares.has(total)) return false
      seenSumSquares.add(total)
      return findSumSquares(total)
    })(n)
};

const isHappy = function(n, seenSumSquares = new Set()) {
  let total = n.toString().split('').reduce((total, digit) => total += Math.pow(+digit, 2), 0)
  if(total === 1) return true
  if(seenSumSquares.has(total)) return false
  seenSumSquares.add(total)
  return isHappy(total, seenSumSquares)
};


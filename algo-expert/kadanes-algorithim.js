//RESTATE...
//function takes in a non-empty array
//returns the max sum obtained by summing all the numbers in a non-empty subarray of the input array
//subarray must only have adjacent numbers

//EXAMPLE...
//input: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
//output: 19 --> [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]

//APPROACH...
//loop through each array element
//calculate current sum at that index
//at each loop compare current sum to max sum
//if curren sum is larger than max sum, max sum = current sum

//changes to approach:
// original comparison solution only works with mostly positive numbers, what if all numbers in the array are negative?
//a negative element can be its own subarray & the max sum within the given array
//example:
//input: [-1, -2, -3, -4, -5] --> output: -1
//total posibilities:
//i = 0
// -1
//i = 1
// -2, -3(current + prev)
// i = 2
// -3, -5 (current + prev), -6 (current + running total)
// i = 3
// -4, -7 (current + prev), -9, -10(current + running total)
//pattern:
// current el, current el + prev el, current + all prev element values....
//because we keep track of the overall max as we pass through the array, continue to compare the current element to the sum of the current element plus all elements before it

//CODE...
function kadanesAlgorithm(array) {
  //initialize running max and max sum to the first element in the array
  let runningMax = array[0]
  let maxSum = array[0]
  for (let i = 1; i < array.length; i++) {
    let int = array[i]
    //compare the value of the current element to the current element plus the sum of elements behind it
    runningMax = Math.max(int, (runningMax + int))
    //compare our current max to the overall max Sum
    maxSum = Math.max(runningMax, maxSum)
  }
  return maxSum
}

module.exports = kadanesAlgorithm

//TEST...
// ./tests/kadanes-algorithm.spec.js

//Time and Space Complexity:
//0(N) time - looping through every array element, N is the length of the array
//0(1) space - constant, using given array

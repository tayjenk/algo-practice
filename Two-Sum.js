// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//strategy:
// loop through given array of nums, starting at i=0 up until i < j
// second loop "j" starting at i + 1 up until givenNumsArray.length -1
// add each value at current index i & j
// if i + j === target return [i, j]

const nums = [2, 7, 11, 15]
const target = 9

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let intOne = nums[i]
    for (let k = i + 1; k < nums.length; k++) {
      let intTwo = nums[k]
      if (intOne + intTwo === target) {
          return [i, k]
      }
    }
  }
}

twoSum(nums, target)

// Time complexity : O(n^2)
// For each element, we try to find its complement by looping through the rest of array which takes O(n) time. Therefore, the time complexity is O(n^2)

// Space complexity : O(1)

//return intOne + intTwo === target && [i, k]

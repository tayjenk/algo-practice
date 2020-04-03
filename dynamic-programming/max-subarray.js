/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

const maxSubArray = nums => {
  const sums = [nums[0]]
  for(let i = 1; i < nums.length; i++) {
      if(sums[i-1] > 0) sums.push(nums[i] + sums[i-1])
      else sums.push(nums[i])
  }
  return Math.max(...sums)
};
//O(N) time | O(N) space

const maxSubArray = nums => {
  let currSum, maxSum
  currSum = maxSum = -Infinity

  for(let i in nums){
    currSum = Math.max(nums[i], nums[i] + currSum)
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
};
// O(N) time | O(1) space

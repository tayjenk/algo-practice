/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Input: [2,2,1]
Output: 1

Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function(nums) {
  const count = {}
  for(let int of nums) {
      if(count[int]) delete count[int]
      else count[int] = 1
  }
  return Object.keys(count)[0]
};
//O(N) time | O(N) space

var singleNumber = function(nums) {

  nums.sort((a, b) => a-b)
  for(let i = 0; i < nums.length; i += 2) {
      if(i === nums.length - 1) return nums[i]
      if(nums[i] !== nums[i + 1]) return nums[i]
  }
};
//O(n log n) time | O(1) space

var singleNumber = function(nums) {
  //using XOR method
  // XOR is commutative so 1^1^2 === 1^2^1 --> no need to order
  //doubles will "cancel out" or = 0 (1 ^ 1 === 0)
  // 0 ^ (remaining num) = remaining num
  let singleNum = nums[0]
  for(let i = 1; i < nums.length; i++) {
      singleNum ^= nums[i]
  }
  return singleNum
};
// O(N) time | O(1) space

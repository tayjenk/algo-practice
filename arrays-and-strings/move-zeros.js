/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

input: [1]
output: [1]
*/

/*
loop through array idenifying a 0

 i=0
[0,1,0,3,12]
if 0 is found, splice out of array and push to the end of array or store in separate array
[1,0,3,12,0] OR [1,0,2,3,12] [0]

   i=1
[1,0,3,12,0] OR [1,2,3,12] [0,0]
--> [1,3,12,0,0] OR [1,2,3,12] [0,0]

     i=2
[1,3,12,0,0] OR [1,2,3,12] [0,0]
        i=3
[1,3,12,0,0] --> might end in infinite loop

have two separate arrays and join together

two pointers...
i and j at beginning of array
j will hold index to insert at and i will iterate through array
[0,1,0,3,12]
 i
 j

 if i !== 0, i and j will swap and j++
 [1,0,0,3,12]
    i
    j
  [1,0,0,3,12] --> [1,3,0,0,12]
         i
     j
[1,3,0,0,12] --> [1,3,12,0,0]
         i
     j
*/

const moveZeros = nums => {
  const zeros = []
  for(let i in nums) {
    if(nums[i] === 0) {
      zeros.push(nums[i])
      nums.splice(i,1)
    }
  }
  return [...nums,...zeros]
}
//O(N) time | O(N) space

const moveZeros = nums => {
  let j = 0
  for(let i in nums) {
    if(nums[i] !== 0) {
      let temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      j++
    }
  }
  return nums
}
// in-place solution
// O(N) time | O(1) space




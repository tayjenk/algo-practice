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

//Two-Pass Hash Table:
const twoSumTwoHash = (nums, target) => {
  //create new Map object
  let Hash = new Map()
  //for each el in nums, use .set method to create key/value pairs
  //key = el, value = indx
  nums.forEach((int, index) => Hash.set(int, index))
  console.log(Hash)
  //loop over nums array
  for (let i=0; i < nums.length; i++) {
    //for each el in nums array find complement: target - nums[i]
    let complement = target - nums[i]
    //using Map.has(input) --> does Map object have key === input
    //Map.get(input) --> return value of Map[input]
    // if hash has key === complement and the value of key doesn't === current idx(prevents repeats of current number) return [i, indx]
  if (Hash.has(complement) && Hash.get(complement) !== i) {
    return [i, Hash.get(complement)]
  }
  }
}

//One-Pass Hash Table --> while creating table check to see if current element's complement is in the table, if exists return solution immediately
const twoSumOneHash = (nums, target) => {
  //create new Map obj
  let Hash = new Map()
  //loop through numsArray
  for(let i = 0; i < nums.length; i++) {
    console.log('i:', i)
    //find complement
    let complement = target - nums[i]
    console.log(complement)
    console.log(Hash)
    //if current Hash has key === complement, value w/ current i
    if (Hash.has(complement)) {
       return [Hash.get(complement), i]
    }
    // add new key/value and increase i
    Hash.set(nums[i], i)
    console.log(Hash)
  }
} //tricky solution as Map object cannot have duplicate keys, increases i before setting into Map


//func takes an array of int and a num(k)
//find max sum of a subarray w/ the length of k
//subarrays consist of consecutive elements from orig array

//[100, 200, 300, 400], 2 --> 700
//loop through array, create subarray of first 2 elements
//find sum and store in variable
// maxSum = 0
//loop up to i <= array.length - k --> 4 - 2
// i = 0
// [100, 200]
// sum = 300 maxSum = 300
// i = 1
// [200, 300]
// sum = prevSum - array[i - 1] + array[i++]
// sum = 300 - 100 + 300 = 500 maxSum = 500
//i = 2
// [300, 400]
// sum =

//[1, 4, 2, 10, 23, 3, 1, 0, 20], 4 --> 39

// i = 0
// |
// [1, 4, 2, 10], 23, 3, 1, 0, 20
// sum = 17 maxSum = 17

//                i = 4
//                |
// 1, [4, 2, 10, 23], 3, 1, 0, 20
// sum = sum - array[i - k] + array[i]
// sum = 17 - 1 + 23 = 39 maxSum = 39

//                   j = 5
//                   |
// 1, 4, [2, 10, 23, 3], 1, 0, 20
//sum = 39 - 4 + 3 = 38

//                      i = 6
//                      |
// 1, 4, 2, [10, 23, 3, 1], 0, 20
//sum = 38 - 2 + 1 = 37

//                         i = 7
//                         |
// 1, 4, 2, 10, [23, 3, 1, 0], 20
//sum = 37 - 10 + 0 = 27

//                             i = 8
//                             |
// 1, 4, 2, 10, 23, [3, 1, 0, 20]
//sum = 27 - 23 + 20 = 24

//return maxSum = 39

function maxSubarraySum(array, k){
  if(k > array.length) return null
  let sum = 0, maxSum = 0
  //loop through array
  for(let i = 0 ; i < array.length; i++) {
    //add int to sum
    sum += array[i]
    //when i >= k start substracting the prev first element in subarray
    //as window increases on the right, decrease from the left
    if (i >= k) {
      sum -= array[i - k]
      }
    //if curr sum > maxSum reassign maxSum
    // if(sum > maxSum) {
    //   maxSum = sum
    //   }
    maxSum = Math.max(sum, maxSum)
    }
  return maxSum
}
//O(N) time | O(1) space

maxSubarraySum([100, 200, 300, 400], 2) //700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) //39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) //5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) //5
maxSubarraySum([2, 3], 3) //null


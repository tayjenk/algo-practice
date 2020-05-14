/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.

input: arr [0, -1, -3, -4, -8, 0] output: true

2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3
*/
//Solution 1:
var checkIfExist = function(arr) {
  const doubles = {};
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (doubles[arr[i]] || seen[arr[i] * 2]) return true
    seen[arr[i]] = true;
    doubles[arr[i] * 2] = true;
  }
  return false;
};
//O(N) time | O(N) space

//Solution 2:
//var checkIfExist = function(arr) {
  //for (let num of arr) {
    //if (arr.includes(num * 2)) {
      //return true;
    //}
  //}
  //return false;
//}
//O(N^2) time | O(1) space

//solution 3: sort array and for each int in array, perform binary search to look for its double
//O(n log n) time | O(1) space

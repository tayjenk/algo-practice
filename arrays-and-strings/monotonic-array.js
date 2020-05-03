/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Input: [1,2,2,3]
Output: true

Input: [1,1,1]
Output: true
*/

//O(N) time | O(1) space where N is length of input array
var isMonotonic = function(A) {
  //double loop
  // if(A[0] <= A[A.length-1]) {
  //     for(let i = 1; i < A.length; i++) {
  //         if(!(A[i] >= A[i-1])) return false
  //     }
  // }
  // else {
  //     for(let i = 1; i < A.length; i++) {
  //         if(!(A[i] <= A[i-1])) return false
  //     }
  // }
  // return true

  //array.every
  //return whether every element in array is either the first element or is either less than or greater than consecutively from the previous int
  return A[0] <= A[A.length-1] ? A.every((int, i) => i === 0 || int >= A[i-1]) :
      A.every((int, i) => i === 0 || int <= A[i-1])
};

/*
Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri], for each query i compute the XOR of elements from Li to Ri (that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri] ). Return an array containing the result for the given queries.

Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
Output: [2,7,14,8]
Explanation:
The binary representation of the elements in the array are:
1 = 0001
3 = 0011
4 = 0100
8 = 1000
The XOR values for queries are:
[0,1] = 1 xor 3 = 2
[1,2] = 3 xor 4 = 7
[0,3] = 1 xor 3 xor 4 xor 8 = 14
[3,3] = 8

i = 0
queries[i] = [Li, Ri]
queries[0] = [0, 1]
arr[0] xor arr[1]
1 xor 3

0001
0011
----
0010 = 2

i = 2
queries[2] = [0, 3]
arr[0] xor arr[1] xor arr[2] xor arr[3]
1 xor 3 xor 4 xor 8
*/



var xorQueries = function(arr, queries) {
  //converting intergers to binary
  //comparing binary strings
  //converting binary string to integers

      const result = []

      for(let i = 0; i < queries.length; i++) {
          let currentXor = 0
          let range = queries[i]
          let start = range[0], end = range[1]
          for(let j = start; j <= end; j++) {
              currentXor = currentXor ^ arr[j]
          }
          result.push(currentXor)
      }
      return result
  };

  //range[0] range[1]
  //array[range[0]] xor array[range[1]]

//time complexity: O(nm) where n is the length of the input array and m is the length of the queries array | O(1) space

/*
Optimization: O(N) time | O(1) space
store previously computed xor values...somehow..
arr = [4, 8, 2, 10]
[2,3] --> 2 ^ 10 = 8
[1, 3] --> 8 ^ 2 ^ 10 --> 8 ^ [2, 3] --> 8 ^ 8 = 0
[0, 0] --> 4
[0, 3] --> 4 ^ (8 ^ 2 ^ 10) --> 4 ^ 0 --> 4
outout = [8, 0, 4, 4]

create additional array of all possible xor values
arr = [1, 3, 4, 8] --> [1, 2(3^1), 6(2^4), 14(6^8)]
*/

/*
Notes:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
*/

/*
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift).
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation:
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"

Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

1 <= s.length <= 100
s only contains lower case English letters.
1 <= shift.length <= 100
shift[i].length == 2
0 <= shift[i][0] <= 1
0 <= shift[i][1] <= 100
*/

/*
solution 1:
loop through shift matrix, if shift[i][0] === 0
perform shift left
if shift[i][1] === 1
perform shift right

helper functions take string and shift amount
shiftLeft:
spreads into array unchanged portion of string + chars shifted from front
shiftRight:
spreads into array chars shifted from end of string + unchanged chars
return array joined
*/

const shiftLeft = (str, amount) => {
  const shiftedString = [...str.substring(amount),...str.substring(0, amount)]
  return shiftedString.join('')
}

const shiftRight = (str, amount) => {
  const shiftedString = [...str.substring(str.length - amount),...str.substring(0, str.length - amount)]
  return shiftedString.join('')
}

var stringShift = function(s, shift) {
  for(let i = 0; i < shift.length; i++) {
      if(shift[i][0] === 0) s = shiftLeft(s, shift[i][1])
      else s = shiftRight(s, shift[i][1])
  }
  return s
};

//O(NM) N is length of shift matrix and M is length of input string
//O(N) space

/*
initialize movement counter
loop through shift matrix
if matrix[i][0] === 0, movement -= amount
else movement += amount
perform shifting function takes string and amount(string.length - amount)
remove from end of string add to beginning --> return
*/
const moveChars = (str, amount) => {
  const shiftedString = []
  //EDGE CASE:
  //if amount is positive, start from str - amount
  //if amount is negative start at the positive idx of amount
  amount = amount > 0 ? str.length - amount : Math.abs(amount)
  for(let i = amount; i < str.length; i++) shiftedString.push(str[i])
  for(let i = 0; i < amount; i++) shiftedString.push(str[i])
  return shiftedString.join('')
}

var stringShift = function(s, shift) {
  let movement = 0
  for(let i = 0; i < shift.length; i++) {
      if(shift[i][0] === 0) movement -= shift[i][1]
      else movement += shift[i][1]
  }
  //EDGE CASE: if movement count is larged than the string length, use modulo to find amount to shift
  (Math.abs(movement) > s.length) && (movement = movement % s.length)
  return moveChars(s, movement)
};

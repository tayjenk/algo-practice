/*
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

The given num AND output string does not contain any leading zero.

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

loop through the given num string and make comparisons from the beginning digits to the end, removing any digits that are greater than the following digit
*/
var removeKdigits = function(num, k) {
  //init stack to hold visited digits
  const digitStack = []
  //loop through string
  for(let digit of num) {
      //if the stack has length (has digits) & k > 0 (havent removed more than k digits) & the previous digit is greater than the current digit, remove the larger digit from the stack and reduce k
      while(digitStack.length && k > 0 && digitStack[digitStack.length - 1] > digit) {
          digitStack.pop()
          k--
      }
      //add digits onto stack
      digitStack.push(digit)
  }
  //after loop if there are still k digits left to remove, continue to remove digits at the end until k = 0
  while(k > 0) {
      digitStack.pop()
      k--
  }
  //after k digits have been removed if there are any leading "0"s in the stack remove
  while(digitStack[0] === '0') {
      digitStack.shift()
  }
  //if stack is empty return "0" otherwise join and return new string
  return digitStack.length ? digitStack.join('') : "0"

  // if(num.length === k) return "0"
  // //init counter to keep track of removed digits
  // let removedChar = 0
  // //const givenNums = num.split('')
  // for(let i = 0; i < num.length; i++) {
  //     if(num[i] > num[i + 1]) {
  //         if(num[i] > num[i + 1]) removedChar++
  //         num = num.replace(num[i], '')
  //         //console.log({num})
  //         i = -1
  //     }
  //     if(removedChar === k) {
  //         if(parseInt(num) === 0) return '0'
  //          return num.replace(/^0+/, '')
  //     }
  // }
  //at end of loop and all the preceding digits are increasing, remove (k - removedChar) digits from the end
  // num = num.slice(0, num.length - k + removedChar)
  // if(parseInt(num) === 0) return '0'
  // return num.replace(/^0+/, '')
};

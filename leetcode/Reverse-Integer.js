// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31, 2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

//strategy:
// convert integer to a positive num
// conver int to string
// String.split() --> split sting into array of substrings
// Array.reverse() --> reverse the array
// Array.join() --> join Array into string
// convert revString into revInt
// if input is < 0, return -revInt otherwise return revInt

// if revInt > (2^31 -1) || < (-2^31) return 0 ? --> dealing with ints overflows 32bit signed int range?
//32-bit signed int --> an int whose value is represented in 32 bits, string of 32 0s and 1s
//"signed" ability to represent positive and negative
//a 32 bit register can store 2^32 different values 2^31 not including the signed bit (-/+)

const reverse = x => {
  const str = Math.abs(x).toString()
  const revInt = parseInt(str.split('').reverse().join(''))
  if (revInt < Math.pow(2,31) - 1 && revInt > Math.pow(-2,31)) {
      return x > 0 ? revInt : -revInt
  }
  return 0
};

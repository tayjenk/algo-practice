//REPEAT...
// fn takes an integer and returns true or false if integer is a palindrome
// palindrome: reads the same backward as forward

//EXAMPLES...
// 121 --> 121 (true)
// -121 --> 121- (false)
// 10 --> 01 (false)

//ARCHITECTURE/TECHNOLOGIES...
// convert given int to a string
// convert string to array of substrings
// reverse array and join
// compare input string and rev string
// if revString === input string return true, otherwise false

const isPalindrome = function(x) {
  x = x.toString()
  //string within a spread operator will spread the string within the array into substrings
  const revInput = [...x].reverse().join('')
  return x === revInput ? true : false
};

//follow up: solve without converting to a string?
// 

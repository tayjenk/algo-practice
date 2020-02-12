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
//mathematical approach:
//remove the last digit from the given int and add to the end of the reversed int until original number is gone and reversed int is complete
// x = original input
//ex: x = 121
const isPalindrome = function(x) {
  //iterate process until revInt is reduced to 0 and revInt is complete
  let revInt = 0
  //save input in variable that can be changed with affected the original input we want to save for comparison
  let inputInt = x
  while (inputInt > 0) {
    //isolate last digit of x
  //using the modulo % operator, returns the remainder after division, isolate the last digit of any number (remove the "ones column")
  let lastDigit = inputInt % 10
  //ex: 121 % 10 = 12.1; lastDigit = 1

  //put lastDigit to the end of revInt
  //multiply current revInt by 10 to move:
  //ones column --> 10s column --> 100s --> 100s etc...
  revInt = (revInt * 10) + lastDigit
  //ex: revInt = (0 * 10) + 4 = 4

  //remove last digit from input
  inputInt = Math.floor(inputInt / 10)
  //ex: x = Math.floor(121 / 10) = 12
  }
  return x === revInt ? true : false
};

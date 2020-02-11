//RESTATE...
//function takes a non-empty string
//returns if string is a palindrome
//palindrome: reads the same way backwards and forward

//spaces?

//EXAMPLE...
//"abcdcba"--> true

//APPROACH...
//loop backwards through string
//create a new string of the reversed given string
//compare whether the given string and reverse string are equal

//CODE...
function isPalindrome(string) {
  // Write your code here.
  //uses string concatenation
  //O(N) time | O(N) space
  let revString = ""
  for (let i = string.length - 1; i >= 0; i--) {
    let char = string[i]
    revString += char
  }
  return revString === string

  //converts given string to array, reverses and joins
  //O(N) time | O(1) space
  //return string === string.split('').reverse().join('')

  //two pointers solution:
  //have pointer at start of string and pointer at end of str, compare both characters
  //O(N) time | O(N) space
  // let p1 = 0
  // let p2 = string.length - 1
  // while (p1 < p2) {
  //   console.log(string[p1], string[p2])
  //   if (string[p1] !== string[p2]) return false
  //   p1++
  //   p2--
  // }
  // return true
}

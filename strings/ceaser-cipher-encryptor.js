//RESTATE...
//func takes 2 arguments: a string of lowercase letters and a non-negative int key
// return new string of every letter in given string shifted in the alphabet by "key" number of positions. After z, alphabet wraps back and starts at a

//EXAMPLE...
//"xyz", 2 --> "zab" (x shifted two letter in alphabet, y shifted letters spots, z shifted two letters)
//"abc", 3 --> "def"

//APPROACH...
//create empty string
//loop through given string
//for each char find character code, add "key" positions, turn new charCode to letter and add to newstring
//if new charCode - 96 is > 26, find difference and find new charCode starting from 'a'
//return newstring

//CODE...
//O(N) time or O(N^2) ? for each letter in given string, worst case new position is greater than the charCode at Z and will go into while loop. While loop only performs mathematical operations on fixed integers, does not go through other chars in string
//O(N) space
function caesarCipherEncryptor(string, key) {
  //returns undefined if string is empty or int provided to key is not a positive int
  if (!string.length || key < 0) return undefined
  let shiftedStr = ''
   for (let i = 0; i < string.length; i++) {
     let newPosition = string.charCodeAt(i) + key
     //solves edge case given key goes past the position of letter z more than once
     //while new position is greater than position at z, find how many positions past z the new position and add from before position of a
     while(newPosition > "z".charCodeAt(0)) {
       let a = "a".charCodeAt(0)
       let z = "z".charCodeAt(0)
       let diff = newPosition - z
       newPosition = (a - 1) + diff
     }
     shiftedStr += String.fromCharCode(newPosition)
   }
   return shiftedStr
 }

 //solution using an array, modulo operator, and creates seperate utility function
 // o(n) time | o(n) space
 function caesarCipherEncryptor(string, key) {
  const shiftedLetters = []
  const newKey = key % 26 //finds new key within the 26 letter alphabet
  for (let letter of string) {
    //for each letter in string, pass letter and key into newLetter func
    shiftedLetters.push(newLetter(letter, newKey))
    }
  return shiftedLetters.join('')
 }

 function newLetter(letter, key) {
  // find the charCode of current letter, add key
  const newLetterCode = letter.charCodeAt() + key //96 + 5 = 101
  //if new code is less than or = 122 (charCode for Z), return letter of new charCode
  //if it is greater use modulo operator to get new code within 122 code limit and then modulo again to get new code within 96 and return letter
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) :
  String.fromCharCode(96 % (newLetterCode % 122))
}

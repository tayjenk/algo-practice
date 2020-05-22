/*
given string, sort char in decreasing order based on frequency of characters

Input:
"tree" -->"eert"

Input:
"cccaaa" --> "cccaaa"

Input:
"Aabb" --> "bbAa"

Input:
"aaabbaatc" --> "aaaaabbtc"

init an empty Map / obj
if set has char as a key, build string of characters as the value
grab an array of the characters and sort based on character length from greatest to least then join

freqsOfChar = {
t : "t"
r : "r"
e : "ee"
}
["t", "r", "ee"].sort(a,b => b.length - a.length)
*/

//O(N logn) time, sorting n strings in object.values
//O(N) space 
const frequencySort = s => {
  const freqOfChars = {}
  for(let char of s) {
      freqOfChars[char] ? freqOfChars[char] += char : freqOfChars[char] = char
  }
  const sortedFrequencies = Object.values(freqOfChars).sort((a,b) => b.length - a.length)

  return sortedFrequencies.join('')
}

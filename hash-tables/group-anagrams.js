/*
Given an array of strings, group anagrams together.

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

All inputs will be in lowercase.
The order of your output does not matter.
*/

/*
two strings are anagrams if their sorted strings are equal
for each string in input array, sort
if sorted string is not a key in obj, create key of sorted string and create array containing orig input string
if sorted string is a key in obj, push input string into array of values
Object.keys returns an array of obj's values (an array of arrays)
*/

const groupAnagrams = function(strs) {
  const anagrams = {}
  for(let str of strs) {
      const sorted = str.split('').sort().join('')
      anagrams[sorted] ? anagrams[sorted].push(str) : anagrams[sorted] = [str]
  }
  return Object.values(anagrams)
};

//O(n * m log m) time | n is the length of input array of strs; m log m for sorting the length of each str in array
//O(nm) space | n is length of output array, m length of arrays nested inside


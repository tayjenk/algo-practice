//given two strings, func checks if one is a permutation of the other

//"happy", "phapy" --> true
//"fight", "night" --> false
//"iceman", "cinema" --> true

//both strings must be of equal length, if not return false
//creating a boolean array of length 26 would only work if all characters in string were letters, does not account for strings containing spaces or non-letter characters (!@# etc..)
//sort both input strings by splitting into array, invoke sort method, join
//return comparison between both strings
const stringSort = str => {
  return str.splut('').sort().join('')
}
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false
  return stringSort(str1) === stringSort(str2)
}
//O(n log n) time --> using array sort method
//O(N) space?? --> for each str array is created of N length

//questions to ask:
//inputs case sensitive?
//whitespace counted?


//hints
//define what it means for two strings to be permutations and check against definition
//one solution is o(n log n), while another uses additional space but is O(N) time
//use a hashtable?
//two strings that are permutations should have same char, but different order. Can order be made the same?

//add the charCount for each char in string and compare the two results
const charCodeTotal = str => {
  let codeCount = 0
  for(char of str) {
    codeCount += char.charCodeAt()
  }
  return codeCount
}

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false
  return charCodeTotal(str1) === charCodeTotal(str2)
}
//O(N) time --> looping once over each input sting
//O(1) space

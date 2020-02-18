//func determines if a string has all unique char
//w/o using additional data structures

//input: "happy" --> false
//input: "algo" --> true
//input: "yes!" --> true
//input: "no sir" --> true

//loop through every char in string and compare to other char in string
//if two char equal each other return false

//hints:
//try hash table
//could a bit vector be used?
//solve in O(n log n) time?

//brute force:
const isUnique = (string) => {
  for(let i = 0; i < string.length - 1; i++) {
    for(let j = i + 1; j < string.length; j++) {
      console.log(string[i], string[j])
      if (string[i] === string[j]) return false
    }
  }
  return true
}
//O(N^2) time | O(1) space

//frequency counter object
const isUnique = (string) => {
  let countTable = {}
  for (char of string) {
    if(countTable[char]) {
      return false
    } else {
      countTable[char] = 1
    }
  }
  return true
}
//O(N) time | O(N) space

//sorted array method
const isUnique = (string) => {
  let sortedStringToArray = string.split('').sort()
  console.log(sortedStringToArray)
  let i = 0
  while(i < sortedStringToArray.length - 1) {
    console.log('curr', sortedStringToArray[i])
    console.log('next', sortedStringToArray[i+1])
    if(sortedStringToArray[i] === sortedStringToArray[i+1]) return false
    i++
  }
  return true
}

//O(n log n) time | O(N space)





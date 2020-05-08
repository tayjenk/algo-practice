/*
func takes a string and returns the longest palindromic substring
palindrome - string reads the same forwards and backwards
only one longest palindromic substring
*/

//brute force
//O(n^2) time | O(s) space where n is the length of the input string and s is the length of the new substring
function longestPalindromicSubstring(string) {
  let longestString = ""
  //for each char in string compute all possible substrings
	for(let i = 0; i < string.length; i++) {
		for(let j = i + 1; j < string.length + 1; j++) {
			let stringTest = string.substring(i, j)
			//console.log({stringTest})
			if(isPalindrome(stringTest)) {
			longestString = longestString.length < stringTest.length ? stringTest : longestString
			console.log({longestString});
			}
		}
	}
	return longestString
}

//O(n) time - where n is the length of the input string
//O(s) space- where s is the length of the substring
function longestPalindromicSubstring(string) {
  let start, end, substring = string[0]
  //loop through each char in string
	for(let i = 1; i < string.length; i++) {
    //for each character find longest possible substring from both sides of the current char
		start = i - 1; end = i + 1
		while(string[start] === string[end]) {
			if(start < 0 || end > string.length) break
			start--
			end++
		}
    substring = substring.length < end - start ? string.substring(start + 1, end) : substring
    //or find longest possible substring mirrored from current char
		start = i - 1; end = i
		while(string[start] === string[end]) {
			if(start < 0 || end > string.length) break
			start--
			end++
		}
		substring = substring.length < end + 1 - start ? string.substring(start + 1, end) : substring
	}
	return substring
}

//refactored algoexpert solution
function longestPalindromicSubstring(string) {
  //longest substring is contained btw idx 0 and 1 (first char)
  let longestSubstr = [0, 1]
  //loop through length of string
	for(let i = 1; i < string.length; i++) {
    //find the substring if the curr char is the center of a string
    const oddLength = findPalindromeFrom(string, i - 1, i + 1)
    //find the substring if the curr char is a mirror within the string
    const evenLength = findPalindromeFrom(string, i - 1, i)
    //compare which is longest btw odd and even
		const longerSubstr = oddLength[1] - oddLength[0] > evenLength[1] - evenLength[0] ?
          oddLength : evenLength
    //update longest substring idxs
		longestSubstr = longestSubstr[1] - longestSubstr[0] > longerSubstr[1] - longerSubstr[0] ?
			longestSubstr : longerSubstr
  }
  //return a substring from the longestSubtr idxs
	return string.substring(longestSubstr[0], longestSubstr[1])
}

//uses helper function to create substrings
function findPalindromeFrom(string, startIdx, endIdx) {
	while(string[startIdx] === string[endIdx]) {
		if(startIdx < 0 || endIdx > string.length) break
		startIdx--
		endIdx++
	}
	return [startIdx + 1, endIdx]
}



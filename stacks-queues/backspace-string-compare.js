/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
*/

//stack solution
const newString = string => {
    const stack = []
    for(let char of string) {
        if(char === '#') stack.pop()
        else stack.push(char)
    }
    console.log(stack)
    return stack.join('')
}

const backspaceCompare = (S, T) => {
    return newString(S) === newString(T)
}
//O(N) time | O(N) space

const replace = string => {
  while(string.includes("#"))
      string = string.replace(/[a-z]#|#/, '')
      return string
}
var backspaceCompare = function(S, T) {
  return replace(S) === replace(T)
};

//O(N) time | O(1) space

//func takes a string of brackets and other optional chars(edge case?)
//returns a boolean of whether or not string is balanced
//has as many opening brackets as closing brackets of that type
//"([{ }])"
//closing brackets cannot match and opening brackets that follows its position
//brackets cannot overlap ex: "[(])"

//loop through string adding brackets openind brackets to stack
//if closing bracket matches current opening bracket, pop off stack
//if closing bracket doesnt match, brackets are unbalanced
//if we reach end of string and stack has length, bracket is unbalanced
//brackets are balanced after going through string and stack is empty

//'()[]{}{'
//stack = []
//loop through string
//i = 0 --> (
//push opening bracket into stack --> stack = [ '(' ]
//i = 1 --> )
//compare closing bracket to last element in stack
//if they complement, pop last element off stack ---> '(' : ')'
//stack = []
// i = 2 --> [
// stack = [ '[' ]
//i = 3 --> ]
// '[' : ']' stack = []
//....
//i = 6 --> '{' stack = [ '{' ]
//reached end of string, check if array has length
//return false

//EDGE CASES:
//does string contain other characters?? letters??
//what happens if there are openers left in the stack at the end of the loop

const COMPLEMENT = {
  '(' : ')',
  '[' : ']',
  '{' : '}'
}

function balancedBrackets(string) {
  const stack = []
  for(let bracket of string) {
    if(COMPLEMENT[bracket]) stack.push(bracket)
    else {
      //should do a check that this is a closing bracket, should only compare closing brackets to openers, skip other characters that could be in string
      if (stack.length && bracket === COMPLEMENT[stack[stack.length - 1]]) {
        stack.pop()
        console.log('stack after pop', stack)
      } else return false
    }
  }
  console.log('final stack', stack)
  //accounts for if there are openers left in stack after loop through string
  //stack should be empty if balanced
  return stack.length === 0
}

//O(N) time | O(N) space, where n is the length of the string
//from AlgoExpert's Balanced Brackets

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

//does string contain other characters?? letters??

const COMPLEMENT = {
  '(' : ')',
  '[' : ']',
  '{' : '}'
}

function balancedBrackets(string) {
  let stack = []
  for(let i = 0; i < string.length; i++) {
    let bracket = string[i]
    console.log('bracket', bracket)
    if(COMPLEMENT.hasOwnProperty(bracket)) {
      stack.push(bracket)
      console.log('stack', stack)
    }
    else {
      console.log('last stack', stack[stack.length - 1])
      if (stack.length && bracket === COMPLEMENT[stack[stack.length - 1]]) {
        stack.pop()
        console.log('stack after pop', stack)
      } else {
        return false
      }
    }
  }
  console.log('final stack', stack)
  return stack.length ? false : true
}

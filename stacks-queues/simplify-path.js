//initiate a stack
// split the given absolute path at the slashes and loop though array
// from MDN String.prototype.split():
// If separator appears at the beginning or end of the string, or both, the array begins, ends, or both begins and ends, respectively, with an empty string.
// also appears that if multiple seprators are found next to each other in a string only one gets eliminated
// ex: "c//.///.".split('/') = ['c', '', '.', '', '', '.']
// file names get pushed onto the stack
// skip empty strings and '.'
// if a '..' is found, pop off the last stack element
// final stack is the simplified path
// reverse stack and join to a string
// return new path

// "/a/../../b/../c//.//".split('/') = ['', 'a', '..', '..', 'b', '..', 'c', '.', '']
// loop through string
// i = 0 --> ''
// i = 1 --> 'a'
// if filename, add to stack
// stack = ['a']
// i = 2 --> '..'
// if '..' pop() last element from stack
// stack = []
// i = 3 --> '..'
// stack = []
// i = 4 --> 'b'
// stack = ['b']
// i = 5 --> '..'
// stack = []
// i = 6 --> 'c'
// stack = ['c']
// i = 7 --> '.'
// i = 8 --> ''

//example: newpath = stack = ['a', 'b', 'c'].map(file => {
//  return '/' + file
//  }).join('')


const simplifyPath = function(path) {
  //split path into array removing the '/' and initialize stack
  const splitPath = path.split('/')
  let stack = []
  //loop through path array and add onto stack file names and pop() if el = '..'
  splitPath.forEach(el => {
    if(el === '..') stack.pop()
    else if (el !== '' && el !=='.') {
       stack.push(el)
    }
  })
  //join the remainder of stack together into new path
  if(!stack.length) return '/'
  return stack.map(file => `/${file}`).join('')
};

//O(N) time | O(N) space?? --> creating a new array using array.prototype.split and creating stack array

//simplifyPath('/home/')
//simplifyPath('/../')
//simplifyPath('/home//foo/')
//simplifyPath('/a/./b/../../c/')
//simplifyPath("/a/../../b/../c//.//")
//simplifyPath("/a//b////c/d//././/..")

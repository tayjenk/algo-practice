# Stacks and Queues

## Stacks

`LAST IN, FIRST OUT` data structure
the last element added to the stack will be the first element removed

example: stack of plates, call stack, anything piled up on top of each other, the topmost item is removed first

used in: managing func invocations, undo/redo, routing/browser history, depth-first-search to keep track of nodes to visit next

last               first
<-- D <-- C <-- B <--A

Array Implementation:
```
const stack = []
stack.push("google")
stack.push("instagram")
stack.push("facebook") --> last element added in
["google", "instagram", "facebook"]
array.pop() --> removes last element

*array.shift() / .unshift() can be used also, but increases time complexity from O(1) to O(n)

Overall using an array is ineffienct since there is no use of the ordered indicies
```

Singly Linked List Implementation:
Methods: `push(val), pop, peek, isEmpty`
```
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  //add to the top of the stack
  push(val) {
    const newNode = new Node(val)
    if(!this.first) {
      this.first = this.last = newNode
    } else {
      //store current first in a temp variable
      //set first to newNode and it's next property to the temp variable
      //first node should always point to the node below it
      //list flows down from the first to last
      const temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    //increment then return new size
    return ++this.size
  }

  //peek: return the top of the stack
  peek() {
    return this.first
  }

  //isEmpty: returns true if stack is isEmpty
  isEmpty() {
    return this.first === null
  }
}
```
### Big O of Stacks
Insertion and Removal O(1)
*stacks aren't meant for searching or accessing

## Doubly Linked Lists

Similar to singly linked lists, except every node has an additonal pointer to the previous node.

Compared to a singly linked list, doubly takes up more memory for more flexibility. Easier to navigate and find nodes.

Doubly Linked List Structure:

Methods: `push, pop, shift, unshift, get, set, insert, remove. reverse`

Examples: browser history

```
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  //push: add a node to the end of a doubly linked list
  push(val) {
    //create newNode from value passed in
    const newNode = new Node(val)
    //if the head is non-existant, set head and tail to newNode
    if(!this.head) {
      this.head = this.tail = newNode
    } else {
      //otherwise set the next property of the current tail to the newNode
      this.tail.next = newNode
      //set the prev property of the newNode to the current tail
      newNode.prev = this.tail
      //reassign this.tail to the newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  //pop: remove a node from the end of a doubly linked list
  pop() {
    //if taile nonexistant return undefined
    if(!this.tail) return undefined
    //set current tail to a new variable
    const removedNode = this.tail
    //if there was only one node on the list, head and tail are set to null
    if(this.length === 1) {
      this.head = this.tail = null
    } else {
      //otherwise reassign tail to previous node
      this.tail = removedNode.prev
      //set the new tail's next property to null
      this.tail.next = null
      //set the removedNode's prev property to null
      removedNode.prev = null
    }
    this.length--
    return removedNode
  }
  //shift: removes a node from the beginning of a linked list
  shift() {
    //if list is empty return undefined
    if(!this.head) return undefined
    //if the list only has one node, set the head and tail to null
    if(this.length === 1) {
      this.head = this.tail = null
    } else {
      //otherwise store current head in a variable
      //set the head to the next property of the current head
      //set the new head's prev property to null
      //set the removedHead's next property to null
      const removedHead = this.head
      this.head = removedHead.next
      this.head.prev = null
      removedHead.next = null
    }
    this.length--
    return removedHead
  }

  //unshift: adding a new to the beginning of a linked list
  unshift(val) {
    //create a new node with the val passed in
    const newNode = new Node(val)
    //if head is nonexistant, set head and tail to newNode
    if(!this.head) {
      this.head = this.tail = newNode
    } else {
      //otherwise set the next property of the newNode to the current head
      //the current head's prev property to newNode
      //this.head to the newNode
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }
  //get: accessing a node in a linked list by positon
  get(position) {
    if(position < 0 || position >= this.length) return null
    let count, currNode
    if(position <= Math.floor(this.length / 2)) {
      count = 0
      currNode = this.head
      while(count !== position) {
        currNode = currNode.next
        count++
      }
    }
    count = this.length - 1
    currNode = this.tail
    while(count !== positon) {
      currNode = currNode.prev
      count--
    }
    return currNode
  }

  //set: replace a value in a node of a linked list
  set(val, position) {
    //use this.get to find node
    //update value if found
    //return true
    let foundNode = this.get(position)
    if(foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

   //insert: add a node to a linked list at a given position
  insert(val, position) {
    //if position is < 0 or greater than list length return false
    //if position is at the beginning use unshift
    //if position is at the end, use push
    if(position < 0 || position > this.length) return false
    if(position === 0) return !!this.unshift(val)
    if(position === this.length) return !!this.push(val)

    //otherwise make a new node and find the node before and it's next node
    //reassign newNode to the before and after node
    //reassign before and after node to the newNode
    const newNode = new Node(val)
    const nodeBefore = this.get(position-1)
    const nodeAfter = nodeBefore.next

    nodeBefore.next = newNode
    newNode.prev = nodeBefore
    nodeAfter.prev = newNode
    newNode.next = nodeAfter
    this.length++
    return true
  }

  //remove: remove a node from a position in a linked list
  remove(position) {
    //if position is < 0 or greater than list length return false
    //if position is at the beginning, use shift
    //if position is at the end, use pop
    if(position < 0 || position > this.length) return undefined
    if(position === 0) return this.shift()
    if(position === this.length - 1) return this.pop()

    //otherwise get the node and find its before and after nodes
    //reassign before and after nodes to each other
    //assign removedNode's next and prev to null
    const removedNode = this.get(position)
    const nodeBefore = removedNode.prev
    const nodeAfter = removedNode.next

    nodeBefore.next = nodeAfter
    nodeAfter.prev = nodeBefore
    removedNode.next = removedNode.prev = null
    this.length--
    return removedNode
  }

  reverse(){
    //switch head and tail pointers
    let node = this.tail
    this.tail = this.head
    this.head = node

    //starting at tail loop through list
    //use additional variable to switch node's next and prev pointers
    while(node) {
      let newPrev = node.next
      node.next = node.prev
      node.prev = newPrev
      node = node.next
    }
    return this
    }
}

```

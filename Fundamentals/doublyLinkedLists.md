## Doubly Linked Lists

Similar to singly linked lists, except every node has an additonal pointer to the previous node.

Compared to a singly linked list, doubly takes up more memory for more flexibility.

Doubly Linked List Structure:

Methods: `push, pop`

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
}
```

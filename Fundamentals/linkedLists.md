# Linked Lists

A piece of data(string, charater, etc) can be stored in a `node` object. A series of nodes each containing a pointer to the next node in the series, in addition to data is a `linked list`.

Nodes can be stored anywhere in memory and connected nodes do not have to be next to each other and do not have to be in order.

`head` the first node in a linked list
`tail` the last node in a linked list (some refer everthing after the head as the "tail")

When prepending to the beginning of a linked list: new nodes "next" pointer is assigned to the current head and the head is reassigned to the new node.

When appending to the end of a linked list: the current tail's next pointer is assigned from null to the new node and IF there is a tail variable, it is reassigned to the new tail node.

Linked list appends and prepends take O(1) time but better than the worst case O(N) time for dynamic arrays.
*Can tail appends take O(N) time if there is no pointer to the tail node? We don't know how long our tail is...

Quick appends and prepends are possible because nodes of a linked list can be stored anywhere in memory and do not have to be stored next to each like (vs. array). The advantage of an array is constant O(1) lookup time, since all elements are stored in next to each other in memory.

To find the ith node in memory of linked list requires traversing the list and keeping count until the desired node is found. Lookups take O(i) time, where i is the node trying to find. Random access is not allowed. Linkedlists are also not cache friendly (vs. arrays) because the next node could be stored *anywhere* in memory

Singly Linked List Structure:
Methods: `push, pop, shift, unshfit, get, set, insert`
```
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  //push method: adds to the end of a linked list
  push(val) {
    //accepts a val and creates a new node using the value passed
    const newNode = new Node(val)
    //if there is no head property on the list, the head and tail is set to newNode
    if(!this.head) {
      this.head = this.tail = newNode
    } else {
      //set the next property on the tail to be the newNode and the tail property on the list to the newNode
      this.tail.next = newNode
      this.tail = newNode
    }
    //increment the list length by 1
    this.length++
    //return the list
    return this
  }
  //pop method: removes the last node in a linked list and returns it
  pop() {
    //if the list is empty, return undefined
    if(!this.head) return undefined
    //loop through list, until the end, keeping track of prev node which will become new tail
    let newTail, currNode = this.head
    while(currNode.next) {
      newTail = currNode
      currNode = currNode.next
    }
    //set next property of 2nd to last node to null
    newTail.next = null
    //set the list tail to the 2nd to last node
    this.tail = newTail
    //decrement the list length
    this.length--
    //return the val of removed node
    return currNode.val
  }

  //shift: removes the head of the list and returns it
  shift() {
    //if there are no nodes return undefined
    if(!this.head) return undefined
    //store current head in a variable
    const removedHead = this.head
    //set head property to the current head's next property
    this.head = this.head.next
    //decrement the length by 1
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    //return the val of the node removed
    return removedHead.val
  }

  //unshift: adding a new node to the head of a linked list
  unshift(val) {
    //creates a new node with the val passed
    const newNode = new Node(val)
    //if there is no head property on the list, set the head and tail to be the new node
    if(!this.head) {
      this.head = this.tail = newNode
    } else {
      //set the new node's next property to the current head
      newNode.next = this.head
      //reassign head property to be the new node
      this.head = newNode
    }
    //increment the list length by 1
    this.length++
    //return linked list
    return this
  }

  //get: retrieving a node by it's position in the linked list
  get(position) {
    //accepts a position num, if position is < 0 or > list length, return null
    if(position < 0 || position > this.length) return null
    //loop through list until desired position is reached, return found node
    let idx = 0
    let currNode = this.head
    while(currNode) {
      if(idx === position) return currNode
      currNode = currNode.next
      idx++
    }
  }

   //set: change value of node based on its position in linked list
  set(val, position) {
    //accepts a val and position, uses get func to find desired node
    const foundNode = this.get(position)
    //return false if node is not found
    if(!foundNode) return false
    //set val of node to be val passed into func and return true
    foundNode.val = val
    return true
  }

  //insert: add a node to the linked list at a specific position
  insert(val, position) {
    //accepts a val and position
    //if position is < 0 or > length, return false
    if(position < 0 || position > this.length) return false
    //if position = list length, use push method to add to end
    if(position === this.length) return !!this.push(val)
    //if position = 0, use unshift method to add to beginning
    if(position === 0) return !!this.unshift(val)
    //otherwise use get method to access the node before it
    //position - 1
    const nodeBefore = this.get(position - 1)
    //create newNode, set next property on newNode to node before's next
    const newNode = new Node(val)
    newNode.next = nodeBefore.next
    //set nodeBefore's next property to newNode
    nodeBefore.next = newNode
    //increment length
    this.length++
    return true
  }
}

let linkedList = new SinglyLinkedList()
linkedList.push(25)
```

Traversing a linked list to find the ith node:
```
function getIthItemInLinkedList(head, i) {

    if (i < 0) {
        throw new Error("i can't be negative: " + i);
    }

    var currentPosition = 0;
    var currentNode = head;

    while (currentNode) {

        if (currentPosition === i) {
            // found it!
            return currentNode;
        }

        // move on to the next node
        currentNode = currentNode.next;
        currentPosition++;
    }

    throw new Error("List has fewer than i + 1 (" + (i + 1) + ") nodes");
}
```


class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

/*
create doubly linked class with head and tail that point to a linkedlist node or null
nodes
*/

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  //O(1) time | O(1) space
  setHead(node) {
    //if head is currently nonexistant, set head and tail to node
    if (!this.head) {
      this.head = this.tail = node
    }
    //if there is a head use method to insert node before the nead
    else this.insertBefore(this.head, node)
  }

  //O(1) time | O(1) space
  setTail(node) {
    //if tail is nonexistant, head is nonexistant and use setHead method
    if (!this.tail) this.setHead(node)
    //otherwise insert the node after the tail node
    else this.insertAfter(this.tail, node)
  }

  //O(1) time | O(1) space
  //takes a node that nodeToInsert will but put before
  insertBefore(node, nodeToInsert) {
    //if the nodeToInsert is the head node of tail node, stop
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return
    //if node is currently in the linked list, strip all connections
    //and remove from linked list
    this.remove(nodeToInsert)
    //reassign nodeToInsert's prev and next properties
    nodeToInsert.prev = node.prev
    nodeToInsert.next = node
    //if the node has a prev value reassign property to nodeToInsert
    if (node.prev) {
      node.prev.next = nodeToInsert
    } else {
      //otherwise node is the head node and reassign head pointer
      this.head = nodeToInsert
    }
    //reassign node prev property to nodeToInsert
    node.prev = nodeToInsert
  }

  //O(1) time | O(1) space
  //takes a node that the nodeToInsert will be placed behind
  insertAfter(node, nodeToInsert) {
    //if the nodeToInsert = the head or tail, stop
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return
    //otherwise remove any connections from nodeToInsert
    //remove from linked list
    this.remove(nodeToInsert)
    //reassign nodeToInsert's prev and next properties
    nodeToInsert.prev = node
    nodeToInsert.next = node.next
    //if the node has a next prop, reassign the next prev proper to insertNode
    if (node.next) node.next.prev = nodeToInsert
    //otherwise node is the tail and reassign tail pointer
    else this.tail = nodeToInsert
    //assign node.next to nodeToInsert
    node.next = nodeToInsert
  }

  //O(p) time | O(1) space where p is the numbers of nodes needed to traverse
  //to find desired input position
  insertAtPosition(position, nodeToInsert) {
    //if the position is at the beginning, setHead
    if (position === 1) this.setHead(nodeToInsert)
    else {
      //otherwise loop through linked list finding node at the matching position
      let currNode = this.head,
        currPosition = 1
      while (currNode) {
        //if position is found, insert node before the currNode and break
        if (currPosition === position) {
          this.insertBefore(currNode, nodeToInsert)
          break
        } else {
          currNode = currNode.next
          currPosition++
        }
      }
    }
  }

  //O(N) time | O(1) space
  //where N is the number of nodes in the linked list
  removeNodesWithValue(value) {
    //loop through linked list
    //save node as the potential node to remove and reassign currNode
    //if nodetoremove has the value we need remove from linkedlist
    let currNode = this.head
    while (currNode) {
      const nodeToRemove = currNode
      currNode = currNode.next
      if (nodeToRemove.value === value) this.remove(nodeToRemove)
    }
  }

  //O(1) time | O(1) space
  remove(node) {
    //if the node to remove is the head or tail, reassign pointers
    if (node === this.head) this.head = this.head.next
    if (node === this.tail) this.tail = this.tail.prev

    //remove prev and next node connections to the node to remove
    if (node.prev) node.prev.next = node.next
    if (node.next) node.next.prev = node.prev
    //remove any prev and next connections on the node to remove
    node.prev = null
    node.next = null
  }

  //O(n) time | O(1) space
  //n is the number of the nodes in the linkedlist
  containsNodeWithValue(value) {
    //loop through linked list if value is found return true
    // if value is not found return false
    let currNode = this.head
    while (currNode) {
      if (currNode.value === value) return true
      currNode = currNode.next
    }
    return false
  }
}

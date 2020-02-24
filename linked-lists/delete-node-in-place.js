//delete node from singly linked list, given only a varable pointing to that node

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);

//node passed in has value and pointer to next node, but not any nodes before it
//if we did, we would assign the prevNode.next to the deletedNode.next and return deletedNode
//take value and next from the input node's next node
//input: b, next --> c, next--> null
//copy into the input node
//prev node next pointer effectively skips the input node's old value

function deleteNode(node) {
  // Get the input node's next node, the one we want to skip to
  const nextNode = node.next
  if(nextNode) {
    //reassign node's values to the next node
    node.value = nextNode.value
    node.next = nextNode.next
  } else {
    //if node is the last in the list, assign it to null
    node = null
  }
}

//O(1) time and O(1) space

//SIDE EFFECTS:
//any references to input node have been reassigned to its next, if there were any pointers to the input node elsewhere, it would be pointed to the input node's original value and next pointer - causing bugs
//any references to the input node's original next node, effectively make these next nodes no longer reachable by walking down the list. they are not connected to the input node's prev node
//list is modified in place and can cause other parts of the list to break
//modifying inplace is risky and requires checking for any side effects in the rest of the code base

//given a singly linked list, find the kth to the last node
//func takes an integer k and the headNode of a singly linked list
//return the kth to last node

class LinkedListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const a = new LinkedListNode("Angel Food")
const b = new LinkedListNode("Bundt")
const c = new LinkedListNode("Cheese")
const d = new LinkedListNode("Devil's Food")
const e = new LinkedListNode("Eccles")

a.next = b
b.next = c
c.next = d
d.next = e

//example: find 2nd to the last node
//returns the node with value "Devil's Food"

//loop through linked list counting the length of the list = n
//length of list - k = how many steps from the head we need to go to reach kth to last

const kthToLastNode = (k, headNode) => {
  let node = headNode
  let listLength = 0

  while (node) {
    listLength++
    node = node.next
  }
  if (k > listLength) return undefined
  const kthNode = listLength - k

  node = headNode
  while (node) {
    //console.log(node.value)
    if (currNode === kthNode) return node
    currNode++
    node = node.next
  }
}
//O(n) time and O(1)O(1) space, where nn is the length of the list.

kthToLastNode(2, a) //node.value = 'Devil's Food'

//calculate length of list while keeping track of kth nodes from our current spot
const kthToLastNode = (k, node) => {
  let currNode = node
  let kthFromLast = node

  let listLength = 0
  while (currNode) {
    //console.log(currNode.value)
    !currNode.next ? undefined : (currNode = currNode.next)
    listLength++
    if (listLength > k) {
      kthFromLast = kthFromLast.next
    }
  }
  return kthFromLast
}

//OR use alternative by shifting current node forward k nodes and keep distance from kth to the last node

function kthToLastNode(k, head) {
  let leftNode = head
  let rightNode = head

  // Move rightNode to the kth node
  for (let i = 0; i < k - 1; i++) {
    !rightNode.next ? undefined : (rightNode = rightNode.next)
  }

  // Starting with leftNode on the head,
  // move leftNode and rightNode down the list,
  // maintaining a distance of k between them,
  // until rightNode hits the end of the list
  while (rightNode.next) {
    leftNode = leftNode.next
    rightNode = rightNode.next
  }

  // Since leftNode is k nodes behind rightNode,
  // leftNode is now the kth to last node!
  return leftNode
}

//O(N) time and O(1) space for BOTH solutions. Both solutions pass through the linked list twice, but in different order: one full pass before a second full pass vs one pass with a second pass moving at the same time

//Possible edge case:
//If N(length of linked list) is expected to be much larger than k, we can shorten the second trip by placing "checkpoints" during the first pass so the second pass doesnt have to start at the beginning
//ex: N = 50
//k = 2nd to the last

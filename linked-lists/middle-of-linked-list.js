/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])

loop once to find length of linked list (start idx 0), divide length by two using Math.ceil to get second middle node if needed
loop again to find middle and return node
*/
var middleNode = function (head) {
  let listLength = 0,
    node = head
  while (node.next) {
    node = node.next
    listLength++
  }
  const midPoint = Math.ceil(listLength / 2)
  let position = 0
  node = head
  while (node) {
    if (position === midPoint) return node
    node = node.next
    position++
  }
}
//O(N) time | O(1) space

//array storage method
const middleNode = (head) => {
  const nodes = []
  while (head) {
    nodes.push(head)
    head = head.next
  }
  return nodes[Math.floor(nodes.length / 2)]
}

//O(N) time | O(N) space - array length of input linked list

//pointer method
const middleNode = (head) => {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

//O(N) time | O(1) space

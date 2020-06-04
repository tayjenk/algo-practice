/*
given head of a linked list where each node has a next property and a random property with the index of the node where a random pointer points to or null

empty lists?
duplicate values of nodes?

loop through given list and create mapping to new Nodes
loop again and use mapping to make connections to new next and random pointers
*/
// Definition for a Node.
function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};

//O(N) time | O(N) space where N is the number of nodes in the list
var copyRandomList = function(head) {
  let oldNode = head, nodeMap = [], index = 0
  while(oldNode) {
      oldNode.index = index
      nodeMap.push(new Node(oldNode.val))
      oldNode = oldNode.next
      index++
  }
  oldNode = head
  for(let newNode of nodeMap) {
      newNode.next = oldNode.next ? nodeMap[oldNode.next.index] : null
      newNode.random = oldNode.random ? nodeMap[oldNode.random.index] : null
      oldNode = oldNode.next
  }
  return nodeMap[0]
};

//O(N) time | O(1) space
var copyRandomList = function(head) {
  if(!head) return head
 let oldNode = head, newNode
 while(oldNode) {
     newNode = new Node(oldNode.val, oldNode.next)
     oldNode.next = newNode
     oldNode = oldNode.next.next
 }
  oldNode = head
  newNode = oldNode.next
  while(newNode) {
      newNode.random = oldNode.random ? oldNode.random.next : null
      oldNode = oldNode.next.next
      newNode = oldNode ? oldNode.next : null
  }
  oldNode = head
  newNode = oldNode.next
  const newList = newNode
  while(newNode) {
      oldNode.next = newNode.next
      newNode.next = oldNode.next ? oldNode.next.next : null
      oldNode = oldNode.next
      newNode = newNode.next
  }
  return newList
};

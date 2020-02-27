//fn takes head of a singly linked list and returns boolean if list contains a cycle
//cycle is when a node's next property points to a node already in the linked list

//node: "a" --> "b" --> "c" --> "d" --> "b" return true

//loop through linked list, storing all values in a set
//at each node check if val is contained in set
//if yes --> return true
//if node.next = null we reached the end of the list and return false

const containsCycle = node => {
  let currNode = node
  let nodeValues = new Set()
  while(currNode.next) {
    if(nodeValues.has(currNode.val)) return true
    nodeValues.add(currNode.val)
    currNode = currNode.next
  }
  return false
}
//O(N) time | O(N) space

//O(N) time | O(1) space
//create a pointer and run loop, if pointer is passed again we know we're in a loop

//create two markers both starting at head
//marker1 traverses through list normally
//marker2 will speed up ahead marker1 1-2 nodes, if in a loop marker2 will eventually meet up to marker1 and confirm in a loop
//or if marker2 hits the end of the list return false

const containsCycle = headNode => {
  let currNode = headNode, fastMarker = headNode
  while(fastMarker && fastMarker.next) {
    currNode = currNode.next
    fastMarker = fastMarker.next.next
    if(fastMarker === currNode) return true
  }
  return false
}

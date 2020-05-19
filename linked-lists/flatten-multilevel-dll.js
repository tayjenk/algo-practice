/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
/*
given a dll where each node may have a child node in addition to next and prev
child node points to a separate doubly linked list
flatten the list so all nodes appear in a single level doubly linked list

            p1
1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6
            |
            7 <-> 8 <-> 9 <-> 10
                  |
                  11 <-> 12

int queue to hold next nodes of nodes with a child
loop through linked list if node.child !== null
push into queue node.next
Q = [4, 9]
node.next = node.child (node.child = null?)
keep looping reassigning next values to children if not null and adding the next node value to queue
when node.next = null
pop node off queue and assign to last node's.next keep looping
*/
//O(N) time | O(M)?? where N is the number of nodes in the linked list and M is the number of child nodes
var flatten = function(head) {
  const queue = []
  let currNode = head, prevNode = null
  while(currNode) {
      currNode.prev = prevNode
      if(currNode.child) connectChild(currNode, queue)
      prevNode = currNode
      if(currNode.next === null && queue.length) currNode.next = queue.pop()
      console.log({queue})
      currNode = currNode.next
  }
 return head
};

function connectChild(node, queue) {
  (node.next) && (queue.push(node.next))
  node.next = node.child
  node.child = null
}

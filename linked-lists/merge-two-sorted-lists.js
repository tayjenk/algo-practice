/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

//0(n + m) where n and m are the lengths of the l1 and l2 input lists
//0(1) space only allocating pointers
const mergeTwoLists = (l1, l2) => {
  let startNode = new ListNode(-1, null), currNode = startNode
  while(l1 && l2) {
      if(l1.val <= l2.val) {
          currNode.next = l1
          l1 = l1.next
      } else {
          currNode.next = l2
          l2 = l2.next
      }
      currNode = currNode.next
  }
  currNode.next = l1 || l2

  return startNode.next
  // if(!l1 || !l2) return l1 ? l1 : l2
  // let newList, p1, p2
  // if(l1.val <= l2.val) {
  //     newList = l1
  //     p1 = newList
  //     p2 = l2
  // } else {
  //     newList = l2
  //     p1 = newList
  //     p2 = l1
  // }
  // while(p1.next) {
  //     if(!p2) break
  //     if(p1.next.val <= p2.val) p1 = p1.next
  //     else {
  //         let hold = p2
  //         p2 = p2.next
  //         hold.next = p1.next
  //         p1.next = hold
  //     }
  // }
  // (p2) && (p1.next = p2)
  // return newList
};

## Trees

Non-linear data structure of nodes in parent/child relationship

root - top node of a tree
child - node directly connected to another node when moving away from the root
parent - the converse notion of a child
siblings - nodes w/ the same parent
leaf - node w/ no children
edge - connection btw two nodes

Uses:
- HTML DOM
- network routing
- abstract syntax trees
- artificial intelligence(tic tac toe game / decision tree)
- computer folder structure

### Binary Search Trees (BST)

Have at most two child nodes per node and data is sorted - for any given node nodes that are less than the current node are placed to the left, every node that is greater than or equal too the current node is placed to the right of it

Binary Search Tree Class Structure:
Methods: `insert(val), find(val)`
```
class Node() {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST() {
  constructor() {
    this.root = null
  }

  //insert: insert new node based on BST structure
  insert(val) {
    //create newNode off value argument, assign to root is none exists
    const newNode = new Node(val)
    if(!this.root) {
      this.root = newNode
      return this
    } else {
      //while currNode is true
      //if new val is < currNode's val, check if left node exists
      //if so reassign currNode until next node is null and assign newNode to the currNode's property
      //follow same process for if new node is >= currNode
      let currNode = this.root
      while(currNode) {
        if(newNode.val === currNode.val) return null
        if(newNode.val < currNode.val) {
          if(!currNode.left) {
            currNode.left = newNode
            return this
          }
          currNode = currNode.left
        } else {
          if(!currNode.right) {
            currNode.right = newNode
            return this
          }
          currNode = currNode.right
        }
      }
    }
  }

  //find: find a node given a value
  find(val) {
    if(!this.root) return false
    let currNode = this.root
    while(currNode) {
      if(val === currNode.val) return true
      currNode = val < currNode.val ? currNode.left : currNode.right
    }
    return false
  }
}
```

#### Big O of BST
Insertion: O(log n)
Searching: O(log n)
* not guaranteed if BST is one sided and insertion/searching required going through each node, would be best to rewrite BST 

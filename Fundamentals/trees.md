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

### Binary Tree
Tree where every node has at most two children, nodes may or may not be sorted.
In "perfect" trees, total nodes on each level doubles as you move down

To calculate number of nodes from height...
example: n --> number of nodes, h --> height of tree / number of levels
If the tree levels are indexed, nodes on the xth level = 2^x
level 0: 2^0 nodes
level 1: 2^1 nodes
level 2: 2^2 nodes
etc...

total nodes(n) = 2^0 + 2^1 + 2^2 +... + 2^h-1
*levels started counting at 0, last level = h-1
n = 2^h - 1

To calculate height from number of nodes...
need to bring h down from the exponent --> logs

example: log10(100) --> what power must '10' be raised to get '100' --> 2 --> 10^2 = 100
n = 2^h - 1
n + 1 = 2^h
log2(n + 1) = log2(2^h)
log2(n + 1) = h ---> what power must '2' be raised to get 'n+1' --> 2^h where h = height of tree

### Binary Search Trees (BST)

Have at most two child nodes per node and data is sorted - for any given node nodes that are less than the current node are placed to the left, every node that is greater than or equal too the current node is placed to the right of it

Binary Search Tree Class Structure:
Methods: `insert(val), find(val)`
```
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
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

#### Tree Traversal
`BFS vs DFS`
Time Complexity - O(N) where N is the number of nodes, traversing a tree hits every node

Space Complexity - depends on tree strutcure. Wider trees can take up more space in the queue, longer trees take up more space in the recursive stack

Use Cases for DFS:
DFS InOrder on a BST returns nodes in a trees in size order
DFS PreOrder useful for cloning a tree, storing a tree in a flat structure(array) and then recreate later - immediately identify the root and left/right nodes

Breadth-First Search(BFS) - going across a tree structure
--->    10
       /  \
--->  6 -> 15
     / \     \
--->3   8 ->  20
[10, 6, 15, 3, 8, 20]

* Use a list or array to model a `queue(FIFO)`
* Add root to queue, as long as there is anything in the queue:
loop 1:
queue: [10]
visited: []
loop 2:
queue: [6, 15]
visited: [10]
loop3:
queue: [3, 8]
visited: [10, 6, 15]
  dequeue a node from the queue(shift from beginning of array) and push to the final list
loop 1:
queue: []
visited: [10]
loop 2:
queue: [15]
visited: [10, 6]
* if there a left property on the dequeued node --> add to queue
loop 1:
queue: [6]
visited: [10]
loop 2:
queue: [15, 3]
visited: [10, 6]
* if right property --> add to queue
loop1:
queue: [6, 15]
visited: [10]
loop 2:
queue: [15, 3, 8]
visited: [10, 6]
* return variable storing final list of values

```
BFS Structure:

BST() {
    const queue = []
    const values = []
    queue.push(this.root)
    while(queue.length) {
      let visitedNode = queue.shift()
      values.push(visitedNode.val)
      if(visitedNode.left) queue.push(visitedNode.left)
      if(visitedNode.right) queue.push(visitedNode.right)
    }
    return values
  }
```


Depth-First Search(DFS) - going down to the end of the tree first
 - PreOrder - for each node, vist the root first, then left nodes, then right nodes
    10
   /  \
  6    15
 / \     \
3   8     20
[10, 6, 3, 8, 15 20]

* init an array to store visited node values
* start at root
* write helper function that takes in a node:
* pushes currNode val to array of values
* if currNode.left, call function on left node
* if currNode.right, call function on right node
* return array of values

```
DFS PreOrder Structure:

DFSPreOrder() {
    const values = []
    const traverse = node => {
      //store currNode val in array, recursively traverse the left nodes, then right nodes moving back to the root
      values.push(node.val)
     if(node.left) traverse(node.left)
     if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return values
  }
```
 - PostOrder - for any given node all left nodes are traversed first, then all right nodes, and the root node is last
    10
   /  \
  6    15
 / \     \
3   8     20
[3, 8, 6, 20, 15, 10]

```
DFS PostOrder Structure:

dfsPostOrder() {
    const values = []
    const traverse = node => {
      //traverse all left nodes, then right nodes, ending at root
     if(node.left) traverse(node.left)
     if(node.right) traverse(node.right)
      values.push(node.val)
    }
    traverse(this.root)
    return values
  }
```
 - InOrder - traverse all the left nodes first, then the root, then traverse all right nodes
    10
   /  \
  6    15
 / \     \
3   8     20
[3, 6, 8, 10, 15, 20]

 ```
 DFS InOrder Structure:

 dfsInOrder() {
    const values = []
    const traverse = node => {
     if(node.left) traverse(node.left)
      values.push(node.val)
     if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return values
  }
 ```

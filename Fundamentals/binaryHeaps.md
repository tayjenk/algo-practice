## Binary Heaps

Data structure taking the form of a binary tree(at most two children).
`Max Binary Heap` parent nodes are always larger than any child nodes
`Min Binary Heap` parent nodes are always smaller than any child nodes
*no implied ordering btw sibling nodes
*left side is implemented first, then right

commonly used to implement `Priority Queues` and `graph traversal`

Binary Heaps can be stored in a list/array.
For any index of an array (n)
The left child = 2n+1
The right child = 2n+2

For any child node at array index (c)
Parent = Math.floor(c-1) / 2

Max Binary Heap Structure:
Methods: `Insert(val), extractMax()`
```
class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  //insert: adds node to the end of array of values and bubbles up to correct spot

      41
     /  \
    39   33
   /  \  / \
  18  27 12 55
  [41, 39, 33, 18, 27, 12] 55
  insert: 55
  compare new node to parent and swap if newNode is larger
      41
     /  \
    39   55
   /  \  / \
  18  27 12 33
[41, 39, 55, 18, 27, 12, 33]

      55
     /  \
    39   41
   /  \  / \
  18  27 12 33
[55, 39, 41, 18, 27, 12, 33]

  insert(val) {
    //push new val to the end of the heap and invoke bubbleUp helper function
    this.values.push(val)
    return this.bubbleUp(val)
  }

  bubbleUp(val) {
    //take idx of current val
    let idx = this.values.length - 1
    while(idx > 0) {
      //find parentIdx and value from idx
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      //keep looping until our current idx has bubbled up to the top of the heap or once val is less than its parent
      if(val <= parent) break;
      //otherwise continue swapping val with its parent and update curr idx to the parent idx
      this.values[parentIdx] = val
      this.values[idx] = parent
      idx = parentIdx
    }
    return this
  }

  //extractMax
  //remove the root, replace with most recently added node and adjust/bubble down to correct location

   //.    41
   //.  /.   \
  //.  39.    33
  //  /. \.   /
  // 18  27  12
  // [41, 39, 33, 18, 27, 12]

 //.      12
   //.  /.   \
  //.  39.    33
  //  /. \.
  // 18  27
  // [12, 39, 33, 18, 27] --> 41 removed and 12 swapped to the top

  //compare new root to children and swap with largest child
 //.      39
   //.  /.   \
  //.  12.    33
  //  /. \.
  // 18  27
  //

//continue to swap until children are less than node or at end of tree
//.       39
   //.  /.   \
  //.  27.    33
  //  /. \.
  // 18  12
  // [39, 27, 33, 18, 12]

// [41, 39, 33, 18, 27, 12]
// [12, 39, 33, 18, 27]
// [39, 12, 33, 18, 27]
// [39, 27, 33, 18, 12]`
  extractMax() {
    if(!this.values.length) return undefined
    const removedMax = this.values[0]
    if(this.values.length === 1) return this.values.pop()
    this.values[0] = this.values.pop()
    this.bubbleDown()
    return removedMax
  }

  bubbleDown() {
    let idx = 0
    const val = this.values[0]
    while(true) {
      let leftChildIdx = 2 * idx + 1, rightChildIdx = leftChildIdx + 1
      let leftChild, rightChild
      let swap = null
      if(leftChildIdx) {
        leftChild = this.values[leftChildIdx]
        if(val < leftChild) swap = leftChildIdx
      }
      if(rightChildIdx) {
        rightChild = this.values[rightChildIdx]
        if(
          (swap === null && val < rightChild) ||
          (swap !== null && rightChild > leftChild)
          ) swap = rightChildIdx
      }
      if(swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = val
      idx = swap
    }
    console.log(this.values)
  }
}
```

## Priority Queue

Data structure where each elenent has a priority.
Elements w/ higher priorities are served before lower

Priority Queue Structure (commonly implemented using a min heap, lower numbers = higher priority)
Methods: `enqueue(value, priority)`, `dequeue()`
```
class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor(values) {
    this.values = []
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    this.values.push(newNode)
    this.adjustUp(newNode)
  }

  adjustUp(newNode) {
    let idx = this.values.length - 1
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parentElement = this.values[parentIdx]
      if(newNode.priority >= parentElement.priority) break
      this.values[parentIdx] = newNode
      this.values[idx] = parentElement
      idx = parentIdx
    }
  }

  dequeue() {
    const removedNode = this.values[0]
    const end = this.values.pop()
    if(this.values.length > 0) {
      this.values[0] = newRoot
      this.adjustDown()
    }
    return removedNode
  }

  adjustDown() {
    const nodeToMove = this.values[0]
    let idx = 0
    while(idx < this.values.length) {
      let swap = null
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = leftChildIdx + 1
      let leftChild, rightChild
      if(leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx]
        if(nodeToMove.priority > leftChild.priority) swap = leftChildIdx
      }

      if(rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx]
        if((swap === null && nodeToMove.priority > rightChild.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)) swap = rightChildIdx
      }
      if(swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = nodeToMove
      idx = swap
    }
  }
}
```

### Big O of Binary Heaps
Insertion - O(log N) - worst case inserted element would reach the top of the heap but would only compare itself to one node on each level along the way.
2^(height of tree)
* structure of a binary heap doesn't allow for severe unbalanced. An entire row must be filled more adding additional children
Removal - O(log N)
Search - O(N) - heaps are not useful for searching, no implied order between siblings, better to use a BST

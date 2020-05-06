/*
create BST class
methods: insert, remove, contains
values cannot be removed from a single-node tree, calling remove on a single-node tree should not do anything

allows for duplicate values, left < root >= right
*/

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  //O(log n) time | O(1) space, potential for O(n) time if tree is very inbalanced
  insert(value, currNode = this) {
    //const newNode = new BST(value)
    //let currNode = this
    //check if val if <= currNode.value or > currNode.value
    //if node.left exists go to the left and determine direction
    //if determine direction and node doesnt exist, assign to newNode
    let direction = value < currNode.value ? "left" : "right"
    if (currNode[direction]) this.insert(value, currNode[direction])
    else currNode[direction] = new BST(value)
    console.log({ currNode })
    return this
  }

  //O(log n) time | O(1) space, potential for O(n) time if tree is very inbalanced
  contains(value) {
    let currNode = this
    while (currNode) {
      if (currNode.value === value) return true
      let direction = value < currNode.value ? "left" : "right"
      currNode = currNode[direction]
    }
    return false
  }

  remove(value, parentNode = null) {
    //single node trees cannot be removed
    //if (!this.left && !this.right) return this
    let currNode = this
    //find the node that needs to be removed and keep track of the parent
    while (currNode) {
      if (currNode.value === value) break
      let direction = value < currNode.value ? "left" : "right"
      if (currNode[direction]) {
        parentNode = currNode
        currNode = currNode[direction]
      }
    }
    //deals in all cases if currNode has two childNodes
    if (currNode.left && currNode.right) {
      //find the smallest value on the right side
      //reassign currNode's value
      //and then traverse again to remove
      currNode.value = currNode.right.findMinChild()
      currNode.right.remove(currNode.value, currNode)
    }
    //below are for cases knowing there is only one childNode
    //need to address if there's one child node and either a parentNode or
    //no parentNode
    else if (!parentNode) {
      //no parent only left child
      if (currNode.left) {
        currNode.value = currNode.left.value
        currNode.left = currNode.left.left
        currNode.right = currNode.left.right
      }
      //no parent only right child
      else if (currNode.right) {
        currNode.value = currNode.right.value
        currNode.right = currNode.right.right
        currNode.left = currNode.right.left
      }
      //no parent no children --> single node
      else return this
    }
    //if the currNode has one child node and a parentNode
    else if (parentNode.left === currNode) {
      parentNode.left = currNode.left ? currNode.left : currNode.right
    } else if (parentNode.right === currNode) {
      parentNode.right = currNode.left ? currNode.left : currNode.right
    }
    return this
  }

  findMinChild() {
    let node = this
    while (node.left) node = node.left
    return node.value
  }
}

/*
func takes in a BST and returns a boolean if all nodes follow the rules of a BST
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/*
will func take an empty tree?
tree with one node?

EDGE CASE:
while validating nodes on either the left or right side of a root,
cannot directly check if a child node is valid according to its parent,
in addition must be valid according to the root node
ex:
     10
		/  \
	 5.   15
	  \
		10
the second 10 node is valid in respect to its parent but is ultimately invalid
compare to the root
*/

//function takes in the root node and establishes a max and min boundary
function validateBst(tree, max = Infinity, min = -Infinity) {
  //recursive base case, if the node is null / we have reached a leaf return true
  //null nodes are valid as they dont that the "opportunity" to be invalid
  if(!tree) return true
  //if the node value breakes the boundaries, either >= max or < min return false
  //all node values must be < max & >= min
  if(tree.value >= max || tree.value < min) return false
  //first determine if the leftnode is valid recursively calling on left nodes until reach a leaf
  const leftValid = validateBst(tree.left, tree.value, min)
  //if leftNode is valid then recursively check if right nodes are valid using the max and min value of the node this is called in
	return leftValid && validateBst(tree.right, max, tree.value)
}

/*
EXAMPLE
        10
       /  \
  --> 5   15
     / \
    2   5
         \
          6

leftValid = validateBst(tree.left, max, min) = validate(5, max = 10, min = -Infinity)
    leftValid = validate(2, max = 5, -Infinity) --> returns true
    return leftValid && validate(tree.right, max = 10, min = tree.value) --> uses the max value from validate(5, max = 10, min = -Infinity) currently on the callstack and min value of the current node
*/

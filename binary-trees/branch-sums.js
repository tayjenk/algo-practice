// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/*
func takes a binary tree and returns an array of branch sums
sums array is in order from the leftmost branch sum to the rightmost
branchsum is the sum of all node values in a tree branch, ending at a leaf node
*/

function branchSums(root) {
//output array containing branch sums
 const sums = []
 //recursively call func with the starting node, starting sum, and array
 findBranchSums(root, 0, sums)
 return sums
}

	function findBranchSums(node, runningSum, sums) {
		//if node is null return node
	 if(!node) return;
		//add current sum to the node's value
	 runningSum += node.value
		//if there is no left and right nodes (at a leaf) push runningSum into sums array
		if(!node.left && !node.right){
			sums.push(runningSum)
			return;
		}
		//otherwise run func on the left node and then on right node
		findBranchSums(node.left, runningSum, sums)
		findBranchSums(node.right, runningSum, sums)
	}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;


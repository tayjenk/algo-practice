/*
func takes a non-empty sorted array of unique ints
create a bst from the int
return the root
minimize the height of the BST

binary search on the array find midpoint == root
then find mid point of left side, then midpoint of right side and keep inserting midpoints
*/

function minHeightBst(array) {
	return createBranches(array, null, 0, array.length - 1)
}

//O(n log n) time - performing binary search on array
//O(N) space where n is number of nodes created for the length of the array
	function createBranches(array, bst, startIdx, endIdx) {
		//base case: if endIdx is < startIdx return func
			if(endIdx < startIdx) return;
		//establish mipoint and if bst is null (we are creating root)
		//to find midpoint: add start and end idx
		//helpful for finding midpoint of upper half of array, cannot do array.length / 2
			const midpoint = Math.floor((startIdx + endIdx) / 2)
			const newValue = array[midpoint]
			if(!bst) bst = new BST(newValue)
		//otherwise run insert function
			else bst.insert(newValue)
		//recursively find midpoints of lower and uppper half and insert new nodes
			createBranches(array, bst, startIdx, midpoint - 1)
			createBranches(array, bst, midpoint + 1, endIdx)
			return bst
	}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

}


/*
start at beginning of input arr, create new node off first element and shift off arr
root = TreeNode(8)
[5,1,7,10,12]
creat subarray of all numbers smaller and larger than root [5,1,7] [10,12]
root.left = createTree([5,1,7])
root.right = createTree([10,12])

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
*/


//Definition for a binary tree node.
  function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var bstFromPreorder = function(preorder) {
  if(!preorder.length) return null
  const root = new TreeNode(preorder.shift())
  const leftNodes = []
  while(preorder[0] < root.val) leftNodes.push(preorder.shift())
  const rightNodes = preorder

  root.left = bstFromPreorder(leftNodes)
  root.right = bstFromPreorder(rightNodes)

  return root
};

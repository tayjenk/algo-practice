/*
function takes a tree node and an array
return an array of all the node values printed following inOrder, preOrder, and postOrder traversal
*/

function inOrderTraverse(tree, array) {
	//left, root, right
  if(tree.left) inOrderTraverse(tree.left, array)
	array.push(tree.value)
	if(tree.right) inOrderTraverse(tree.right, array)
	return array
}

function preOrderTraverse(tree, array) {
  // root, left, right
	array.push(tree.value)
	if(tree.left) preOrderTraverse(tree.left, array)
	if(tree.right) preOrderTraverse(tree.right, array)
	return array
}

function postOrderTraverse(tree, array) {
  // left, right, root
	if(tree.left) postOrderTraverse(tree.left, array)
	if(tree.right) postOrderTraverse(tree.right, array)
	array.push(tree.value)
	return array
}

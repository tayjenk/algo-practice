/*
function takes a binary tree and inverts it,
creates a mirror image btw the left and right branches

bfs
pushing child nodes into a queue
shift off each node and swap the left and right children and push into array
if node is null continue

EDGE CASES:
empty tree?
tree with no nodes?
*/

//O(N) where n is the number nodes in the binary tree
//O(N) space 
function invertBinaryTree(tree) {
	//init nodeQueue with the root
  const nodeQueue = [tree]
	//while the queue has nodes in it, shift from the front and swap the left and right childs
	//push child nodes back into queue
	while(nodeQueue.length) {
		const node = nodeQueue.shift()
		if(!node) continue
		const placeholder = node.left
		node.left = node.right
		node.right = placeholder
		nodeQueue.push(node.left, node.right)
	}
}

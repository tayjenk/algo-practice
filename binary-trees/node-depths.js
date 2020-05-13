/*
func takes a binary tree and returns the sum of each nodes' depths

        1 (0)
       / \
    2 (1)  3 (1)
    /  \    / \
   4(2) 5(2) 6(2)  7(2)
 /  \
8(3)    9(3)

depths: 0 + 1 + 1 + 2 + 2 + 2 + 2 + 2 + 3 + 3 = 16
*/

//O(n) time is the number of nodes in the tree
// O(h) space where h is the height of the tree

//bfs search
function nodeDepths(root) {
  let sumOfDepths = 0
	//create a queue with nodes and their depth
	const nodeStack = [{node: root, depth: 0}]
	while(nodeStack.length) {
		// pop off stack and add children with their depths and add to the sum
		const {node, depth} = nodeStack.pop()
		if(!node) continue
		sumOfDepths += depth
		nodeStack.push({node: node.left, depth: depth + 1})
		nodeStack.push({node: node.right, depth: depth + 1})
	}
	return sumOfDepths
}

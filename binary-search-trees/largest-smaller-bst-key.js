//given root of a BST and a num
//func finds the largest key in tree smaller than num
//return -1 if key doesn't exist
//all keys are non-negative

//num = 17
// 20
// / \
//9   25
// \
//5 12
// / \
//11  14 --> return 14 (largest key but smaller than 17)

//initialize variable to hold current highest num
//highestKey = -1 (automatically return -1 if highestkey is not found)
//if node exists compare key to num
//if num is < key go to the this.node.left
//if node exists, compare key to num etc etc
//if num is >= key
//highest key = this.root.key
//traverse right
//return highestKey

const findLargestSmallerKey = (rootNode, num) => {
  let highestKey = -1
  while(rootNode) {
    //if num is smaller than rootNode value than traverse left side for smaller nodes
    if(num < rootNode.key) {
      rootNode = rootNode.left
    } else {
      //if num is greater or equal to store and search right for possible higher nodes
      highestKey = rootNode.key
      rootNode = rootNode.right
    }
  }
  return highestKey
 }

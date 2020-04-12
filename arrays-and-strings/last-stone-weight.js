/*
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

1 <= stones.length <= 30
1 <= stones[i] <= 1000

 heap version and sorting solution
 sort stones, from least to greatest, then grab last two elements = x y
 [2,7,4,1,8,1] --> [1,1,2,4,7,8] x=7 y=8
 if y == x splice off last two elements
 if y !==x splice out last two elements, replace with y-x and sort
 continue until array.length === 1 and return final weight
*/
var lastStoneWeight = function(stones) {
  //if(stones.length <= 1) return stones[0]
  //stones.sort((a, b) => a-b)
  // let x = stones[stones.length - 2], y = stones[stones.length - 1]
  // if(x === y) stones.splice(stones.length - 2, 2, 0)
  // if(x !== y) stones.splice(stones.length - 2, 2, y - x)
  // console.log(stones, stones.length)
  // return lastStoneWeight(stones)
  while(stones.length > 1) {
      stones.sort((a, b) => a-b)
      let y = stones.pop(), x = stones.pop()
      let difference = y - x
      stones.push(difference)
      console.log(stones)
  }
  return stones[0]
};

//O(log N) sorting the array | O(1) space

/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

11110
11010
11000
00000
 ----> 1

11000
11000
00100
00011
---> 3
*/

/*
DFS approach
int totalIslands = 0
loop through each row and col of matrix starting at [0][0]
looking for first value === 1

[     0. 1. 2. 3. 4
  0  [1, 1, 1, 1, 0]
  1  [1, 1, 0, 1, 0]
  2  [1, 1, 0, 0, 0]
  3  [0, 0, 0, 0, 0]
]
[0][0] === 1
if 1 is found change val to 0 and recursively call func that checks top, right, bottom, left values for 1s and changes to 0s
when recursive func is resolved --> totalIslands++
continue looping through matrix until all 1s have been found
end of matrix loop return total Islands
*/

//
function numIslands(grid) {
  let totalIslands = 0
  for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[0].length; col++) {
        //console.log({row, col})
          if(grid[row][col] === "1") {
            totalIslands++
            findIsland(grid, row, col)
          }
      }
  }
  return totalIslands
};

function findIsland(grid, row, col) {
  if(grid[row][col] === "1") grid[row][col] = 0
  else return
    //console.log({grid})
  if(row > 0 && row < grid.length) findIsland(grid, row - 1, col) //top
  if(col < grid[0].length-1) findIsland(grid, row, col + 1) //right
  if(row < grid.length-1) findIsland(grid, row + 1, col) //bottom
  if(col > 0 && col < grid[row].length) findIsland(grid, row, col - 1) //left
}

/**
 * @param {number[][]} grid
 * @return {number}
 */

//create matrix mirrored off of input matrix, filled with 0's?
// loop through first row of matrix, finding sums starting at initial point
// [0,0], [0,0] + [1,0], [0,0] + [1,0] + [2,0]
// loop through first column of array, finding sums starting at initial point
// [0,0], [0,0] + [0,1], [0,0] + [0,1] + [0,2]
// loop through remaining spots finding math.min(val + input[x][y-1], val + input[x-1][y])
// return sumsMatrix[row.length - 1][col.length - 1]

const minPathSum = function(grid) {
  const minMatrix = []

  let topRow = []
  grid[0].reduce((sum, int) => {
    topRow.push(sum += int)
    return sum
  }, 0)
  minMatrix.push(topRow)

  for(let r = 1; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      //console.log(minMatrix)
      let gridSpot = grid[r][c]
      //console.log('gridSpot', gridSpot, 'grid[r][c-1]', !!grid[r][c-1])
      if(grid[r][c-1] !== undefined) {
        let minSum = Math.min((gridSpot + minMatrix[r - 1][c]), (gridSpot + minMatrix[r][c-1]))
        minMatrix[r][c] = minSum
      } else {
        minMatrix.push([gridSpot + minMatrix[r - 1][c]])
      }
    }
  }
  return minMatrix[minMatrix.length - 1][minMatrix[0].length - 1]
}

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

// Input:
// [
//   [0,0],
//   [0,0]
// ]
// Output: 7
// NOTE: original edge check: boolean if current spot had a spot to the left of it was if(grid[r][c-1]); 0 is a falsy value so with an array of 0's statement will always return false. updated to: if(grid[r][c-1] !== undefined)

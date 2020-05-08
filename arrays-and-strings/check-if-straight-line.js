/*
given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

will always have at least two points in coordinates
no duplicates
*/

//O(n) time | O(1) space - where n is the length of the given coordinates array
function checkStraightLine(coordinates) {
  if(coordinates.length === 2) return true
  //init the variables for the change over x and change over y
  let xChangeInit = coordinates[1][0] - coordinates[0][0]
  let yChangeInit = coordinates[1][1] - coordinates[0][1]
  //loop through given coordinates and cross multiply current coordinate change to the initial x and y change values
  for(let i = 2; i < coordinates.length; i++) {
      let xChange = coordinates[i][0] - coordinates[i-1][0]
      let yChange = coordinates[i][1] - coordinates[i-1][1]
      if(xChangeInit * yChange !== yChangeInit * xChange) return false
  }
  return true
}

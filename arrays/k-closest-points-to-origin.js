/*
given an array POINTS and int K
find the K closest points to the origin (0,0)
return an array of the points in an array

no empty imputs
k will be >= 1
points.length >= 1

init a closet point variable??
loop through points array and custom sort
[[3,3],[5,-1],[-2,4]].sort((a,b) => {

a = [3,3] b=[5,-1] const from = [0, 0]
compute distance formula for both a and b
find dist btw two points on a graph = sqrt((x2 - x1)^2 + (y2 - y1)^2)
compute up without square root

if distA < distB return -1
if distA > distB return 1
else return 0
return slice of points array up to k
})
*/
var kClosest = function(points, K) {
  const distance = point => {
      const [x, y] = point
      return Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2)
  }
  points.sort((a,b) => {
      if(distance(a) < distance(b)) return -1
      if(distance(a) > distance(b)) return 1
      return 0
  })
  return points.slice(0, K)
};

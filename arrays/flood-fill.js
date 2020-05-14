/*
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
*/

/*
given the value of the starting point (sr, sc), recursively check if the top, then right, then bottom, then left values of the 2d array exist and also equal the value of my starting point
then with each values from the starting point that equals the starting point, recursively follow the same checks until all four sides have been resolved / changed to fill color / ignored, returning to the original starting point
*/
var floodFill = function(image, sr, sc, newColor) {
  //store original color change the given coordinate to newColor
  const originalColor = image[sr][sc] //1
  //if original color equals the new color then there's no need to do anything
  //as I would only be changing anything that equals the original color
  if(originalColor === newColor) return image
  if(image.length === 1 && image[0].length === 1) {
    image[sr][sc] = newColor
    return image
  }
  image[sr][sc] = newColor
  //check the top value
  if(sr > 0 && image[sr-1][sc] === originalColor) floodFill(image, sr - 1, sc, newColor)
  //check the right value
  if(sc < image[0].length - 1 && image[sr][sc+1] === originalColor) floodFill(image, sr, sc + 1, newColor)
  //check the bottom
  if(sr < image.length - 1 && image[sr + 1][sc] === originalColor) floodFill(image, sr + 1, sc, newColor)
  //check the left
  if(sc > 0 && image[sr][sc-1] === originalColor) floodFill(image, sr, sc - 1, newColor)
  return image
};

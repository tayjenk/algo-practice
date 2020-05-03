/*
func takes array of int, return length of longest peak
peak = adjacent int are strictly increasing until the reach a tip (highest val)
and then strickly decreasing
at least 3 int === peak
[1,4,10,2] --> peak, returns 4
[1,2,3] --> not a peak, nothing decreases after the 3

input = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
output = 6 --> 0, 10, 6, 5, -1, -3
*/

//O(N) time | O(1) space
function longestPeak(array) {
  // loop through array compare if two elements to the right and left are less than element
	let peakLength = 0, i = 1
  while(i < array.length - 1) {
    let leftIdx, rightIdx
    if(array[i - 1] < array[i] && array[i + 1] < array[i]) {
      //if peak is found expand to the left and right and find the difference
      leftIdx = i - 2
      rightIdx = i + 2
      while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx--
      while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) rightIdx++
      peakLength = Math.max(peakLength, rightIdx - leftIdx - 1)
      i = rightIdx
    } else {
      i++
    }
  }
  return peakLength
}

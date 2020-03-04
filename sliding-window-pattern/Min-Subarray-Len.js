//fn accepts two parameters:
//array of positive int
//positive int
//fn returns the min length of contiguous subarray
//where sum of subarray >= int
//return 0 if none exists

//[2, 3, 1, 2, 4, 3], 7 --> 2 --> [4,3]
// loop through array
// create min subarray when sum >= int
//  i=0
//  |
// [2], 3, 1, 2, 4, 3 sum = 2
//     i=0
//     |
// [2, 3], 1, 2, 4, 3 sum = 5
// ...
//  i=0          j=4
//  |            |
// [2, 3, 1, 2], 4, 3 sum = 8 currLen = 4 --> minLen = 4
// is sum >= goal ?
// minLen = 4
// yes? --> subtract
// sum -= array[i]
// i++

//    i=1        j=4
//    |          |
// 2, [3, 1, 2], 4, 3 sum = 6 currLen = 3
// sum < goal --> add

// sum += array[j]
// j++
//     i=1          j=5
//     |            |
// 2, [3, 1, 2, 4], 3 sum = 10 currLen 4
//sum >= goal --> subtract

//        i=2       j=5
//        |         |
// 2, 3, [1, 2, 4], 3 sum = 7 currLen = 3 minLen = 3
// sum >= goal --> subtract

//           i=3    j=5
//           |      |
// 2, 3, 1, [2, 4], 3 sum = 6 currLen = 2
//sum < goal --> add

// j will be undefined?
//           i=3
//           |
// 2, 3, 1, [2, 4, 3] sum = 9 currLen = 3
// sum >= goal --> subtract

//              i=4
//              |
// 2, 3, 1, 2, [4, 3] sum = 7 currLen = 2 minLen = 2
// sum >= goal --> subtract

//                 i=4
//                 |
// 2, 3, 1, 2, 4, [3] sum = 3 currLen = 1

function minSubArrayLen(array, goalSum) {
  let start = 0
  let end = 0
  let sum = 0
  //set minLen to infinity --> highest possible num to compare to
  let minLen = Infinity

  while(start < array.length) {
    console.log(sum)
    //loop through array and add up to goalSum
    //if sum < goal AND the end has not gone past array.length, continue to add array elements by increasing end
    if(sum < goalSum && end < array.length){
      sum += array[end]
      end++
    } else if(sum >= goalSum) {
      //otherwise: sum >= goal find the min length of subarray and subtract elements and increasing start
      minLen = Math.min(minLen, end - start)
      sum -= array[start]
      start++
    } else {
      //if sum is < goal but end is past array.length, start is still < array.length validating the while loop and we are stuck in infinite loop
      break;
    }
  }
    //
    return minLen === Infinity ? 0 : minLen
}

//minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)

//O(N) time, O(1) space

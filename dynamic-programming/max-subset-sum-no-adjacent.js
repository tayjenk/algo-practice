/*
func takes array of positive int
returns maxSum of non-adjacent elements in array
retun 0 if no sum possible
*/

/*
init maxSum and currSum
loop through array
maxSum = max of max, i, and currSum

array = [75,105,120,75,90,135]
          0  1   2   3  4  5
i=0 --> 75
j=0 --> 75
max = 0
curr = 75
math.max(j, max, curr) --> (75, 75, 0) --> 75
j += 2

i=0 --> 75
j=2 --> 120
max = 75
curr = curr += j = 75 + 120 = 195
math.max(120, 75, 195) --> 195
j += 2

init empty array of maxsums
at each idx calculate max sum from that point
array = [75,105,120,75,90,135]
          0  1   2   3  4  5
[(0 to 0), (0,1), (0,2), (0,3), (0,4), (0,5)]
maxsums = [75, 105, 195, 180, 285,___]
at array[4] --> 90
j = i-2 = 2
find max of 90, 90 + maxSums[j](2) + maxSum[j-2](0), 90 + maxSums[j-3](1), 90 + maxSums[j-4](0)

maxSums = [75, 105]
i = 2
array[i] = 120
j = i-2 = 0
while(j >= 0) {
  max = array[i] + findMax(j = 0, maxSums)
      = 120 + 75 = 195
  j-- --> j = -2
}
maxNums.push(max)
findMax(j=0, maxSums=[75, 105]) {
  sum = 0 = 75
  while(j >= 0) {
    Math.max(sum, sum += maxSums[j]) --> (0, 0+75)
    j -= 2 --> -2
  }
  return sum
}
           0   1     2
maxSums = [75, 105, 195]
i = 3
array[i] = 75
j = i-2 = 1
max = Mat.max(array[i], findMaxFrom(j, maxSums, array[i]))  --> (75, 180)
}
findMax(j=1, maxSums=[75, 105, 195, __], 75) {
  sum = 0 = 180
  while(j >= 0) {
    Math.max(sum, 75 + 105) --> 180
    j-- -> -1
  }
  return sum
}

i=5
array[i] = 135
           0    1    2    3   4   5
maxsums = [75, 105, 195, 180, 285,___]
j = i-2 = 3
max = math.max(array[i], findMaxFrom(j, maxSums, array[i])) --> (135, 330)
}
findMax(j=3, maxSums=[75, 105, 195, 180, 285,___], 135) {
  sum = 135 = 315 = 330
  while(j >= 0) {
    Math.max(sum, 135 + maxSums[j]) --> (135, 135 + 180)
    j -- --> 2
    Math.max(315, 135 + 195)
    j-- --> 1
    Math.max(330, 135 + 105)
    j = 0
    Math.max(330, 135 + 75)
  }
  return sum
}
*/

//O(N) time | O(N) space - n is length of input array
function findMaxFrom(i, maxSums, curr) {
  let j = i - 2, sum = 0
  while(j >= 0) {
    sum = Math.max(sum, curr + maxSums[j])
    j--
  }
  return sum
}

function maxSubsetSumNoAdjacent(array) {
  if(!array.length) return 0
  const maxSums = [array[0]]
  for(let i = 1; i < array.length; i++) {
    let maxSum = Math.max(array[i], findMaxFrom(i, maxSums, array[i]))
    maxSums.push(maxSum)
  }
  return Math.max(...maxSums)
}

//O(N) time | O(1) space - n is length of input array
function findMaxFrom(i, array) {
  let j = i - 2, sum = 0, curr = array[i]
  while(j >= 0) {
    sum = Math.max(sum, curr + array[j])
    j--
  }
  return sum
}

function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	if(!array.length) return 0
  for(let i = 1; i < array.length; i++) {
    array[i] = Math.max(array[i], findMaxFrom(i, array))
  }
   console.log({array})
  return Math.max(...array)
}

//O(N) time | O(1) space - no helper function
//hold all max values in same array
function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	if(!array.length) return 0
  if(array.length === 1) return array[0]
	array[1] = Math.max(array[0], array[1])
  for(let i = 2; i < array.length; i++) {
    array[i] = Math.max(array[i], array[i-1], (array[i-2] + array[i]))
  }
   console.log({array})
  return array[array.length - 1]
}

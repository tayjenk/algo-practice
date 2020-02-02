// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5

function find_averages_of_subarrays(K, arr) {
  const result = [];
  let currentSum = 0.0
  let end = K - 1
  for (i = 0; i < arr.length; i++) {
    // find sum of next 'K' elements
    currentSum += arr[i]
    console.log(`i: ${i}, end: ${end} currentSum: ${currentSum}`)
    if (i >= K - 1) {
      result.push(currentSum / K)
      end++
      currentSum -= arr[end - K]
      console.log(`newend: ${end}, arr[end]: ${arr[end]}, arr[end - K]: ${arr[end - K]}`)
      console.log(`new currentSum: ${currentSum}`)
      console.log(`result: ${result}`)
    }
  }
  return result;
}

// [2.2, 2.8, 2.4, 3.6, 2.8]
// start = 0
// end = 4
// [1, 3, 2, 6, -1]
// i = 4
// end = 5
// currentSum = currentSum + arr[5] - arr[0]

// currentSum = 11
// start = 1
// end = 5
// i = 5
// currentSum = 11 + 4 (=arr[5]) - 1 (= arr[0]) = 14

// 1. define start/end of sliding window
// 2. increase i by 1
// 3. add to currentSum
// 4. if i == end, currentSum += next element - older element, change start/end values

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

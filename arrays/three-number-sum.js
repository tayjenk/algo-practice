/*
Func takes an array:
non-empty
distinct integers
and a target sum

find all triplets in the array that sum up to target sum
return a 2D array that holds all triplets
triplets should be ordered in ascending order and triplets themselves should be in ascending order with respect to the numbers they hold

return empty array if no nums sum to target

tests:
{ array: [ 12, 3, 1, 2, -6, 5, -8, 6 ], targetSum: 0 }
{ array: [ 1, 2, 3 ], targetSum: 6 }
{ array: [ 1, 2, 3 ], targetSum: 7 }
{ array: [ 8, 10, -2, 49, 14 ], targetSum: 57 }
{ array: [ 12, 3, 1, 2, -6, 5, 0, -8, -1 ], targetSum: 0 }
{ array: [ 12, 3, 1, 2, -6, 5, 0, -8, -1, 6 ], targetSum: 0 }
{ array: [ 12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5 ],
  targetSum: 0 }
{ array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], targetSum: 18 }
{ array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], targetSum: 32 }
{ array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], targetSum: 33 }
{ array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], targetSum: 5 }
*/

//O(N^2) time | O(1) space
function threeNumberSum(array, targetSum) {
	console.log({array, targetSum})
	const output = []
  // sort array
	array.sort((a,b) => a - b)
	//loop through sorted array
	let i = 0
	while(i < array.length) {
		//find the remainder and init start and end points
		let remainder = targetSum - array[i]
		if(array[i] > remainder) break
		let start = i + 1, end = array.length - 1
		//while start and end do not meet
		while(start < end) {
			//find total btw two array points
			let total = array[start] + array[end]
			//if total === remainder, push all nums into output
			if(total === remainder) output.push([array[i], array[start], array[end]])
			//if total is too small, increase start point else decrease end point
			if(total < remainder) start++
			else end--
		}
		i++
	}
	return output
}



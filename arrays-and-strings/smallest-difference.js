/*
func taks two non-empty arrays
find pair of nums (one from each array) whose absolute diff is closest to zero
return array of the two nums --> [num from 1st array, num from 2nd array]
only one pair with the smallest diff

arrayOne = [-1,5,10,20,28,3]
arrayTwo = [26,134,135,15,17]
return [28,26]
*/

function smallestDifference(arrayOne, arrayTwo) {
  // sort both arrays
	arrayOne.sort((a,b) => a-b)
	arrayTwo.sort((a,b) => a-b)
	//start two pointers at beginning of both arrays and compare abs value
	let i = 0, j = i, pair = [], smallestDiff = Infinity;
	while(i < arrayOne.length && j < arrayTwo.length) {
		//find the abs diff btw two pairs
		//if diff === 0 return pair
		let diff = Math.abs(arrayOne[i] - arrayTwo[j])
		if(diff === 0) return [arrayOne[i], arrayTwo[j]]
		//if diff is smaller than a previous diff
		//update diff and pair
		if(diff < smallestDiff) {
			smallestDiff = diff
			pair = [arrayOne[i], arrayTwo[j]]
		}
		//increase the smaller int of the pair to get two ints closer together
		arrayOne[i] < arrayTwo[j] ? i++ : j++
	}
	return pair
}

/*
func takes two non-empty arrays
func determines if second array is a subsequence of the first array

subsequence = set of numbers not always adjacent in the given array
but in the same order as they appear in the array

if subsquence.length > array.length return false
pointer on each array
comparing each value in array to val in subsequence
loop through until one pointer is past the length of array

array = [5, 1, 22, 25, 6, -1, 8, 10]
                                 ^
subsequence = [1, 6, -1, 10]
                         ^
array[0] !== sub[0]
++
array[1] === sub[0]
++             ++
array[2]...[3]
array[4] === sub[1]
++             ++
array[5] === sub[2]
++             ++
etc...
*/

//O(nm) time where n is the length of the array and m is the length of the sequence
// O(1) space
function isValidSubsequence(array, sequence) {
	if(sequence.length > array.length) return false
  //create pointer on each array
	let i = 0, j = 0
	while(i < array.length && j < sequence.length) {
		if(array[i] === sequence[j]) {
			j++
		}
		i++
	}
	return j === sequence.length
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;


/*
write func that takes an n x m matrix / 2D array and return a flat array of all elements in spiral order

spiral starts at top left corner, goes to the right, and mo spiral until every element is vsitied

input [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
output = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
*/
//O(n) time | O(n) space

function spiralTraverse(array) {
	if(array.length < 2) return array[0]
	const output = []
  //traverse the perimeter of matrix and make the borders smaller every round
  //init start and end row, start and end col as bounds of the first rectangle perimeter in the spiral
  //traverse the first bound, then move the bounds inwards
  //end when the start row passes the end row or the start col passes the end col
	let startRow = 0, endRow = array.length - 1
	let startCol = 0, endCol = array[0].length - 1

	//<= if startRow is the endRow or startCol is the endCol
	while(startRow <= endRow && startCol <= endCol) {
		for(let col = startCol; col <= endCol; col++) {
			output.push(array[startRow][col])
		}
		//startRow + 1 to not double count current value, need to step ahead
		for(let row = startRow + 1; row <= endRow; row++) {
			output.push(array[row][endCol])
		}
		//endCol - 1 moving in reverse order, -1 to not double count current value
		for(let col = endCol - 1; col >= startCol; col--) {
			//edge case when there's one row in the middle of the matrix
			// do not want to double count the values in the middle row
			//since it has already been counted in the first loop above
			//must break here because if the values of the start and end rows are equal it will skip the loop above
			// ex: {"array": [[1, 2, 3, 4], [10, 11, 12, 5], [9, 8, 7, 6]]}
			if(startRow === endRow) break
			output.push(array[endRow][col])
		}
		//endRow - 1 moving rows in reverse, -1 to not double count current value
		for(let row = endRow - 1; row > startRow; row--) {
			//edge case with single column in the middle of matrix
			//must break here because if the values of the start and end cols are equal it will skip the loop above
			// ex: {"array": [[1, 2, 3], [12, 13, 4], [11, 14, 5], [10, 15, 6], [9, 8, 7]]}
			if(startCol === endCol) break
			output.push(array[row][startCol])
		}
		startRow++
		endRow--
		startCol++
		endCol--
	}
	return output
}

//recursive solution
function spiralTraverseRecursive(array) {
	const output = []
	spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, output)
	return output
}

function spiralFill(array, startRow, endRow, startCol, endCol, output) {
	if(startRow > endRow || startCol > endCol) return output
	for(let col = startCol; col <= endCol; col++) {
		output.push(array[startRow][col])
	}
	for(let row = startRow + 1; row <= endRow; row++) {
		output.push(array[row][endCol])
	}
	for(let col = endCol - 1; col >= startCol; col--) {
		if(startRow === endRow) return output
		output.push(array[endRow][col])
	}
	for(let row = endRow - 1; row > startRow; row--) {
		if(startCol === endCol) return output
		output.push(array[row][startCol])
	}
	spiralFill(array, startRow++, endRow--, startCol++, endCol--, output)
}

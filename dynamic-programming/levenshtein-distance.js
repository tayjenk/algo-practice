function levenshteinDistance(source, target) {
  // Write your code here.
	//create two demensional array representing min num of edits of the input strings
	//first row = min edits from source string to target empty string
	//"abc" --> ""
	let matrix = []
	for (let i = 0; i < target.length + 1; i++) {
		let row = []
		for (let j = 0; j < source.length + 1; j++) {
			row.push(j)
		}
		row[0] = i
		matrix.push(row)
	}
	console.log(matrix)
  for(let row = 1; row < target.length + 1; row++) {
    for(let col = 1; col < source.length + 1; col++) {
      if(target[row - 1] !== source[col - 1]) {
        matrix[row][col] = 1 + Math.min(matrix[row][col-1], matrix[row-1][col], matrix[row-1][col-1])
      } else {
        matrix[row][col] = matrix[row-1][col-1]
      }
    }
  }
  return matrix[target.length][source.length]
}

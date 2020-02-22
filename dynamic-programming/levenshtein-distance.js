//func takes two strings and returns the min number of edits that need to be performed on the first string to obtain the second string
//3 edits: insertion, deletion, or subsitution

//input: "abc", "yabd"
//output: 2 --> insert "y", subsittute "c" for "d"

function levenshteinDistance(source, target) {
  //create two demensional array representing min num of edits of the input strings
  //first row = min edits from source string to target empty string
  //"abc" --> ""

  //initialize array
  let matrix = []
  //create 2D array where for each char in target string(column) create a row following each char in source string, starting from 0
  for (let i = 0; i < target.length + 1; i++) {
    let row = []
    for (let j = 0; j < source.length + 1; j++) {
      row.push(j)
    }
    //starting from 0 number the char in target string
    row[0] = i
    matrix.push(row)
  }
  console.log(matrix)
  //souce string = chars need to be removed
  //target string = chars need to be added
  // [ [ 0, 1, 2, 3, 4, 5, 6, 7 ],
  // [ 1, 0, 1, 2, 3, 4, 5, 6 ],
  // [ 2, 1, 0, 1, 2, 3, 4, 5 ],
  // [ 3, 2, 1, 1, 1, 2, 3, 4 ],
  // [ 4, 3, 2, 2, 2, 2, 2, 3 ],
  // [ 5, 4, 3, 3, 3, 3, 2, 3 ],
  // [ 6, 5, 4, 4, 4, 4, 3, 2 ],
  // [ 7, 6, 5, 5, 5, 5, 4, 3 ] ] --> 3 is min num edits btw two strings

  //loop through the array, calculating min num of edits btw two strings
  for (let row = 1; row < target.length + 1; row++) {
    for (let col = 1; col < source.length + 1; col++) {
      //at each spot in the matrix if the two corresponding char in the string are not equal, min edits is the min between matrix edits in the same row col-1(left spot), same col row-1(above spot), and col-1 row-1(diagonal spot) + 1(adding current char edit)
      if (target[row - 1] !== source[col - 1]) {
        matrix[row][col] =
          1 +
          Math.min(
            matrix[row][col - 1],
            matrix[row - 1][col],
            matrix[row - 1][col - 1]
          )
      } else {
        //if corresponding string char are equal, edit = col-1 row-1(diagonal spot) as there is no change at current spot, would be equal to the min edit if curr char in str was removed
        matrix[row][col] = matrix[row - 1][col - 1]
      }
    }
  }
  //after traversing through the entire matrix, return the bottom right value
  return matrix[target.length][source.length]
}
//O(n m) time --> n and m for length of two input strings which could be a differing lengths
//O(n m) space

//can optimize space complexity to O(min(n, m)) where we have as many columns as the smallest input string and at any given spot in the matrix, we only used the edit values in the current row and the previous row

function levenshteinDistance(source, target) {
  //identify the smallest string and assign to the small variable
  const small = source.length < target.length ? source : target
  const big = source.length >= target.length ? source : target
  const evenEdits = []
  const oddEdits = new Array(small.length + 1) //[array w/ 5 empty items]
  for (let j = 0; j < small.length + 1; j++) {
    //first create first row 0 which is an even row
    evenEdits.push(j) //[ 0, 1, 2, 3, 4 ]
  }
  //for each char in big, establish prev and curr rows, loop through currRow and define min edits
  // i++ currRow and prevRow are reassigned
  for (let i = 1; i < big.length + 1; i++) {
    let currRow, prevRow //only working between two rows, curr and prev
    if (i % 2 !== 0) {
      //on an odd row
      currRow = oddEdits
      prevRow = evenEdits
    } else {
      currRow = evenEdits
      prevRow = oddEdits
    }
    currRow[0] = i //first column should align from 0 to length of big string
    //for each element in currRow calculate min edits
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currRow[j] = prevRow[j - 1]
      } else {
        currRow[j] = 1 + Math.min(currRow[j - 1], prevRow[j], prevRow[j - 1])
      }
    }
    //REMEBER value for oddEdits and evenEdits is constantly changing as arrays are passed by reference not by value, arrays are not copying when reassigned to a new variable. If edited later within the loop, the original array is changed
  }
  //at the end of big.length loop determine whether the curr row is even or odd, return the last element in the array
  big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length]
}

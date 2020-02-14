//RESTATE...
//function shuffles items in an aray in-place/manipulates the given array
//randomly orders items in the original array
//uniform shuffle, so each array item has the same probability of ending up in each spot in the output array
//given function getRandom(floor, ceiling) => random int that is >= floor and <= ceiling

//EXAMPLE...
//input: [1, 2, 3, 4, 5]

//APPROACH...
//initialize values for floor = first index in array and ceiling = array.length - 1
//while loop, while floor < ceiling, invoke getRandom() for a random selected index between current index and last index
//take element at index and store in a temp variable
//assign current index value to equal value at the randomly selected index
//assign value of randomly selected index to the value of temp
//swap positions
//return array

//CODE...
function shuffle(array) {
  //returns given array if empty or no elements to swap around
  if (array.length <= 1) return array

  let floor = 0
  let ceiling = array.length - 1
  while (floor < ceiling) {
    let randomIndex = getRandom(floor, ceiling)
    //current spot does not equal the random index generated
    if (randomIndex !== floor) {
      let temp = array[floor]
      array[floor] = array[randomIndex]
      array[randomIndex] = temp
      floor++
    }
  }
  return array
}

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor) + floor)
}

//O(N) time | O(1) space

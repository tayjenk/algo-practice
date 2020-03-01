//create a stack class that supports pushing and popping values off the stack
//peeking at the top stack value
//get the min and max values of the stack
//run in constant time and space

//stack class constructor w/ this.stack = [], this.max = [], this.min = []
//peek: returns the last input of the stack
//pop: store popped val from stack in a node, if that val is either the last val of this.min or this.max, remove it from its respective array, return popped val
//push: adds val to end of this.stack, if min and max arrays are empty, push into both and return, if the val is >= this.max or <= this.min add to end of respecitive array
//getMin: return the last val in this.min array
//getMax: return the last vla in this.max array

class MinMaxStack {
	constructor() {
		this.stack = []
		this.max = []
    this.min = []
    //this.minMax = []
	}
  peek() {
    // Write your code here.
    if(!this.stack.length) return null
		return this.stack[this.stack.length - 1]
  }

  pop() {
    if(!this.stack.length) return null
		const popped = this.stack.pop()
		if(popped === this.getMax()) {
      this.max.pop()
    }
    if(popped === this.getMin()) {
      this.min.pop()
    }
    console.log(popped)
    return this
    //this.minMax.pop()
    //return this.stack.pop()
  }

  push(number) {
    this.stack.push(number)
    if(!this.max.length && !this.min.length) {
      this.max.push(number)
      this.min.push(number)
      return this
    }
    if (number >= this.max[this.max.length -1]) {
      this.max.push(number)
    }
    if (number <= this.min[this.min.length - 1]) {
      this.min.push(number)
    }
    return this
    //create a new minMax obj, add to minMax array if empty
    //otherwise compare new number to the prev minMax, create obj with new min max and add to minMax array
    //let newMinMax = {min: number, max: number}
    //if(this.minMax.length) {
      //let prevMinMax = this.minMax[this.minMax - 1]
      //newMinMax.min = Math.min(prevMinMax.min, number)
      //newMinMax.max = Math.max(prevMinMax.max, number)
      //}
      //this.minMax.push(newMinMax)
      //this.stack.push(number)
  }

  getMin() {
    if(!this.min.length) return null
    return this.min[this.min.length - 1]
  }

  getMax() {
    if(!this.max.length) return null
    return this.max[this.max.length - 1]
  }
}

const stack = new MinMaxStack()
stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)
stack.push(8)
stack.push(8)
stack.push(0)
stack.push(8)
stack.push(9)
stack.push(5)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

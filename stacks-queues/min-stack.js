/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/
const StackNode = function(val, min) {
  this.val = val
  this.min = min
}

var MinStack = function() {
  this.stack = []
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if(!this.stack.length) this.stack.push(new StackNode(x, x))
  else {
      const currMin = this.getMin()
      this.stack.push(new StackNode(x, Math.min(x,currMin)))
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1].val
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length-1].min
};

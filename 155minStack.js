//Problem - 155
//Solution Beats 89% in Time Complexity
//Solution Beats 21% in Space Complexity
var MinStack = function() {
    this.stack = [],this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length === 0 || this.min.at(-1)>val) this.min.push(val)
    else this.min.push(this.min.at(-1))
    this.stack.push(val)
    return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()

    return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.at(-1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
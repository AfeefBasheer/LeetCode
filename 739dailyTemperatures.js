//Problem - 739
//beats 73% in Time Complexity 
//beats 99.5% in Space complexity 

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = []
    let res = Array(temperatures.length).fill(0)
    for(let i=temperatures.length-1;i>=0;i--){
    while(stack.length && temperatures[stack.at(-1)] <= temperatures[i]){
        stack.pop()
        }
    if(stack.length) res[i] = stack.at(-1)- i
    stack.push(i)
    }
    return res
};


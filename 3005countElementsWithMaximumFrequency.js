//Problem 3005
//Beats 90% in time complexity 
//Beats 75% in space complexity

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq={}
    nums.forEach((item)=>freq[item] = (freq[item] || 0)+1)
    let arr = Object.values(freq)
    let max = Math.max(...arr),count = 0
    arr.forEach((item)=> {if(item===max) count++})                                
    return count*max
};
//Problem - 15
//Beats 62% in time complexity
//Beats 33% in space complexity

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res = []
    for(let i=0;i<nums.length;i++){
        let start = i+1,end=nums.length-1
        while(start<end){
            if(nums[i]+nums[start]+nums[end] === 0) {
                res = Array.from(new Set(res))
                break
            }
            else if(nums[i]+nums[start]+nums[end] < 0) start++
            else if(nums[i]+nums[start]+nums[end] > 0) end--
        }
    }
    return res
};
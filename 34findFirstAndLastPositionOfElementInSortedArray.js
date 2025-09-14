//Problem - 34
//Beats 100% on Time Complexity
//Beats 20% on Space Complexity

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length-1
    let res = []
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(nums[mid] === target && (nums[mid-1]=== undefined || nums[mid-1]!== target)){
            res.push(mid)
            break
        }else if(nums[mid] >= target) end = mid-1
        else if(nums[mid] < target) start = mid+1
    }
    start = 0
    end = nums.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(nums[mid] === target && (nums[mid+1]=== undefined || nums[mid+1]!== target)) {
            res.push(mid)
            break
        }else if(nums[mid] > target) end = mid-1
        else if(nums[mid] <= target) start = mid+1
    }
    if(res.length===2) return res
    return [-1,-1]
};
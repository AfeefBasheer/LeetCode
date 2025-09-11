//Problem = 153
//Beats 5% (100%) on Time Complexity (Optimal)
//Beats 3% (17%) on Space Complexity (Optimal)

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var findMin = function(nums) {
    //Best Optimal Algorithm
    let start = 0
    let end = nums.length-1
    while(start < end){
        let mid = Math.floor((start+end)/2)
        if(nums[mid] < nums[end]) end = mid
        else start = mid+1
    }
    return nums[start]

    //My initial Algorithm
    /*if(nums[0] < nums.at(-1)) return nums[0]
    if(nums.length === 1) return nums[0]
    if(nums.length ===2 ) return Math.min(...nums)
    let start = 0,end = nums.length-1
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        console.log('mid'+mid)
        if((nums[mid] > nums[mid-1]) && (nums[mid] > nums[mid+1])) return nums[mid+1]
        else if(nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]) return nums[mid]
        else if((nums[mid-1] < nums[mid]) && (nums[mid] < nums[mid+1])){
            if(nums[start] < nums[mid]){
            start = mid
            }
            else{
             end = mid
            console.log(mid)
            }
        }
    }
    return min
    */
};
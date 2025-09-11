//Problem - 33
//beats 5% in Time Complexity (optmized)
//beats 5% in Space complexity (optmized)

var search = function(nums, target) {
    
    let start = 0,end = nums.length-1

    while(start <= end){
        let mid = Math.floor((start+end)/2)
        console.log(mid)
        if(nums[mid] === target) return mid
        else if(target < nums[mid]){
            if((nums[mid] > nums[start]) && nums[start] > target) start = mid+1
            else if((mid == start && nums[mid]>target)) start=mid+1
            else end = mid-1
        }else{
            if(nums[start] > target && (nums[start] > nums[mid] ||start==mid )) start = mid+1
            else if((start == mid || nums[start] < target) && (nums[start] < nums[mid] ||start == mid)) start = mid+1
            else end = mid-1
        }
        console.log(start, end)
    }
    return -1
};
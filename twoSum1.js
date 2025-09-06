//Problem - 1
//Beats 100% in Time complexity
//Beats 5% in Space complexity

var twoSum = function(nums, target) {
    let match = {}
    for(let i=0;i<nums.length;i++){
        if(match.hasOwnProperty(target-nums[i])) return [match[target-nums[i]],i]
        else match[nums[i]] = i
    }
};

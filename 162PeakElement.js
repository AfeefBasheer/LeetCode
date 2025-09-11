//Problem - 74
//Beats 100% in time complexity
//Beats 70% in Space compleixty

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (
      (nums[mid - 1] == undefined || nums[mid - 1] < nums[mid]) &&
      (nums[mid] > nums[mid + 1] || nums[mid + 1] == undefined)
    )
      return mid;
    else if (
      (nums[mid - 1] == undefined || nums[mid - 1] < nums[mid]) &&
      (nums[mid] < nums[mid + 1] || nums[mid + 1] == undefined)
    )
      start = mid + 1;
    else if (
      (nums[mid - 1] == undefined || nums[mid - 1] > nums[mid]) &&
      (nums[mid] > nums[mid + 1] || nums[mid + 1] == undefined)
    )
      end = mid - 1;
    else start = mid + 1;
  }
};

//Problem - 11
//Beats 95% in time complexity
//Beats 70% in space complexity


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max=-Infinity
    let i=0,j=height.length-1
    while(j<i){
        let area = (Math.min(height[i],height[j])*(j-i))
        if(area>max) max = area
        if(height[i]>height[j]) j--
        else i++
    }
    return max
};
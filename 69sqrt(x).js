//Problem - 69
//Beats 100% in time complexity
//Beats 62% in space complexity

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2)  return x
    let start = 1 , end = x/2,ans
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(x === mid*mid) return mid
        else if( x < (mid*mid)) end = mid-1
        else if(x> (mid*mid)){
            ans = mid
            start = mid+1
        }
    }
    return ans
};
//Problem - 54
//Beats 100% in time complexity
//Beats 95% in Space compleixty
/**
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0,right = matrix[0].length-1
    let top = 0,bottom = matrix.length-1
    let arr = []
    while((left <= right) && (top <= bottom)){
        for(let i=left;i<=right;i++){
            arr.push(matrix[top][i])
        }
        
        for(let i=top+1;i<=bottom;i++){
            arr.push(matrix[i][right])
        }
        if(right === left || top === bottom) return arr
        for(let i = right-1;i>=left;i--){
            arr.push(matrix[bottom][i])
        }
        for(let i=bottom-1;i>top;i--){
            arr.push(matrix[i][left])
        }
    left++
    right--
    bottom--
    top++
    }
    return arr
};
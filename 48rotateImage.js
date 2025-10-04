//Problem - 48
//Beats 100% in time complexity
//Beats 88% in Space compleixty
/**
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
        let left = 0,right = matrix.length-1
            while(left < right){
                let bottom = right, top = left
                for(let i=0;i<right-left;i++){
                    let temp = matrix[top][left+i]
                    //bottom in top
                    matrix[top][left+i] = matrix[bottom-i][left]
                    //right in left
                    matrix[bottom-i][left] = matrix[bottom][right-i]
                    //top in bottom
                    matrix[bottom][right-i] = matrix[top+i][right]
                    //left in right
                    matrix[top+i][right] = temp
                }
                left++
                right--
            }
            return matrix
};
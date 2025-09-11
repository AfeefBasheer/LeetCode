
 //Problem - 74
 //Beats 100% in time complexity
 //Beats 70% in Space compleixty
 var searchMatrix = function(matrix, target) {
    //Approach - 3
    let length = matrix.length * matrix[0].length
    let start=0,mid,end = length
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        midRow = Math.floor(mid/matrix[0].length)
        midCol = Math.floor(mid%matrix[0].length)
        if(matrix[midRow] && matrix[midRow][midCol]!== undefined && matrix[midRow][midCol] == target){
            return true
        }else if(matrix[midRow] && matrix[midRow][midCol] && matrix[midRow][midCol] > target){
            end = mid-1
        }else if(matrix[midRow] && matrix[midRow][midCol] && matrix[midRow][midCol] < target){
            start = mid + 1
        }else {
            return false
        }
    }
    return false
    
    //Approach - 1
    //find the row
    //perform binary search on row

    /*
    let row=0
    for(let i=0;i<matrix.length;i++){
        if(target <= matrix[i][matrix[0].length-1]){
            row = i;
            break
        }
    }    
    let start=0,mid,end = matrix[row].length-1
    console.log(start,end)
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        if(matrix[row][mid] < target){
            start = mid + 1
        }else if(matrix[row][mid] > target){
            end = mid-1
        }else if(matrix[row][mid] === target){
            return true
        }
    }
    return false
    */

    //Approach - 2
    // for(let i=0;i<matrix.length;i++){
    //     for(let j=0;j<matrix[0].length;j++){
    //         if(matrix[i][j] === target) return true
    //     }
    // }
    // return false
};
//Problem - 36
//beats 88% in Time Complexity (optmized)
//beats 30% in Space complexity (optmized)

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j]!== '.') {
                if(!validityCheck(i,j)) return false
            }
        }
    }
    return true

    function validityCheck(m,n){
        
        for(let i = 0;i<board.length;i++){
            if(board[i][n] === board[m][n] && i!==m) return false
            if(board[m][i] === board[m][n] && i!==n) return false
        }
        let a = Math.floor(m/3) * 3
        let b = Math.floor(n/3) * 3
        for(let i = a ;i< (a+3);i++){
            for(let j=b;j<(b+3); j++){
                if(board[m][n] === board[i][j] && (i!==m && j !== n)) return false
            }
        }
            return true
    }

    //iterate matrix
    //take each non . element
    //call check
        //if true continue
        //false return

    //check 
    //iterate full col checking
    //iterate full row chekcing
    //idenity block
    //iterate block and check
    //if copy 
        //return false
        //return true
};
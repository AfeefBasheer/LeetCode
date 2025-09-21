//Problem - 8
//beats 100% in Time Complexity (optmized)
//beats 37% in Space complexity (optmized)

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    function findParanthesis(string,open,close){
        if(open === 0 && close ===0){
            res.push(string)
            return 
        }
        if(open === close){
            string = string + '('
            open=open-1
            return findParanthesis(string,open,close)
        }else if(open === 0){
            string =string+ ")"
            close = close-1
            return findParanthesis(string,open,close)
        }else if(close === 0){
            string = string + "("
            open = open -1
            return findParanthesis(string,open,close)
        }else{
            let string1 = string
            string1 = string1+"("
            open = open-1
            findParanthesis(string1,open,close)
            string = string+")"
            close = close-1
            findParanthesis(string,++open,close)

        }
    }
    let res = [],open=n,close=n,string = ""
    findParanthesis(string,open,close)
    return res
};
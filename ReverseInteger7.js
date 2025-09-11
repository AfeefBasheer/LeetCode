//Problem = 153
//Beats 5%  on Time Complexity (Optimal)
//Beats 99.3% on Space Complexity (Optimal)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let string=x.toString()
    let rev="",sign
    if(string[0]=='+'||string[0]=='-'){
        sign=string[0]
        string=string.slice(1)
    }
    let i=string.length-1
    while(i>=0){
            rev=rev+string[i]
            i--
    }
    rev=parseInt(rev)
    if(sign== '-'){
        rev=0-rev
    }
    if(rev < (-2147483648)|| rev > 2147483647) return 0
    return rev
};
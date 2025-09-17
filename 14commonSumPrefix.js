//Problem - 14
//Beats 5% in Time Complexity
//Beats 97% in space Complexity

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ===0 )return ''
    let prefix = strs[0]
    for(let k=1;k<strs.length;k++){
        if(strs[k]==='')return ''
        let match = strs[k][0],j=1
        while(prefix.startsWith(match)){
            match = match+strs[k][j]
            j++
        }
        prefix = prefix.slice(0,match.length-1)
    }
    return prefix
}
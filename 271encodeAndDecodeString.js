//Problem - 271
//Locked in Leetcode
//Done on neetcode

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let brk = '*break*';
        let encoded = ''
        strs.forEach((item)=>{
            encoded = encoded + item + brk
        })
        console.log(encoded)
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let decoded = str.split("*break*")
    decoded.pop()
    return decoded
    }
}

//Problem - 165
//Beats 100% in time Complexity
//Beats 83% in space complexity


/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let count1 = 0,count2 = 0, i=0
    while(i < version1.length || i < version2.length){
        if(i < version1.length && version1[i] === '.') count1++
        if(i < version2.length && version2[i] === '.') count2++
        i++
    }
    let max = Math.max(count1,count2)
    if(count1 < count2 || count2 < count1){
        if(count1 < count2){
            for(let i=0;i<(count2-count1);i++) version1 = version1 + '.0'
        }else for(let i=0;i<(count1-count2);i++) version2 = version2 + '.0'
    }

    let value1 = version1.split(".");
    let value2 = version2.split(".");
    
    for(let i=0;i<value1.length;i++){
        if(parseInt(value1[i]) < parseInt(value2[i])) return -1
        else if (parseInt(value1[i]) > parseInt(value2[i])) return 1
        else continue
    }
    return 0
};
//Problem - 567
//Beats 60% in time complexity
//Beats 75% in space complexity

var checkInclusion = function(s1, s2) {

    function check(obj1,obj2){
        let arr1 = Object.values(obj1)
        let arr2 = Object.values(obj2)
        for(let i=0;i<26;i++){
            if(arr1[i]!==arr2[i]) return false
        }
        return true
    }

    let match={},obj={}, alphabets =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z']
    alphabets.forEach((item)=> match[item]=0)
    alphabets.forEach((item)=> obj[item]=0)
    for(let i=0;i<s1.length;i++) match[s1[i]]++
    let start = 0,end = s1.length
    for(let i=0;i<s1.length;i++) obj[s2[i]]++
    while(end<s2.length){
        if(check(match,obj)) return true
        else{
        obj[s2[start]]--;
        obj[s2[end]]++;
        start++;
        end++;
        }
    }
    return check(obj,match)
};
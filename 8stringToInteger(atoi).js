//Problem - 8
//beats 5% in Time Complexity (optmized)
//beats 100% in Space complexity (optmized)

var myAtoi = function(s) {
    s=s.trim()
    if(s.length==0||(isNaN(s[0])&&(s[0]!='+'&&s[0]!='-')))return 0
    let i=0
    let numb=""
    while(((s[i]!==" "&&!isNaN(Number(s[i])))||(i===0 && s[i]==='+'||s[i]==='-'))&&i<s.length){
        if(s[i]=="+"||s[i]=='-'){
            if(numb!="" && i!=0||isNaN(s[i+1])) return numb
        else
            numb=numb+s[i]
        }else numb=numb+s[i]
        
        i++
    }
    if(numb=='+'||numb=='-')return 0
    numb=parseInt(numb)
    if(numb>=2147483648)
        return 2147483647
    if(numb<=-2147483648)
        return -2147483648
    return numb
};

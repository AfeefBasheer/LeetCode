//Problem - 9
//beats 30% in Time Complexity 
//beats 100% in Space complexity 
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
let number=x,rev=0,rem;
    if(number<0){
        return false;
    }
    while(number!=0){
    rem=number%10;
    rev=rev*10+rem;
    number=Math.floor(number/10);
    }
    if(rev==x){
return true;
    }
    else{
        return false;
    }
};
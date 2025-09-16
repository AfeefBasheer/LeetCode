//Problem - 13
//beats 90% in Time Complexity 
//beats 90% in Space complexity 
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num=0
    for(let i=s.length-1;i>=0;i--){
        if(s[i]==='I') num=num+1
        else if(s[i]==='V'){
            if(s[i-1]&&s[i-1]==='I'){
                num=num+4
                i--
            }
            else num=num+5
        }else if(s[i]==='X'){
            if(s[i-1]&&s[i-1]==='I'){
                num=num+9
                i--
            }
            else num=num+10
        }else if(s[i]==='L'){
            if(s[i-1]&&s[i-1]==='X'){
                num=num+40
                i--
            }
            else num=num+50
        }else if(s[i]==='C'){
            if(s[i-1]&&s[i-1]==='X'){
                num=num+90
                i--
            }
            else num=num+100
        }else if(s[i]==='D'){
            if(s[i-1]&&s[i-1]==='C'){
                num=num+400
                i--
            }
            else num=num+500
        }else if(s[i]==='M'){
            if(s[i-1]&&s[i-1]==='C'){
                num=num+900
                i--
            }
            else num=num+1000
        }
    }
    return num
};
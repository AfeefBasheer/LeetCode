//Problem - 1304
//Beats 100% in time complexity 
//Beats 20% in space complexity

var sumZero = function(n) {
    //check if n is odd or even
    //if odd add 0 to new empty arr
    //iterate i from 0 to Math.floor(n-1)/2
    //add i and -1 to arr
    //return arr

    let arr = []
    if(n%2 === 1) arr.push(0)
    for(let i=1;i<=(Math.floor(n/2));i++){
        arr.push(i,-i)
    }
    return arr
};
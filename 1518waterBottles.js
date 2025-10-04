//Problem - 1518
//Beats 100% in time complexity
//Beats 90% in Space compleixty
/**
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    
    let rem = 0,total = numBottles

    while((rem + numBottles) >= numExchange){
        let bottles = rem+numBottles
        numBottles = Math.floor((bottles)/numExchange)
        rem = (bottles)%numExchange
        total = total + numBottles
    }
    return total
};
//Problem - 853
//Beats 19% in Time Complexity
//Beats 35% in space Complexity

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let combined = position.map((item,index)=> [item,speed[index]])
    combined.sort((a,b)=>b[0]-a[0])
    let time = []
    for(let i=0;i<combined.length;i++){
        time.push((target - combined[i][0])/combined[i][1])
    }
    let stack = []
    for(let i=0;i<time.length;i++){
        if(stack.length===0 || stack.at(-1) < time[i]) stack.push(time[i])
    }
    return stack.length

};
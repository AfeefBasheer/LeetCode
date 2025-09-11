//Problem - 875
//Beats 79% in Time Complexity
//90% in space Complexity

var minEatingSpeed = function(piles, h) {
    //Optimal working solution
    function findTime(k){
        let time = 0;
        for(let i=0;i<piles.length;i++){
            time = time + Math.ceil(piles[i]/k)
        }
        return time
    }

    let max = Math.max(...piles)
    let min = 1
    let res
    while(min <= max){
        let mid = Math.floor((min+max)/2)
        if(findTime(mid) <= h){
            res = mid
            max = mid-1
        }else if(findTime(mid)>h){
            min = mid+1
        }
    }
    return res
    //Initial Flawed Approach
    /*
    var minEatingSpeed = function(piles, h) {
    let min = Math.min(...piles)
    let max = Math.max(...piles)

    for(let k=min;k<=max;k++){
        let time=0
        for(let i=0;i<piles.length;i++){
            if(piles[i] <= k){
                time++
            }else if(piles[i] > k ){
                let val = k
                time++
                while(val < piles[i]){
                    time++
                    val = val + k
                }
                val = k
            }
            console.log(i+" - "+time)
        }
        if(time === h) return k
    }
};

console.log(minEatingSpeed([3,6,7,11],8))

 */
};
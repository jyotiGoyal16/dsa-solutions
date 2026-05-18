// 875. Koko Eating Bananas

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

//Brute force Time O(m * n)(worst as input space is large 10^9) Space O(1)
var minEatingSpeed = function(piles, h) {
    const maxCount = Math.max(...piles);
    for(let i = 1; i <= maxCount; i++){
        let hours = 0;

        for(let pile of piles){
            hours += Math.ceil(pile / i);
        }

        if(hours <= h){
            return i;
        }
    }
}

//Binary search on answer space Time O(n*logm)(n is piles length m is answer space length on which we are doing binary search) 
//Space O(1)
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let hours = 0;

        for(let pile of piles){
            hours += Math.ceil(pile / mid);
        }

        if(hours > h){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return left;
}

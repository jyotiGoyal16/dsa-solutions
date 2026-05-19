// 853. Car Fleet

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

//Sorting Time O(nlogn) Space O(n)
var carFleet = function(target, position, speed) {
    let arr = [];

    for(let i = 0; i < position.length; i++){
        arr.push([position[i], speed[i]]);
    }

    arr.sort((a, b) => b[0] - a[0]);

    let prevTime = 0;
    let fleets = 0;

    for(let [pos, spd] of arr){
        let currTime = (target - pos) / spd;

        if(currTime > prevTime){
            fleets++;
            prevTime = currTime;
        }
    }

    return fleets;

};

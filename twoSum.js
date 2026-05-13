//1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Brute Force Time O(n^2) Space O(1)
var twoSum = function(nums, target) {
    if(!nums.length) return [];
    
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
};

//Hashmap Time O(n) Space O(n)
var twoSum = function(nums, target) {
    if(!nums.length) return [];

    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(map.has(diff)){
            return [i, map.get(diff)];
        }

        map.set(nums[i], i);
    }
};

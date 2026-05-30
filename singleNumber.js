// 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */

// Time O(n) Space O(n)
var singleNumber = function(nums) {
    let map = {};

    for(let i = 0; i < nums.length; i++){
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    for(let key in map){
        if(map[key] === 1){
            return Number(key);
        }
    }
};

// Time O(n) Space O(1)
var singleNumber = function(nums) {
    let num = 0;
    for(let i = 0; i < nums.length; i++){
        num = num ^ nums[i];
    }

    return num;
};

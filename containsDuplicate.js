//217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//brute force Time complexity O(n^2) Space: O(1)
var containsDuplicateBruteForce = function(nums) {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]) return true;
        }
    }

    return false;
};

//using sorting Time complexity O(nlogn) Space: O(1)
var containsDuplicateBetter = function(nums) {
    nums.sort((a,b) => a - b);

    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]) return true;
    }

    return false;
};

//using Set Time complexity O(n) Space: O(n)
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

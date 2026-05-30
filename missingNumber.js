// 268. Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */

//Time O(n) Space O(1)
var missingNumber = function(nums) {
    let n = nums.length;
    let realSum = (n * (n + 1)) / 2;
    let sum = 0;

    for(let i = 0; i < n; i++){
        sum += nums[i];
    }

    return realSum - sum;
};

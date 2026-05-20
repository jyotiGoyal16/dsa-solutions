//643. Maximum Average Subarray I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Sliding window Time O(n) Space O(1)
var findMaxAverage = function(nums, k) {
    let maxAvg = 0;
    let sum = 0;

    for(let i = 0; i < k; i++){
        sum += nums[i];
    }

    maxAvg = sum / k;

    for(let i = k; i < nums.length; i++){
        sum += nums[i] - nums[i - k];
        let avg = sum / k;
        maxAvg = Math.max(maxAvg, avg);
    }

    return maxAvg;
};

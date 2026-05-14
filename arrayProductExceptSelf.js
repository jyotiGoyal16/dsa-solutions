// 238. Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Prefix suffix Time O(n) Space O(2n)- except answer arr
var productExceptSelf = function(nums) {
    if(!nums.length) return [];
    
    let answer = [];

    let prefix = new Array(nums.length).fill(1);
    let suffix = new Array(nums.length).fill(1);

    for(let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for(let i = nums.length - 2; i >= 0; i--){
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    for(let i = 0; i < nums.length; i++){
        answer[i] = prefix[i] * suffix[i];
    }

    return answer;
};

//Prefix suffix Time O(n) Space O(1)- except answer arr
var productExceptSelf = function(nums) {
    if(!nums.length) return [];

    let answer = new Array(nums.length).fill(1);

    for(let i = 1; i < nums.length; i++){
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    for(let i = nums.length - 2; i >= 0; i--){
        suffix = suffix * nums[i + 1];
        answer[i] = answer[i] * suffix;
    }

    return answer;
};

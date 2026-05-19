// 27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//extra space Time O(n) Space O(n)
var removeElement = function(nums, val) {
    let answer = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            answer.push(nums[i]);
        }
    }

    for(let i = 0; i < answer.length; i++){
        nums[i] = answer[i];
    }

    return answer.length;
};

//In place Time O(n) Space O(1)
var removeElement = function(nums, val) {
    let left = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[left] = nums[i];
            left++;
        }
    }

    return left;
};

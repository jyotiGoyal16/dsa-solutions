// 153. Find Minimum in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */

// Time O(logn) Space O(1)
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] > nums[right]){
            left = mid + 1;
        }else{
            right = mid;
        }
    }

    return nums[left];
};

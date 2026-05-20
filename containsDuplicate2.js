// 219. Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//Sliding window Time O(n) Space O(n)
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();

    for(let i = 0; i < nums.length; i++){
        if(i > k){
            set.delete(nums[i - k - 1]);
        }

        if(set.has(nums[i])) return true;

        set.add(nums[i]);
    }

    return false;
};

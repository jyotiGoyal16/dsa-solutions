//217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Brute force Time O(n^2) Space O(1)
var containsDuplicate = function(nums) {
    if(nums.length <= 1) return false;

    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]) return true;
        }
    }

    return false;
};

//Sorting Time O(nlogn) Space O(1)
var containsDuplicate = function(nums) {
    if(nums.length <= 1) return false;

    nums.sort((a, b) => a - b);

    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]) return true;
    }

    return false;
};

//Set Time O(n) Space O(n)
var containsDuplicate = function(nums) {
    if(nums.length <= 1) return false;

   let set = new Set();

   for(let num of nums){
    if(set.has(num)) return true;
    set.add(num);
   }

   return false;
};

//One liner Time O(n) Space O(n)
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

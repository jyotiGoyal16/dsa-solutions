// 75. Sort Colors


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Brute force, use in built sorting function Time O(nlogn) Space O(1)
var sortColors = function(nums) {
    let left = 0;
    let mid = 0;
    let right = nums.length - 1;

    while(mid <= right){
        if(nums[mid] === 0){
            [nums[left], nums[mid]] = [nums[mid], nums[left]];
            left++;
            mid++;
        }else if(nums[mid] === 1){
            mid++;
        }else{
            [nums[mid], nums[right]] = [nums[right], nums[mid]];
            right--;
        }
    }
};

// Counting sort Time O(n) Space O(1)
var sortColors = function(nums) {
    let countArr = [0, 0, 0];

    for(let i = 0; i < nums.length; i++){
        countArr[nums[i]]++;
    }

    console.log(countArr);

    let index = 0;
    for(let i = 0; i < countArr.length; i++){
        while(countArr[i] > 0){
            nums[index++] = i;
            countArr[i]--;
        }
    }
};

//Optimal In place using Dutch National Flag Algo Time O(n) Space O(1)
var sortColors = function(nums) {
    let left = 0;
    let mid = 0;
    let right = nums.length - 1;

    while(mid <= right){
        if(nums[mid] === 0){
            [nums[left], nums[mid]] = [nums[mid], nums[left]];
            left++;
            mid++;
        }else if(nums[mid] === 1){
            mid++;
        }else{
            [nums[right], nums[mid]] = [nums[mid], nums[right]];
            right--;
        }
    }
};

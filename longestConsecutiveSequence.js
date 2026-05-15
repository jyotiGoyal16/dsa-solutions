// 128. Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */

//Sorting Time O(nlogn) Space O(1)
var longestConsecutive = function(nums) {
    if(nums.length <= 1) return nums.length;

    nums.sort((a, b) => a - b);

    let count = 1;
    let maxCount = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]) continue;

        if(nums[i] === nums[i - 1] + 1){
            count++;
        }else{
            count = 1;
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};

//HashSet Time O(n) Space O(n)
var longestConsecutive = function(nums) {
    if(nums.length <= 1) return nums.length;

    const set = new Set(nums);
    let maxCount = 0;

    for(let num of set){
        if(!set.has(num - 1)){
            let current = num;
            let count = 0;

            while(set.has(current)){
                current++;
                count++
            }

            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
};

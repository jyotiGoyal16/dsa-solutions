//15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Hasmap solution Time O(n^2) Space O(n^2)
var threeSum = function(nums) {
    let res = [];
    let uniqueMap = new Map();

    for(let i = 0; i < nums.length; i++){
        let set = new Set();
        for(let j = i + 1; j < nums.length; j++){
            let diff = -(nums[i] + nums[j]);

            if(set.has(diff)){
                let key = [nums[i], nums[j], diff].sort((a, b) => a - b).join("");
                if(!uniqueMap.has(key)){
                    uniqueMap.set(key, [nums[i], nums[j], diff]);
                    res.push([nums[i], nums[j], diff]);
                }
            }

            set.add(nums[j]);
        }
    }

    return res;
};

//Sorting + 2 pointer Time O(n^2) Space O(n^2)
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                res.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left + 1]) left++;
                while(left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }else if(sum > 0){
                right--;
            }else{
                left++;
            }
        }
    }

    return res;
};

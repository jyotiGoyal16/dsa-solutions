// 169. Majority Element

//Brute force using sorting Time O(nlogn) Space O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 1;
    let majorityEl = nums[0];
    let maxCount = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]){
            count++;
        }else{
            count = 1;
            
        }

        if(count > maxCount){
            majorityEl = nums[i];
            maxCount = count;
        }

    }

    return majorityEl;
};

//using hasmap Time O(n) Space O(n)
var majorityElement = function(nums) {
    let map = new Map();
    let max = 0;
    let result = nums[0];

    for(let i = 0; i < nums.length; i++){
        let value = (map.get(nums[i]) || 0) + 1;
        map.set(nums[i], value);

        if(value > max){
            max = value;
            result = nums[i];
        }
    }

    return result;
};

//Optimal Boyer moore voting algo Time O(n) Space O(1)
var majorityElement = function(nums) {
  let majorityEl = nums[0];
  let count = 1;

  for(let num of nums){
    if(num === majorityEl){
        count++
    }else{
        count--;
    }

    if(count === 0){
        majorityEl = num;
        count = 1;
    }
  }

  return majorityEl;
};

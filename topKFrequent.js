//347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//using sorting Time O(nlogn) Space O(n)
function topKFrequent(nums: number[], k: number): number[] {
    if(!nums.length) return [];

    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let sorted = [...map].sort((a, b) => a[1] - b[1]).map(value => value[0]);

    let index = sorted.length - 1;
    let res = [];

    for(let i = 0; i < k; i++){
        res[i] = sorted[index--];
    }

    return res;
};

//bucket sort Time O(n) Space O(n)
function topKFrequent(nums: number[], k: number): number[] {
    if(!nums.length) return [];

    let bucket = new Array(nums.length + 1).fill(null).map(() => []);
    let map = new Map();
    let res = [];

    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for(let [num, freq] of map){
        bucket[freq].push(num);
    }

    for(let i = bucket.length - 1; i >= 0 && k > 0; i--){
        if(bucket[i].length){
            for(let j = 0; j < bucket[i].length; j++){
                if(k > 0){
                    res.push(bucket[i][j]);
                    k--;
                }
            }
        }
    }

    return res;
};

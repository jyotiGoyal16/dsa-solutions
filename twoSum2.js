// 167. Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 2 pointer Time O(n) Space O(1) 
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        let sum = numbers[left] + numbers[right];
        
        if(target === sum){
            return [left + 1, right + 1];
        }else if(target < sum){
            right--;
        }else{
            left++;
        }
    }

    return [];
};

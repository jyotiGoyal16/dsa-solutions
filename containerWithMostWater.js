//11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */

//Brute force Time O(n^2) Space O(1)
var maxArea = function(height) {
    let maxWaterVolume = 0;

    for(let i = 0; i < height.length - 1; i++){
        for(let j = i + 1; j < height.length; j++){
            let waterVolume = (j - i) * Math.min(height[i], height[j]);
            maxWaterVolume = Math.max(maxWaterVolume, waterVolume);
        }
    }

    return maxWaterVolume;
};

//Two pointers Time O(n) Space O(1)
var maxAreaOptimal = function(height) {
    let maxWaterVolume = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right){
        let waterVolume = (right - left) * Math.min(height[left], height[right]);
        maxWaterVolume = Math.max(maxWaterVolume, waterVolume);
        
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }

    return maxWaterVolume;
};

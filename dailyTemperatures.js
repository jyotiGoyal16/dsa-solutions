// 739. Daily Temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// Brute force Time O(n^2) Space O(1) - not counting answer array
var dailyTemperatures = function(temperatures) {
    let answer = new Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length - 1; i++){
        for(let j = i + 1; j < temperatures.length; j++){
            if(temperatures[j] > temperatures[i]){
                answer[i] = j - i;
                break;
            }
        }
    }

    return answer;
};

// Monotonic stack(decreasing) Time O(n) Space O(n)
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let answer = new Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++){
        while(stack.length && temperatures[i] > temperatures[stack.at(-1)]){
            const index = stack.pop();
            answer[index] = i - index;
        }
        stack.push(i);
    }

    return answer;
};

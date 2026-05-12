//

/**
 * @param {number[]} prices
 * @return {number}
 */

//Brute force Time O(n^2) Space O(1)
var maxProfit = function(prices) {
    let maxProfit = 0;
    
    for(let i = 0; i < prices.length - 1; i++){
        for(j = i + 1; j < prices.length; j++){
            profit = prices[j] - prices[i];
            maxProfit = Math.max(profit, maxProfit);
        }
    }

    return maxProfit;
};

//2 pointer Time O(n) Space: O(1)
var maxProfit = function(prices) {
    let maxProfit = 0;
    let left = 0;
    let right = 1;

    while(left <= right && right < prices.length){
        if(prices[left] <= prices[right]){
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(profit, maxProfit);
            right++;
        }else{
            left++;
        }
    }

    return maxProfit;
};

//Greedy Time O(n) Space O(1)
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPriceIndex = 0;

    for(let i = 0; i < prices.length; i++){
        if(prices[minPriceIndex] > prices[i]){
            minPriceIndex = i;
        }else{
            let profit = prices[i] - prices[minPriceIndex];
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
};

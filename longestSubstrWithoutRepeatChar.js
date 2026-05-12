//3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */

//Brute force Time: O(n^2) space: O(n)
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        let set = new Set();

        for(let j = i; j < s.length; j++){
            if(set.has(s[j])) break;

            set.add(s[j]);

            maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    return maxLength;
};

//Sliding window Time: O(n) space: O(n)
var lengthOfLongestSubstringSlidingWindow = function(s) {
    let maxLength = 0;
    let left = 0;
    let set = new Set();

    for(let right = 0; right < s.length; right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLength = Math.max(maxLength, set.size);
    }

    return maxLength;
};

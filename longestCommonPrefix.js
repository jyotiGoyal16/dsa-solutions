// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */

//using slice Time O(m*n) Space O(1) - m is the first string length
var longestCommonPrefix = function(strs) {
    let str = strs[0];

    for(let i = 0; i < str.length; i++){
        let char = str[i];

        for(let j = 1; j < strs.length; j++){
            if(char !== strs[j][i]){
                return str.slice(0, i);
            }
        }
    }

    return str;
};

//Time O(m*n) Space O(1) - m is the first string length
var longestCommonPrefix = function(strs) {
    let str = strs[0];
    let prefix = "";
    let isMatch = true;

    for(let i = 0; i < str.length; i++){
        let char = str[i];

        for(let j = 1; j < strs.length; j++){
            if(char !== strs[j][i]){
                isMatch = false;
                break;
            }
        }

        if(isMatch){
            prefix += char;
        }
    }

    return prefix;
};

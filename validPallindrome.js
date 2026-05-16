// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */

//regex + 2 pointer Time O(n) Space O(n)
var isPalindrome = function(s) {
    let str = s.trim().toLowerCase().replace(/[^0-9a-z]/g, "");
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
};

// 2 pointer Time O(n) Space O(1)
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        while(left < right && !isAlphaNumeric(s[left])) left++;
        while(left < right && !isAlphaNumeric(s[right])) right--;

        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
};

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(
        (code >= 97 && code <= 122) ||
        (code >= 65 && code <= 90) || 
        (code >= 48 && code <= 57)
        ){
            return true;
        }

        return false;
}

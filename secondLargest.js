// 1796. Second Largest Digit in a String

/**
 * @param {string} s
 * @return {number}
 */

// Time O(n) Space O(1)
var secondHighest = function(s) {
    let firstMax = -1;
    let secondMax = -1;

    for(let i = 0; i < s.length; i++){
        if(isNumeric(s[i])){
            let num = Number(s[i]);
            if(num > firstMax){
                secondMax = firstMax;
                firstMax = num;
            }else if(num > secondMax && num !== firstMax){
                secondMax = num;
            }
        }
    }

    return secondMax;
};

function isNumeric(char){
    let code = char.charCodeAt(0);
    if(code >= 48 && code <= 57){
        return true;
    }
    return false;
}

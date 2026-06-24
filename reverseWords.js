// 151. Reverse Words in a String

/**
 * @param {string} s
 * @return {string}
 */

// Time O(n) Space O(n)
var reverseWords = function(s) {
    let splitArr = s.trim().split(" ");
    splitArr = splitArr.filter(data => data);

    let left = 0;
    let right = splitArr.length - 1;

    while(left < right){
        [splitArr[left], splitArr[right]] = [splitArr[right], splitArr[left]];
        left++;
        right--;
    }

    return splitArr.join(" ");
};

// Another approach- reverse the entire string, then reverse each word (works well in other language where string is mutable)
// Time O(n) Space O(n)
var reverseWords = function(s) {
    let arr = s.trim().split("");
    reverse(arr, 0, arr.length - 1);
    arr = arr.join("").split(/\s+/).join(" ").split("");

    let start = 0;
    for(let i = 0; i <= arr.length; i++){
        if(i === arr.length || arr[i] === " "){
            reverse(arr, start, i - 1);
            start = i + 1;
        }
    }
    return arr.join("");
};

function reverse(arr, left, right){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

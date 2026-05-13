//242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Brute force Time O(nlogn) Space: O(1)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    return s.split("").sort().join("") === t.split("").sort().join("");
};

//hashmap Time O(n) Space: O(n)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let map = new Map();

    for(let i = 0; i < s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for(let i = 0; i < t.length; i++){
        if(!map.get(t[i])) return false;

        map.set(t[i], map.get(t[i]) - 1);
    }

    return true;
};

//freqency map Time O(n) Space: O(1)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let freqMap = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++){
        freqMap[s.charCodeAt(i) - 97]++;
        freqMap[t.charCodeAt(i) - 97]--;
    }

    return freqMap.every(value => value === 0);
};

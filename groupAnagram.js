//49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//using sorting for keys Time O(nklogk) Space O(nk)
var groupAnagrams = function(strs) {
    if(!strs.length) return [];

    let map = new Map();

    for(let i = 0; i < strs.length; i++){
        let key = strs[i].split("").sort().join("");

        if(map.has(key)){
            let value = map.get(key);
            value.push(strs[i]);
            map.set(key, value);
        }else{
            map.set(key, [strs[i]]);
        }
    }

    return [...map.values()];
};

//using frequency map for keys Time O(nk) Space O(nk)
var groupAnagrams = function(strs) {
    if(!strs.length) return [];

    let map = new Map();

    for(let i = 0; i < strs.length; i++){
        let freqArr = new Array(26).fill(0);

        for(char of strs[i]){
            freqArr[char.charCodeAt(0) - 97]++;
        }

        let key = freqArr.join("#");

        if(map.has(key)){
            let value = map.get(key);
            value.push(strs[i]);
            map.set(key, value);
        }else{
            map.set(key, [strs[i]]);
        }
    }

    return [...map.values()];
};

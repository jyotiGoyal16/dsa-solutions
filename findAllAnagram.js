// 438. Find All Anagrams in a String

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// Fixed sliding window using frequency arrays and join() Time O(n) Space O(1) excluding result array
var findAnagrams = function(s, p) {
   if(s.length < p.length) return [];

   let freqP = new Array(26).fill(0);
   let freqS = new Array(26).fill(0);
   let k = p.length;
   result = [];

   for(let char of p){
    freqP[char.charCodeAt(0) - 97]++;
   }

   for(let i = 0; i < k; i++){
    freqS[s[i].charCodeAt(0) - 97]++;
   }

   if(freqP.join("") === freqS.join("")) result.push(0);

   for(let i = k; i < s.length; i++){
    freqS[s[i].charCodeAt(0) - 97]++;
    freqS[s[i - k].charCodeAt(0) - 97]--;

    if(freqP.join("") === freqS.join("")) result.push(i - k + 1);
   }

   return result;
};

// Fixed sliding window using frequency arrays and helper function for comparison Time O(n) Space O(1)
var findAnagrams = function(s, p) {
   if(s.length < p.length) return [];

   let freqP = new Array(26).fill(0);
   let freqS = new Array(26).fill(0);
   let k = p.length;
   result = [];

   for(let char of p){
    freqP[char.charCodeAt(0) - 97]++;
   }

   for(let i = 0; i < k; i++){
    freqS[s[i].charCodeAt(0) - 97]++;
   }

   if(isSameArray(freqP, freqS)) result.push(0);

   for(let i = k; i < s.length; i++){
    freqS[s[i].charCodeAt(0) - 97]++;
    freqS[s[i - k].charCodeAt(0) - 97]--;

    if(isSameArray(freqP, freqS)) result.push(i - k + 1);
   }

   return result;
};

function isSameArray(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }

    return true;
}


// Optimal fixed sliding window using frequency arrays and match count Time O(n) Space O(1)
var findAnagrams = function(s, p) {
   if(s.length < p.length) return [];

   let freqP = new Array(26).fill(0);
   let freqS = new Array(26).fill(0);
   let k = p.length;
   result = [];

   for(let i = 0; i < k; i++){
    freqP[p[i].charCodeAt(0) - 97]++;
    freqS[s[i].charCodeAt(0) - 97]++;
   }

   let match = 0;

   for(let i = 0; i < 26; i++){
    if(freqP[i] === freqS[i]) match++;
   }

   if(match === 26) result.push(0);

   for(let i = k; i < s.length; i++){
    let right = s[i].charCodeAt(0) - 97;
    freqS[right]++;
    if(freqS[right] === freqP[right]){
        match++;
    }else if(freqS[right] === freqP[right] + 1){
        match--;
    }

    let left = s[i - k].charCodeAt(0) - 97;
    freqS[left]--;
    if(freqS[left] === freqP[left]){
        match++;
    }else if(freqS[left] === freqP[left] - 1){
        match--;
    }

    if(match === 26) result.push(i - k + 1);
   }

   return result;
};

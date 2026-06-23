// 205. Isomorphic Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Time O(n²) Space O(n)
var isIsomorphic = function(s, t) {
    let map = {};

    for(let i = 0; i < s.length; i++){
        if(map.hasOwnProperty(s[i]) && map[s[i]] === t[i]) continue;
        if(map.hasOwnProperty(s[i]) && map[s[i]] !== t[i]){
            return false;
        }else if(Object.values(map).includes(t[i])){
            return false;
        }else{
            map[s[i]] = t[i];
        }
    }

    return true;
};

// Time O(n) Space O(n)
var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};

    for(let i = 0; i < s.length; i++){
        if(!sMap[s[i]] && !tMap[t[i]]){
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i];
        }else if(sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]){
            return false;
        }
    }

    return true;
};

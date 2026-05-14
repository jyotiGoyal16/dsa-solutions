// 271. Encode and Decode Strings

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for(let i = 0; i < strs.length; i++){
            res += strs[i].length + "#" + strs[i];
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //5#Hello5#World
        let res = [];
        let i = 0;

        while(i < str.length){
            let j = i;

            while(str[j] !== "#"){
                j++;
            }

            let length = Number(str.slice(i, j));
            let newStr = str.slice(j + 1, j + 1 + length);
            res.push(newStr);

            i = j + 1 + length;
        }

        return res;
    }
}

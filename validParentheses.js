// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */

// Time O(n) Space O(n)
var isValid = function(s) {
    let stack = [];
    for(let char of s){
        if(char === "(" || char === "{" || char === "["){
            stack.push(char);
        }else{
            let popped = stack.pop();
            if(!popped) return false;
            
            switch(popped){
                case "(":
                    if(char !== ")") return false;
                    break;
                case "{":
                    if(char !== "}") return false;
                    break;
                case "[":
                    if(char !== "]") return false;
                    break;
            }
        }
    }

    return stack.length === 0;
};

// Time O(n) Space O(n)
var isValid = function(s) {
    let stack = [];
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for(let char of s){
        if(char === "(" || char === "{" || char === "["){
            stack.push(char);
        }else{
            let popped = stack.pop();
            if(!popped) return false;

            if(map[char] !== popped) return false;
        }
    }

    return stack.length === 0;
};

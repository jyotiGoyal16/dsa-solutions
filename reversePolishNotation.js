// 150. Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */

//Stack Time O(n) Space O(n)
var evalRPN = function(tokens) {
   let stack = [];

   for(let token of tokens){
    if(isOperator(token)){
        const op2 = stack.pop();
        const op1 = stack.pop();
        switch(token){
            case "+":
                stack.push(op1 + op2);
                break;
            case "-":
                stack.push(op1 - op2);
                break;
            case "*":
                stack.push(op1 * op2);
                break;
            case "/": 
                stack.push(Math.trunc(op1 / op2));
                break;
        }
        
    }else{
        stack.push(Number(token));
    }
   } 

   return stack.pop();
};

function isOperator(token){
    return token === "+" || token === "-" || token === "*" || token === "/";
}

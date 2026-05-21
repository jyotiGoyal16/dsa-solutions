// 1572. Matrix Diagonal Sum

/**
 * @param {number[][]} mat
 * @return {number}
 */

// Time O(n^2) Space O(1)
var diagonalSum = function(mat) {
    if(!mat.length) return 0;
    
    let sum = 0;
    let n = mat.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if((i === j) || (i + j === n - 1)){
                sum += mat[i][j];
            }
        }
    }

    return sum;
};

//Single pass Time O(n) Space O(1)
var diagonalSum = function(mat) {
    if(!mat.length) return 0;

    let sum = 0;
    let n = mat.length;

    for(let i = 0; i < n; i++){
        sum += mat[i][i] + mat[i][n - 1 - i];
    }

    if(n % 2 !== 0){
        let mid = Math.floor(n / 2);
        sum = sum - mat[mid][mid];
    }

    return sum;
};

// 54. Spiral Matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//Time O(m * n) Space O(1) excluding result array
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = m - 1;
    let res = [];

    while(left <= right && top <= bottom){
        for(let i = left; i <= right; i++){
            res.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i <= bottom; i++){
            res.push(matrix[i][right]);
        }
        right--;

        if(top <= bottom){
            for(let i = right; i >= left; i--){
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if(left <= right){
            for(let i = bottom; i >= top; i--){
                res.push(matrix[i][left]);
            }
            left++;
        }
    }

    return res;
};

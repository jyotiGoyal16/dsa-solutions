// 566. Reshape the Matrix

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// Time O(m*n) Space O(m*n)
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    if(m * n !== r * c) return mat;

    let result = Array.from({length: r}, () => new Array(c));

    let row = 0;
    let col = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            result[row][col] = mat[i][j];

            if(col >= c - 1){
                row++;
                col = 0;
            }else{
                col++;
            }
        }
    }

    return result;
};


//same time and space complexity but clean solution
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    if(m * n !== r * c) return mat;

    let result = Array.from({length: r}, () => new Array(c));

    for(let i = 0; i < m*n; i++){
        result[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
    }

    return result;
};

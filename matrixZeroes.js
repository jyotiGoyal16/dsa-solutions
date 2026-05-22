// 73. Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Time O(mn + k(m + n)) Space O(k) where k is indexArr length, k can m*n in worst case
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let indexArr = [];

  //Time O(mn) 
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                let indexes = [i, j];
                indexArr.push(indexes);
            }
        }
    }

  //Time O(k * (m + n)) where k is indexArr length
    for(let indexes of indexArr){
        const [rowIndex, colIndex] = indexes;

        for(let i = 0; i < n; i++){
            matrix[rowIndex][i] = 0;
        }

        for(let i = 0; i < m; i++){
            matrix[i][colIndex] = 0;
        }
    }
}

// Time O(mn + k(m + n)) Space O(1)
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                for(let k = 0; k < n; k++){
                    if(matrix[i][k] !== 0) matrix[i][k] = null;
                }

                for(let k = 0; k < m; k++){
                    if(matrix[k][j] !== 0) matrix[k][j] = null;
                }
            }
        }
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === null){
                matrix[i][j] = 0;
            }
        }
    }
}

//using hashset Time O(m*n) Space O(m + n)
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let rowSet = new Set();
    let colSet = new Set();

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                rowSet.add(i);
                colSet.add(j);
            }
        }
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(rowSet.has(i) || colSet.has(j)){
                matrix[i][j] = 0;
            }
        }
    }
}

// Time O(m * n) Space O(1)
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let isRowZero = false;
    let isColZero = false;

    for(let i = 0; i < n; i++){
        if(matrix[0][i] === 0) isRowZero = true;
    }

    for(let i = 0; i < m; i++){
        if(matrix[i][0] === 0) isColZero = true;
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }

    if(isRowZero){
        for(let i = 0; i < n; i++){
            matrix[0][i] = 0;
        }
    }

    if(isColZero){
        for(let i = 0; i < m; i++){
            matrix[i][0] = 0;
        }
    }
}

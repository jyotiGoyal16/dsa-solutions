//240. Search a 2D Matrix II

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//Extention of search 2d matrix
//modified binary search on matrix Time O(m+n) Space O(1)
var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while(row < matrix.length && col >= 0){
        const value = matrix[row][col];

        if(target === value) return true;

        if(target < value){
            col--;
        }else{
            row++;
        }
    }

    return false;
};

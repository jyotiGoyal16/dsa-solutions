//74. Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// brute force Time O(m*n) Space O(1)
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === target) return true;
        }
    }

    return false;
};

//binary search for each row Time O(mlogn) Space O(1)
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        if(binarySearch(matrix[i], target)) return true;
    }

    return false;
};

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target){
            return true;
        }
        if(arr[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return false;
}

// 2d-> 1d Time O(log(m*n)) Space O(1)
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = (rows * cols) - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        let row = Math.floor(mid / cols);
        let col = mid % cols;
        let value = matrix[row][col];

        if(target === value) return true;

        if(target < value){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return false;
};

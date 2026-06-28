// 994. Rotting Oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */

// Time O(m * n) Space O(m * n)
var orangesRotting = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];
    let fresh = 0

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 2){
                queue.push([i, j]);
            }
            if(grid[i][j] === 1) fresh++;
        }
    }

    let minutes = 0;

    while(queue.length && fresh > 0){
        let size = queue.length;

        while(size){
            let [row, col] = queue.shift();

            if(row > 0 && grid[row - 1][col] === 1){
                grid[row - 1][col] = 2;
                queue.push([row - 1, col]);
                fresh--;
            }
            if(row < rows - 1 && grid[row + 1][col] === 1){
                grid[row + 1][col] = 2;
                queue.push([row + 1, col]);
                fresh--;
            }
            if(col > 0 && grid[row][col - 1] === 1){
                grid[row][col - 1] = 2;
                queue.push([row, col - 1]);
                fresh--;
            }
            if(col < cols - 1 && grid[row][col + 1] === 1){
                grid[row][col + 1] = 2;
                queue.push([row, col + 1]);
                fresh--;
            }
            size--;
        }

        minutes++;
    }

    return fresh > 0 ? -1 : minutes;
};

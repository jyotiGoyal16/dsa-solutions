// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */

// multiple loop pass - Time O(1) Space O(1) - as 9X9 fixed sudoku
var isValidSudoku = function(board) {
    
    //check rows
    for(let i = 0; i < board.length; i++){
        let rowSet = new Set();
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] !== "."){
                if(rowSet.has(board[i][j])) return false;
                rowSet.add(board[i][j]);
            }
        }
    }

    //check cols
    for(let i = 0; i < board.length; i++){
        let colSet = new Set();
        for(let j = 0; j < board[i].length; j++){
            if(board[j][i] !== "."){
                if(colSet.has(board[j][i])) return false;
                colSet.add(board[j][i]);
            }
        }
    }

    //check boxes
    for(let row = 0; row < 9; row = row + 3){
        for(let col = 0; col < 9; col = col + 3){
            let boxSet = new Set();
            for(let i = row; i < row + 3; i++){
                for(let j = col; j < col + 3; j++){
                    if(board[i][j] !== "."){
                        if(boxSet.has(board[i][j])) return false;
                        boxSet.add(board[i][j]);
                    }
                }
            }
        }
    }

  // Single loop pass Time O(1) Space O(1)
  var isValidSudoku = function(board) {
    let rowSet = Array.from({length: board.length}, () => new Set());
    let colSet = Array.from({length: board.length}, () => new Set());
    let boxSet = Array.from({length: board.length}, () => new Set());

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            let value = board[i][j];
            let boxRow = Math.floor(i / 3);
            let boxCol = Math.floor(j / 3);
            let boxIndex = 3 * boxRow + boxCol;

            if(value === ".") continue;
            
            if(rowSet[i].has(value)) return false;
            if(colSet[j].has(value)) return false;
            if(boxSet[boxIndex].has(value)) return false;

            rowSet[i].add(value);
            colSet[j].add(value);
            boxSet[boxIndex].add(value);
        }
    }

    return true;
};

    return true;
};

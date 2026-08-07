class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowCounts = {};
        const columnCounts = {};
        const boxCounts = {};
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                const value = board[row][col];
                const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                if (value == ".") { continue; }

                if (!rowCounts[row]) rowCounts[row] = {};
                if (!columnCounts[col]) columnCounts[col] = {};
                if (!boxCounts[box]) boxCounts[box] = {};
                
                if (columnCounts[col][value] || rowCounts[row][value] || boxCounts[box][value]) {
                    return false
                }
                columnCounts[col][value] = 1;
                rowCounts[row][value] = 1;
                boxCounts[box][value] = 1;

            }
        }
        return true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = {}
        const column = {}
        const box = {}
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let value = board[i][j];
                let boxIdx = Math.floor(i/3)*3 + Math.floor(j/3);
                if (value !== ".") {
                    if (row[`${i}-${value}`] || column[`${j}-${value}`] || box[`${boxIdx}-${value}`]) {
                        return false
                    }
                    row[`${i}-${value}`] = true;
                    column[`${j}-${value}`] = true;
                    box[`${boxIdx}-${value}`] = true;
                }
            }
        }
        return true;
    }
}

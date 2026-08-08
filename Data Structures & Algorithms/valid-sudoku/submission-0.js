class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length:9},()=>new Set());
        const cols = Array.from({length:9},()=>new Set());
        const boxes = Array.from({length:9}, ()=>new Set());

        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                const curr = board[i][j];
                if(curr === ".") continue;
                const currentBox = Math.floor(i/3)*3 + Math.floor(j/3);
                if(rows[i].has(curr)) return false;
                if(cols[j].has(curr)) return false;
                if(boxes[currentBox].has(curr)) return false;
                rows[i].add(curr);
                cols[j].add(curr);
                boxes[currentBox].add(curr);
            }
        }
        return true;
    }
}

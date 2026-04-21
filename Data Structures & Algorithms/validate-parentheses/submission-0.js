class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
        const map = {
            "[":"]",
            "{":"}",
            "(":")",
        }
        const stack = [];
        for(let s of str) {
            if(map[s]) {
                stack.push(map[s]);
            } else if(stack.pop()!== s){
                return false;
            }
        }
        return stack.length? false: true;
    }
}

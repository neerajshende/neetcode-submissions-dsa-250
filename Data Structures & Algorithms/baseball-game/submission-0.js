class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for(let op of operations) {
            if(Number.isInteger(Number(op))) {
                stack.push(op);
            } else if(op ==='C') {
                stack.pop();
            } else if(op==='D') {
                const num = stack.pop();
                stack.push(num);
                stack.push(Number(num)*2);
            } else {
                const num1= stack.pop();
                const num2 = stack.pop();
                stack.push(num2)
                stack.push(num1);
                stack.push(Number(num1)+Number(num2));
            }
            
        }
        let result =0;
        for(let num of stack) {
            result+=Number(num);
        }
        return result;
    }
}

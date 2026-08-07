class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = {
            '/': (a, b) => Math.trunc(a / b),
            '*': (a, b) => a * b, 
            '+': (a, b) => a + b, 
            '-': (a, b) => a - b 
        }

        // !operands.includes(tokens[i])

        for (let i = 0; i < tokens.length; i++) {
            let t = tokens[i];

            if (!(t in ops)) {
                stack.push(Number(tokens[i]));
            } else {
                let right = stack.pop();
                let left = stack.pop();
                stack.push(ops[t](left,right));
            }
        }
        return stack.pop();
    }
}

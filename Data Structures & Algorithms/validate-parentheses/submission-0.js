class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            '}': '{',
            ')': '(',
            ']': '[' 
        }
        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else {
                let val = stack.pop();
                console.log(`val: ${val}, mapVal:${map[char]}, char:${char}, isSame: ${val !== map[char]}, stack: ${stack}`)
                if (val !== map[char]) {
                    return false;
                }
            }
        }
        return stack.length === 0 ;
    }
}

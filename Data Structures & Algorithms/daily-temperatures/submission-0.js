class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */

    // result is an array where are at each result[i], how many days till
    // a warmer day?
    dailyTemperatures(temperatures) {
        // const result = [];
        // let hotterDays = 0;

        // const stack = [];
        // let index = 0;
        
        // while (index < temperatures.length) {
        //     if (stack.length === 0) {
        //         stack.push(temperatures[index]);
        //     } else {
        //         if (stack[0] > temperatures[i]) {
        //             hotterDays++;
        //         } else {
        //             stack.pop();
        //             result.push(hotterDays);
        //             hotterDays = 0;
        //             index++;
        //         }
        //     }
        // }

        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            // const topIndex = stack[stack.length - 1];
            // const topTemp = temperatures[topIndex]; 
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIdx = stack.pop();
                result[prevIdx] = i - prevIdx;
            }
            stack.push(i);
        }
        return result;
    }
}

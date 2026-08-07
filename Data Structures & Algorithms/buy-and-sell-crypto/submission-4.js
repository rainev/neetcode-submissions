class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // the diff of a startDay and futureDay -> Max Profit
        // for (let i = 0; i < prices.length; i++) {
        //     let buy = prices[i];
        //     for (let j = i + 1; j < prices.length; j++) {
        //         let sell = prices[j] - buy;
        //         if (sell > max) {
        //             max = sell;
        //         }
        //     }
        // }

        // let max = 0;
        // let lowestLeft = Math.max(...prices);
        // let highestRight = 0;

        // let left = 0;
        // let right = prices.length - 1;
        // while (left < right) {
        //     if (prices[left] < lowestLeft) {
        //         lowestLeft = prices[left];
                
        //     }
        //     if (prices[right] > highestRight) {
        //         highestRight = prices[right];
        //     }
        //     left++;
        //     right--;
        // }
        
        // let value = highestRight - lowestLeft
        // if (value < 0) {
        //     return 0;
        // }
        // return value;
        let maxValue = 0;
        let minPrice = prices[0];

        for (let i = 0; i < prices.length; i++) {
            maxValue = Math.max(maxValue, prices[i] - minPrice);
            minPrice = Math.min(minPrice, prices[i]);
        }

        return maxValue;
    }
}

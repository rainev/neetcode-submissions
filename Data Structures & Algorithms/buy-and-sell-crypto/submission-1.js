class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // the diff of a startDay and futureDay -> Max Profit
        let max = 0;
        for (let i = 0; i < prices.length; i++) {
            let buy = prices[i];
            for (let j = i + 1; j < prices.length; j++) {
                let sell = prices[j] - buy;
                if (sell > max) {
                    max = sell;
                }
            }
        }





        return max;
    }
}

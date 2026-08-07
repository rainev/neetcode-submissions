class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = {}

        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            frequency[value] = (frequency[value] || 0) + 1;
        }
        return Object.entries(frequency).sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => Number(entry[0]));
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const seenTriplets = new Set();
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            const seen = new Set();
            for (let j = i + 1; j < nums.length; j++) {
                let complement = -nums[i] - nums[j];
                if (seen.has(complement)) {
                    const triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);
                    
                    const key = triplet.join(",");

                    if (!seenTriplets.has(key)) {
                        seenTriplets.add(key);
                        result.push(triplet);
                    }
                }
                seen.add(nums[j]);
            }
        }
        return result;
    }
}

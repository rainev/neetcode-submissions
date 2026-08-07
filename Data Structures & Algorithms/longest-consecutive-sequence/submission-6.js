class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums.sort((a,b) => a - b);
        let count = 1;
        let max = 1;
        for (let i = 0; i < nums.length; i++) {
            let value = nums[i];

            if (value === nums[i + 1]) {
                continue;
            } else if ((value + 1) === nums[i + 1]) {
                count++;
            } else {
                count = 1;
            }
            
            max = Math.max(max, count);
        }
        return max;
    }
}

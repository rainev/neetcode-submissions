class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sorted = nums.sort((a, b) => a - b);
        

        if (nums.length === 0) return 0;

        // for (let i = 0; i < sorted.length; i++) {
        //     if (nums[i] == nums[i + 1]) {
        //         continue;
        //     }

        //     if (nums[i] + 1 == nums[i + 1]) {
        //         current++;
        //     } else {
        //         current = 1;
        //     }
        //     longest = Math.max(longest, current);
        // }

        let longest = 0;
        const set = new Set(nums);

        for (const num of set) {
            if (!set.has(num - 1)) {
                let current = num;
                let length = 1;
                while (set.has(current + 1)) {
                    current++;
                    length++;
                }
                longest = Math.max(longest, length)
            }
        }
        return longest;
    }
}

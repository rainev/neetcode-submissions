class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    let count = [];
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        count[value] = (count[value] || 0 ) + 1;
        if (count[value] > 1) {
            return true
        }
    }
    return false

    }
}

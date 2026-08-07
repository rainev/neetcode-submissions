class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = [];
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
            console.log(count[num]);
            if (count[num] > 1) {
                return true;
            }
        }
        return false;
    }
}

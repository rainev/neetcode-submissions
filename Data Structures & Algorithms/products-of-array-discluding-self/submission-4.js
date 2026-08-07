class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);
        // const result = [];
        // for (let i = 0; i < nums.length; i++) {
        //     let temp = 1;
        //     for (let j = 0; j < nums.length; j++) {
        //         if (j == i) {
        //             continue;
        //         }
        //         temp = temp * nums[j];
        //     }
        //     result.push(temp);
        // }
        let prefix = 1;

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i]
        }

        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;
    }
}

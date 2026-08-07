class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const finalValues = [];

        for (let pointer = 0; pointer < nums.length; pointer++) {
            let temp = 1;

            for (let i = 0; i < nums.length; i++) {
                if (i === pointer) continue; 
                temp *= nums[i];
            }

            finalValues[pointer] = temp;
        }

        return finalValues;
    }
}
class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxVol = 0;
        while (left < right) {
            let width = right - left;
            let height = Math.min(heights[left], heights[right]);
            let volume = width * height;
            maxVol = Math.max(maxVol, volume);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxVol;
    }
}

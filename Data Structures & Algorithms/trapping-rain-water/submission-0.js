class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // To pointer approach, left and right value
    // We want to know how much water can all the bars trap
    // Iterate and subtract from maxPos and currentPos to get the max volume
    // of water bit by bit
    trap(height) {
        let leftMax = 0;
        let rightMax = 0;
        let leftPos = 0;
        let rightPos = height.length - 1;
        let maxVolume = 0;
        while (leftPos < rightPos) {
            leftMax = Math.max(leftMax, height[leftPos]);
            rightMax = Math.max(rightMax, height[rightPos]);
            if (leftMax < rightMax) {
                maxVolume += leftMax - height[leftPos];
                leftPos++;
            } else {
                maxVolume += rightMax - height[rightPos];
                rightPos--;
            }
            console.log(`leftPos: ${leftPos}, rightPos: ${rightPos}, leftMax: ${leftMax}, rightMax: ${rightMax}, maxVolume: ${maxVolume}`);
        }
        return maxVolume
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // Area will computed as L * W
        // In every index point, we get an end point and decrement the
        // endpoint until we reach start point
        // Max Height will be computed min() function

        // let endPoint = heights[heights.length];
        // const Areas = {};
        // for (let i = 0; i < endPoint; i++) {
        //     let startPoint = heights[i];
        //     let maxHeight = Math.min(startPoint, endPoint);
        //     let currentArea = maxHeight * (i - endPoint);
        //     Areas.push(currentArea);
        //     endPoint--;
        // }

        // console.log(Areas);

        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            let height = Math.min(heights[left], heights[right]);
            let width = right - left;
            let area = width * height;
            maxArea = Math.max(maxArea, area);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea
    }
}

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // if the car reaches the car infront of it, then push to fleet

        // Meaning, if the car is at the same position with car infront
        // or more than, push it to fleet.

        const fleet = [];
        const combined = position.map((val, i) => [val, speed[i]]).sort((a, b) => b[0] - a[0]);
        
        for (let i = 0; i < combined.length; i++) {
            const pos = combined[i][0];
            const spd = combined[i][1];
            const time = (target - pos) / spd;

            if (fleet.length === 0 || time > fleet[fleet.length - 1]) {
                fleet.push(time);
            }
        }
        return fleet.length
    }
}

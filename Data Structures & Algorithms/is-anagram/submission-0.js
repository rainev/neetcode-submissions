class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        const sCount = {};
        const tCount = {};
        
        for (let i = 0; i < s.length; i++) {
            const sValue = s[i];
            const tValue = t[i];
            sCount[sValue] =  (sCount[sValue] || 0) + 1;
            tCount[tValue] = (tCount[tValue] || 0) + 1;
        }

        for (const char in sCount) {
            if (sCount[char] !== tCount[char]) return false // if they have different lengths
        }

        return true
    }
}

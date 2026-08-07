class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        const count = {};

        for (const letter of s) {
            count[letter] = (count[letter] || 0) + 1;
        }

        for (const letter of t) {
            console.log("")
            if (!count[letter]) {
                return false;
            }
            count[letter]--;
        }

        return true;
    }
}

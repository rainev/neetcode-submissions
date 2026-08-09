class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let reversed = "";
        for (let i = cleaned.length - 1 ; i >= 0; i--) {
            reversed += cleaned[i];
        }

        console.log(`s: ${cleaned} | reversed: ${reversed}`);
        return cleaned == reversed ? true : false
    }
}

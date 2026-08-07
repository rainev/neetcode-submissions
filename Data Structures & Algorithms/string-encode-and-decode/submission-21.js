class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const output = {};

        let encoded = "";
        for (const word of strs) {
            let length = word.length;
            encoded += `${word.length}#${word}`;
        }
        console.log(encoded);
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const decoded = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let wordLength = Number(str.slice(i,j));
            let word = str.slice(j + 1, j + 1 + wordLength);
            decoded.push(word);
            i = j + 1 + wordLength
        }
        return decoded;
    }
}

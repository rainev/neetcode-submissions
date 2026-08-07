// class Solution {
//     /**
//      * @param {string[]} strs
//      * @returns {string}
//      */
//     encode(strs) {
//         if (strs === []) return [];
//         if (strs === "") return "";
//         let finalString = "";
        
//         for (const s of strs) {
//             finalString += s + " ";
//         }
//         console.log(finalString.trim());
//         return finalString.trim();
//     }

//     /**
//      * @param {string} str
//      * @returns {string[]}
//      */
//     decode(str) {
//         if (str === []) return [];
//         if (str === "") return [""];
//         return str.split(" ");
//     }
// }
class Solution {
  encode(strs) {
    let out = "";
    for (const s of strs) out += s.length + "#" + s;
    return out;
  }
  decode(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") j++;
      const len = parseInt(str.slice(i, j), 10);
      res.push(str.slice(j + 1, j + 1 + len));
      i = j + 1 + len;
    }
    return res;
  }
}

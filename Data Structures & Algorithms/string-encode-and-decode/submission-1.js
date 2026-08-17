class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for(let str of strs){
            encodedString += str.length+ '#' + str;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let i =0;
        let result = [];
        while(i<str.length) {
            let j = i;
            while(str[j]!== "#") {
                j++;
            }
            const length = Number(str.slice(i,j));
            j++;
            const currentString = str.slice(j, j+length);
            result.push(currentString);
            i=j+length;

        }
        return result;
    }
}

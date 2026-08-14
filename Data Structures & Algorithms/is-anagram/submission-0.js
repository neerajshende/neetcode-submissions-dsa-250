class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        let charMap = {};
        for(let char of s) {
            charMap[char] = charMap[char]?charMap[char]+1 : 1;
        }
        for(let char of t){
            if(charMap[char]) {
                charMap[char]--;
            } else {
                return false;
            }
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let startIndex = 0;
        let charMap = {};
        for(let i=0; i<s.length;i++) {
            const curr = s[i]; 
            if(charMap[curr] !== undefined) {
                startIndex= Math.max(startIndex,charMap[curr]+1);
            }
             charMap[curr]=i; 
             maxLength = Math.max(maxLength, i-startIndex+1); 
        }
        return maxLength;
    }
}

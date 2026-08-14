class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = {};
        for(let str of strs) {
            const key = str.split("").sort().join("");
            if(!ans[key]) {
                ans[key]= [];
            }
            ans[key].push(str);
        }
        return Object.values(ans);
    }
}

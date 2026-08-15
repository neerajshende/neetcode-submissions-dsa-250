class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let longest =0;
        for(let num of nums) {
            if(!numsSet.has(num-1)) {
                let count = 1;
                let current = num+1;
                while(numsSet.has(current)) {
                    count++;
                    current++;
                }
                longest = Math.max(longest,count);
            }
        }
        return longest;
    }
}

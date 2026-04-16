class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const numsFreq = {};
        for(let i =0; i<nums.length; i++) {
            const curr = nums[i];
            numsFreq[curr] = (numsFreq[curr] || Math.ceil(nums.length/2)) - 1;
            if(numsFreq[curr] ===0) {
                return curr;
            }
        }
        return false;
    }
}

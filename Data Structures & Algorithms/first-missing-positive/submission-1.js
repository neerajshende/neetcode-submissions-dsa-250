class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // mark the invalid nums/clean the array
        const n = nums.length;
        for (let i=0; i<nums.length; i++) {
            if(nums[i]<=0 || nums[i]>n) {
                nums[i]= n+1;
            }
        }
        // mark the presences
        for(let i= 0; i< nums.length; i++) {
            const index = Math.abs(nums[i])-1;
            if(index<n && nums[index]>0) {
                nums[index]= -nums[index];
            }
        }
        for(let i=0;i<n;i++) {
            if(nums[i]>0) {
                return i+1;
            }
        }
        return n+1;
        // Iterate and find the missing number
    }
}

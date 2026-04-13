class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minSubArraySize = Infinity;
        let start = 0;
        let total = 0;
        for(let end=0;end<nums.length;end++) {
            total = total+nums[end];
            //Condition to increase start
            while(total >= target) {
                minSubArraySize = Math.min(minSubArraySize, end-start+1);
                total -= nums[start];
                start++;
            }
        }
        return minSubArraySize==Infinity? 0: minSubArraySize;
    }
}
// [2,1,5,1,5,3]
// end=0,total=2
// end=1, total=3,
// end=2, total=8
// end=3 total=9,
// end=4 total=13,minSubArraySize=5,
// end=5 total

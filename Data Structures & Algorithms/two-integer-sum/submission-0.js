class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complimentMap = {};
        for(let i=0; i<nums.length; i++){ 
            const compliment = target-nums[i];
            if(complimentMap[compliment] !==undefined) {
                return [complimentMap[compliment], i];
            }
            complimentMap[nums[i]] =i;
        }
        return [];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap= {};
        let result = [];
        for(let i=0; i<nums.length;i++) {
            frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0)+1;
        }
        let pairs = Object.entries(frequencyMap);
        pairs.sort((a,b)=>(b[1]-a[1]));
        for(let i=0; i<k; i++) {
            result.push(pairs[i][0]);
        }
        return result;
    }
}

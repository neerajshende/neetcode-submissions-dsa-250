class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);

        let leftProduct =1;
        //calculating the left product 
        for(let i=0; i<nums.length;i++){
            result[i] = leftProduct;
            leftProduct *=nums[i];  
        }
        let rightProduct = 1;
        for(let i= nums.length-1; i>=0; i--){
            result[i]*= rightProduct;
            rightProduct*=nums[i];
        }
        return result;

    }
}

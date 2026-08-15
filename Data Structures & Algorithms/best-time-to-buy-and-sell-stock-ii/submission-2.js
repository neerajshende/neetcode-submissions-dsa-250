class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit =0;
        let buyPrice = prices[0];
        let currentPrice = prices[0];
        for(let i=0; i<prices.length; i++){
            currentPrice = prices[i];
            if(currentPrice>buyPrice) {
                profit+= currentPrice-buyPrice;
                buyPrice = currentPrice;
            } else {
                buyPrice = currentPrice;
            }
        }
        return profit;
    }
}

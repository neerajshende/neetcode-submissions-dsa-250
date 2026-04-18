class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let buyPrice = prices[0];;
        for(let i=0; i<prices.length;i++) {
            const currentPrice = prices[i]; //5
            if(currentPrice>buyPrice) {
                maxProfit += currentPrice-buyPrice;//4
                buyPrice = currentPrice;
            } else {
                buyPrice = Math.min(buyPrice, currentPrice);//1
            } 
        }
        return maxProfit;
    }
}

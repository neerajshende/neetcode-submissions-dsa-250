class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1; let right = 0;
        for(let pile of piles) {
            right = Math.max(right, pile);
        }
        while(left<right) {
            let mid = left + Math.floor((right-left)/2);
            if(this.canEatBananas(mid,piles, h)) {
                right = mid;
            } else {
                left = mid+1;
            }
        }
        return left;

    }

    canEatBananas(mid, piles, h) {
        let hours = 0;
        for(let pile of piles) {
            hours += Math.ceil(pile/mid);
        }
        return hours <=h;
    }
}



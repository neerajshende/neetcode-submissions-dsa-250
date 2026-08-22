class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        const valueToBeUpdated = new TimeBasedKeyValueStore(timestamp, value);
        this.keyStore.get(key).push(valueToBeUpdated);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) {
            return "";
        }
        const arr = this.keyStore.get(key);
        let left = 0; let right = arr.length-1;
        let result = -1;
        while(left<=right) {
            const mid = left + Math.floor((right-left)/2);
            if(arr[mid].timestamp=== timestamp) {
                return arr[mid].value;
            } else if(timestamp<arr[mid].timestamp ){
                right = mid-1;
            } else {
                result = mid;
                left = mid+1;
            }
        }
        return result === -1? "" :arr[result].value;
    }
}

class TimeBasedKeyValueStore{
    constructor(timestamp, value ) {
        this.timestamp = timestamp;
        this.value = value;
    }
}
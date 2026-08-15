class MyHashMap {
    constructor() {
        this.valuesMap = {};
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.valuesMap[key]=value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const value= this.valuesMap[key];
        return  value!== undefined? value: -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.valuesMap[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

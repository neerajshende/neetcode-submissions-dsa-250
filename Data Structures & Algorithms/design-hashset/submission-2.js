class MyHashSet {
    constructor() {
        this.keyMap = {};
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.keyMap[key]= true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.keyMap[key];
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.keyMap[key]=== true;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

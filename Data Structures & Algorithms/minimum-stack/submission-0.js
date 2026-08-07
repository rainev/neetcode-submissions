class MinStack {
    constructor() {
        this.main = [];
        this.currentMinVals = [];
    }
    
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.main.push(val);
        
        const minLength = this.currentMinVals.length;

        if (this.currentMinVals.length === 0) {
            this.currentMinVals.push(val);
        } else {
            this.currentMinVals.push((Math.min(this.currentMinVals[minLength - 1], val)));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.main.pop();
        this.currentMinVals.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const mainLength = this.main.length;
        return this.main[mainLength - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const minLength = this.currentMinVals.length;
        return this.currentMinVals[minLength - 1];
    }
}

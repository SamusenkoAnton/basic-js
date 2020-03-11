const chainMaker = {
    count: 0,
    array: [],
    getLength() {
        let result = ++this.count;
        count = 0;
        return result;
    },
    addLink(value) {
        this.count++;
        this.array.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        this.count++;
        if (position-1 < 0 || position >= this.array.length || typeof position !== 'number') {
            this.array=[];
            throw new Error();
        }
        this.count++;
        this.array.splice(position-1, 1);
        return this;
    },
    reverseChain() {
        this.count++;
        this.array.reverse();
        return this;
    },
    finishChain() {
        let result = this.array.join('~~');
        this.array = [];
        return result;
    }
};
module.exports = chainMaker;

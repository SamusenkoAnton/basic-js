module.exports = module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        let newArr = new Array();
        let retry = false;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                newArr.push(...arr[i]);
                retry = true;
            }
        }
        if (retry) {
            depth += this.calculateDepth(newArr);
        }
        return depth;
    }
};
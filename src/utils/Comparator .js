
/**
 * 比较器
 */
export default class Comparator {
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }


    /**
     * 默认比较函数
     * @param {(string|number)} a 
     * @param {(string|number)} b
     * @returns {number} 
     */
    static defaultCompareFunction(a, b) {
        if (a === b) {
            return 0;
        }
        return a > b ? 1 : -1;
    }


    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    /**
     * if a < b 
     * @param {*} a 
     * @param {*} b 
     */
    lessThan(a, b) {
        return this.compare(a, b) > 0;
    }


    

}
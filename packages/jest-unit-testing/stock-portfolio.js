export default class Portfolio {
    constructor () {
        this.stocks = [];
    }
    isEmpty() {
        return this.stocks.length === 0;
    }
};
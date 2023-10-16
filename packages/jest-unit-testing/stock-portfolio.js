export default class Portfolio {
    constructor () {
        this.stocks = [];
    }
    isEmpty() {
        return this.stocks.length === 0;
    }
    numTickers() {
        return this.stocks.length;
    }
};
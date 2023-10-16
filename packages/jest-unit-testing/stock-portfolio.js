export default class Portfolio {
    constructor () {
        this.stocks = [];
    }
    getStocks() {
        return this.stocks;
    }
    isEmpty() {
        return this.stocks.length === 0;
    }
    numTickers() {
        return this.stocks.length;
    }
    add(symbol, num) {
        this.stocks.push([symbol, num]);
    }
};
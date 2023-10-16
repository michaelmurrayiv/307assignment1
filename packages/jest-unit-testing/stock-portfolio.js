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
        const i = 0;
        while (i < this.stocks.length) {
            if (this.stocks[i][0] === symbol) {
                this.stocks[i][1] += num;
                break;
            }
            i++;
        }
        if (i === this.stocks.length) {
            this.stocks.push([symbol, num]);
        }
    }
};
import Portfolio from './stock-portfolio.js';

let p;

beforeEach(() => {
    p = new Portfolio();
});

test('Testing Portfolio exists -- success', () => {
    expect(p).toBeTruthy()
});

test('Testing Portfolio.isEmpty -- success', () => {
    expect(p.isEmpty()).toBeTruthy()
});

test('Testing Portfolio count -- success', () => {
    expect(p.numTickers()).toBe(0)
});

test('Testing Portfolio buy -- success', () => {
    const expected = [["MSFT", 30]];
    p.buy("MSFT", 30);
    
    expect(p.getStocks()).toEqual(expected);
});

test('Testing Portfolio buy to existing stock -- success', () => {
    const expected = [["MSFT", 50]];
    p.buy("MSFT", 30);
    p.buy("MSFT", 20);
    expect(p.getStocks()).toEqual(expected);
});

test('Testing Portfolio sell -- success', () => {
    const expected = [["MSFT", 20]];
    p.buy("MSFT", 50);
    p.sell("MSFT", 30);
    
    expect(p.getStocks()).toEqual(expected);
});

test('Testing Portfolio numShares -- success', () => {
    const expected = 20;
    p.buy("MSFT", 50);
    p.sell("MSFT", 30);
    
    expect(p.numShares("MSFT")).toEqual(expected);
});

test('Testing Portfolio ticker without shares -- success', () => {
    const expected = [];
    p.buy("MSFT", 50);
    p.sell("MSFT", 50);
    
    expect(p.getStocks()).toEqual(expected);
});

test('Testing sell can raise exception -- success', () => {
    p.buy("MSFT", 50);

    expect(() => p.sell("MSFT", 60)).toThrow();
});
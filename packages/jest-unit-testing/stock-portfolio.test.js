import Portfolio from './stock-Portfolio.js';

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

test('Testing Portfolio add -- success', () => {
    const expected = [["MSFT", 30]];
    p.add("MSFT", 30);
    
    expect(p.getStocks()).toEqual(expected);
    
});
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
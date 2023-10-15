import mut from './module.js'; // MUT = Module Under Test

//testing sum
test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

// testing div
test('testing div positive-- success', () => {
    const expected = 4.5;
    const got = mut.div(9, 2);
    expect(got).toBe(expected);
});

test('testing div negative -- success', () => {
    const expected =-4.5;
    const got = mut.div(9, -2);
    expect(got).toBe(expected);
});

test('testing div by 0 -- success', () => {
    const expected = Infinity;
    const got = mut.div(9, 0);
    expect(got).toBe(expected);
});

// testing containsNumbers
test('testing containsNumbers false -- success', () => {
    const res = mut.containsNumbers("abcdefg");
    expect(res).toBe(false);
});

test('testing containsNumbers true start -- success', () => {
    const res = mut.containsNumbers("2abcdefg");
    expect(res).toBe(true);
});

test('testing containsNumbers true end -- success', () => {
    const res = mut.containsNumbers("abcdefg1");
    expect(res).toBe(true);
});

test('Testing div -- success', () => {
  const expected = 2;
  const got = mut.div(12, 6);
  expect(got).toBe(expected);
});// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 2;
  const got = mut.div(12, 6);
  expect(got).toBe(expected);
});

test('Testing div -- divide by zero', () => {
  const expected = Infinity;
  const got = mut.div(12, 0);
  expect(got).toBe(expected);
});

test('Testing div -- contains negative', () => {
  const expected = -10;
  const got = mut.div(100, -10);
  expect(got).toBe(expected);
});

test('Testing div -- contains double negative', () => {
  const expected = 10;
  const got = mut.div(-100, -10);
  expect(got).toBe(expected);
});

test('Testing div -- dividing by float', () => {
  const expected = 2;
  const got = mut.div(3, 1.5);
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  expect(mut.containsNumbers("Hi1234")).toBeTruthy();
});

test('Testing containsNumbers -- success', () => {
  expect(mut.containsNumbers('Hi1234')).toBeTruthy();
});

test('Testing containsNumbers -- true', () => {
  expect(mut.containsNumbers("Hi 1234")).toBeTruthy();
});

test('Testing containsNumbers -- false', () => {
  expect(mut.containsNumbers("Hi!")).toBeFalsy();
});

test('Testing containsNumbers -- false', () => {
  expect(mut.containsNumbers("Hi, there")).toBeFalsy(); //This is the bug. Javascript sees spaces as zeros, so it returns true for text with spaces even when there is no actual number in the string.
});

test('Testing containsNumbers -- false', () => {
  expect(mut.containsNumbers(" ")).toBeFalsy(); //This is the bug. Javascript sees spaces as zeros, so it returns true for text with spaces even when there is no actual number in the string.
});

import { multiply } from '../../index.js';

test('multiplies two positive digits', () => {
  expect(multiply(3, 1)).toBe(3);
});

test('multiplies two negative digits', () => {
  expect(multiply(-2, -2)).toBe(4);
});

test('multiplies positive and negative number', () => {
  expect(multiply(-2, 5)).toBe(-10);
});

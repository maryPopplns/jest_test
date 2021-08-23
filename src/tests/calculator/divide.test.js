import { divide } from '../../index.js';

test('divides two positive digits', () => {
  expect(divide(3, 1)).toBe(3);
});

test('divides two negative digits', () => {
  expect(divide(-2, -2)).toBe(1);
});

test('divides positive and negative number', () => {
  expect(divide(-10, 5)).toBe(-2);
});

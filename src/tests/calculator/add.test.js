import { add } from '../../index.js';

test('adds two positive digits', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds two negative digits', () => {
  expect(add(-2, -2)).toBe(-4);
});

test('adds positive and negative number', () => {
  expect(add(-2, 5)).toBe(3);
});

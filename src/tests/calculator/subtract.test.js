import { subtract } from '../../index.js';

test('subtracts two positive digits', () => {
  expect(subtract(3, 1)).toBe(2);
});

test('subtracts two negative digits', () => {
  expect(subtract(-2, -2)).toBe(0);
});

test('subtracts positive and negative number', () => {
  expect(subtract(-2, 5)).toBe(-7);
});

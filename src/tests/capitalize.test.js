import { capitalize } from '../index.js';

test('capitalize 3 letter word', () => {
  expect(capitalize('aaa')).toBe('Aaa');
});

test('capitalize 1 letter word', () => {
  expect(capitalize('a')).toBe('A');
});

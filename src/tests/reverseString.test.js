import { reverse } from '../index.js';

test('reverse 3 letter word', () => {
  expect(reverse('abc')).toBe('cba');
});

test('reverse 2 letter word', () => {
  expect(reverse('ab')).toBe('ba');
});

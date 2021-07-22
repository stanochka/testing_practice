const reverseString = require('../scripts/reverseString');

test('reverses string', () => {
  expect(reverseString('abc')).toBe('cba');
  expect(reverseString('a bc')).toBe('cb a');
});

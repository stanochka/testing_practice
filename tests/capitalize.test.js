const capitalize = require('../scripts/capitalize');

test('capitalizes first letter', () => {
  expect(capitalize('aaa')).toBe('Aaa');
  expect(capitalize('a aa')).toBe('A aa');
  expect(capitalize('AAA')).toBe('AAA');
});

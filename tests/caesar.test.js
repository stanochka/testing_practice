const caesar = require('../scripts/caesar');

test('cipher alphabet lower/upper case', () => {
  expect(caesar('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM');
});

test('cipher Hello, World!', () => {
  expect(caesar('Hello, World!')).toBe('Uryyb, Jbeyq!');
});

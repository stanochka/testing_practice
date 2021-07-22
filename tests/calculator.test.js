const Calculator = require('../scripts/Calculator');
const c = new Calculator();

test('add', () => {
  expect(c.add(2, 3)).toBe(5);
});

test('substract', () => {
  expect(c.substract(2, 1)).toBe(1);
});

test('multiply', () => {
  expect(c.multiply(2, 3)).toBe(6);
});

test('divide', () => {
  expect(c.divide(6, 2)).toBe(3);
});

test('divide by zero', () => {
  expect(() => {c.divide(2, 0)}).toThrow('Cannot divide by zero');
});

const analyze = require('../scripts/analyze');

const object = analyze([1,8,3,4,2,6]);

test('analyze [1,8,3,4,2,6]', () => {
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

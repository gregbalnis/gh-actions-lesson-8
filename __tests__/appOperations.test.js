const appOperations = require('../src/appOperations');

test('multiplication by zero', () => {
  const result = appOperations.multiply(5, 0);
  expect(result).toBe(0);
});

test(" adding two values", () => {
  const result = appOperations.add(3, 4);
  expect(result).toBe(7);
});

test(('subtracting two values'), () => {
  const result = appOperations.subtract(10, 4);
  expect(result).toBe(6);
});
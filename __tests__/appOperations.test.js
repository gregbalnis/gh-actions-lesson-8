const appOperations = require('../src/appOperations');

test('multiplication by zero', () => {
  const result = appOperations.multiply(5, 0);
  expect(result).toBe(0);
});
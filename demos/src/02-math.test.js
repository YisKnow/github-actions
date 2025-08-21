const { sum, multiply, divide } = require("./02-math");

describe('Test for match', () => {
  describe('Test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('Test for multiply', () => {
    test('multiplies 2 * 3 should be 6', () => {
      const rta = multiply(2, 3);
      expect(rta).toBe(6);
    });
  });

  describe('Test for divide', () => {

    test('divides 6 / 2 should be 3', () => {
      const rta = divide(6, 2);
      expect(rta).toBe(3);

      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });

    test('should divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(5, 0);
      expect(rta2).toBeNull();
    });
  });
});

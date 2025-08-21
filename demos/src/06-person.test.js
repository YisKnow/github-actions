// Implementación - Pruebas de Person Class
const Person = require("./06-person");

describe('Test for Person', () => {
  let person;

  beforeEach(() => {
    // Setup code here
    person = new Person('Yisus', 45, 1.7);
  });

  test('should return down', () => {
    person.weight = 45; // weight below normal
    // person.height = 1.7; // height in meters
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  })

  test('should return normal', () => {
    person.weight = 59; // weight normal
    // person.height = 1.7; // height in meters
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  })
});

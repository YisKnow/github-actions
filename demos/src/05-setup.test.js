// Setup / Teardown -> Configuración y scope de pruebas

// describe reune un conjunto de pruebas, mejora la lectura del código y la encapsulación.
describe.skip('Group 1', () => {
  // beforeAll es una sentencia [setup] que corre antes de todas las pruebas
  // este tipo de utilidad se puede llamar hook y respeta el alcance o scope del grupo (describe).
  beforeAll(() => {
    console.log('beforeAll');
    // ejemplo: up db
  });

  // afterAll es lo mismo pero después XD.
  afterAll(() => {
    console.log('afterAll');
    // ejemplo: down db
  });

  // beforeEach corre antes de cada caso de prueba hasta el último.
  beforeEach(() => {
    console.log('beforeEach');
  });

  // afterEach es lo mismo pero después XD.
  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('Running case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('Running case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll 2');
      // up db
    });

    test('case 3', () => {
      console.log('Running case 3');
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      console.log('Running case 4');
      expect(1 + 3).toBe(4);
    });
  });
});

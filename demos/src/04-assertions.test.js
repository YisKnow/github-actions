// Assertions o Matchers -> Resolver lo esperado
test('testear obj', () => {
  const data = { name: 'yisus' };
  data.lastname = 'atao';
  expect(data).toEqual({ name: 'yisus', lastname: 'atao' }); // toEqual para objetos
})

test('null', () => {
  const data = null;
  expect(data).toBeNull(); // toBeNull para null
  expect(data).toBeDefined(); // toBeDefined para null
  expect(data).not.toBeUndefined(); // toBeUndefined para null
})

test('booleans', () => {
  expect(true).toEqual(true); // toEqual para booleanos
  expect(false).toEqual(false); // toEqual para booleanos

  expect(0).toBeFalsy(); // toBeFalsy para booleanos
  expect('').toBeFalsy(); // toBeFalsy para booleanos
  expect(null).toBeFalsy(); // toBeFalsy para booleanos
  expect(false).toBeFalsy(); // toBeFalsy para booleanos
})

test('string', () => {
  expect('Christoph').toMatch(/stop/);
})

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3); // toContain para arrays
  expect(numbers).toHaveLength(5); // toHaveLength para arrays
})

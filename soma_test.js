const soma = require('./soma').somaDoisNumeros;

test('A soma de 2 + 5 deve ser igual a 7', () => {
  expect(somaDoisNumeros(2, 5)).toBe(7);
});
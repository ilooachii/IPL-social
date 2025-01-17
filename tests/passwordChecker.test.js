const passwordChecker = require('../src/passwordChecker');

describe('passwordChecker - Step 1: Min length 8', () => {
  test('Should fail if password length < 8 chars', () => {
    // Exemple: "Ab!1" fait 4 caractères
    expect(passwordChecker('Ab!1')).toBe(false);
  });
});

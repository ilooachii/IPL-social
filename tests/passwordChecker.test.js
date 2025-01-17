const passwordChecker = require('../src/passwordChecker');

describe('passwordChecker - Step 1: Min length 8', () => {
  test('Should fail if password length < 8 chars', () => {
    // Exemple: "Ab!1" fait 4 caractères
    expect(passwordChecker('Ab!1')).toBe(false);
  });
});

describe('passwordChecker - Step 2: Special character', () => {
    test('Should fail if there is no special character', () => {
      // "Abcdef12" ne contient aucun caractère spécial
      expect(passwordChecker('Abcdef12')).toBe(false);
    });
  
    test('Should pass if there is at least one special character', () => {
      // "Abcdef12!" contient '!'
      expect(passwordChecker('Abcdef12!')).toBe(true);
    });
  });

  describe('passwordChecker - Step 3: Digit presence', () => {
    test('Should fail if there is no digit', () => {
      // "Abcdef!!" pas de chiffre
      expect(passwordChecker('Abcdef!!')).toBe(false);
    });
  
    test('Should pass if there is at least one digit', () => {
      // "Abcd!123" a 123
      expect(passwordChecker('Abcd!123')).toBe(true);
    });
  });
  
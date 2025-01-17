function passwordChecker(password) {
    // 1) Au moins 8 caractères
    if (password.length < 8) {
      return false;
    }
  
    // 2) Au moins un caractère spécial
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
      return false;
    }
  
    // 3) Au moins un chiffre
    const digitRegex = /\d/;
    if (!digitRegex.test(password)) {
      return false;
    }
  
    // Étape 4 viendra après
    return true;
  }
  
  module.exports = passwordChecker;
  
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
  
    // On laisse les autres règles pour les commits suivants
    return true;
  }
  
  module.exports = passwordChecker;
  
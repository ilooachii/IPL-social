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
  
    // 4) Ne pas contenir "IPL" en majuscules ou minuscules
    if (password.toLowerCase().includes('ipl')) {
      return false;
    }
  
    return true;
  }
  
  module.exports = passwordChecker;
  
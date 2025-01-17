function passwordChecker(password) {
    // 1) Au moins 8 caractères
    if (password.length < 8) {
      return false;
    }
  
    // (Les autres règles seront ajoutées plus tard)
    return true;
  }
  
  module.exports = passwordChecker;
  
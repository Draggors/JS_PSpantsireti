email = { xpath: '//input[@id = "input-email"]' };
password = { xpath: '//input[@id = "input-password"]' };
signInButton = { xpath: '//a[text() = "Sign In"]' };
LogInButton = { xpath: '//input[@type = "submit"]' };


module.exports = function () {
  return actor({

    Login(user) {
      this.amOnPage('/');
      this.click(signInButton);
      this.fillField(email, user.email);
      this.fillField(password, user.password);
      this.click(LogInButton);
    },
  });
}

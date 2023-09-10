email = { css: "input-email" };
password = { css: "input-password" };
signInButton = { xpath: '//a[@text = "Sign In"]' };
LogInButton = { xpath: '//input[@type = "submit"]'};


module.exports = function() {
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

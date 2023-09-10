const { I } = inject();

module.exports = {
  header: { xpath: '//*[@id="content"]/h1' },
  firstNameField: { xpath: '//*[@id="input-firstname"]' },
  lastNameField: { xpath: '//*[@id="input-lastname"]' },
  email: { xpath: '//*[@id="input-email"]' },
  telephone: { xpath: '//*[@id="input-telephone"]' },
  password: { xpath: '//*[@id="input-password"]' },
  confirmPassword: { xpath: '//*[@id="input-confirm"]' },
  privacyRadio: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  continueReg: { xpath: '//*[@id="content"]/form/div/div/input[2]' },

  fillNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.email, user.email);
    I.fillField(this.telephone, user.telephone);
    I.fillField(this.password, user.password);
    I.fillField(this.confirmPassword, user.confirmPassword);
  },

  verifySuccessfullyReg() {
    const regTitleText = 'Your Account Has Been Created!'
    I.seeTextEquals(regTitleText, this.header);
  },
  clickPrivacy() {
    I.click(this.privacyRadio);
  },

  clickContinueButton() {
    I.click(this.continueReg);
  },
  
}

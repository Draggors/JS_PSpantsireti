const { I } = inject();

module.exports = {

  privacyButton: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  continueReg: { xpath: '//*[@id="content"]/form/div/div/input[2]' },

  clickPrivacy() {
    I.click(this.privacyButton);
  },

  clickContinueButton() {
    I.click(this.continueReg);
  },
}

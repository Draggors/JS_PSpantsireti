const { I } = inject();

module.exports = {

  privacyRadio: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  continueReg: { xpath: '//*[@id="content"]/form/div/div/input[2]' },

  clickPrivacy() {
    I.click(this.privacyRadio);
  },

  clickContinueButton() {
    I.click(this.continueReg);
  },
}

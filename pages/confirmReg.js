const { I } = inject();

module.exports = {
  confirmButton: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  continueReg: { xpath: '//*[@id="content"]/form/div/div/input[2]' },

  clickPrivacy() {
    I.click(this.confirmButton);
  },

  clickContinueButton() {
    I.click(this.continueReg);
  }

}

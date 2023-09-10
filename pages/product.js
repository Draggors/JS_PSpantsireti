const { I } = inject();

module.exports = {

  ColorDropDown: { xpath: '//label[text() = "Color"]/following-sibling::div/a[1]' },
  SizeDropDown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' },
  ColorOption: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]'},
  SizeOption: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]'},

  selectColor() {
    I.click(this.ColorDropDown);
    I.click(this.ColorOption);
  },
  selectSize() {
    I.click(this.SizeDropDown);
    I.click(this.SizeOption);
    pause();
  },
}

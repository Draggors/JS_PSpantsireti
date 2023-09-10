const { I } = inject();

module.exports = {

  colorDropDown: { xpath: '//label[text() = "Color"]/following-sibling::div/a[1]' },
  sizeDropDown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' },
  colorOption: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]' },
  sizeOption: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]' },
  priceText: { xpath: '/div/span[@class="price-new"]'},

  selectColor() {
    I.click(this.colorDropDown);
    I.click(this.colorOption);
  },

  async getProductPrice() {
    const draftProductPrice = await I.grabTextForm(this.priceText)
    const colorPrice = await I.grabTextFrom(this.colorOption);
    const sizePrice = await I.grabTextFrom(this.sizeOption);
    return  colorPrice.slice(-6,-1);
  },
  selectSize() {
    I.click(this.SizeDropDown);
    I.click(this.SizeOption);
  },
}

const USER = {
    email: 'josephferretti@gmail.com',
    password: "J0sEph12345",
}

Feature('Log In + Buy');

xScenario('Log In', ({ I }) => {

    I.Login(USER);
});

Scenario('Buy Product', async ({ I, productPage, }) => {

    I.Login(USER);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=44');
    productPage.selectColor();
    productPage.selectSize();
    const productPrice = await productPage.getProductPrice();
    console.log(productPrice);
});
const USER = {
    email: 'josephferretti@gmail.com',
    password: "J0sEph12345",
}

Feature('Log In + Buy');

Scenario('Log In', ({ I }) => {

    I.Login(USER);
    pause();

});

Scenario('Buy Product', ({ I }) => {

    I.Login(USER);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=44')
    pause();

});
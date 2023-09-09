Feature('register');

Scenario('test something', ({ I }) => {
I.amOnPage('http://opencart.qatestlab.net/index.php');

I.click({ xpath: '//*[@id="top-links"]/ul/li/span/span' });
I.click({ xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a' });

I.fillField({ xpath: '//*[@id="input-firstname"]'}, "Joseph");
I.fillField({ xpath: '//*[@id="input-lastname"]'}, "12345");
I.fillField({ xpath: '//*[@id="input-email"]'}, "josephFerretti@gmail.com");
I.fillField({ xpath: '//*[@id="input-telephone"]'}, "+380999999999");
I.fillField({ xpath: '//*[@id="input-password"]'}, "J0sEph12345");
I.fillField({ xpath: '//*[@id="input-confirm"]'}, "J0sEph12345");

I.click({xpath: '//*[@id="content"]/form/div/div/input[1]'});
I.click({xpath: '//*[@id="content"]/form/div/div/input[2]'});

const regTitleText = 'Your Account Has Been Created!'
I.seeTextEquals(regTitleText, {xpath: '//*[@id="content"]/h1'})
});


const NEW_USER = {
    firstName: 'Joseph',
    lastName: 12345,
    email: Date.now() + '@gmail.com',
    telephone:"+380999999999",
    password: "J0sEph12345",
    confirmPassword: "J0sEph12345", 

    
}

Feature('register');

Scenario('Registration', ({ I, basePage, accountPage, finalPage}) => {
I.amOnPage('http://opencart.qatestlab.net/index.php');

basePage.clickMyAccount();
basePage.clickRegister();

//I.click({ xpath: '//*[@id="top-links"]/ul/li/span/span' });
//I.click({ xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a' });

accountPage.fillNewUserForm(NEW_USER);


//I.fillField({ xpath: '//*[@id="input-firstname"]'}, "Joseph");
//I.fillField({ xpath: '//*[@id="input-lastname"]'}, "12345");
//I.fillField({ xpath: '//*[@id="input-email"]'}, `${Date.now()}@gmail.com`);
//I.fillField({ xpath: '//*[@id="input-telephone"]'}, "+380999999999");
//I.fillField({ xpath: '//*[@id="input-password"]'}, "J0sEph12345");
//I.fillField({ xpath: '//*[@id="input-confirm"]'}, "J0sEph12345");

finalPage.clickPrivacy();
finalPage.clickContinueButton();

//I.click({xpath: '//*[@id="content"]/form/div/div/input[1]'});
//I.click({xpath: '//*[@id="content"]/form/div/div/input[2]'});

const regTitleText = 'Your Account Has Been Created!';
accountPage.verifySuccessfullyReg();
//I.seeTextEquals(regTitleText, {xpath: '//*[@id="content"]/h1'});
});

Scenario('Registration', ({ I, basePage, accountPage, finalPage}) => {
    
});

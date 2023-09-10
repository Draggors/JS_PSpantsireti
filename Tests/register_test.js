const NEW_USER = {
    firstName: 'Joseph',
    lastName: 12345,
    email: Date.now() + '@gmail.com',
    telephone:"+380999999999",
    password: "J0sEph12345",
    confirmPassword: "J0sEph12345", 

    
}

Feature('register');

Scenario('Registration', ({ I, basePage, accountPage}) => {

I.amOnPage('http://opencart.qatestlab.net/index.php');

basePage.clickMyAccount();
basePage.clickRegister();

accountPage.fillNewUserForm(NEW_USER);

accountPage.clickPrivacy();
accountPage.clickContinueButton();

accountPage.verifySuccessfullyReg();
});
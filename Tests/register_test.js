const NEW_USER = {
    firstName: 'Joseph',
    lastName: 12345,
    email: Date.now() + '@gmail.com',
    telephone:"+380999999999",
    password: "J0sEph12345",
    confirmPassword: "J0sEph12345", 

    
}

Feature('register');

xScenario('Registration', ({ I, basePage, accountPage, finalPage}) => {
    
I.amOnPage('/');

basePage.clickMyAccount();
basePage.clickRegister();

accountPage.fillNewUserForm(NEW_USER);

finalPage.clickPrivacy();
finalPage.clickContinueButton();

const regTitleText = 'Your Account Has Been Created!';
accountPage.verifySuccessfullyReg();
});
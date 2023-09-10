const USER = {
    email:'josephferretti@gmail.com',
    password: "J0sEph12345",   
}

Feature('Log In + Buy');

Scenario('Log In, buy', ({ I, basePage, accountPage, finalPage}) => {

    I.Login(USER);
    pause();

});
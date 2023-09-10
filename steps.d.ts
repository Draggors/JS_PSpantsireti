/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type basePage = typeof import('./pages/BasePage.js');
type accountPage = typeof import('./pages/account.js');
type confirmRegPage = typeof import('./pages/confirmReg.js');
type confirmPage = typeof import('./pages/confirm.js');
type finalPage = typeof import('./pages/final.js');
type productPage = typeof import('./pages/product.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, basePage: basePage, accountPage: accountPage, confirmRegPage: confirmRegPage, confirmPage: confirmPage, finalPage: finalPage, productPage: productPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

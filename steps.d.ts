/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type basePage = typeof import('./pages/BasePage.js');
type accountPage = typeof import('./pages/account.js');
type confirmRegPage = typeof import('./pages/confirmReg.js');
type confirmPage = typeof import('./pages/confirm.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, basePage: basePage, accountPage: accountPage, confirmRegPage: confirmRegPage, confirmPage: confirmPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

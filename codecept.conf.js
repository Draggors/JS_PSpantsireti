const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './Tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://opencart.qatestlab.net/index.php',
      show: true,
      waitForNavigation: "networkidle",
      waitForTimeout: 5000,
      windowSize: '1920x1080',

    }
  },
  include: {
    I: './steps_file.js',

    basePage: "./pages/BasePage.js",

    accountPage: "./pages/account.js",

    confirmRegPage: "./pages/confirmReg.js",

    confirmPage: "./pages/confirm.js",

    finalPage: "./pages/final.js",
  },
  name: 'JS_PSpantsireti'
}
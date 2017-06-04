exports.config = {
  // define specific suites
  specs: [
    'test/*Test.js'
  ],
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
   }],
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './logs/errorShots',
  baseUrl: 'http://automationpractice.com',
  waitforTimeout: 20000,
  framework: 'mocha',
  reporter: 'spec',
  mochaOpts: {
    compilers: ['js:babel-core/register'],
    timeout: 50000
  },
  services: ['selenium-standalone'],

  beforeCommand: function (commandName, args) {
    if(typeof args[0] !== 'undefined' && ['click', 'setValue', 'getText', 'selectByValue', '$', '$$'].indexOf(commandName) >= 0) {
      console.log(commandName);
      console.log(args[0]);
      console.log(args.length);
      browser.waitForVisible(args[0]);
    }
  }
};

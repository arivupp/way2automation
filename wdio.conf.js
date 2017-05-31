exports.config = {
  // define specific suites
  specs: [
    'test/**'
  ],
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    chromeOptions: {

    }}],
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './logs/errorShots',
  baseUrl: 'http://www.way2automation.com',
  waitforTimeout: 20000,
  framework: 'mocha',
  reporter: 'spec',
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-core/register'],
    timeout: 50000
  },
  services: ['selenium-standalone']
};

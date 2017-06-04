import wdio from 'wdio';

export function enableLocalTests() {
  if (global.browser) {
    return;
  }

  const browser = wdio.getBrowser({
    desiredCapabilities: {
      browserName: 'chrome'
    },
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 5000
  });

  global.browser = browser;

  const beforeOrig = global.before;
  global.before = callback => beforeOrig(wdio.wrap(callback));

  const afterOrig = global.after;
  global.after = callback => afterOrig(wdio.wrap(callback));

  const beforeEachOrig = global.beforeEach;
  global.beforeEach = callback => beforeEachOrig(wdio.wrap(callback));

  const itOrig = global.it;
  global.it = (title, callback) => itOrig(title, wdio.wrap(callback));

  const describeOrig = global.describe;
  global.describe = (title, callback) => describeOrig(title, function describe(...args) {
    this.timeout(50000);
    before(() => {
      browser.init();
    });
    after(() => {
      browser.end();
    });

    callback.call(this, ...args);
  });
}

// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: 'html',
  use: {
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    browserName : 'chromium',
    headless : false,
    //trace: 'retain-on-failure',
    trace: 'on',
  },
};

module.exports = config;
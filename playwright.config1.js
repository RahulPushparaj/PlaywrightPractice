// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  retries: 1,
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: 'html',

  projects:[
    {
      name : 'chrome',
      use: {
        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,
        browserName : 'chromium',
        headless : false,
        screenshot : 'on',
        video : 'retain-on-failure',
        //trace: 'retain-on-failure',
        trace: 'on',
        //viewport : {width: 720, height: 720},
      },
    },
    {
      name : 'webkit',
      use: {
        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,
        browserName : 'webkit',
        headless : false,
        //trace: 'retain-on-failure',
        trace: 'on',
         //...devices['iPhone 11']
         ignoreHTTPSErrors : true,
         permissions : ['geolocation'],
      },
    }
  ]

  
};

module.exports = config;
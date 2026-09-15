const {test, expect} = require('@playwright/test')

test("ScreenShot and Visual Comparison", async({page}) => 
{
    await page.goto("https://google.com/");

    expect(await page.screenshot()).toMatchSnapshot('landing.png');

})
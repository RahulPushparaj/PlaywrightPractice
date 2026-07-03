const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async ({browser})=>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log("Title : " + await page.title());
        //css
        await page.locator('#username').type("rahulshettyacademy");
        await page.locator("[type='password']").fill("Learning@830$3mK2");
        await page.locator("#signInBtn").click();

});

test('Page Playwright test', async ({page})=>
{
        await page.goto("https://google.com");
         console.log("Title : " + await page.title());
         await expect(page).toHaveTitle("Google");      

});
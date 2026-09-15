const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async ({browser})=>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        page.route('**/*.css', route => route.abort());
       // page.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log("Title : " + await page.title());
        //css
        await page.locator("#username").type("WrongUsername");
        //await page.locator('#username').type("rahulshettyacademy");
        await page.locator("[type='password']").fill("Learning@830$3mK2");
        await page.locator("#signInBtn").click();
        console.log("Text of Error Message is : " + await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');

});

test('Page Playwright test', async ({page})=>
{
        await page.goto("https://google.com");
         console.log("Title : " + await page.title());
         await expect(page).toHaveTitle("Google");      

});
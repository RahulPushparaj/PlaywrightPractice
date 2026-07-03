const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async ({browser})=>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        const username = page.locator("#username");
        const signIn = page.locator("#signInBtn");
        const cardTitle = page.locator(".card-body a");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log("Title : " + await page.title());
        //css
        await username.type("WrongUsername");
        await page.locator("[type='password']").type("Learning@830$3mK2");
        await signIn.click();
        console.log("Text of Error Message is : " + await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
        //type - filll
        await username.fill("");
        await username.fill("rahulshettyacademy");
        await signIn.click();
        //console.log("First Title is : " + await cardTitle.first().textContent());
        //console.log("Second Title is : " + await cardTitle.nth(1).textContent());
        console.log("First Execution All Title is : " + await cardTitle.allTextContents());

        console.log("First Title is : " + await cardTitle.first().textContent());
        console.log("Second Title is : " + await cardTitle.nth(1).textContent());
        console.log("Second Execution All Title is : " + await cardTitle.allTextContents());


});

test('Page Playwright test', async ({page})=>
{
        await page.goto("https://google.com");
         console.log("Title : " + await page.title());
         await expect(page).toHaveTitle("Google");      

});
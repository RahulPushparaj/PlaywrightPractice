const {test, expect} = require('@playwright/test');

test('Validate First Title in Rahul Shetty Website', async ({browser})=>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        const email = page.locator('#userEmail');
        const password = page.locator("#userPassword");
        const signIn = page.locator("[id='login']");
        const cardTitle = page.locator(".card-body b");
        await page.goto("https://www.rahulshettyacademy.com/client/#/auth/login");
        console.log("Login Page Title : " + await page.title());
        await email.fill("pushparajrahulshanthi851@gmail.com");
        await password.fill("Push@851");
        await signIn.click();
        console.log("Landing Page Title : " + await page.title());
        console.log("First Title is : " + await cardTitle.first().textContent());


}
);
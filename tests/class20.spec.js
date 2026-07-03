const {test, expect} = require('@playwright/test');

test.only('@Web Client App login', async ({ page }) => 
{
   //js file- Login js, DashboardPage
   const email = "pushparajrahulshanthi851@gmail.com";
   const productName = 'Push@851';
  
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type(productName);
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 


});

test('Page Playwright test', async ({page})=>
{
        await page.goto("https://google.com");
         console.log("Title : " + await page.title());
         await expect(page).toHaveTitle("Google");      

});
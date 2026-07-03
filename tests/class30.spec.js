const {test, expect} = require('@playwright/test');

test.only('Client App login', async ({ page }) => 
{
   const email = "pushparajrahulshanthi851@gmail.com";
   const password = 'Push@851';
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
  
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type(password);
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   const titles = await page.locator(".card-body b").allTextContents();
   console.log("All the element Header is : "+ titles); 
   const count = await products.count();
   for(let i = 0; i < count; ++i) {
      if(await products.nth(i).locator("b").textContent() === productName) {
            //add the card
            await products.nth(i).locator("text= Add To Cart").click();
            break;
      }
   }
});

test('Page Playwright test', async ({page})=>
{
        await page.goto("https://google.com");
         console.log("Title : " + await page.title());
         await expect(page).toHaveTitle("Google");      

});
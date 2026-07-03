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
   await page.locator(".card-body b").first().waitFor();
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
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
   await page.locator("[placeholder*='Country']").pressSequentially("ind");
   //For my reference - same meaning ob above line
   //await page.locator("[placeholder*='Country']").type("ind", {delay:150});
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for(let i = 0; i < optionsCount; ++i) {
      const 
      text = await dropdown.locator("button").nth(i).textContent();
      if(text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
   await page.pause();
});

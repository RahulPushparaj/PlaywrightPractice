//Login UI -> .json

//test browser -> .json, cart, order, orderdetails orderhistory
const {test, expect} = require('@playwright/test');
let webContext;

test.beforeAll(async ({browser}) => 
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("pushparajrahulshanthi851@gmail.com");
   await page.locator("#userPassword").type("Push@851");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await context.storageState({path: 'state.json'});
   webContext = await browser.newContext({storageState: 'state.json'});

})


test('Client App login', async () => 
{
   const email = "pushparajrahulshanthi851@gmail.com";
   const password = 'Push@851';
   const productName = 'ZARA COAT 3';
   const page = await webContext.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");
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

test('Test Case 2', async () =>
{
   const email = "pushparajrahulshanthi851@gmail.com";
   const password = 'Push@851';
   const productName = 'ZARA COAT 3';
   const page = await webContext.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");
   const titles = await page.locator(".card-body b").allTextContents();
   console.log("Title is : "+ titles);

})
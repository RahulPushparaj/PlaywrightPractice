const { test, expect, request } = require('@playwright/test');
const { class61_APIUtils } = require('./utils/class61_APIUtils');
const loginPayLoad = {userEmail:"pushparajrahulshanthi851@gmail.com",userPassword:"Push@851"};
const orderPayload = {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]}

let response;
test.beforeAll( async ()=>
{
    const apiContext = await request.newContext({
        ignoreHTTPSErrors: true
    })
    const apiUtils = new class61_APIUtils(apiContext, loginPayLoad);
    response = await apiUtils.createOrder(orderPayload);
    
});

//Create order is success
test('Place the Order', async ({ page }) =>
{
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token );

   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (response.OrderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   await page.pause();
   expect(response.OrderId.includes(orderIdDetails)).toBeTruthy();


});
 
 
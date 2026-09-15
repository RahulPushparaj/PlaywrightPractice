const { test, expect, request } = require('@playwright/test');
const { json } = require('node:stream/consumers');
const loginPayLoad = {userEmail:"pushparajrahulshanthi851@gmail.com",userPassword:"Push@851"};
const orderPayload = {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
let token;
let OrderId;
test.beforeAll( async ()=>
{
   //Login API
    //const apiContext = await request.newContext();
    const apiContext = await request.newContext({
        ignoreHTTPSErrors: true
    })
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:loginPayLoad
        } )
        //200, 201
        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.token;
        console.log("Token : " + token);

        //
       const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
         {
            data: orderPayload,
            headers:{
               'Authorization': token,
               'Content-Type' : 'application/json'
            },
         })
         const orderResponseJson = await orderResponse.json();
         console.log(orderResponseJson);
         OrderId = orderResponseJson.orders[0];       
});

test.beforeEach( ()=>
{

});

//Create order is success
test('Place the Order', async ({ page }) =>
{

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token );

   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (OrderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   await page.pause();
   expect(OrderId.includes(orderIdDetails)).toBeTruthy();


});
 
 
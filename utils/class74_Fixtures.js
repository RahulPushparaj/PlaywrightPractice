const base = require('@playwright/test');
const {class61_APIUtils} = require('./class61_APIUtils.js');
const {request} = require('@playwright/test');

const loginPayLoad = {userEmail: "pushparajrahulshanthi851@gmail.com", userPassword: "Push@851"};
const orderPayLoad = {
    orders: [{country: "India", productOrderedId: "6a8c219b21054ba465ee3b56"}]};

exports.customtest = base.extend({
 authenticatedPage: async ({ page }, use) => {
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("pushparajrahulshanthi851@gmail.com");
   await page.locator("#userPassword").type("Push@851");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
     
   await use(page);
   //tear down
   await context.close();
 },

 createOrder: async ({}, use) => 
{
    const apiContect = await request.newContext();
    const apiUtils = new class61_APIUtils(apiContect, loginPayLoad);
    const response = await apiUtils.createOrder(orderPayLoad);
    await use(response);
    await apiContect.dispose();

 },

 testDataForOrder : {
    productName: "adidas original",
 }
});

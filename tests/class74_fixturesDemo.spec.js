const {test, expect, request} = require('@playwright/test');
const {customtest} = require('../utils/class74_Fixtures.js');

customtest("Fixtures Demo",async ({authenticatedPage, createOrder, testDataForOrder})=> {
    //Login to the application/ Create order and verify if the order is created from History page
     await authenticatedPage.goto("https://rahulshettyacademy.com/client");
     await authenticatedPage.locator("button[routerlink*='myorders']").click();
     await authenticatedPage.locator("tbody").waitFor();
     await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
     console.log(testDataForOrder.productName);



})
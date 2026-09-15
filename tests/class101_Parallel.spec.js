const {test, expect} = require('@playwright/test');

//test.describe.configure({ mode: 'parallel' });
test.describe.configure({ mode: 'serial' });
test('@Test Case 1', async ({ page }) => 
{
   //js file- Login js, DashboardPage
   const email = "pushparajrahulshanthi851@gmail.com";
   const productName = 'Push@851';
  
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type(productName);
   await page.locator("[value='Login']").click();
});

test('@Test Case 2', async ({ page }) => 
{
   //js file- Login js, DashboardPage
   const email = "Bhuvi851@gmail.com";
   const productName = 'Push@851';
  
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#usersPassword").type(productName);
   await page.locator("[value='Login']").click();
});

test('@Test Case 3', async ({ page }) => 
{
   //js file- Login js, DashboardPage
   const email = "Rahul851@gmail.com";
   const productName = 'Push@851';
  
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type(productName);
   await page.locator("[value='Login']").click();
});

test('@Test Case 4', async ({ page }) => 
{
   //js file- Login js, DashboardPage
   const email = "Pushparaj851@gmail.com";
   const productName = 'Push@851';
  
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type(productName);
   await page.locator("[value='Login']").click();
});



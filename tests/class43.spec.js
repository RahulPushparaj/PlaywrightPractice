    import { test, expect } from '@playwright/test';
 
test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seonds default timeout for except assertions --{timeout : 10000} Step level
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout : 10000});

    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
    //locator(css)
 
});

test.only('Playwright Test level time out', async ({ page }) => {
    test.timeout(60000); //test level timeout
    //waitFor();
    const slowExpect = expect.configure({timeout : 10000}); //test level timeout
    page.setDefaultTimeout(9000);

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seonds default timeout for except assertions --{timeout : 10000} --Step level  --test level
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

    //global ----> test ----> step
    await page.getByRole("link",{name : "Shop"}).click({timeout : 10000});
    await slowExpect(page.locator(".my--4").first()).toHaveText("Shop");
    //2 more
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
    //locator(css)
 
});
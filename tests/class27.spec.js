const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        const username = page.locator("#username");
        const signIn = page.locator("#signInBtn");
        const cardTitle = page.locator(".card-body a");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log("Title : " + await page.title());
        //css
        await username.type("WrongUsername");
        await page.locator("[type='password']").type("Learning@830$3mK2");
        await signIn.click();
        console.log("Text of Error Message is : " + await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
        //type - filll
        await username.fill("");
        await username.fill("rahulshettyacademy");
        await signIn.click();
        //console.log("First Title is : " + await cardTitle.first().textContent());
        //console.log("Second Title is : " + await cardTitle.nth(1).textContent());
        console.log("First Execution All Title is : " + await cardTitle.allTextContents());

        console.log("First Title is : " + await cardTitle.first().textContent());
        console.log("Second Title is : " + await cardTitle.nth(1).textContent());
        console.log("Second Execution All Title is : " + await cardTitle.allTextContents());
});

test('UI Control', async ({page})=>
{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const username = page.locator("#username");
        const signIn = page.locator("#signInBtn");
        const dropdown = page.locator("select.form-control");
        const documentLink = page.locator("[href*='documents-request']");
        await dropdown.selectOption("consult");
        await page.locator(".radiotextsty").last().click();
        await page.locator("#okayBtn").click();
        console.log(await page.locator(".radiotextsty").last().isChecked());
        await expect(page.locator(".radiotextsty").last()).toBeChecked();
        await page.locator("#terms").click();
        await expect(page.locator("#terms").last()).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked()).toBeFalsy();
        await expect(documentLink).toHaveAttribute("class","blinkingText");
        //await page.pause();
});

test.only('Child Window Handlings', async ({browser})=>
{

        const context = await browser.newContext();
        const page = await context.newPage();
        const username = page.locator("#username");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");

        const [newPage] = await Promise.all(
                [
                        context.waitForEvent('page'),    //listen for any new page pending, rejected, fulfilled
                        documentLink.click(),
                ]
        )                                         //new page is opened
        const text = await newPage.locator(".red").textContent();
        console.log("Text present is new Page is : " + text);
        const arrayText = text.split("@");
        const domain = arrayText[1].split(" ")[0];
        //console.log("Domain email which taken in full Text : " + domain);
        await username.fill(domain);
        await page.pause();
        console.log("Content is :" + await username.inputValue());
});
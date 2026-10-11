const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const playwright = require('@playwright/test');




Before(async function () {


    const browser = await playwright.chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);

});

After(function(){
    console.log("I am last to execute")
});

BeforeStep(function (){
    //This note will be executed before all steps in a scenario with tagname.
})

AfterStep(async function ({result}) {
    if(result.status ===Status .FAILED ) {
        await this.page.screenshot({ path : 'screenshot1.png'})
    }
    
})
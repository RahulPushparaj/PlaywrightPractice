const { test, expect, request } = require('@playwright/test');
const loginPayLoad = {userEmail:"pushparajrahulshanthi851@gmail.com",userPassword:"Push@851"};
token;
test.beforeAll( async ()=>
{
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
        const token = loginResponseJson.token;
        console.log("Token : " + token);
});

test.beforeEach( ()=>
{

});

test('@Place the Order', async ({ page }) =>
{

    
});
 
 
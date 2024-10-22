const { test, expect } = require('@playwright/test');

let webContext;

test.beforeAll('Login - Happy Path', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

    // capture session and put in state.json
    await context.storageState({ path: 'state.json' });
    // add state.json to the new browser instance
    webContext = await browser.newContext({ storageState: 'state.json' });


});


test('Test case 1', async () => {
    //creating a new page from the new browser instant that were jected with the state.json
    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    await page.waitForTimeout(2000);

});

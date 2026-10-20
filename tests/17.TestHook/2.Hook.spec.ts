import { test, expect } from '@playwright/test';
test('Checkout', async ({ page }) => {

    await test.step('Open Website', async () => {    //test.step() creates a named step inside the test.async () => { ... } contains the actions to execute in that step.
        await page.goto('https://example.com');      //Open Website' is the step name shown in the report.
    });

    await test.step('Login', async () => {
        // Login code
    });

    await test.step('Verify Dashboard', async () => {
        // Assertions
    });
});
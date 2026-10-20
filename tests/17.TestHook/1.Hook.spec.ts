import { test, expect } from '@playwright/test';
const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter.html';


test('title test',async ({ page, browserName})=>{    
    test.skip(browserName === 'firefox', 'Feature not yet supported on Firefox');   //If the condition is true, Playwright skips the test.
    await page.goto(URL);      //The skip happens before page.goto(URL) so skipped test does not navigate to the page
    await expect(page).toHaveTitle(/Multiple Element Filter/, { timeout: 15000 });
});

test('email is visible (slow on firefox)', async ({ page, browserName }) => {    //want Firefox to get more time
    test.slow(browserName === 'firefox', 'firefox is slow on this layout');  //If the browser is Firefox, Playwright marks the test as slow and increases its default test timeout
    await page.goto(URL);
    await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();
});


test.fixme('password is visible — broken in Safari, fix me', async ({ page }) => {   //It does not execute the test body.
    await page.goto(URL);
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
});

test('expected to fail until backend ships', async ({ page }) => {
    test.fail();
    await page.goto(URL);
    await expect(page.getByText('New customer area', { exact: true })).toBeVisible();
});
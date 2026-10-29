
import { test, expect } from '@playwright/test';

test('Handle two tabs', async ({ page }) => {

    // Tab 1: Open Google
    await page.goto('https://www.google.com');

    // Open Tab 2
    const tab2 = await page.context().newPage();

    // Tab 2: Open Playwright website
    await tab2.goto('https://playwright.dev');

    // Print both page titles
    console.log('Tab 1:', await page.title());
    console.log('Tab 2:', await tab2.title());

    await expect(tab2).toHaveURL(/playwright.dev/);

});

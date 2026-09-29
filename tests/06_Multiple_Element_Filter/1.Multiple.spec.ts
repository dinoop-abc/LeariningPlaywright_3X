import { test, expect, Locator } from '@playwright/test';
test('Basic verify how to handle multiple elements ', async ({ page }) => {
    //await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle");

    const rightPanelLinksTexts: Locator[] =  await page.locator('a.list-group-item');
    console.log("Number of links:", await rightPanelLinksTexts.count());

    for (let i = 0; i < await rightPanelLinksTexts.count(); i++) {
        const link = rightPanelLinksTexts.nth(i);

        console.log("Href:", await link.getAttribute('href'));
    }

    await page.pause();
});
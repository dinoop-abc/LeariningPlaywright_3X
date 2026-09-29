import { test, expect } from '@playwright/test';

test('Basic verify how to handle multiple elements ', async ({ page }) => {

    //await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
     await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle");
    const rightPanelLinksTexts: string[] =  await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightPanelLinksTexts.length);

    // Print all link texts
    for (let i = 0; i < rightPanelLinksTexts.length; i++) {
        console.log(rightPanelLinksTexts[i]);
    }

     for (let i = 0; i < rightPanelLinksTexts.length; i++) {

        if (rightPanelLinksTexts[i] === "Forgotten Password") {

            await page.getByText(rightPanelLinksTexts[i]).first().click();
        }}

    await page.pause();
});
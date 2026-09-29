import { test, expect } from '@playwright/test';

test("Navigating to the tta website", async ({ page }) => {
    await page.goto("https://example.com/");
});
test("BCP - in app.vwo.com two roles", async ({ browser }) => {
let adminContext = await browser.newContext();
let userContext = await browser.newContext();

    let adminPage = await adminContext.newPage();
   await adminPage.goto("https://app.thetestingacademy.com/playwright/", {waitUntil: "domcontentloaded"});
let userPage = await userContext.newPage();
await userPage.goto("https://sdet.live", {waitUntil: "domcontentloaded",timeout: 90000});
await adminPage.close();
    await userPage.close();
    });
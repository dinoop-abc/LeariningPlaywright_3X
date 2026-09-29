import { test, expect, Locator } from '@playwright/test';
test('Verify Custom DropDowns', async ({ page }) => {
   

await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns", { waitUntil: "domcontentloaded" });
await page.waitForLoadState("networkidle");

   await page.getByTestId('lang-trigger').click();
   await page.getByRole("option", { name:"JavaScript" }).click();

   // await page.getByText("JavaScript").first().click();

   await page.getByTestId('experience-trigger').click();
   await page.getByText("Mid-level (4-6 years)", { exact: true }).click();


   await page.pause();
});
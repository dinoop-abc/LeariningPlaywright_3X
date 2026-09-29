import { test, expect, Locator } from '@playwright/test';
test('Verify DropDowns', async ({ page }) => {
  
await page.goto("https://the-internet.herokuapp.com/dropdown", { waitUntil: "domcontentloaded" });
await page.waitForLoadState("networkidle");

   await page.locator("#dropdown").click();
   await page.selectOption("#dropdown", "Option 2");

   await page.pause();
});
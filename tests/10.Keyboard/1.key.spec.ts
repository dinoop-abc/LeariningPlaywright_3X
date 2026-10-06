import { test, expect, Locator } from '@playwright/test';
test('Verify the TestCase', async ({ page }) => {
await page.goto("https://keycode.info", { waitUntil: "domcontentloaded" });
await page.waitForLoadState("networkidle");
   await page.keyboard.press('A');
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('Shift+O');
  await page.keyboard.up("Shift");
   await page.keyboard.down("Shift");
await page.pause();
});
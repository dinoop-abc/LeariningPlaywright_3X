import { test, expect, Locator } from '@playwright/test';
test('Verify the TestCase', async ({ page }) => {
await page.goto("https://app.thetestingacademy.com/playwright/webtable", { waitUntil: "domcontentloaded" });
await page.waitForLoadState("networkidle");
// await page.locator('//td[text()="Rohan.Mehta"]/preceding-sibling::td/input').click(); //This is one way to select Rohan's checkbox
await page.locator("tr:has(td:text('Rohan.Mehta'))")
   .locator('input').first().click();  //Find the table row that contains the text Rohan.Mehta, find the input inside that row, select the first input, and click it.
// await page.pause();
   await page.waitForTimeout(5000);  //Wait exactly 5 seconds.browser remains open for 5 seconds before the test finishes
});

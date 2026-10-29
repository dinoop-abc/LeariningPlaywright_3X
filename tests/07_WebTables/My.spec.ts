
import { test, expect } from '@playwright/test';

test('Verify web table page', async ({ page }) => {

    // Open the URL
    await page.goto("https://assertqa.com/practice/webtables", { waitUntil: "domcontentloaded" });
await page.waitForLoadState("networkidle");

    // Wait until the URL contains the expected text
    await expect(page).toHaveURL(/assertqa\.com\/practice/);

    console.log('Correct URL is loaded');

    // Wait until the table container is visible
    const table = page.locator("//div[@id='table-scroll-container']");

    await expect(table).toBeVisible();

    console.log('Table container is visible');
    const tablee = page.locator("//div[@id='table-scroll-container']");

if (await tablee.isVisible()) {
    console.log("Table is displayed");
} else {
    console.log("Table is NOT displayed");
}
const noRecords = page.locator("//div[contains(text(),'No records found')]");

if (await noRecords.isVisible()) {
    console.log("PASS: No records found message displayed");
}
//click accept button
await page.getByRole("button", { name: "Accept" })
    .or(page.getByText("Accept"))
    .click();
    //raw count
    const rows = page.locator("//div[@id='table-scroll-container']//tbody/tr");

const rowCount = await rows.count();

console.log("Total number of Rows: " + rowCount);
//Column count
const columns = page.locator(
    "//div[@id='table-scroll-container']//tr[1]/th"
);

const columnCount = await columns.count();

console.log("Total number of columns: " + columnCount);
//show header



for (let i = 0; i < columnCount; i++) {
    const columnName = await columns.nth(i).innerText();

    console.log("Column " + (i + 1) + ": " + columnName);
}
//print raw value
for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator("td");
    const columnCount = await cells.count();

    for (let j = 0; j < columnCount; j++) {
        const data = await cells.nth(j).innerText();

        process.stdout.write(data + "   ");
    }

    console.log(); // Move to the next row
}
//sarah email
const row = page.locator(
    "//div[@id='table-scroll-container']//tbody/tr[td[2][contains(text(), 'Sarah')]]"
);

const email = await row.locator("td").nth(3).innerText();
const age = await row.locator("td").nth(4).innerText();

console.log("Email: " + email);
console.log("Age: " + age);
//find a row based on another column
while (true) {
    // Find Lisa on the current page
    const lisa = page.locator(
        "//div[@id='table-scroll-container']//tbody/tr[td[2]='Lisa']"
    );

    if (await lisa.count() > 0) {
        // Get age from the 5th column of Lisa's first row
        const agee = await lisa.first().locator("td").nth(4).innerText();

        console.log("Lisa Age = " + agee);
        break; // Lisa found; stop the loop
    }

    // Find the Next button
    const next = page.locator(
        "//*[@id='main-content']/main/div/div/div[3]/div[2]/div[2]/div[2]/div/button[3]"
    );

    // Stop if Next is disabled
    if (!(await next.isEnabled())) {
        console.log("Lisa not found");
        break;
    }

    // Click Next to search the next page
    await next.click();
}
    await page.pause();
    
    
    
});

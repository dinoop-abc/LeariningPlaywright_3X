
import { test, expect } from '@playwright/test';

test('Checkbox selection', async ({ page }) => {

    // Open the website
    await page.goto('https://testautomationpractice.blogspot.com/');

    // a) Find a single checkbox
    const checkbox = page.locator(
        "//input[@type='checkbox']"
    ).first();

    // b) Check whether the checkbox is selected
    if (await checkbox.isChecked()) {
        console.log('Checkbox selected');
    } else {
        console.log('Checkbox not selected');
    }

    // c) Select checkbox only if not selected
    if (!(await checkbox.isChecked())) {
        await checkbox.check();
        console.log('Checkbox selected now');
    }

    // d) Find multiple checkboxes
    const checkboxes = page.locator(
        "//input[@type='checkbox' and @class='form-check-input']"
    );

    // e) Count checkboxes
    const count = await checkboxes.count();
    console.log('Checkbox count = ' + count);

    // Verify checkbox count
    await expect(checkboxes).toHaveCount(7);

    // f) Loop through checkboxes and select them if needed
    for (let i = 0; i < count; i++) {
        const currentCheckbox = checkboxes.nth(i);

        if (!(await currentCheckbox.isChecked())) {
            await currentCheckbox.check();
        }

        console.log(
            await currentCheckbox.getAttribute('value')
        );
    }
});

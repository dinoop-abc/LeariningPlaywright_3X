
import { test, expect } from '@playwright/test';
import userData from './280_Users.json';

test('OrangeHRM Login using JSON', async ({ page }) => {

    // Open OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Enter username from JSON
    await page.locator('input[name="username"]')
        .fill(userData.username);

    // Enter password from JSON
    await page.locator('input[name="password"]')
        .fill(userData.password);

    // Click Login
    await page.locator('button[type="submit"]').click();

    // Verify successful login
    await expect(page).toHaveURL(/dashboard/);

    // Verify Dashboard is visible
    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

});

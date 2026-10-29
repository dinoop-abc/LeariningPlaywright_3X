
import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login Tests', () => {

    // Test 1: Open login page
    test('Open OrangeHRM Login Page', async ({ page }) => {

        await page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

        await expect(page.getByPlaceholder('Username')).toBeVisible();
    });

    // Test 2: Enter username and password
    test('Enter Login Credentials', async ({ page }) => {

        await page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');

        await expect(page.getByPlaceholder('Username')).toHaveValue('Admin');
    });

    // Test 3: Login and verify dashboard
    test('Login and Verify Dashboard', async ({ page }) => {

        await page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/dashboard\/index/);
    });

});

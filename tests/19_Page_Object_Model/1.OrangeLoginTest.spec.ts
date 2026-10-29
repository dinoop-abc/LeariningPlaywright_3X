
import { test, expect } from '@playwright/test';
import { OrangeLogin } from './pages/OrangeLogin';

test.describe('POM with OrangeHRM Login Page', () => {

    test('Login with valid credentials', async ({ page }) => {

        // Without POM
        // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // await page.getByPlaceholder('Username').fill('Admin');
        // await page.getByPlaceholder('Password').fill('admin123');
        // await page.getByRole('button', { name: 'Login' }).click();

        // With POM
        const loginPage = new OrangeLogin(page);

        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');

        // Verify successful login
        await expect(page).toHaveURL(/dashboard\/index/);

    });

});

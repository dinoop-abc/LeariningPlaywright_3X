
import { test, expect, Page } from '@playwright/test';

class OrangeHRMLogin {

    // Declare a Page variable
    page: Page;

    // Constructor
    constructor(page: Page) {
        this.page = page;
    }

    // Method 1: Open the login page
    async openLoginPage() {
        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );
    }

    // Method 2: Enter username
    async enterUsername() {
        await this.page.getByPlaceholder('Username').fill('Admin');
    }

    // Method 3: Enter password
    async enterPassword() {
        await this.page.getByPlaceholder('Password').fill('admin123');
    }

    // Method 4: Click Login
    async clickLogin() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}

test('OrangeHRM Login Test', async ({ page }) => {

    // Create an object of the class
    const login = new OrangeHRMLogin(page);

    // Call methods using the object
    await login.openLoginPage();
    await login.enterUsername();
    await login.enterPassword();
    await login.clickLogin();

    // Verify dashboard URL
    await expect(page).toHaveURL(/dashboard\/index/);

});

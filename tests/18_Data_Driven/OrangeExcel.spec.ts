
import { test, expect } from '@playwright/test';
import { OrangeExcel } from './util/orangeexcel';

const loginData = OrangeExcel.getLoginData();

console.log('Excel data:', loginData);

// Synchronous describe callback
test.describe('OrangeHRM Login - Excel DDT', () => {

    // Register one test for each Excel row
    for (const data of loginData) {

        test(data.description, async ({ page }) => {

            // Open OrangeHRM
            await page.goto(
                'https://opensource-demo.orangehrmlive.com/',
                { waitUntil: 'domcontentloaded' }
            );

            const usernameInput = page.locator(
                'input[name="username"]'
            );
            const passwordInput = page.locator(
                'input[name="password"]'
            );
            const submitButton = page.locator(
                'button[type="submit"]'
            );

            // Verify login form
            await expect(usernameInput).toBeVisible();
            await expect(passwordInput).toBeVisible();

            // Enter Excel test data
            await usernameInput.fill(data.username);
            await passwordInput.fill(data.password);
            await submitButton.click();

            if (data.shouldPass) {

                // Verify successful login
                await expect(page).toHaveURL(/\/dashboard\/?/);

                await expect(
                    page.getByRole('heading', {
                        name: 'Dashboard'
                    })
                ).toBeVisible();

            } else {

                // Verify invalid login message
                await expect(
                    page.locator('p.oxd-alert-content-text')
                ).toHaveText(data.expectedError);

            }
        });
    }
});

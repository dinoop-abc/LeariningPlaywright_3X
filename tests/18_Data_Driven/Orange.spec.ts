
import { test, expect } from "@playwright/test";
import loginData from './test-data/login.json';

test.describe("OrangeHRM Login - Data Driven", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(
            "https://opensource-demo.orangehrmlive.com/"
        );
    });

    test("Login with valid user", async ({ page }) => {

        await page.locator('input[name="username"]')
            .fill(loginData.validUser.username);

        await page.locator('input[name="password"]')
            .fill(loginData.validUser.password);

        await page.locator('button[type="submit"]').click();

        if (loginData.validUser.expectedResult === "valid") {
            await expect(page).toHaveURL(/dashboard/);

            await expect(
                page.getByRole('heading', { name: 'Dashboard' })
            ).toBeVisible();
        }
    });

    test("Login with invalid user", async ({ page }) => {

        await page.locator('input[name="username"]')
            .fill(loginData.invalidUser.username);

        await page.locator('input[name="password"]')
            .fill(loginData.invalidUser.password);

        await page.locator('button[type="submit"]').click();

        if (loginData.invalidUser.expectedResult === "invalid") {
            await expect(
                page.locator('.oxd-alert-content-text')
            ).toHaveText('Invalid credentials');
        }
    });

});

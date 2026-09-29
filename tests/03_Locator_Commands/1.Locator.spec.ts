import { test, expect} from '@playwright/test'

test('Verify Page Load', async({page})=>{

    await page.goto("https://app.vwo.com",{
        waitUntil: 'domcontentloaded',
        timeout:9000,
        referer:"https://sdet.live"
    });
let userNameField = page.locator("#login-username");
    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");
    
    await userNameField.fill("admin@admin.com");
    await passwordField.fill("pass123");
    await loginButton.click();

    let error_message = page.locator('#js-notification-box-msg');

    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

    
});


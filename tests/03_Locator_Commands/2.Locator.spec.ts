import { test, expect} from '@playwright/test'  

test('Verify Page Load', async({page})=>{    

    await page.goto("https://katalon-demo-cura.herokuapp.com/",{
        waitUntil: 'domcontentloaded',
        timeout:9000,                   
        });
      let clickapp = page.locator("#btn-make-appointment");
      await clickapp.click();

    let userNameField = page.locator("#txt-username");       
    let passwordField = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");
    
    await userNameField.fill("John Doe");
    await passwordField.fill("ThisIsNotAPassword");
    await loginButton.click();

    //let error_message = page.locator('#js-notification-box-msg');

    //await expect(error_message).toContainText("Your email, password, IP address or location did not match");

    await page.pause();    
});

import { test, expect } from '@playwright/test';

test('open website', async ({ page }) => {

  await page.goto(
    'https://app.thetestingacademy.com/playwright/multiple_element_filter',
    { waitUntil: 'domcontentloaded', timeout: 60000 }
  );
await page.getByRole('textbox', { name: 'Email Address' })
    .fill('your@email.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('123');

  await page.getByTestId('login-button').click();
  console.log(await page.title());

});
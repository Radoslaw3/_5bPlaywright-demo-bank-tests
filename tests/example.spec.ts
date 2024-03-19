import { test, expect } from '@playwright/test';

test('test @Run', async ({ page }) => {
  await page.goto('https://demo-bank.vercel.app/');
  await page.getByTestId('login-input').click();
  await page.getByTestId('login-input').fill('Radoslaw');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('test1234');
  await page.locator('#login_form div').filter({ hasText: 'zaloguj się' }).nth(1).click();
  await page.getByTestId('login-button').click();
  await page.getByTestId('user-name').click();

  //Asercje
  await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
});
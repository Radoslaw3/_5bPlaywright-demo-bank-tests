import { test, expect } from '@playwright/test';

test('test @RunSolo', async ({ page }) => {
  await page.goto('https://trends.google.com/trends/');
  await page.getByRole('button', { name: 'Trending now' }).click();
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Home');
  await page.getByRole('link', { name: 'Explore' }).click();
  await expect(page.getByLabel('Add a search term')).toBeEmpty();
  await page.getByLabel('Add a search term').click();
  await page.getByLabel('Add a search term', { exact: true }).fill('warsaw');
  await page.getByRole('button', { name: 'warsaw Search term' }).click();
});
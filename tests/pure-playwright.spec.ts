import { test, expect } from '@playwright/test';

test('SauceDemo Playwright Test Case', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = 'standard_user'
  await test.step(`Fiiling the username text field with value '${username}'`, async () => {
    await page.locator('[data-test="username"]').fill(username);
  })

  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await expect(page.locator('#shopping_cart_container')).toContainText('1');
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('alex');
  await page.locator('[data-test="lastName"]').fill('alex');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.locator('form')).toBeVisible();
});


import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('should login with valid credentials (typescript)', async ({ page }: { page: Page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.expectHomePageIsVisible();

  expect(page.url()).toContain('inventory');
});
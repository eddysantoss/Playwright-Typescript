import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { LogoutPage } from '../../pages/logout';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectHomePageIsVisible();
});

test('should logout successfully', async ({ page }) => {
    const logoutPage = new LogoutPage(page);

    await logoutPage.clickLogoutButton();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});
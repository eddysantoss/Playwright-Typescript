import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { ProductsPage } from '../../pages/products';
import { CheckoutPage } from '../../pages/checkout';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectHomePageIsVisible();
});

test('should complete checkout with valid customer information', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    await productsPage.gotoProductsPage();
    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.goToCart();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
    await checkoutPage.fillCheckoutInformation('Boni', 'Santos', '37460000');
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();

    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    await checkoutPage.goBackToProducts();
    await expect(checkoutPage.inventoryList).toBeVisible();


});





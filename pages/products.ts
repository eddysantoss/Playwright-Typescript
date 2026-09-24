import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
    private readonly page: Page;
    private readonly cartBadge: Locator;
    private readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
 feat/migrate-checkout-to-typescript


master
    }

    async gotoProductsPage(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async addProductToCart(productName: string): Promise<void> {
        await this.page.click(`button[data-test="add-to-cart-${productName}"]`);
        await expect(this.cartBadge).toHaveText('1');
    }

    async removeProductFromCart(productName: string): Promise<void> {
        await this.page.click(`button[data-test="remove-${productName}"]`);
        await expect(this.cartBadge).toBeHidden();
    }

    async goToCart(): Promise<void> {
        await this.cartLink.click();
    }

    async goToCartAndRemove(productName: string): Promise<void> {
        await this.page.click(`button[data-test="add-to-cart-${productName}"]`);
        await this.cartLink.click();
        await this.removeProductFromCart(productName);
        await expect(this.cartBadge).toBeHidden();
 feat/migrate-checkout-to-typescript


 master
    }
}
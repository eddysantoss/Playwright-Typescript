import { type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
    private readonly page: Page;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;
    private readonly finishButton: Locator;
    private readonly backToProductsButton: Locator;
    readonly completeHeader: Locator;
    readonly inventoryList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
        this.completeHeader = page.locator('.complete-header');
        this.inventoryList = page.locator('.inventory_list');
    }

    async startCheckout(): Promise<void> {
        await this.page.click('button[data-test="checkout"]');
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout(): Promise<void> {
        await this.continueButton.click();
    }

    async finishCheckout(): Promise<void> {
        await this.finishButton.click();
    }

    async goBackToProducts(): Promise<void> {
        await this.backToProductsButton.click();
    }
}
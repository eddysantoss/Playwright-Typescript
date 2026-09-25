import { type Locator, type Page } from '@playwright/test';

export class LogoutPage {
    private readonly page: Page;
    private readonly menuButton: Locator;
    private readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuButton = this.page.getByRole('button', { name: /open menu/i });
        this.logoutButton = this.page.getByRole('button', { name: /logout/i });
    }

    async clickLogoutButton(): Promise<void> {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}
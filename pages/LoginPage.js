import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.EMAIL_INPUT = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.PASSWORD_INPUT = page.getByRole('textbox', { name: 'Password' });
        this.LOGIN_BUTTON = page.getByRole('button', { name: 'Login' });
        this.LOGOUT_BUTTON = page.getByRole('link', { name: 'Logout' });
    }

    async enterEmail(email) {
        await this.EMAIL_INPUT.fill(email);
    }

    async enterPassword(password) {
        await this.PASSWORD_INPUT.fill(password);
    }

    async clickLogin() {
        await this.LOGIN_BUTTON.click();
    }
    

    async isLogoutButtonVisible(text) {
        await expect(this.LOGOUT_BUTTON).toHaveText(text);
    }
}

module.exports = { LoginPage };
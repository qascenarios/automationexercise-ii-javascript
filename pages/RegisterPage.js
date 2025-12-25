import {BasePage} from './BasePage';

class RegisterPage extends BasePage {

    constructor(page) {
        super(page);
        this.ACCEPT_CONSENT = page.getByRole('button', { name: 'Consent' });
        this.NAME_INPUT = page.getByRole('textbox', { name: 'Name' });
        this.EMAIL_INPUT = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.SIGNUP_BUTTON = page.getByRole('button', { name: 'Signup' });
        this.PASSWORD_INPUT = page.getByRole('textbox', { name: 'Password *' });
        this.FIRSTNAME_INPUT = page.getByRole('textbox', { name: 'First name *' });
        this.LASTNAME_INPUT = page.getByRole('textbox', { name: 'Last name *' });
        this.ADDRESS1_INPUT = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.COUNTRY_SELECT = page.getByLabel('Country *');
        this.STATE_INPUT = page.getByRole('textbox', { name: 'State *' });
        this.CITY_INPUT = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.ZIPCODE_INPUT = page.locator('#zipcode');
        this.MOBILE_NUMBER_INPUT = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.CREATE_ACCOUNT_BUTTON = page.getByRole('button', { name: 'Create Account' });
        this.ACCOUNT_CREATION_MSG = page.getByText('Account Created!');
    }

    async registerNewUser() {
        await this.ACCEPT_CONSENT.click();
    }

    async enterName(name) {
        await this.NAME_INPUT.fill(name);
    }

    async enterEmail(email) {
        await this.EMAIL_INPUT.fill(email);
    }

    async clickSignup() {
        await this.SIGNUP_BUTTON.click();
    }

    async enterPassword(password) {
        await this.PASSWORD_INPUT.fill(password);
    }

    async enterFirstName(firstName) {
        await this.FIRSTNAME_INPUT.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.LASTNAME_INPUT.fill(lastName);
    }

    async enterAddress1(address1) {
        await this.ADDRESS1_INPUT.fill(address1);
    }

    async selectCountry(country) {
        await this.COUNTRY_SELECT.selectOption(country);
    }

    async enterState(state) {
        await this.STATE_INPUT.fill(state);
    }

    async enterCity(city) {
        await this.CITY_INPUT.fill(city);
    }

    async enterZipcode(zipcode) {
        await this.ZIPCODE_INPUT.fill(zipcode);
    }

    async enterMobileNumber(mobileNumber) {
        await this.MOBILE_NUMBER_INPUT.fill(mobileNumber);
    }

    async fillRegistrationForm(details) {
        await this.enterPassword(details.password);
        await this.enterFirstName(details.firstName);
        await this.enterLastName(details.lastName);
        await this.enterAddress1(details.address1);
        await this.selectCountry(details.country);
        await this.enterState(details.state);
        await this.enterCity(details.city);
        await this.enterZipcode(details.zipcode);
        await this.enterMobileNumber(details.mobileNumber);
    }

    async clickCreateAccount() {
        await this.CREATE_ACCOUNT_BUTTON.click();
    }

    async verifyAccountCreation() {
        await this.ACCOUNT_CREATION_MSG.isVisible();
    }
}

module.exports = { RegisterPage };
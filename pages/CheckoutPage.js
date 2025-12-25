import { BasePage } from './BasePage';

class CheckoutPage extends BasePage {
    constructor(page){
        super(page);
        this.PROCEED_TO_CHECKOUT_BUTTON = page.getByText('Proceed To Checkout');
        this.PLACE_ORDER_BUTTON = page.getByRole('link', { name: 'Place Order' });
        this.NAME_ON_CARD_INPUT = page.locator('input[name="name_on_card"]');
        this.CARD_NUMBER_INPUT = page.locator('input[name="card_number"]');
        this.CARD_CVC_INPUT = page.getByRole('textbox', { name: 'ex.' });
        this.CARD_EXPIRY_MONTH_INPUT = page.getByRole('textbox', { name: 'MM' });
        this.CARD_EXPIRY_YEAR_INPUT = page.getByRole('textbox', { name: 'YYYY' });
        this.PAY_AND_CONFIRM_ORDER_BUTTON = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.SUCCESS_MESSAGE = page.getByText('Order Placed!');
    }

    async proceedToCheckout(){
        await this.PROCEED_TO_CHECKOUT_BUTTON.click();
    }

    async placeOrder(){
        await this.PLACE_ORDER_BUTTON.click();
    }

    async enterCardDetails(nameOnCard, cardNumber, cvc, expiryMonth, expiryYear){
        await this.NAME_ON_CARD_INPUT.fill(nameOnCard);
        await this.CARD_NUMBER_INPUT.fill(cardNumber);
        await this.CARD_CVC_INPUT.fill(cvc);
        await this.CARD_EXPIRY_MONTH_INPUT.fill(expiryMonth);
        await this.CARD_EXPIRY_YEAR_INPUT.fill(expiryYear);
    }

    async payAndConfirmOrder(){
        await this.PAY_AND_CONFIRM_ORDER_BUTTON.click();
    }   
    async isSuccessMessageVisible(){
        return await this.SUCCESS_MESSAGE.isVisible({ timeout: 5000 });
    }
}

module.exports = { CheckoutPage };
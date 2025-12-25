import { time } from 'node:console';
import {BasePage} from './BasePage';
import { expect } from '@playwright/test';

class AddProductToCartPage extends BasePage {
  constructor(page) {
    super(page);
    this.PRODUCTS_PAGE_LINK = page.getByRole('link', { name: 'Products' });
    this.FIRST_PRODUCT_ADD_TO_CART_BUTTON = page.getByText('Add to cart').first();
    this.CONTINUE_SHOPPING_BUTTON = page.getByRole('button', { name: 'Continue Shopping' });
    this.VIEW_CART_BUTTON = page.getByRole('link', { name: 'Cart' });
    this.CART_ITEMS = page.locator('td.cart_description h4 a');
  }

    async navigateToProductsPage() {  
    await this.PRODUCTS_PAGE_LINK.click();
  }

  async addFirstProductToCart() {
    await this.FIRST_PRODUCT_ADD_TO_CART_BUTTON.click();
  }

  async clickContinueShopping() {
    await this.CONTINUE_SHOPPING_BUTTON.click();
  }

  async viewCart() {
    await this.VIEW_CART_BUTTON.click();
  }

  async isProductInCart() {
    const numberOfItems = await this.CART_ITEMS.count();
    return numberOfItems > 0;
  }

}

module.exports = { AddProductToCartPage };
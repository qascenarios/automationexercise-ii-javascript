class BasePage {
  constructor(page) {
    this.page = page;
  }

  async handleDialog() {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });
    if (await consentButton.isVisible({ timeout: 5000 })) {
      await consentButton.click();
    }
  }
}

module.exports = { BasePage };

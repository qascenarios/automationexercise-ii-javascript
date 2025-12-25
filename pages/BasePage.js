class BasePage {
  constructor(page) {
    this.page = page;
  }
  async handleDialog() {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });

    try {
      // Wait briefly for cookie banner (non-blocking)
      await consentButton.waitFor({ state: 'visible', timeout: 3000 });
      await consentButton.click();
    } catch {
      // Cookie banner did not appear — continue safely
    }
  }

}

module.exports = { BasePage };

import {BasePage} from './BasePage';

class SearchProductPage extends BasePage {
    constructor(page){
        super(page);
        this.SEARCH_INPUT = page.getByRole('textbox', { name: 'Search Product' });
        this.SEARCH_BUTTON = page.locator('#submit_search');
        this.SEARCH_RESULTS = page.getByText('Blue Top').nth(1);
    }

    async enterSearchProduct(productName){
        await this.SEARCH_INPUT.fill('');
        await this.SEARCH_INPUT.fill(productName);
    }

    async clickSearch(){
        await this.SEARCH_BUTTON.click();
    }

    async isSearchResultsVisible(){
        return await this.SEARCH_RESULTS;
    }
}

module.exports = { SearchProductPage };
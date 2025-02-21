const { $ } = require('@wdio/globals')
const Page = require('../Base_URL/page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class dashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dashboard () {
        return $('#content > app-billings > div > nz-skeleton > div');
    }
}

module.exports = new dashboardPage();

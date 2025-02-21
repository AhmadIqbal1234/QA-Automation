const { $ } = require('@wdio/globals');
const Page = require('./page');

class DashboardPage extends Page {
    get dashboardHeader() {
        return $('#root > div > div > div > div.css-104g6p0 > h2'); // Selector untuk elemen header di dashboard
    }
}

module.exports = new DashboardPage();

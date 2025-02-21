const { $ } = require('@wdio/globals');
const Page = require('../register/page');

class DashboardPage extends Page {
    get dashboardHeader() {
        return $('#root > div > div > div.css-tnxwfz > div > h3'); // Selector untuk elemen header di dashboard
    }
}

module.exports = new DashboardPage();

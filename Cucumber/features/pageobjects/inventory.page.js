const { $ } = require('@wdio/globals');
const Page = require('./page');

class InventoryPage extends Page {
    get title() {
        return $('.title');
    }
}

module.exports = new InventoryPage();

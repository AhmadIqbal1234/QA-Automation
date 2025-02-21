const { browser } = require('@wdio/globals');

/**
 * Main page object containing methods shared across all page objects
 */
module.exports = class Page {
    /**
     * Opens the login page
     */
    openLogin() {
        return browser.url(`https://kasiraja.ajikamaludin.id/`);
    }

    /**
     * Opens the register page (called from RegisterPage)
     */
    openRegister() {
        return browser.url(`https://kasiraja.ajikamaludin.id/register`);
    }
};

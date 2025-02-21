const Page = require('../../pages/pages');
const LoginPage = require('../../pages/login.pages');
const InventoryPage = require('../../pages/inventory.pages');

describe('Succes login with Page Object Model', () => {
    beforeEach(async () => {
        Page.open('/'); // Open browser
    });

    it('invalid username', async () => {
        // Call login function
        await LoginPage.login('invalid_user', 'secret_sauce');
        // Assertion
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    it('invalid password', async () => {
        // Call login function
        await LoginPage.login('standard_user', 'invalid_password');
        // Assertion
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    it('success login', async () => {
        // Call login function
        await LoginPage.login('standard_user', 'secret_sauce');
        // Inventory
        await InventoryPage.assertInventoryUrl();
    });
});
